webpackJsonp([8],{734:function(e,t,o){o(900);var n=o(82)(o(847),o(950),null,null);e.exports=n.exports},781:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=[{title:"Name",field:"nickName",isIcon:!1,icon:""},{title:"Created At",field:"createdAt",isIcon:!1,icon:""},{title:"Country",field:"country",isIcon:!1,icon:""}],l=[{name:"objectId",value:"objectId",method:"remoteSearch",labelType:"title"},{name:"userId",value:"userId",method:"userSearch",labelType:"nickName"}],r=[{tag:"link",class:"btn btn-info",label:"Show info",dynamic:!1,to:"/users/:id",urlType:"user_id",emit:""}];t.tableColumns=n,t.tableActions=r,t.types=l},847:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=o(9),l=function(e){return e&&e.__esModule?e:{default:e}}(n),r=o(83),a=o(781);t.default={components:{ButtonBlock:function(){return o.e(35).then(o.bind(null,801))},Container:function(){return o.e(34).then(o.bind(null,773))}},data:function(){return{type:"event",controlType:"manager",loading:!1,id:"",types:a.types}},computed:(0,l.default)({},(0,r.mapState)({form:function(e){return e.permissions.controlForm}}),(0,r.mapGetters)(["foundResults","userSearchResults"])),mounted:function(){this.id=this.$route.params.id,this.id?this.fetchRole({id:this.id}):this.clearRoleSearch()},methods:(0,l.default)({submitForm:function(){var e=this.id?this.id:"";e?this.updateControl({id:e}):this.createControl(),this.$router.push("/users/list")},handleChoose:function(e){var t=e.value,o=e.key;this.clearRoleSearch(),this.updateControlForm({value:t,key:o})},handleSetControl:function(e,t){this.updateControlForm({key:t,value:e})}},(0,r.mapMutations)(["updateControlForm","createControl","clearRoleSearch"]),(0,r.mapActions)(["submitControlForm","remoteSearch","userSearch","fetchRole"]))}},870:function(e,t,o){t=e.exports=o(710)(),t.push([e.i,"\n.label-role {\n  display: block;\n}\n","",{version:3,sources:["/Users/icwt-frontmen/projects/WS/backend/client/src/pages/Users/PermissionForm.vue"],names:[],mappings:";AACA;EACE,eAAe;CAChB",file:"PermissionForm.vue",sourcesContent:["\n.label-role {\n  display: block;\n}\n"],sourceRoot:""}])},900:function(e,t,o){var n=o(870);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);o(711)("3971835c",n,!0)},950:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("Container",[o("form",[o("div",{staticClass:"row"},[o("div",{staticClass:"col-md-12"},[o("div",[o("label",{staticClass:"label-role"},[e._v("Select a role")]),e._v(" "),e._l(["manager","owner"],function(t){return o("el-radio",{key:t,attrs:{name:"controlType",label:t},on:{change:function(t){return e.handleChoose({key:"controlType",value:t})}},model:{value:e.controlType,callback:function(t){e.controlType=t},expression:"controlType"}},[e._v("\n            "+e._s(t.toUpperCase())+"\n          ")])})],2),e._v(" "),o("hr"),e._v(" "),o("div",[o("label",{staticClass:"label-role"},[e._v("Select control object")]),e._v(" "),e._l(["event","location"],function(t,n){return o("el-radio",{key:n,attrs:{name:"type",label:t},on:{change:function(t){return e.handleChoose({key:"type",value:t})}},model:{value:e.type,callback:function(t){e.type=t},expression:"type"}},[e._v("\n            "+e._s(t.toUpperCase())+"\n          ")])})],2),e._v(" "),o("hr")]),e._v(" "),o("div",{staticClass:"col-md-12"},[o("div",{staticClass:"content-box"},[o("label",{staticClass:"label-role"},[e._v("Found control object")]),e._v(" "),o("SelectSearch",{attrs:{type:e.type,options:e.foundResults,labelType:"title",name:"objectId",initialValue:e.form.objectId},on:{handleSearch:e.remoteSearch,handleChange:e.handleSetControl}})],1),e._v(" "),o("hr"),e._v(" "),o("div",{staticClass:"content-box"},[o("label",{staticClass:"label-role"},[e._v("Found and choose user")]),e._v(" "),o("SelectSearch",{attrs:{options:e.userSearchResults,labelType:"nickName",type:"user",name:"userId",initialValue:e.form.userId},on:{handleSearch:e.userSearch,handleChange:e.handleSetControl}})],1)])]),e._v(" "),o("hr"),e._v(" "),o("ButtonBlock",{attrs:{backUrl:"/users/list"},on:{submit:e.submitControlForm}},[e._v("\n      "+e._s(e.id?"Update":"Create")+"\n    ")])],1)])},staticRenderFns:[]}}});
//# sourceMappingURL=8.231b25f0246e5a12f243.js.map