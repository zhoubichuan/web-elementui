import UploadImage from './src/upload-image'
/* istanbul ignore next */
UploadImage.install = function (Vue) {
  Vue.component(UploadImage.name, UploadImage)
}
export default UploadImage
