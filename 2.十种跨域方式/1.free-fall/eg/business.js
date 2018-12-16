var $ = document.querySelector.bind(document);
var insertHtml = function(result) {
  var html = `<tr>
                <td>序号</td>
                <td>姓名</td>
                <td>数学分数</td>
                <td>英语分数</td>
                <td>删除操作</td>
                <td>修改操作</td>
            </tr>`;
  result.data.map((val, index) => {
    html += `<tr>
                <td> ${val.id}</td>
                <td><span>${
                  val.s_name
                }</span><input class="form-control" type="text" value="${
      val.s_name
    }" ></td>
                <td><span>${
                  val.s_math
                }分</span><input class="form-control" type="text" value="${
      val.s_math
    }" ></td>
                <td><span>${
                  val.s_english
                }分</span><input class="form-control" type="text" value="${
      val.s_english
    }" ></td>
                <td><input class="delete btn btn-danger" type="button" value="删除" ></td>
                <td><input class="change btn btn-info" type="button" value="修改" ></td>
            </tr>`;
  });
  $(".table-striped").innerHTML = html;
};
// 查询全部
globalRequest.getRequest(result => {
  console.log(result);
  insertHtml(result);
});
// 查询指定
// $("#queryInformation").onclick = function() {
//   var s_name = this.previousElementSibling.children[1].childNodes[1].value;
//   globalRequest.queryRequest({ s_name }, result => {
//     console.log(result);
//     insertHtml(result);
//   });
// };

//添加
$("#addInformation").onclick = function() {
  var s_name = this.previousElementSibling.children[1].childNodes[1].value;
  var s_math = this.previousElementSibling.children[3].childNodes[1].value;
  var s_english = this.previousElementSibling.children[5].childNodes[1].value;
  globalRequest.postRequest({ s_name, s_math, s_english }, result => {
    insertHtml(result);
  });
};

$(".table-striped").onclick = function(e) {
  //删除
  if (e.target.className == "delete btn btn-danger") {
    var id = e.target.parentNode.parentNode.cells[0].innerText;
    globalRequest.deleteRequest(
      {
        id
      },
      result => {
        insertHtml(result);
      }
    );
  }
  //修改
  if (e.target.className == "change btn btn-info") {
    if (e.target.value == "修改") {
      e.target.parentNode.parentNode.setAttribute("class", "active");
      e.target.value = "确定";
    } else {
      e.target.value = "修改";
      e.target.parentNode.parentNode.setAttribute("class", "");
      var id = e.target.parentNode.parentNode.cells[0].innerHTML;
      var s_name = e.target.parentNode.parentNode.cells[1].childNodes[1].value;
      var s_math = e.target.parentNode.parentNode.cells[2].childNodes[1].value;
      var s_english =
        e.target.parentNode.parentNode.cells[3].childNodes[1].value;
      globalRequest.putRequest({ id, s_name, s_math, s_english }, result => {
        insertHtml(result);
      });
    }
  }
};
