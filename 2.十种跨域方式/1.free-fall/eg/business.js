var $ = document.querySelector.bind(document);
var insertHtml = function(result) {
  var html = "";
  result.data.map((val, index) => {
    html += `<tr>
                <td> ${val.sort}</td>
                <td>${val.name}</td>
                <td>${val.math}分</td>
                <td>${val.english}分</td>
            </tr>`;
  });
  $(".table-striped").innerHTML = html;
};
// 查询全部
globalRequest.getRequest(result => {
  insertHtml(result);
});
// 查询指定
$("#queryInformation").onclick = function() {
  var name = this.previousElementSibling.children[1].childNodes[1].value;
  globalRequest.queryRequest({ name }, result => {
    insertHtml(result);
  });
};

//添加
$("#addInformation").onclick = function() {
  var name = this.previousElementSibling.children[1].childNodes[1].value;
  var math = this.previousElementSibling.children[3].childNodes[1].value;
  var english = this.previousElementSibling.children[5].childNodes[1].value;
  globalRequest.postRequest({ name, math, english }, result => {
    insertHtml(result);
  });
};
//修改
$("#putInformation").onclick = function() {
  var name = this.previousElementSibling.children[1].childNodes[1].value;
  var math = this.previousElementSibling.children[3].childNodes[1].value;
  var english = this.previousElementSibling.children[5].childNodes[1].value;
  globalRequest.putRequest({ name, math, english }, result => {
    insertHtml(result);
  });
};
//删除
$("#deleteInformation").onclick = function() {
  var name = this.previousElementSibling.children[1].childNodes[1].value;
  globalRequest.deleteRequest({ name }, result => {
    insertHtml(result);
  });
};
