(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{468:function(e,t,a){"use strict";var r=a(21);t.a={data:()=>({}),methods:{mixinInput(e){return(0,this.$createElement)("el-input",{attrs:{value:this[e.formKey][e.prop],disabled:e.disabled,placeholder:e.placeholder},on:{input:t=>{this.$set(this[e.formKey],e.prop,t)}}})},mixinTextarea(e){return(0,this.$createElement)("el-input",{attrs:{type:"textarea",rows:"2",maxlength:"1024",value:this[e.formKey][e.prop],disabled:e.disabled,placeholder:e.placeholder},on:{input:t=>{this.$set(this[e.formKey],e.prop,t)}}})},mixinSelect(e){const t=this.$createElement;return!e.options&&(e.options=[{label:"是",value:!0},{label:"否",value:!1}]),t("el-select",{attrs:{value:this[e.formKey][e.prop],disabled:e.disabled,placeholder:e.placeholder},on:{input:t=>{this.$set(this[e.formKey],e.prop,t)}}},[e.options.map(e=>t("el-option",{key:e.value,attrs:{label:e.label,value:e.value}},[e.label]))])},mixinRadio(e){const t=this.$createElement;return!e.options&&(e.options=[{label:"是",value:!0},{label:"否",value:!1}]),t("el-radio-group",{attrs:{value:this[e.formKey][e.prop],disabled:e.disabled,placeholder:e.placeholder},on:{input:t=>{this.$set(this[e.formKey],e.prop,t)}}},[e.options.map(e=>t("el-radio",{key:e.value,attrs:{label:e.value,value:e.value}},[e.label]))])},mixinUpload(e){const t=this.$createElement;return t("div",[this[e.formKey][e.prop]&&t("el-image",{style:"width: 200px;",attrs:{src:this[e.formKey][e.prop],"preview-src-list":[this[e.formKey][e.prop]]}}),t("web-upload-image",{attrs:{uptype:r.FormItem.type,value:this[e.formKey][e.prop],disabled:e.disabled},on:{input:t=>{this.$set(this[e.formKey],e.prop,t)}}})])}},component:{}}},625:function(e,t,a){"use strict";a.r(t);var r={mixins:[a(468).a],inject:{rootPage:{type:Object}},data:()=>({visibleDialog:!1,baseInfoForm:{storeType:!1,inherit:!1},rules:{code:[],state:[],nameEn:[{required:!0,message:"请输入英文名称",trigger:"change"}],name:[{required:!0,message:"请输入中文名称",trigger:"change"}],descriptEn:[],descript:[{required:!0,message:"请输入中文描述",trigger:"change"}],parentId:[{required:!0,message:"请选择父模型",trigger:"change"}],storeType:[],modelType:[{required:!0,message:"请选择模型类型",trigger:"change"}],inherit:[],tableName:[{required:!0,message:"请输入表名称",trigger:"change"}],version:[],creater:[],creatTime:[],modifier:[],modifyTime:[]},form:{name:"",region:"",date1:"",date2:"",delivery:!1,type:[],resource:"",desc:""},loadingFlag:!1,tableData:[{date:"2016-05-02",name:"王小虎",address:"上海市普陀区金沙江路 1518 弄"},{date:"2016-05-04",name:"王小虎",address:"上海市普陀区金沙江路 1517 弄"},{date:"2016-05-01",name:"王小虎",address:"上海市普陀区金沙江路 1519 弄"},{date:"2016-05-03",name:"王小虎",address:"上海市普陀区金沙江路 1516 弄"}]}),computed:{pageSate(){return this.rootPage.tabsData.state},disableds(){let e={code:!1,state:!1,nameEn:!1,name:!1,descriptEn:!1,descript:!1,parentId:!1,storeType:!1,modelType:!1,inherit:!1,tableName:!1,version:!1,creater:!1,creatTime:!1,modifier:!1,modifyTime:!1};if("show"!==this.pageSate){"edit"===this.pageSate?(e.code=!0,e.state=!0,e.version=!0,e.creater=!0,e.creatTime=!0,e.modifier=!0,e.modifyTime=!0):e.historyRecord=!1;let t=this.rootPage.tabsData.data.data,a=this.baseInfoForm;e.saveButton=window._.isEqual(t,a),console.log(e.saveButton)}return e},shows(){let e={saveButton:!1,historyRecord:!0};return"show"!==this.pageSate&&(e.saveButton=!0,e.code=!1,e.state=!1,"edit"===this.pageSate||(e.historyRecord=!1)),console.log(e),e},baseFormData(){let e={code:{label:"编码",render:this.baseInfoForm.code},state:{label:"状态",render:this.baseInfoForm.state},nameEn:{label:"英文名称",render:this.baseInfoForm.nameEn},name:{label:"中文名称",render:this.baseInfoForm.name},descriptEn:{label:"英文描述",singleFormItem:!0,render:this.baseInfoForm.descriptEn},descript:{label:"中文描述",singleFormItem:!0,render:this.baseInfoForm.descript},parentId:{label:"父模型",placeholder:"请选择父模型",render:this.baseInfoForm.parentId},modelType:{label:"模型类型",render:this.baseInfoForm.modelType},storeType:{label:"存储类型",render:this.baseInfoForm.storeType},inherit:{label:"是否继承",render:this.baseInfoForm.inherit},tableName:{label:"表名称",render:this.baseInfoForm.tableName}};return["edit","add"].includes(this.pageSate)&&(e={code:{label:"编码",disabled:this.disableds.code,render:(e,{data:{attrs:{formItem:t}}})=>this.mixinInput(t)},state:{label:"状态",disabled:this.disableds.state,render:(e,{data:{attrs:{formItem:t}}})=>this.mixinSelect(t)},nameEn:{label:"英文名称",disabled:this.disableds.nameEn,placeholder:"请输入英文名称",render:(e,{data:{attrs:{formItem:t}}})=>this.mixinInput(t)},name:{label:"中文名称",placeholder:"请输入中文名称",render:(e,{data:{attrs:{formItem:t}}})=>this.mixinInput(t)},descriptEn:{label:"英文描述",disabled:this.disableds.descriptEn,placeholder:"请输入英文描述",singleFormItem:!0,render:(e,{data:{attrs:{formItem:t}}})=>this.mixinTextarea(t)},descript:{label:"中文描述",placeholder:"请输入中文描述",singleFormItem:!0,render:(e,{data:{attrs:{formItem:t}}})=>this.mixinTextarea(t)},parentId:{label:"父模型",disabled:this.disableds.parentId,placeholder:"请选择父模型",render:(e,{data:{attrs:{formItem:t}}})=>this.mixinSelect(t)},modelType:{label:"模型类型",disabled:this.disableds.modelType,options:[{label:"XDM",value:"XDM"},{label:"SYS",value:"SYS"},{label:"GENERE",value:"GENERE"}],render:(e,{data:{attrs:{formItem:t}}})=>this.mixinSelect(t)},storeType:{label:"存储类型",disabled:this.disableds.storeType,render:(e,{data:{attrs:{formItem:t}}})=>this.mixinRadio(t)},inherit:{label:"是否继承",disabled:this.disableds.inherit,render:(e,{data:{attrs:{formItem:t}}})=>this.mixinRadio(t)},tableName:{label:"表名称",disabled:this.disableds.tableName,placeholder:"请输入表名称",render:(e,{data:{attrs:{formItem:t}}})=>this.mixinInput(t)}}),Object.keys(this.shows).forEach(t=>{!1===this.shows[t]&&Reflect.deleteProperty(e,t)}),Object.keys(e).forEach(t=>{e[t].formKey="baseInfoForm",e[t].prop=t}),this.$devideArr(Object.values(e),2)}},methods:{handleSelectionChange(){},handleCreate(){this.visibleDialog=!0,this.$refs.dialogForm.handleCreate()}}},l=a(1),o=Object(l.a)(r,(function(){var e=this,t=e._self._c;return t("div",[t("web-dialog",{ref:"dialogForm"},[t("el-form",{ref:"form",attrs:{model:e.baseInfoForm,"label-width":"80px",size:"mini",rules:e.rules}},e._l(e.baseFormData,(function(e,a){return t("web-form-item",{key:a,attrs:{formData:e}})})),1)],1),e._v("\n  基本属性\n    "),e._v(" "),t("web-table-page",{directives:[{name:"loading",rawName:"v-loading",value:e.loadingFlag,expression:"loadingFlag"}],staticClass:"table-part",staticStyle:{width:"100%"},attrs:{border:"","element-loading-text":"拼命加载中","element-loading-spinner":"el-icon-loading",data:e.tableData,stripe:""},on:{"selection-change":e.handleSelectionChange}},[t("el-table-column",{attrs:{fixed:"left",type:"index",width:"55"}}),e._v(" "),t("el-table-column",{attrs:{fixed:"left",type:"selection",width:"55"}}),e._v(" "),t("el-table-column",{attrs:{sortable:"",fixed:"left","show-overflow-tooltip":"",prop:"code",label:"编码"},scopedSlots:e._u([{key:"default",fn:function(a){return[t("el-link",{attrs:{type:"primary"},on:{click:function(t){return e.showViewModal(a.$index,a.row)}}},[e._v(e._s(a.row.productName))])]}}])}),e._v(" "),t("el-table-column",{attrs:{sortable:"","show-overflow-tooltip":"",prop:"name",label:"中文名称",width:"105"}}),e._v(" "),t("el-table-column",{attrs:{sortable:"","show-overflow-tooltip":"",prop:"nameEn",label:"英文名称",width:"105"}}),e._v(" "),t("el-table-column",{attrs:{sortable:"","show-overflow-tooltip":"",prop:"descript",label:"中文描述",width:"105"}}),e._v(" "),t("el-table-column",{attrs:{sortable:"","show-overflow-tooltip":"",prop:"descriptEn",label:"英文描述",width:"105"}}),e._v(" "),t("el-table-column",{attrs:{sortable:"","show-overflow-tooltip":"",prop:"version",label:"版本"}}),e._v(" "),t("el-table-column",{attrs:{sortable:"","show-overflow-tooltip":"",prop:"eos",label:"EOS时间",width:"105"}}),e._v(" "),t("el-table-column",{attrs:{sortable:"","show-overflow-tooltip":"",prop:"modeType",label:"模型类型",width:"105"}}),e._v(" "),t("el-table-column",{attrs:{sortable:"","show-overflow-tooltip":"",prop:"creater",label:"创建者",width:"105"}}),e._v(" "),t("el-table-column",{attrs:{sortable:"","show-overflow-tooltip":"",prop:"createTime",label:"创建时间",width:"105"}}),e._v(" "),t("el-table-column",{attrs:{sortable:"","show-overflow-tooltip":"",prop:"modifier",label:"更新者",width:"105"}}),e._v(" "),t("el-table-column",{attrs:{sortable:"","show-overflow-tooltip":"",prop:"modifiTime",label:"更新时间",width:"105"}}),e._v(" "),t("el-table-column",{attrs:{"show-overflow-tooltip":"",prop:"tags",label:"标签"}})],1)],1)}),[],!1,null,null,null);t.default=o.exports}}]);