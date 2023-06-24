// rollup.js
const rollup = require('rollup');
const resolve = require('rollup-plugin-node-resolve');//可以告诉 Rollup 如何查找外部模块
const vue = require('rollup-plugin-vue');
const commonjs = require('rollup-plugin-commonjs');//将 CommonJS 模块转换为 ES6
const json = require('rollup-plugin-json');
const babel = require('rollup-plugin-babel');
const { terser } = require("rollup-plugin-terser");
const fs = require('fs');
const path = require('path');
const glob = require("glob");

async function makeList(dirPath){
  const list = {};
  const files = glob.sync(`${dirPath}/**/index.js`);
  for(let file of files){
    const output = file.split(/[/.]/)[2];
    list[output] = {
      input: file,
      output
    };
  }
  return list;
}

const formatTypeList = [
  { format: 'cjs', min: false, suffix: '.js' },
  { format: 'cjs', min: true, suffix: '.common.min.js' },
  { format: 'umd', min: false, suffix: '.umd.js' },
  { format: 'umd', min: true, suffix: '.umd.min.js' },
  { format: 'es', min: false, suffix: '.js' },
  { format: 'es', min: true, suffix: '.es.min.js' },
]

start('dist/','components/lib');

async function start(outputPath, libPath){
  fsExistsSync(outputPath) && removeDir(outputPath);
  createDir(outputPath);
  const list = await makeList(libPath);
  for({format,min,suffix} of formatTypeList){
    await build(list, format, min, suffix)
  }
}

async function build(list, format, min, suffix){
  console.log(`开始打包成 ${format}${min?'.min':''} 格式`);
  for(moduleName of Object.keys(list)){
    await buildFile(list[moduleName].input, list[moduleName].output, format, min, suffix);
  }
  console.log(`${format}${min?'.min':''} 格式文件打包完成`);
  console.log('=========================================');
}

async function buildFile(input, outputName, format, min, suffix){
  console.log(`start to build file：${outputName}`)
  const bundle = await rollup.rollup({
    input,
    output: {
      file: `dist/${outputName}${suffix}`,
      format,
      name: outputName
    },
    plugins: [ 
      resolve(),
      commonjs(),
      vue(),
      json(),
      babel({
        babelrc: false,// 忽略外部配置文件
        exclude: 'node_modules/**',
        runtimeHelpers: true,
      }),
      min && terser()
    ]
  })
  const { output: outputData } = await bundle.generate({
    format,
    name: outputName
  });
  await write({ output: outputData, fileName: outputName, suffix })
  console.log(`finished building file：${outputName}${suffix}`)
}

async function write({ output, fileName, suffix } = {}) {
  for (const { code } of output) {
    fs.writeFileSync(`dist/${fileName}${suffix}`, code)
  }
}

function removeDir(dir) {
  let files = fs.readdirSync(dir)
  for(var i=0;i<files.length;i++){
    let newPath = path.join(dir,files[i]);
    let stat = fs.statSync(newPath)
    if(stat.isDirectory()){
      //如果是文件夹就递归下去
      removeDir(newPath);
    }else {
     //删除文件
      fs.unlinkSync(newPath);
    }
  }
  fs.rmdirSync(dir)//如果文件夹是空的，就将自己删除掉
}

function createDir(dir) {
  let paths = dir.split('/');
  for(let i =1;i<paths.length;i++){
    let newPath = paths.slice(0,i).join('/');
    try{
    //是否能访问到这个文件，如果能访问到，说明这个文件已经存在，进入循环的下一步。
    //accessSync的第二个参数就是用来判断该文件是否能被读取
      fs.accessSync(newPath,fs.constants.R_OK);
      
    }catch (e){
      fs.mkdirSync(newPath);
    }
  }
}

function fsExistsSync(dir){
  try {
    fs.accessSync(dir, fs.F_OK)
  } catch (e) {
    return false
  }
  return true
}