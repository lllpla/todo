(function(t){function e(e){for(var i,o,s=e[0],c=e[1],l=e[2],u=0,d=[];u<s.length;u++)o=s[u],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&d.push(r[o][0]),r[o]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);p&&p(e);while(d.length)d.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],i=!0,o=1;o<n.length;o++){var s=n[o];0!==r[s]&&(i=!1)}i&&(a.splice(e--,1),t=c(c.s=n[0]))}return t}var i={},o={app:0},r={app:0},a=[];function s(t){return c.p+"js/"+({about:"about"}[t]||t)+"."+{about:"cb0c0fa4","chunk-2d0ccbf6":"9d595d36","chunk-2d21a3d2":"18c923a2","chunk-3450d7ea":"206573a0","chunk-6e2ab9e6":"a6728fe2","chunk-f0c66bf2":"2156ae39"}[t]+".js"}function c(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(t){var e=[],n={"chunk-3450d7ea":1,"chunk-6e2ab9e6":1,"chunk-f0c66bf2":1};o[t]?e.push(o[t]):0!==o[t]&&n[t]&&e.push(o[t]=new Promise((function(e,n){for(var i="css/"+({about:"about"}[t]||t)+"."+{about:"31d6cfe0","chunk-2d0ccbf6":"31d6cfe0","chunk-2d21a3d2":"31d6cfe0","chunk-3450d7ea":"9830f876","chunk-6e2ab9e6":"9830f876","chunk-f0c66bf2":"9830f876"}[t]+".css",r=c.p+i,a=document.getElementsByTagName("link"),s=0;s<a.length;s++){var l=a[s],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===i||u===r))return e()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){l=d[s],u=l.getAttribute("data-href");if(u===i||u===r)return e()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=e,p.onerror=function(e){var i=e&&e.target&&e.target.src||r,a=new Error("Loading CSS chunk "+t+" failed.\n("+i+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=i,delete o[t],p.parentNode.removeChild(p),n(a)},p.href=r;var f=document.getElementsByTagName("head")[0];f.appendChild(p)})).then((function(){o[t]=0})));var i=r[t];if(0!==i)if(i)e.push(i[2]);else{var a=new Promise((function(e,n){i=r[t]=[e,n]}));e.push(i[2]=a);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=s(t);var d=new Error;l=function(e){u.onerror=u.onload=null,clearTimeout(p);var n=r[t];if(0!==n){if(n){var i=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+i+": "+o+")",d.name="ChunkLoadError",d.type=i,d.request=o,n[1](d)}r[t]=void 0}};var p=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(e)},c.m=t,c.c=i,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)c.d(n,i,function(e){return t[e]}.bind(null,i));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/todo/",c.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var d=0;d<l.length;d++)e(l[d]);var p=u;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},1:function(t,e){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("2b0e"),o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("q-layout",{staticStyle:{overflow:"hidden"},attrs:{view:"hHh Lpr lff"}},[i("q-header",{staticClass:"bg-white text-black",attrs:{elevated:""}},[i("q-toolbar",[i("q-btn",{attrs:{dense:"",flat:"",round:"",icon:"menu"},on:{click:function(e){return t.showMenu()}}}),i("q-avatar",[i("img",{attrs:{src:n("61b7")}})]),i("q-toolbar-title",[t._v(" 待办事项 v"+t._s(t.version)+" ")]),"waiting"==t.postState?i("q-circular-progress",{attrs:{indeterminate:"",size:"30px",thickness:.33,color:"lime","track-color":"grey-3"}}):t._e(),i("q-space"),i("q-input",{staticClass:"q-ml-md",attrs:{dense:"",outlined:"","input-class":"text-right"},scopedSlots:t._u([{key:"append",fn:function(){return[""===t.searchText?i("q-icon",{attrs:{name:"search"}}):i("q-icon",{staticClass:"cursor-pointer",attrs:{name:"clear"},on:{click:function(e){t.searchText=""}}})]},proxy:!0}]),model:{value:t.searchText,callback:function(e){t.searchText=e},expression:"searchText"}})],1)],1),i("SideBar",{ref:"sideBar"}),i("q-page-container",[i("div",{staticClass:"fit row wrap justify-center",staticStyle:{"margin-top":"20px","margin-left":"10px"}},[i("q-card",{class:"col-lg-8 col-xl-8  col-md-8 col-xs-11 bg-"+t.pickColor},[i("q-input",{staticStyle:{"margin-left":"10px","font-size":"large"},attrs:{"hide-bottom-space":"",dense:"",borderless:"",placeholder:"添加记事..."},model:{value:t.title,callback:function(e){t.title=e},expression:"title"}}),""!==t.title?[i("q-input",{ref:"noteDetail",staticStyle:{"margin-left":"10px"},attrs:{dense:"","hide-bottom-space":"",placeholder:"添加记事内容...",autogrow:"",borderless:"",type:"textarea"},on:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"tab",9,e.key,"Tab")?null:(e.preventDefault(),t.editerTab(e))}},model:{value:t.text,callback:function(e){t.text=e},expression:"text"}}),i("q-card-actions",{attrs:{align:"right"}},[i("q-btn",{attrs:{flat:"",round:"",color:"primary",icon:"colorize"}},[i("q-popup-proxy",{model:{value:t.colorPickerShow,callback:function(e){t.colorPickerShow=e},expression:"colorPickerShow"}},[i("q-banner",t._l(t.colors,(function(e,n){return i("q-btn",{key:n,attrs:{round:"",color:e,size:"xs"},on:{click:function(n){t.pickColor=e,t.colorPickerShow=!t.colorPickerShow}}})})),1)],1)],1),i("q-btn",{attrs:{flat:"",round:"",color:"red",icon:"clear"},on:{click:t.clearAll}}),i("q-btn",{attrs:{flat:"",round:"",color:"primary",icon:"add"},on:{click:t.addNote}})],1)]:t._e()],2)],1),i("div",{staticClass:"fit row justify-center",staticStyle:{"margin-top":"20px"}},[i("router-view")],1)])],1)},r=[],a=n("5530"),s=n("2f62"),c=n("c437"),l=n.n(c),u=n("bd4c"),d=n("9224"),p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("q-drawer",{attrs:{side:"left",width:200,breakpoint:500,"show-if-above":"",mini:t.mini},model:{value:t.left,callback:function(e){t.left=e},expression:"left"}},[n("q-list",{staticClass:"rounded-borders text-black",staticStyle:{"margin-top":"100px"}},[n("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],staticClass:"menu-node",attrs:{to:"/now",clickable:"",active:"now"===t.link,"active-class":"my-menu-link"},on:{click:function(e){t.link="now"}}},[n("q-item-section",{attrs:{avatar:""}},[n("q-icon",{attrs:{rounded:"",name:"alarm"}})],1),n("q-item-section",[t._v(" 进行中 ")])],1),n("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],staticClass:"menu-node",attrs:{to:"/finish",clickable:"",active:"finish"===t.link,"active-class":"my-menu-link"},on:{click:function(e){t.link="finish"}}},[n("q-item-section",{attrs:{avatar:""}},[n("q-icon",{attrs:{rounded:"",name:"beenhere"}})],1),n("q-item-section",[t._v(" 已完成 ")])],1),n("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],staticClass:"menu-node",attrs:{to:"/store",clickable:"",active:"store"===t.link,"active-class":"my-menu-link"},on:{click:function(e){t.link="store"}}},[n("q-item-section",{attrs:{avatar:""}},[n("q-icon",{attrs:{rounded:"",name:"archive"}})],1),n("q-item-section",[t._v(" 已归档 ")])],1),n("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],staticClass:"menu-node",attrs:{to:"/setting",clickable:"",active:"setting"===t.link,"active-class":"my-menu-link"},on:{click:function(e){t.link="setting"}}},[n("q-item-section",{attrs:{avatar:""}},[n("q-icon",{attrs:{rounded:"",name:"settings"}})],1),n("q-item-section",[t._v(" 设置 ")])],1)],1)],1)},f=[],h={name:"SideBar",data:function(){return{link:"now",mini:!1,left:!0}},methods:{showMenu:function(){this.left?this.mini=!this.mini:this.left=!this.left}}},m=h,v=(n("ea64"),n("2877")),g=n("fe09"),b=Object(v["a"])(m,p,f,!1,null,null,null),k=b.exports;b.options.components=Object.assign({QDrawer:g["k"],QList:g["s"],QItem:g["p"],QItemSection:g["q"],QIcon:g["m"]},b.options.components||{}),b.options.directives=Object.assign({Ripple:g["A"]},b.options.directives||{});var A={name:"App",components:{SideBar:k},data:function(){return{githubData:null,left:!0,mini:!1,textshow:!1,colorPickerShow:!1,title:"",pickColor:"white",text:"",version:d.version,searchText:"",colors:["indigo-2","indigo-11","purple-2","grey","cyan-1","teal-1","green-1","yellow-1"]}},methods:{editerTab:function(){var t="\t",e=this.$refs.noteDetail.$refs.input,n=e.selectionStart,i=e.selectionEnd;if(void 0!==n&&void 0!==i){var o=e.value,r=o.substring(0,n)+t+o.substring(i);e.value=r,e.focus(),e.selectionStart=n+t.length,e.selectionEnd=n+t.length,this.dialog.text=r}},showMenu:function(){this.$refs.sideBar.showMenu()},clearAll:function(){this.textshow=!1,this.pickColor="white",this.text="",this.title=""},addNote:function(){var t={title:this.title,text:this.text+"",id:l()(),state:"running",active:!1,color:this.pickColor,time:u["b"].formatDate(new Date,"YYYY-MM-DD HH:mm:ss")};this.todoList.push(t),this.$store.dispatch("saveTask",{todoList:this.todoList}),this.clearAll()}},computed:Object(a["a"])({},Object(s["b"])({todoList:function(t){return t.todoList.reverse()},postState:function(t){return t.postState}})),mounted:function(){if(this.$q.localStorage.has("lee-todo-settings")){var t=this.$q.localStorage.getItem("lee-todo-settings");console.log(t),this.$store.commit("initSettings",{settings:t})}else this.$router.push({path:"/setting"});0==this.todoList.length&&this.$store.dispatch("init")}},w=A,y=Object(v["a"])(w,o,r,!1,null,null,null),x=y.exports;y.options.components=Object.assign({QLayout:g["r"],QHeader:g["l"],QToolbar:g["y"],QBtn:g["d"],QAvatar:g["b"],QToolbarTitle:g["z"],QCircularProgress:g["i"],QSpace:g["x"],QInput:g["n"],QIcon:g["m"],QPageContainer:g["u"],QCard:g["e"],QCardActions:g["f"],QPopupProxy:g["v"],QBanner:g["c"]},y.options.components||{});n("d3b7");var S=n("8c4f");i["a"].use(S["a"]);var q=[{path:"/",name:"Home",component:function(){return n.e("chunk-2d21a3d2").then(n.bind(null,"bb51"))}},{path:"/now",name:"now",component:function(){return n.e("chunk-3450d7ea").then(n.bind(null,"3e75"))}},{path:"/finish",name:"finish",component:function(){return n.e("chunk-f0c66bf2").then(n.bind(null,"dc0d"))}},{path:"/store",name:"store",component:function(){return n.e("chunk-6e2ab9e6").then(n.bind(null,"2c25"))}},{path:"/setting",name:"setting",component:function(){return n.e("chunk-2d0ccbf6").then(n.bind(null,"4ef5"))}},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}}],C=new S["a"]({mode:"history",base:"/todo/",routes:q}),j=C,T=n("27ae");function E(t,e){return i["a"].http.get(e.apiUrl+"/repos/"+e.user+"/"+e.repo+"/contents/"+t,{headers:{Authorization:"token "+e.token}})}function L(t,e,n,o){var r={message:"数据更新--"+u["b"].formatDate(new Date,"YYYY-MM-DD HH:mm:ss"),content:T["Base64"].encode(e),sha:n};return i["a"].http.put(o.apiUrl+"/repos/"+o.user+"/"+o.repo+"/contents/"+t,r,{headers:{Authorization:"token "+o.token}})}i["a"].use(s["a"]);var O=new s["a"].Store({state:{todoList:[],sha:null,postState:"idle",settings:{token:"",apiUrl:"https://api.github.com",user:"",repo:""}},mutations:{SetTasks:function(t,e){t.todoList=e.todoList,t.sha=e.sha},initTasks:function(t,e){t.todoList=e.todoList,t.sha=e.sha},posting:function(t,e){t.postState=e.postState},initSettings:function(t,e){t.settings=e.settings}},actions:{init:function(t){var e=t.commit,n=t.state;""!=n.settings.token&&(e("posting",{postState:"waiting"}),E("todoList.json",n.settings).then((function(t){e("posting",{postState:"idle"}),404!=t.status&&e("initTasks",{todoList:JSON.parse(T["Base64"].decode(t.body.content)),sha:t.body.sha})})))},saveTask:function(t,e){var n=t.commit,i=t.state;if(""!=i.settings.token){n("posting",{postState:"waiting"});var o=e.todoList,r=i.sha;L("todoList.json",JSON.stringify(o),r,i.settings).then((function(t){n("posting",{postState:"idle"}),t.body.content.sha&&n("initTasks",{todoList:o,sha:t.body.content.sha})}))}}},modules:{}}),P=(n("c867"),n("e54f"),n("b05d")),B=n("2a19"),Y=n("18d6");i["a"].use(P["a"],{config:{notify:{color:"black",textColor:"white",position:"left",timeout:2e3}},components:{},directives:{},plugins:{Notify:B["a"],LocalStorage:Y["a"]}});var I=n("28dd"),N=n("5a2d"),Q=n.n(N);i["a"].config.productionTip=!1,i["a"].use(I["a"]),i["a"].use(Q.a,{token:"20515ba9539acf799b907dc2d95312ed0e9226fd"}),new i["a"]({router:j,store:O,render:function(t){return t(x)}}).$mount("#app")},"61b7":function(t,e){t.exports="data:image/png;base64,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"},"7c5e":function(t,e,n){},9224:function(t){t.exports=JSON.parse('{"name":"TODOLIST","version":"1.0.1","private":true,"scripts":{"serve":"vue-cli-service serve","build":"vue-cli-service build","test:unit":"vue-cli-service test:unit","lint":"vue-cli-service lint"},"dependencies":{"@quasar/extras":"^1.0.0","core-js":"^3.6.4","js-base64":"^2.5.2","quasar":"^1.0.0","vue":"^2.6.11","vue-resource":"^1.5.1","vue-router":"^3.1.6","vuex":"^3.1.3"},"devDependencies":{"@vue/cli-plugin-babel":"~4.3.0","@vue/cli-plugin-eslint":"~4.3.0","@vue/cli-plugin-router":"~4.3.0","@vue/cli-plugin-unit-jest":"~4.3.0","@vue/cli-plugin-vuex":"~4.3.0","@vue/cli-service":"~4.3.0","@vue/eslint-config-prettier":"^6.0.0","@vue/test-utils":"1.0.0-beta.31","babel-eslint":"^10.1.0","babel-plugin-transform-imports":"1.5.0","eslint":"^6.7.2","eslint-plugin-prettier":"^3.1.1","eslint-plugin-vue":"^6.2.2","less":"^3.0.4","less-loader":"^5.0.0","node-sass":"^4.13.0","prettier":"^1.19.1","sass-loader":"^8.0.0","vue-cli-plugin-quasar":"~2.0.0","vue-template-compiler":"^2.6.11"}}')},c867:function(t,e,n){},ea64:function(t,e,n){"use strict";var i=n("7c5e"),o=n.n(i);o.a}});
//# sourceMappingURL=app.4fcb1206.js.map