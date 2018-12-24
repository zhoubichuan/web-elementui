/* 封装一个ajax插件 */
~(function() {
  var getXHR = function() {
    var flag = false,
      xhr = null,
      ary = [
        function() {
          return new XMLHttpRequest();
        },
        function() {
          return new ActiveXObject("Microsoft.XMLHTTP");
        },
        function() {
          return new ActiveXObject("Msxml2.XMLHTTP");
        },
        function() {
          return new ActiveXObject("Msxml3.XMLHTTP");
        }
      ];
    for (var i = 0, len = ary.length; i < len; i++) {
      var temp = ary[i];
      try {
        xhr = temp();
        getXHR = temp;
        flag = true;
        break;
      } catch (e) {}
    }
    if (!flag) {
      throw new Error("your browser is not support ajax");
    }
    return xhr;
  };

  var sendAJAX = function(options) {
    /* 设置默认参数 */

    var _default = {
      url: "",
      type: "get",
      dataType: "json",
      async: true,
      data: null,
      success: null,
      error: null
    };

    /* 替换默认参 */

    for (var key in options) {
      if (options.hasOwnProperty(key)) {
        _default[key] = options[key];
      }
    }

    /* 
    *1.创建XMLHttpRequest对象 
    */

    var xhr = getXHR();

    xhr.responseType = _default["dataType"];

    if (_default["type"].toLowerCase() !== "post") {
      var suffix = _default["url"].indexOf("?") > -1 ? "&" : "?";
      _default["url"] += suffix + "_=" + Math.random();
    }

    /* 
    *2.浏览器与服务器建立连接 
    */

    xhr.open(_default["type"], _default["url"], _default["async"]);

    /* 
    *3. 浏览器向服务器发送请求 
    * send()方法：
    *   * 如果浏览器请求的类型为GET类型时，通过send()发送请求数据，服务器接受不到
    */
    if (_default["type"].toLowerCase() === "get") {
      xhr.send(null);
    } else {
      var data = _default["data"];
      var str = "";
      for (var key in data) {
        str += key + "=" + data[key] + "&";
      }
      xhr.send(str.slice(0, -1));
    }

    /* 
    *4.服务器向浏览器响应请求 
    *
    * readyState 属性表示ajax请求的当前状态，他的值用数字代表。
    * 0：代表未初始化，还没有调用open方法
    * 1：代表正在加载，open方法已被调用，但send方法还没有被调用
    * 2：代表已加载完毕。send 已被调用，请求已经开始
    * 3：代表交互中，服务器正在发送响应
    * 4：代表完成，响应发送完毕
    * 
    * 常用状态吗及其含义：
    * 404 没有找到页面（not found）
    * 403 禁止访问（forbidden）
    * 500 内部服务器出错（internal service error）
    * 200 一切正常（ok）
    * 304 没有被修改（not modified）(服务器返回304状态，表示源文件没有被修改)
    * 
    */

    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4) {
        if (/^2\d{2}$/.test(xhr.status)) {
          var data =
            "JSON" in window
              ? JSON.stringify(xhr.response)
              : eval("(" + xhr.response + ")");
          data = JSON.parse(data);
          _default["success"] && _default["success"](data);
        } else {
          _default["error"] && _default["error"]("错误：" + xhr.status);
        }
      }
    };
  };
  window.sendAJAX = sendAJAX;
})();
