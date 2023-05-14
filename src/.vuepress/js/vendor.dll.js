const path = require('path')
const webpack = require('webpack')

const dllConfig = {
  mode: 'production',
  entry:{
    vendors: ['vue', 'vue-router', 'element-ui']
  },
  output:{
    filename: '[name].dll.js',
    path: path.resolve(__dirname,'../dll')
  },
  plugins:[
    new webpack.DllPlugin({
      name: '[name]',
      path: path.resolve(__dirname, '../dll/[name].manifest.json')
    })
  ]
}

module.exports = dllConfig 
