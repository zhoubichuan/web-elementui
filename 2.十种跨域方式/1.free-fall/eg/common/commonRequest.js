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
  getRequest: function(success, error) {
    globalAjax.get("http://localhost:3000/", success, error);
  },
  queryRequest: function(data, success, error) {
    globalAjax.post(data, "http://localhost:3000/", success, error);
  },
  postRequest: function(data, success, error) {
    globalAjax.post(data, "http://localhost:3000/", success, error);
  },
  deleteRequest: function(data, success, error) {
    globalAjax.delete(data, "http://localhost:3000/", success, error);
  },
  putRequest: function(data, success, error) {
    globalAjax.put(data, "http://localhost:3000/", success, error);
  }
};
