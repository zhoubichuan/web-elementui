(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{625:function(t,e,a){"use strict";a.r(e);var n={components:{},data:()=>({tableData:[{date:"2016-05-02",name:"王小虎",address:"上海市普陀区金沙江路 1518 弄"},{date:"2016-05-04",name:"王小虎",address:"上海市普陀区金沙江路 1517 弄"},{date:"2016-05-01",name:"王小虎",address:"上海市普陀区金沙江路 1519 弄"},{date:"2016-05-03",name:"王小虎",address:"上海市普陀区金沙江路 1516 弄"}]}),methods:{toSourcePage(t){},toTargetPage(t){}}},l=a(2),o=Object(l.a)(n,(function(){var t=this,e=t._self._c;return e("div",[e("web-table-page",{staticStyle:{width:"100%"},attrs:{data:t.tableData}},[e("el-table-column",{attrs:{type:"index"}}),t._v(" "),e("el-table-column",{attrs:{type:"selection",width:"55"}}),t._v(" "),e("el-table-column",{attrs:{prop:"code",label:"编码",width:"180"}}),t._v(" "),e("el-table-column",{attrs:{prop:"name",label:"源数据实体",width:"180"},scopedSlots:t._u([{key:"default",fn:function({row:a}){return[e("el-button",{attrs:{type:"text"},on:{click:function(e){return t.toSourcePage(a)}}},[t._v(t._s(a.name))])]}}])}),t._v(" "),e("el-table-column",{attrs:{prop:"address",label:"目标数据实体"},scopedSlots:t._u([{key:"default",fn:function({row:a}){return[e("el-button",{attrs:{type:"text"},on:{click:function(e){return t.toTargetPage(a)}}},[t._v(t._s(a.address))])]}}])})],1)],1)}),[],!1,null,null,null);e.default=o.exports}}]);