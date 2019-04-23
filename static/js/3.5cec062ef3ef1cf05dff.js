webpackJsonp([3],{372:function(e,t,a){var o=a(82)(a(843),a(956),null,null);e.exports=o.exports},779:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=[{title:"Location",field:"title",isIcon:!1,icon:""},{title:"Created At",field:"createdAt",isIcon:!1,icon:""},{title:"District",field:"district",isIcon:!1,icon:""}],n=[{tag:"button",class:"btn btn-info",label:"Generate Qr",dynamic:!0,urlType:"location_id",emit:"generateQr"},{tag:"link",class:"btn btn-info",label:"Edit",dynamic:!1,to:"/locations/update",urlType:"location_id",emit:""},{tag:"button",class:"btn btn-danger",label:"Remove",dynamic:!1,urlType:"location_id",to:"",emit:"clickDelete"}],i=[{name:"anatomy",value:"anatomy"},{name:"speciality",value:"speciality"}],l=[{name:"title",label:"Location title",placeholder:"Location title",onChange:"handleSetLocation",value:"title",type:"fg-input"},{name:"ch_title",label:"Location title on chinese",placeholder:"Location title on chinese",onChange:"handleSetLocation",value:"ch_title",type:"fg-input"},{name:"phone",label:"Phone number",placeholder:"Phone number",onChange:"handleSetLocation",value:"phone",type:"fg-input"},{name:"website",label:"Website",placeholder:"Website",onChange:"handleSetLocation",value:"website",type:"fg-input"},{name:"dianping_id",label:"Dianping Id",placeholder:"Dianping",onChange:"handleSetLocation",value:"dianping_id",type:"fg-input"},{name:"average",label:"Average",placeholder:"Average",onChange:"handleSetLocation",value:"average",type:"fg-input"},{name:"category",label:"Category",placeholder:"Select categories",onChange:"handleSetPlace",value:"category",type:"fg-input",showedKey:"title"}];t.tableColumns=o,t.tableActions=n,t.types=i,t.fields=l},843:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=a(9),n=function(e){return e&&e.__esModule?e:{default:e}}(o),i=a(83),l=a(779);t.default={data:function(){return{id:"",types:l.types,fields:l.fields,subedKey:"location"}},components:{ImageUplodaer:function(){return a.e(32).then(a.bind(null,772))},AMap:function(){return a.e(38).then(a.bind(null,924))},BussinesDays:function(){return a.e(45).then(a.bind(null,917))}},destroyed:function(){this.clearPlaceState()},mounted:function(){this.id=this.$route.params.id,this.id&&this.fetchLocation({id:this.id})},computed:(0,n.default)({},(0,i.mapState)({form:function(e){return e.locations.location},categories:function(e){return e.locations.location}}),(0,i.mapGetters)({foundedLocations:"searchResult",foundedCategories:"foundedCategories"}),{getOptions:function(){return"category"===this.subedKey?this.foundedCategories:this.foundedLocations}}),methods:(0,n.default)({submitForm:function(){var e=this.id?this.id:"";e?this.updateLocation({id:e}):this.createLocation(),this.$router.push("/locations/list")}},(0,i.mapActions)({fetchLocation:"fetchLocation",createLocation:"createLocation",updateLocation:"updateLocation",findLocation:"findLocation",findCategory:"findCategory"}),(0,i.mapMutations)({resetForm:"resetLocation",setPoster:"setPoster",updateLocationForm:"updateLocationForm",setSearchResult:"setSearchResult",setFoundedCategories:"setFoundedCategories",clearPlaceState:"clearPlaceState"}),{handleChoose:function(e,t){var a="category"===t?"title":"location_name";this.updateLocationForm({value:e[a],key:t}),this.updateLocationForm({value:e,key:t+"_id"}),this.setSearchResult([]),this.setFoundedCategories([])},handleSetLocationTime:function(e,t){var a={key:e,value:t};this.updateLocationForm(a)},fetchAddress:function(e){var t=this,a=e.area,o=e.address,n=e.marker;[{key:"address",value:o},{key:"district",value:a},{key:"lat",value:n[1]},{key:"long",value:n[0]}].map(function(e){var a=e.key,o=e.value;return t.updateLocationForm({key:a,value:o})})},handleSetLocation:function(e,t){this.subedKey=t;var a={key:t,value:e};this.updateLocationForm(a),"category"===t&&this.findCategory(e)}})}},956:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-8 col-md-offset-2"},[a("div",{staticClass:"card"},[e._m(0),e._v(" "),a("div",{staticClass:"content"},[a("form",[a("ImageUplodaer",{attrs:{title:"Add image","uploading-text":"Uploading...",poster:e.form.poster},on:{uploadPoster:function(t){return e.updateLocationForm({value:t,key:"poster"})}}}),e._v(" "),a("hr"),e._v(" "),a("ImageUplodaer",{attrs:{title:"Add coupon image","uploading-text":"Uploading...",poster:e.form.coupon_image,parentInputId:"coupon"},on:{uploadPoster:function(t){return e.updateLocationForm({value:t,key:"coupon_image"})}}}),e._v(" "),a("hr"),e._v(" "),a("AMap",{attrs:{formerAddress:e.form.address,formerLocation:e.form.formerLocation},on:{handleFetchAddress:e.fetchAddress}}),e._v(" "),e._l(e.fields,function(t,o){var n=t.label,i=t.value,l=(t.subValue,t.name),r=t.placeholder,s=t.showedKey;return a("fg-input",{key:o,attrs:{type:"text",label:n,placeholder:r,name:l,value:e.form[i]},on:{changeValue:e.handleSetLocation}},[e.subedKey===l?a("cascader",{attrs:{name:l,showedKey:s,options:e.getOptions},on:{handleChoose:e.handleChoose}}):e._e()],1)}),e._v(" "),a("fg-textarea",{attrs:{label:"Location description",name:"description",value:e.form.description,placeholder:"Enter description of Location",rows:"25"},on:{changeValue:e.handleSetLocation}}),e._v(" "),a("BussinesDays",{attrs:{initialHours:e.form.hours},on:{updateHours:e.updateLocationForm}}),e._v(" "),a("hr"),e._v(" "),a("ImageUplodaer",{attrs:{title:"Add Logo","uploading-text":"Uploading...",poster:e.form.logo,parentInputId:"logo"},on:{uploadPoster:function(t){return e.updateLocationForm({value:t,key:"logo"})}}}),e._v(" "),a("div",{staticClass:"text-center"},[a("button",{staticClass:"btn btn-info btn-fill btn-wd",attrs:{type:"submit"},on:{click:function(t){return t.preventDefault(),e.submitForm(t)}}},[e._v("\n              "+e._s(e.id?"Update":"Create")+"\n            ")]),e._v(" "),a("router-link",{staticClass:"btn btn-danger btn-fill btn-wd",attrs:{to:"/locations/list"}},[e._v("\n              Back\n            ")])],1)],2)])])])])},staticRenderFns:[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"header"},[a("h4",{staticClass:"title"},[e._v("Adding Location")])])}]}}});
//# sourceMappingURL=3.5cec062ef3ef1cf05dff.js.map