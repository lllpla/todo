(function(t){function e(e){for(var o,i,s=e[0],c=e[1],l=e[2],u=0,d=[];u<s.length;u++)i=s[u],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&d.push(a[i][0]),a[i]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(t[o]=c[o]);p&&p(e);while(d.length)d.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],o=!0,i=1;i<n.length;i++){var s=n[i];0!==a[s]&&(o=!1)}o&&(r.splice(e--,1),t=c(c.s=n[0]))}return t}var o={},i={app:0},a={app:0},r=[];function s(t){return c.p+"js/"+({about:"about"}[t]||t)+"."+{about:"cb0c0fa4","chunk-2d0ccbf6":"793eb22f","chunk-2d228fe9":"44699b56","chunk-b784c444":"ed547819"}[t]+".js"}function c(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(t){var e=[],n={"chunk-b784c444":1};i[t]?e.push(i[t]):0!==i[t]&&n[t]&&e.push(i[t]=new Promise((function(e,n){for(var o="css/"+({about:"about"}[t]||t)+"."+{about:"31d6cfe0","chunk-2d0ccbf6":"31d6cfe0","chunk-2d228fe9":"31d6cfe0","chunk-b784c444":"b9126802"}[t]+".css",a=c.p+o,r=document.getElementsByTagName("link"),s=0;s<r.length;s++){var l=r[s],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===o||u===a))return e()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){l=d[s],u=l.getAttribute("data-href");if(u===o||u===a)return e()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=e,p.onerror=function(e){var o=e&&e.target&&e.target.src||a,r=new Error("Loading CSS chunk "+t+" failed.\n("+o+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=o,delete i[t],p.parentNode.removeChild(p),n(r)},p.href=a;var f=document.getElementsByTagName("head")[0];f.appendChild(p)})).then((function(){i[t]=0})));var o=a[t];if(0!==o)if(o)e.push(o[2]);else{var r=new Promise((function(e,n){o=a[t]=[e,n]}));e.push(o[2]=r);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=s(t);var d=new Error;l=function(e){u.onerror=u.onload=null,clearTimeout(p);var n=a[t];if(0!==n){if(n){var o=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+o+": "+i+")",d.name="ChunkLoadError",d.type=o,d.request=i,n[1](d)}a[t]=void 0}};var p=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(e)},c.m=t,c.c=o,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)c.d(n,o,function(e){return t[e]}.bind(null,o));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/todo/",c.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var d=0;d<l.length;d++)e(l[d]);var p=u;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},1:function(t,e){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),i=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("q-layout",{staticStyle:{overflow:"hidden"},attrs:{view:"hHh Lpr lff"}},[o("q-header",{staticClass:"bg-white text-black",attrs:{elevated:""}},[o("q-toolbar",[o("q-btn",{attrs:{dense:"",flat:"",round:"",icon:"menu"},on:{click:function(e){return t.showMenu()}}}),o("q-avatar",[o("img",{attrs:{src:n("61b7")}})]),o("q-toolbar-title",[t._v(" 待办事项 ")]),"waiting"==t.postState?o("q-circular-progress",{attrs:{indeterminate:"",size:"30px",thickness:.33,color:"lime","track-color":"grey-3"}}):t._e(),o("q-space"),o("q-input",{staticClass:"q-ml-md",attrs:{dense:"",outlined:"","input-class":"text-right"},scopedSlots:t._u([{key:"append",fn:function(){return[""===t.searchText?o("q-icon",{attrs:{name:"search"}}):o("q-icon",{staticClass:"cursor-pointer",attrs:{name:"clear"},on:{click:function(e){t.searchText=""}}})]},proxy:!0}]),model:{value:t.searchText,callback:function(e){t.searchText=e},expression:"searchText"}})],1)],1),o("q-drawer",{attrs:{side:"left",width:200,breakpoint:500,"show-if-above":"",mini:t.mini},model:{value:t.left,callback:function(e){t.left=e},expression:"left"}},[o("q-list",{staticClass:"rounded-borders text-black",staticStyle:{"margin-top":"100px"}},[o("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],staticClass:"menu-node",attrs:{to:"/now",clickable:"",active:"now"===t.link,"active-class":"my-menu-link"},on:{click:function(e){t.link="now"}}},[o("q-item-section",{attrs:{avatar:""}},[o("q-icon",{attrs:{rounded:"",name:"alarm"}})],1),o("q-item-section",[t._v(" 进行中 ")])],1),o("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],staticClass:"menu-node",attrs:{to:"/finish",clickable:"",active:"finish"===t.link,"active-class":"my-menu-link"},on:{click:function(e){t.link="finish"}}},[o("q-item-section",{attrs:{avatar:""}},[o("q-icon",{attrs:{rounded:"",name:"beenhere"}})],1),o("q-item-section",[t._v(" 已完成 ")])],1),o("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],staticClass:"menu-node",attrs:{to:"/store",clickable:"",active:"store"===t.link,"active-class":"my-menu-link"},on:{click:function(e){t.link="store"}}},[o("q-item-section",{attrs:{avatar:""}},[o("q-icon",{attrs:{rounded:"",name:"archive"}})],1),o("q-item-section",[t._v(" 已归档 ")])],1),o("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],staticClass:"menu-node",attrs:{to:"/setting",clickable:"",active:"setting"===t.link,"active-class":"my-menu-link"},on:{click:function(e){t.link="setting"}}},[o("q-item-section",{attrs:{avatar:""}},[o("q-icon",{attrs:{rounded:"",name:"settings"}})],1),o("q-item-section",[t._v(" 设置 ")])],1)],1)],1),o("q-page-container",[o("div",{staticClass:"fit row wrap justify-center",staticStyle:{"margin-top":"20px","margin-left":"10px"}},[o("q-card",{class:"col-lg-8 col-xl-8  col-md-8 col-xs-11 bg-"+t.pickColor},[o("q-input",{staticStyle:{"margin-left":"10px","font-size":"large"},attrs:{"hide-bottom-space":"",dense:"",borderless:"",placeholder:"添加记事..."},model:{value:t.title,callback:function(e){t.title=e},expression:"title"}}),""!==t.title?[o("q-input",{staticStyle:{"margin-left":"10px"},attrs:{dense:"","hide-bottom-space":"",placeholder:"添加记事内容...",autogrow:"",borderless:"",type:"textarea"},model:{value:t.text,callback:function(e){t.text=e},expression:"text"}}),o("q-card-actions",{attrs:{align:"right"}},[o("q-btn",{attrs:{flat:"",round:"",color:"primary",icon:"colorize"}},[o("q-popup-proxy",{model:{value:t.colorPickerShow,callback:function(e){t.colorPickerShow=e},expression:"colorPickerShow"}},[o("q-banner",t._l(t.colors,(function(e,n){return o("q-btn",{key:n,attrs:{round:"",color:e,size:"xs"},on:{click:function(n){t.pickColor=e,t.colorPickerShow=!t.colorPickerShow}}})})),1)],1)],1),o("q-btn",{attrs:{flat:"",round:"",color:"red",icon:"clear"},on:{click:t.clearAll}}),o("q-btn",{attrs:{flat:"",round:"",color:"primary",icon:"add"},on:{click:t.addNote}})],1)]:t._e()],2)],1),o("div",{staticClass:"fit row justify-center",staticStyle:{"margin-top":"20px"}},[o("router-view")],1)])],1)},a=[],r=(n("ac1f"),n("5319"),n("5530")),s=n("2f62"),c=n("c437"),l=n.n(c),u=n("bd4c"),d={name:"App",components:{},data:function(){return{githubData:null,left:!0,mini:!1,link:"now",textshow:!1,colorPickerShow:!1,title:"",pickColor:"white",text:"",searchText:"",colors:["indigo-2","indigo-11","purple-2","grey","cyan-1","teal-1","green-1","yellow-1"]}},methods:{showMenu:function(){this.left?this.mini=!this.mini:this.left=!this.left},clearAll:function(){this.textshow=!1,this.pickColor="white",this.text="",this.title=""},addNote:function(){var t={title:this.title,text:(this.text+"").replace(/\n/g,"<br/>"),id:l()(),state:"running",active:!1,color:this.pickColor,time:u["b"].formatDate(new Date,"YYYY-MM-DD HH:mm:ss")};this.todoList.push(t),this.$store.dispatch("saveTask",{todoList:this.todoList}),this.clearAll()}},computed:Object(r["a"])({},Object(s["b"])({todoList:function(t){return t.todoList},postState:function(t){return t.postState}})),mounted:function(){if(this.$q.localStorage.has("lee-todo-settings")){var t=this.$q.localStorage.getItem("lee-todo-settings");console.log(t),this.$store.commit("initSettings",{settings:t})}else this.$router.push({path:"/setting"});0==this.todoList.length&&this.$store.dispatch("init")}},p=d,f=(n("cf25"),n("2877")),h=n("fe09"),m=Object(f["a"])(p,i,a,!1,null,null,null),g=m.exports;m.options.components=Object.assign({QLayout:h["p"],QHeader:h["j"],QToolbar:h["w"],QBtn:h["c"],QAvatar:h["a"],QToolbarTitle:h["x"],QCircularProgress:h["h"],QSpace:h["v"],QInput:h["l"],QIcon:h["k"],QDrawer:h["i"],QList:h["q"],QItem:h["n"],QItemSection:h["o"],QPageContainer:h["s"],QCard:h["d"],QCardActions:h["e"],QPopupProxy:h["t"],QBanner:h["b"]},m.options.components||{}),m.options.directives=Object.assign({Ripple:h["y"]},m.options.directives||{});n("d3b7");var v=n("8c4f");o["a"].use(v["a"]);var b=[{path:"/",name:"Home",component:function(){return n.e("chunk-b784c444").then(n.bind(null,"3e75"))}},{path:"/now",name:"now",component:function(){return n.e("chunk-b784c444").then(n.bind(null,"3e75"))}},{path:"/finish",name:"finish",component:function(){return n.e("chunk-2d228fe9").then(n.bind(null,"dc0d"))}},{path:"/setting",name:"setting",component:function(){return n.e("chunk-2d0ccbf6").then(n.bind(null,"4ef5"))}},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}}],k=new v["a"]({mode:"history",base:"/todo/",routes:b}),A=k,w=n("27ae");function y(t,e){return o["a"].http.get(e.apiUrl+"/repos/"+e.user+"/"+e.repo+"/contents/"+t,{headers:{Authorization:"token "+e.token}})}function x(t,e,n,i){var a={message:"数据更新--"+u["b"].formatDate(new Date,"YYYY-MM-DD HH:mm:ss"),content:w["Base64"].encode(e),sha:n};return console.log(a),o["a"].http.put(i.apiUrl+"/repos/"+i.user+"/"+i.repo+"/contents/"+i.fileName,a,{headers:{Authorization:"token "+i.token}})}o["a"].use(s["a"]);var q=new s["a"].Store({state:{todoList:[],sha:null,postState:"idle",settings:null},mutations:{SetTasks:function(t,e){t.todoList=e.todoList,t.sha=e.sha},initTasks:function(t,e){t.todoList=e.todoList,t.sha=e.sha},posting:function(t,e){t.postState=e.postState},initSettings:function(t,e){t.settings=e.settings}},actions:{init:function(t){var e=t.commit,n=t.state;null!=n.settings&&(e("posting",{postState:"waiting"}),y("todoList.json",n.settings).then((function(t){e("posting",{postState:"idle"}),404!=t.status&&e("initTasks",{todoList:JSON.parse(w["Base64"].decode(t.body.content)),sha:t.body.sha})})))},saveTask:function(t,e){var n=t.commit,o=t.state;if(null!=o.settings){n("posting",{postState:"waiting"});var i=e.todoList,a=o.sha;x("todoList.json",JSON.stringify(i),a,o.settings).then((function(t){n("posting",{postState:"idle"}),t.body.content.sha&&n("initTasks",{todoList:i,sha:t.body.content.sha})}))}}},modules:{}}),S=(n("c867"),n("e54f"),n("b05d")),C=n("2a19"),j=n("18d6");o["a"].use(S["a"],{config:{notify:{color:"black",textColor:"white",position:"left",timeout:2e3}},components:{},directives:{},plugins:{Notify:C["a"],LocalStorage:j["a"]}});var L=n("28dd"),T=n("5a2d"),E=n.n(T);o["a"].config.productionTip=!1,o["a"].use(L["a"]),o["a"].use(E.a,{token:"20515ba9539acf799b907dc2d95312ed0e9226fd"}),new o["a"]({router:A,store:q,render:function(t){return t(g)}}).$mount("#app")},"61b7":function(t,e){t.exports="data:image/png;base64,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"},c867:function(t,e,n){},cf25:function(t,e,n){"use strict";var o=n("e273"),i=n.n(o);i.a},e273:function(t,e,n){}});
//# sourceMappingURL=app.b269185b.js.map