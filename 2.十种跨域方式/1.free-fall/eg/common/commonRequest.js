var GlobalAjax = function() {
  this.get = function(url, success, error) {
    sendAJAX({
      url: url,
      type: "get",
      dataType: "json",
      success,
      error
    });
  };
  this.post = function(data, url, success, error) {
    sendAJAX({
      url: url,
      type: "post",
      dataType: "json",
      data,
      success,
      error
    });
  };
  this.put = function(data, url, success, error) {
    sendAJAX({
      url: url,
      type: "put",
      dataType: "json",
      data,
      success,
      error
    });
  };
  this.delete = function(data, url, success, error) {
    sendAJAX({
      url: url,
      type: "delete",
      dataType: "json",
      data,
      success,
      error
    });
  };
};
var globalAjax = new GlobalAjax();

var globalRequest = {
  //查询全部
  getRequest: function(success, error) {
    globalAjax.get("http://localhost:3000/queryAll", success, error);
  },
  //查询单个
  queryRequest: function(data, success, error) {
    globalAjax.post(data, "http://localhost:3000/querySingle", success, error);
  },
  //添加
  postRequest: function(data, success, error) {
    globalAjax.post(data, "http://localhost:3000/addSingle", success, error);
  },
  //删除
  deleteRequest: function(data, success, error) {
    globalAjax.delete(data, "http://localhost:3000/deleteSingle", success, error);
  },
  //更新
  putRequest: function(data, success, error) {
    globalAjax.put(data, "http://localhost:3000/update", success, error);
  }
};
