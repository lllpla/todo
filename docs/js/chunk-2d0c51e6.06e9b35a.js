(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0c51e6"],{"3e75":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home fit row wrap justify-start items-start content-start",staticStyle:{width:"90%"}},t._l(t.todoList.filter((function(t){return"running"==t.state})),(function(e){return n("q-intersection",{key:e.id,attrs:{transition:"scale"}},[n("q-card",{staticStyle:{"margin-top":"20px","margin-left":"10px","margin-right":"10px"},on:{mouseover:function(e){return t.hoverStyle(e)},mouseleave:function(e){return t.leaveStyle(e)}}},[n("q-card-section",[n("div",{staticClass:"row items-center no-wrap"},[n("div",{staticClass:"col text-h6"},[n("div",[t._v(t._s(e.title))])]),n("div",{staticClass:"col-auto"},[n("q-btn",{attrs:{color:"grey-7",round:"",flat:"",icon:"more_vert"}},[n("q-menu",{attrs:{cover:"","auto-close":""}},[n("q-list",[n("q-item",{attrs:{clickable:""}},[n("q-item-section",{on:{click:function(n){return t.deleteTask(e.id)}}},[t._v("删除")])],1),n("q-item",{attrs:{clickable:""},on:{click:function(n){return t.changeState(e.id,"store")}}},[n("q-item-section",[t._v("归档")])],1),n("q-item",{attrs:{clickable:""},on:{click:function(n){return t.changeState(e.id,"finished")}}},[n("q-item-section",[t._v("完成")])],1)],1)],1)],1)],1)])]),n("q-card-section",[n("div",[t._v(t._s(e.text))])])],1)],1)})),1)},o=[],s=(n("4de4"),n("7db0"),n("5530")),c=n("2f62"),r={name:"Home",components:{},methods:{changeState:function(t,e){if(this.todoList){var n=this.todoList.find((function(e){return e.id===t}));n.state=e,this.$store.commit("SetTasks",this.todoList)}},deleteTask:function(t){var e=this.todoList.filter((function(e){return e.id!==t}));this.$store.commit("SetTasks",e)},hoverStyle:function(t){t.currentTarget.className="q-card shadow-8"},leaveStyle:function(t){t.currentTarget.className="q-card"}},computed:Object(s["a"])({},Object(c["b"])({todoList:function(t){return t.todoList}})),mounted:function(){0==this.todoList.length&&this.$store.commit("initTasks")}},a=r,l=n("2877"),u=n("fe09"),d=Object(l["a"])(a,i,o,!1,null,null,null);e["default"]=d.exports;d.options.components=Object.assign({QIntersection:u["j"],QCard:u["c"],QCardSection:u["e"],QBtn:u["b"],QMenu:u["o"],QList:u["n"],QItem:u["k"],QItemSection:u["l"]},d.options.components||{})}}]);
//# sourceMappingURL=chunk-2d0c51e6.06e9b35a.js.map