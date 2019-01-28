# 十种实现跨域的方式

## 1.降级浏览器

### 原理：将浏览器的安全拦截功能撤掉，可以实现跨域访问数据

### 非常适合前端开发时使用，尤其是上线后前后端不存在跨域，只是开发时存在跨域

### 1.ie 浏览器降级浏览器教程：

#### 1. 安全设置中将跨域浏览窗口和框架选择启用

![ie跨域](./1.降级浏览器/img/1.png)

### 2.火狐浏览器降级浏览器教程：

#### 1.地址栏中输入 about:config,然后单击“我了解此风险”

![火狐跨域](./1.降级浏览器/img/huohu1.png)

#### 2.找到 security.fileuri.strict_origin_policy,然后在值下面的 true 右键单击，选择切换，修改其参数：true 改为 false

![火狐跨域](./1.降级浏览器/img/huohu2.png)

#### 3.重启浏览器

### 3.谷歌浏览器降级浏览器教程：

#### 方法一

![谷歌跨域老版本](./1.降级浏览器/img/谷歌跨域老版本.png)

* 红框处加 --allow-file-access-from-files

#### 方法二（新版谷歌浏览器）

![谷歌跨域新版本](./1.降级浏览器/img/谷歌跨域新版本.png)

* --user- data- dir=C:\MyChromeDevUserData

* c 盘中建立文件夹：MyChromeDevUserData

- 然后先点击“应用按钮”，再点击“确定按钮”，重启谷歌浏览器！

#### 谷歌浏览器降级成功

![谷歌跨域新版本](./1.降级浏览器/img/谷歌浏览器降级成功.png)

### 4.小案例（mysql+node+js 实现一个跨域页面）

[点击跨域页面](./eg/index.html)

#### 1.启动 mysql

#### 2.启动后台服务 server.js

#### 3.启动静态服务器 static.js

#### 4.打开http://localhost:4000/index.html

* 错误提示信息
  ![img](./1.降级浏览器/img/跨域的错误提示信息.png)

- 浏览器降级访问正常
  ![img](./1.降级浏览器/img/跨域成功.png)

### 并非真的实现了跨域，只是把浏览器的拦截给撤掉了

## 2.cors

### 1.前端向服务器发送请求

```
xhr.open("post", "http://localhost:3000")
xhr.setRequestHeader("name", "znc")
xhr.send('name="zbc"&age=26')
```

[完整代码](./2.cors/index.html)

### 2.后端处理前端的请求

```
res.setHeader("Access-Control-Allow-Origin", "http://localhost:4000");
res.setHeader("Access-Control-Allow-Headers", "name");
```

[完整代码](./2.cors/server.js)

## 3.nginx

* 服务器之间不跨越，代理服务器

## 4.http- proxy

* 服务器 3000 端口：http://localhost:3000 数据 ok

* http- proxy 代理 4000 端口：http://localhost:4000 数据 ok

### 1.启动后端

```

```

### 2.启动 proxy-middleware

####

```
const proxy = proxyMiddleWare("/", {
  target: "http://localhost:3000",
  changeOrigin: true
});
app.use("/*", proxy);
```

### 3.前端访问http://localhost:3000/index.html

```

```

## 5.jsonp

* 利用 script、img 标签允许跨域的特征

### 前端代码

```
//定义回调函数
function show(data) {
    console.log(data)
}
//定义jsonp
function jsonp(url) {

    var head = document.querySelector('head')
    var script = document.createElement('script')
    script.src = "http://localhost:3000?" + url
    head.appendChild(script)
}
//发送请求得到数据
var url = "name=zbc&age=26&jsonp=show"
jsonp(url, function (data) {
    console.log(data)
})
```

[完整代码](./5.jsonp/index.html)

### 后端代码

```
server.on("request", function(req, res) {
  var params = url.parse(req.url, true).query;
  var fn = params.jsonp;
  res.writeHead(200, { "Content-Type": "text/javascript" });
  res.write(fn + "(" + JSON.stringify(params) + ")");
  res.end();
});
```

[完整代码](./5.jsonp/server.js)

## 6.domain

* 二级域名之间跨域，子域名指定其一级域名

* frame.contentWindow 中有传过来的值

## 7.name

* a、b 页面同源

* a、c 页面跨域

* a：a 页面有 c 页面,a 中替换 c 页面为 b 页面

* c:传值

* a：iframe.contentWindow 中有传过来的值

### a.html

```
<iframe src="http://localhost:4000/c.html" id="frame" frameborder=" 0" onload="load()" style="border:1px solid red"></iframe>
<script>
    let onoff = true
    function load() {
        let iframe = document.getElementById("frame")
        if (onoff) {
            iframe.src = "http://localhost:3000/b.html"
            onoff = false
        } else {
            alert(iframe.contentWindow.name)
        }
    }
</script>
```

### b.html

```

```

### c.html

```
window.name = "来自c页面的数据"
```

## 8.hash

* a、b 页面同源

* a、c 页面跨域

* a：a 页面有 c 页面

* c:创建 b 页面并传值

* b:window.parent.parent.location.hash = location.hash

* a:得到 c 中的 b 传过来的值

### a.html

```
<iframe src='http://localhost:4000/c.html' id="frame" frameborder=" 0" style="border:1px solid red
    "></iframe>
<script>
    window.onhashchange = function () {
        console.log("接受自c页面", location.hash)
    }
</script>
```

### b.html

```
window.parent.parent.location.hash = location.hash
```

### c.html

```
let iframe = document.createElement("iframe")
iframe.src = "http://localhost:3000/b.html#send-to-a-page"
document.body.appendChild(iframe)
```

## 9.postMessage

* frame 页面传递数据

### a.html

```
<iframe style="display:none;" id="frame" src="http://127.0.0.1:4000/b.html"></iframe>
<script type="text/javascript">
    window.onload = function () {
        let frame = document.getElementById("frame")
        // 给子页面传递数据
        frame.contentWindow.postMessage("a.html页面内容", "http://127.0.0.1:4000/")
        window.onmessage = function (e) {
            //判断消息来源
            if (e.origin == 'http://127.0.0.1:4000') {
                //得到子页面的信息
                document.write(e.data)
            }
        }
    }
</script>
```

### b.html

```
window.onmessage = function (e) {
    //得到父页面的消息
    document.write(e.data)
    //给父页面发送消息
    e.source.postMessage('b.html页面内容', e.origin)
}
```

### 打开 a 页面http://localhost:3000/a.html

## 10.websocket

* a：a 页面http://localhost:4000/a.html

* websocket 服务器 3000 端口两者之间可以通信
