(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0ccbf6"],{"4ef5":function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"col-6"},[i("q-card",{staticStyle:{"margin-left":"10px"}},[i("q-card-section",[i("div",{staticClass:"text-h6"},[t._v("应用设置")])]),i("q-separator"),i("q-card-section",[i("div",{staticClass:"text-subtitle2 text-warning"},[t._v(" 注意： 本程序的所有数据只会保存在您设置的代码仓库中，以下设置信息只会保存在您当前的浏览器localStorage中，不会进行上传 ")])]),i("q-separator"),i("q-card-section",[i("span",[t._v("代码仓库:")]),i("q-radio",{attrs:{"keep-color":"",val:"github",label:"github",color:"blue"},on:{input:function(e){t.apiUrl="https://api.github.com"}},model:{value:t.gitType,callback:function(e){t.gitType=e},expression:"gitType"}}),i("q-radio",{attrs:{"keep-color":"",val:"gitee",label:"gitee",color:"orange"},on:{input:function(e){t.apiUrl="https://gitee.com/api/v5"}},model:{value:t.gitType,callback:function(e){t.gitType=e},expression:"gitType"}})],1),i("q-card-section",[i("q-input",{attrs:{outlined:"",label:"token"},model:{value:t.token,callback:function(e){t.token=e},expression:"token"}})],1),i("q-card-section",[i("q-input",{attrs:{outlined:"",disabled:"",label:"apiUrl"},model:{value:t.apiUrl,callback:function(e){t.apiUrl=e},expression:"apiUrl"}})],1),i("q-card-section",[i("q-input",{attrs:{outlined:"",label:"user"},model:{value:t.user,callback:function(e){t.user=e},expression:"user"}})],1),i("q-card-section",[i("q-input",{attrs:{outlined:"",label:"repo"},model:{value:t.repo,callback:function(e){t.repo=e},expression:"repo"}})],1),i("q-card-section",[i("q-btn",{staticClass:"full-width",attrs:{color:"primary"},on:{click:t.saveSettings}},[t._v("确定")])],1)],1)],1)},n=[],o=i("5530"),a=i("2f62"),r={name:"now",data:function(){return{apiUrl:"",token:"",user:"",repo:"",gitType:"github"}},computed:Object(o["a"])({},Object(a["b"])({settings:function(t){return t.settings}})),mounted:function(){this.apiUrl=this.settings.apiUrl,this.token=this.settings.token,this.user=this.settings.user,this.repo=this.settings.repo,this.gitType=this.settings.gitType},methods:{saveSettings:function(){var t={token:this.token,apiUrl:this.apiUrl,user:this.user,repo:this.repo,gitType:this.gitType};this.$q.localStorage.set("lee-todo-settings",t),this.$store.commit("initSettings",{settings:t}),this.$store.dispatch("init"),this.$router.push({path:"/now"})}}},l=r,c=i("2877"),p=i("fe09"),u=Object(c["a"])(l,s,n,!1,null,null,null);e["default"]=u.exports;u.options.components=Object.assign({QCard:p["f"],QCardSection:p["h"],QSeparator:p["z"],QRadio:p["y"],QInput:p["p"],QBtn:p["e"]},u.options.components||{})}}]);
//# sourceMappingURL=chunk-2d0ccbf6.39c5cff0.js.map