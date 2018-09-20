## 十种实现跨域的方式

* 1.降级浏览器谷歌中加入：
  --user-data-dir=C:\MyChromeDevUserData
  c 盘中建立文件夹：MyChromeDevUserData

* 2.cors
  服务端建立白名单允许某些域名跨域

* 3.nginx
  服务器之间不跨越，代理服务器

* 4.http-proxy

* 5.jsonp
  利用 script 允许跨域的特征

* 6.domain
  二级域名之间跨域，子域名指定其一级域名
  frame.contentWindow 中有传过来的值

* 7.name
  a、b 页面同源
  a、c 页面跨域

  a：a 页面有 c 页面,a 中替换 c 页面为 b 页面
  c:传值
  a：iframe.contentWindow 中有传过来的值

* 8.hash
  a、b 页面同源
  a、c 页面跨域

  a：a 页面有 c 页面
  c:创建 b 页面并传值
  b:window.parent.parent.location.hash = location.hash
  a:得到 c 中的 b 传过来的值

* 9.postMessage

- 10.websocket
