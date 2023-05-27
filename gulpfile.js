let gulp = require('gulp');
let { VueLoaderPlugin } = require('vue-loader')
let clean = require('gulp-clean'); // 打包之前，先清空原来的文件
// let gulpRemoveHtml = require('gulp-remove-html'); // 标签清除
// let removeEmptyLines = require('gulp-remove-empty-lines'); // 清除空白行
// let htmlmin = require('gulp-htmlmin'); // html压缩组件
// let minifycss = require('gulp-minify-css'); // 压缩CSS为一行
// // gulp-ugilfy无法压缩ES6，如果代码有使用ES6的语法需先编译成ES5，否则压缩会失败
let uglify = require('gulp-uglify'); // 获取 uglify 模块（用于压缩 JS）
let babel = require('gulp-babel'); // 将ES6编译成ES5
// let imgmin = require('gulp-imagemin'); // 压缩图片
let distBasePath = '../abstract-vue/node_modules/web-elementui/'; //构建输出的目录
let comPath = 'components/'
//删除dist文件
gulp.task('clean', function () {
  return gulp.src('lib', {allowEmpty: true}) //src 匹配文件
    .pipe(clean()); //清除dist目录
});

// //html压缩
// gulp.task('htmlcompress', function () {
//   let options = {
//     removeComments: true, //清除HTML注释
//     collapseWhitespace: true, //压缩HTML
//     collapseBooleanAttributes: true, //省略布尔属性的值 <input checked="true"/> ==> <input />
//     removeEmptyAttributes: true, //删除所有空格作属性值 <input id="" /> ==> <input />
//     removeScriptTypeAttributes: true, //删除<script>的type="text/javascript"
//     removeStyleLinkTypeAttributes: true, //删除<style>和<link>的type="text/css"
//     minifyJS: true, //压缩页面JS
//     minifyCSS: true //压缩页面CSS
//   };
//   return gulp.src(comPath+'**/*.html')
//     .pipe(gulpRemoveHtml()) //清除特定标签
//     .pipe(removeEmptyLines({
//       removeComments: true
//     })) //清除空白行
//     .pipe(htmlmin(options))
//     .pipe(gulp.dest(distBasePath));
// })

// // 压缩 css 文件
// // 在命令行使用 gulp csscompress 启动此任务
// gulp.task('csscompress', function () {
//   return gulp.src([comPath+'**/*.css'])
//     .pipe(minifycss())
//     .pipe(gulp.dest(distBasePath + 'css'));
// })


// //压缩js
// gulp.task('jscompress', function () {
//   return gulp.src([comPath+'**/*.js'])
//     .pipe(babel({
// 		presets: ['@babel/preset-env']
// 	}))
//     // .pipe(uglify())
//     .pipe(gulp.dest(distBasePath));
// })

// 压缩图片
// gulp.task('imgcompress', function () {
//   return gulp.src([comPath+'img/**/*'])
//     .pipe(imgmin())
//     .pipe(gulp.dest(distBasePath + 'img'))
// })

// 三方库复制
gulp.task('copelibrary', function () {
  return gulp.src([
        comPath+'**/*.vue',
        comPath+'**/*.scss',
        comPath+'**/*.json',
        comPath+'**/*.md',
        comPath+'**/*.js'
    ])
    // .pipe(imgmin())
    .pipe(gulp.dest(distBasePath))
})


// * (一个星号)，匹配一级(单层)文件。** (两个星号)，匹配任意数量的字符(文件)，多个(两层以上嵌套)或零个匹配

// series() 和 parallel()，允许将多个独立的任务组合为一个更大的操作。这两个方法都可以接受任意数目的任务（task）函数或已经组合的操作。
// series()：使任务（task）按顺序执行。
// parallel()：以最大并发来运行的任务（tasks）。

// series()：任何一个任务（task）的错误将导致整个任务组合结束，并且不会进一步执行其他任务。
// parallel()：一个任务的错误将结束整个任务组合的结束，但是其他并行的任务（task）可能会执行完，也可能没有执行完。

gulp.task('default', gulp.series(
    'clean', 
    // 'htmlcompress',
    // 'csscompress',
    // 'jscompress',
    // 'imgcompress',
    'copelibrary'
    ));

// 输入 gulp compress启动----------------------------

