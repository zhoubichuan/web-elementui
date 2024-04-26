(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{474:function(e,t,a){"use strict";var i=a(22);t.a={data:()=>({}),methods:{mixinInput(e){return(0,this.$createElement)("el-input",{attrs:{value:this[e.formKey][e.prop],disabled:e.disabled,placeholder:e.placeholder},on:{input:t=>{this.$set(this[e.formKey],e.prop,t)}}})},mixinTextarea(e){return(0,this.$createElement)("el-input",{attrs:{type:"textarea",rows:"2",maxlength:"1024",value:this[e.formKey][e.prop],disabled:e.disabled,placeholder:e.placeholder},on:{input:t=>{this.$set(this[e.formKey],e.prop,t)}}})},mixinSelect(e){const t=this.$createElement;return!e.options&&(e.options=[{label:"是",value:!0},{label:"否",value:!1}]),t("el-select",{attrs:{value:this[e.formKey][e.prop],disabled:e.disabled,placeholder:e.placeholder},on:{input:t=>{this.$set(this[e.formKey],e.prop,t)}}},[e.options.map(e=>t("el-option",{key:e.value,attrs:{label:e.label,value:e.value}},[e.label]))])},mixinRadio(e){const t=this.$createElement;return!e.options&&(e.options=[{label:"是",value:!0},{label:"否",value:!1}]),t("el-radio-group",{attrs:{value:this[e.formKey][e.prop],disabled:e.disabled,placeholder:e.placeholder},on:{input:t=>{this.$set(this[e.formKey],e.prop,t)}}},[e.options.map(e=>t("el-radio",{key:e.value,attrs:{label:e.value,value:e.value}},[e.label]))])},mixinUpload(e){const t=this.$createElement;return t("div",[this[e.formKey][e.prop]&&t("el-image",{style:"width: 200px;",attrs:{src:this[e.formKey][e.prop],"preview-src-list":[this[e.formKey][e.prop]]}}),t("web-upload-image",{attrs:{uptype:i.FormItem.type,value:this[e.formKey][e.prop],disabled:e.disabled},on:{input:t=>{this.$set(this[e.formKey],e.prop,t)}}})])}},component:{}}},549:function(e,t,a){"use strict";a.r(t);var i={mixins:[{data(){this.$createElement;return{tableRows:Object.freeze([{attrs:{fixed:"left",type:"selection",width:"55"}},{label:"序号",attrs:{fixed:"left",type:"index",width:"55"}},{prop:"code",label:"编码",attrs:{"show-overflow-tooltip":!0,width:"55"},render:(e,{data:{attrs:{item:t,row:a}}})=>e("el-link",{attrs:{size:"mini",type:"primary",title:a._id||"-"},on:{click:e=>this.showViewModal(e._id)}})},{prop:"name",label:"中文名称",attrs:{"show-overflow-tooltip":!0}},{prop:"nameEn",label:"英文名称",attrs:{"show-overflow-tooltip":!0}},{prop:"descript",label:"中文描述",attrs:{"show-overflow-tooltip":!0}},{prop:"descriptEn",label:"英文描述",attrs:{"show-overflow-tooltip":!0}},{prop:"version",label:"版本",attrs:{"show-overflow-tooltip":!0}},{prop:"eos",label:"EOS时间",attrs:{"show-overflow-tooltip":!0}},{prop:"modeType",label:"模型类型",attrs:{"show-overflow-tooltip":!0}},{prop:"creater",label:"创建者",attrs:{"show-overflow-tooltip":!0}},{prop:"creatTime",label:"创建时间",attrs:{"show-overflow-tooltip":!0}},{prop:"modifier",label:"更新者",attrs:{"show-overflow-tooltip":!0}},{prop:"modifyTime",label:"更新时间",attrs:{"show-overflow-tooltip":!0}},{prop:"tags",label:"标签",attrs:{"show-overflow-tooltip":!0}},{label:"操作",attrs:{fixed:"right","show-overflow-tooltip":!0},render:(e,{data:{attrs:{item:t,row:a}}})=>[e("el-link",{attrs:{icon:"el-icon-edit",title:"编辑"},on:{click:()=>this.showEditModal(a._id)}}),e("el-link",{attrs:{icon:"el-icon-collection",title:"修订"},on:{click:()=>this.showRemoveModal(a._id)}}),e("el-link",{attrs:{icon:"el-icon-delete",title:"删除"},on:{click:()=>this.deleteModal(a._id)}})]}])}},methods:{showViewModal(e){this.$emit("showViewModal",e)}}},a(474).a],inject:{rootPage:{type:Object}},data:()=>({conditon:{},viewPage:!1,page:{current:1,pageSize:20,total:0},visibleDialog:!1,baseInfoForm:{storeType:!1,inherit:!1},rules:{code:[],state:[],nameEn:[{required:!0,message:"请输入英文名称",trigger:"change"}],name:[{required:!0,message:"请输入中文名称",trigger:"change"}],descriptEn:[],descript:[{required:!0,message:"请输入中文描述",trigger:"change"}],parentId:[{required:!0,message:"请选择父模型",trigger:"change"}],storeType:[],modelType:[{required:!0,message:"请选择模型类型",trigger:"change"}],inherit:[],version:[],creater:[],creatTime:[],modifier:[],modifyTime:[]},form:{name:"",region:"",date1:"",date2:"",delivery:!1,type:[],resource:"",desc:""},loadingFlag:!1,tableData:[]}),computed:{pageSate(){return this.viewPage?"show":this.rootPage.tabsData.state},disableds(){let e={code:!1,state:!1,nameEn:!1,name:!1,descriptEn:!1,descript:!1,parentId:!1,storeType:!1,modelType:!1,inherit:!1,version:!1,creater:!1,creatTime:!1,modifier:!1,modifyTime:!1};if("show"!==this.pageSate){"edit"===this.pageSate?(e.code=!0,e.state=!0,e.version=!0,e.creater=!0,e.creatTime=!0,e.modifier=!0,e.modifyTime=!0):e.historyRecord=!1;let t=this.rootPage.tabsData.data.data,a=this.baseInfoForm;e.saveButton=window._.isEqual(t,a),console.log(e.saveButton)}return e},shows(){let e={saveButton:!1,historyRecord:!0};return"show"!==this.pageSate&&(e.saveButton=!0,e.code=!1,e.state=!1,"edit"===this.pageSate||(e.historyRecord=!1)),console.log(e),e},baseFormData(){const e=this.$createElement;let t={code:{label:"编码",render:this.baseInfoForm.code},state:{label:"状态",render:this.baseInfoForm.state},nameEn:{label:"英文名称",render:this.baseInfoForm.nameEn},name:{label:"中文名称",render:this.baseInfoForm.name},descriptEn:{label:"英文描述",singleFormItem:!0,render:this.baseInfoForm.descriptEn},descript:{label:"中文描述",singleFormItem:!0,render:this.baseInfoForm.descript},parentId:{label:"父模型",placeholder:"请选择父模型",render:this.baseInfoForm.parentId},modelType:{label:"模型类型",render:this.baseInfoForm.modelType},storeType:{label:"存储类型",render:this.baseInfoForm.storeType},inherit:{label:"是否继承",render:this.baseInfoForm.inherit},image:{label:"图片",render:()=>e("el-image",{style:"width: 200px;",attrs:{src:this.baseInfoForm.image,"preview-src-list":[this.baseInfoForm.image]}})},video:{label:"视频",render:()=>e("img",{attrs:{width:150,src:this.baseInfoForm.video}})}};return["edit","add"].includes(this.pageSate)&&(t={code:{label:"编码",disabled:this.disableds.code,render:(e,{data:{attrs:{formItem:t}}})=>this.mixinInput(t)},state:{label:"状态",disabled:this.disableds.state,render:(e,{data:{attrs:{formItem:t}}})=>this.mixinSelect(t)},nameEn:{label:"英文名称",disabled:this.disableds.nameEn,placeholder:"请输入英文名称",render:(e,{data:{attrs:{formItem:t}}})=>this.mixinInput(t)},name:{label:"中文名称",placeholder:"请输入中文名称",render:(e,{data:{attrs:{formItem:t}}})=>this.mixinInput(t)},descriptEn:{label:"英文描述",disabled:this.disableds.descriptEn,placeholder:"请输入英文描述",singleFormItem:!0,render:(e,{data:{attrs:{formItem:t}}})=>this.mixinTextarea(t)},descript:{label:"中文描述",placeholder:"请输入中文描述",singleFormItem:!0,render:(e,{data:{attrs:{formItem:t}}})=>this.mixinTextarea(t)},parentId:{label:"父模型",disabled:this.disableds.parentId,placeholder:"请选择父模型",render:(e,{data:{attrs:{formItem:t}}})=>this.mixinSelect(t)},modelType:{label:"模型类型",disabled:this.disableds.modelType,options:[{label:"XDM",value:"XDM"},{label:"SYS",value:"SYS"},{label:"GENERE",value:"GENERE"}],render:(e,{data:{attrs:{formItem:t}}})=>this.mixinSelect(t)},storeType:{label:"存储类型",disabled:this.disableds.storeType,render:(e,{data:{attrs:{formItem:t}}})=>this.mixinRadio(t)},inherit:{label:"是否继承",disabled:this.disableds.inherit,render:(e,{data:{attrs:{formItem:t}}})=>this.mixinRadio(t)},image:{label:"图片",disabled:this.disableds.image,type:"image",placeholder:"请输入图片",singleFormItem:!0,render:(e,{data:{attrs:{formItem:t}}})=>this.mixinUpload(t)},video:{label:"视频",disabled:this.disableds.video,type:"video",placeholder:"请输入视频",singleFormItem:!0,render:(e,{data:{attrs:{formItem:t}}})=>this.mixinUpload(t)}}),Object.keys(this.shows).forEach(e=>{!1===this.shows[e]&&Reflect.deleteProperty(t,e)}),Object.keys(t).forEach(e=>{t[e].formKey="baseInfoForm",t[e].prop=e}),this.$devideArr(Object.values(t),2)}},methods:{async handleSelectionChange(e={}){this.loadingFlag=!0;let{current:t,pageSize:a}=this.page,{result:i}=await this.$api.getAttributeList({current:t,pageSize:a,...e});if(i){let{data:e,page:{current:t,total:a,pageSize:r}}=i;this.loadingFlag=!1,this.page.total=a,this.page.current=t,this.page.pageSize=r,this.tableData=e}else this.tableData=[],this.loadingFlag=!1},handleCreate(){this.visibleDialog=!0,this.viewPage=!1,this.$refs.dialogForm.handleCreate()},create(){let e=this.$filterObj(this.baseInfoForm,["nameEn","name","descriptEn","descript","parentId","storeType","modelType","inherit","image","video"]);this.$api.createAttribute(e).then(e=>{200===e.statusCode?(this.$message({message:e.msg,type:"success"}),this.handleSelectionChange(this.condition)):this.$message.error(e.msg),this.loading=!1})},showViewModal(e,t){this.$api.getAttributeDetail(t.code).then(e=>{200===e.statusCode?(this.$message({message:e.msg,type:"success"}),this.baseInfoForm=e.result,this.viewPage=!0,this.handleCreate()):this.$message.error(e.msg),this.loading=!1})}},mounted(){this.handleSelectionChange()}},r=a(2),s=Object(r.a)(i,(function(){var e=this,t=e._self._c;return t("div",[t("web-dialog",{ref:"dialogForm",attrs:{name:"基本属性"},on:{create:e.create}},[t("el-form",{ref:"form",attrs:{model:e.baseInfoForm,"label-width":"80px",size:"mini",rules:e.rules}},e._l(e.baseFormData,(function(e,a){return t("web-form-item",{key:a,attrs:{formData:e}})})),1)],1),e._v(" "),t("web-button-group",{attrs:{justify:"start"}},[t("web-button",{attrs:{type:"primary"},on:{click:e.handleCreate}},[e._v("对比")])],1),e._v(" "),t("web-table-page",{directives:[{name:"loading",rawName:"v-loading",value:e.loadingFlag,expression:"loadingFlag"}],staticClass:"table-part",staticStyle:{width:"100%"},attrs:{value:e.page,"element-loading-text":"拼命加载中","element-loading-spinner":"el-icon-loading",data:e.tableData,stripe:""},on:{input:t=>e.handleInput(t),"selection-change":e.handleSelectionChange}},e._l(e.tableRows,(function(e){return t("web-table-column",{key:e.prop,attrs:{item:e}})})),1)],1)}),[],!1,null,null,null);t.default=s.exports}}]);