(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f0c66bf2"],{"50d9":function(t,e,i){},"767f":function(t,e,i){"use strict";var o=i("50d9"),s=i.n(o);s.a},d3d7:function(t,e,i){"use strict";var o=function(){var t=this,e=this,i=e.$createElement,o=e._self._c||i;return o("div",{staticClass:"home fit row wrap justify-start items-start content-start",staticStyle:{width:"90%"}},[""!==e.searchText?o("q-banner",{staticClass:"bg-orange text-white",staticStyle:{width:"90%"},attrs:{rounded:"",dense:""}},[e._v(" 结果已筛选，关键字'"+e._s(this.searchText)+"' ")]):e._e(),e._l(e.todoList.filter((function(t){return t.state===e.taskType})).filter((function(e){return""===t.searchText||e.title.includes(t.searchText)||e.text.replace(/(\n)/g,"").replace(/(\t)/g,"").replace(/(\r)/g,"").replace(/<\/?[^>]*>/g,"").replace(/\s*/g,"").includes(t.searchText)})),(function(t){return o("q-intersection",{key:t.id,attrs:{once:"",transition:"flip-up"}},[o("q-card",{class:"todo-card "+e.getClass(t),staticStyle:{"margin-top":"10px","margin-left":"10px","margin-right":"10px"},on:{mouseover:function(e){t.active=!0},mouseleave:function(e){t.active=!1},click:function(i){return e.showDialog(i,t)}}},[o("q-card-section",[o("div",{staticClass:"row items-center no-wrap",staticStyle:{height:"40px"}},[o("div",{staticClass:"col"},[o("div",[e._v(e._s(t.title))])]),o("div",{staticClass:"col-auto"},[o("q-btn",{attrs:{dense:"",color:"grey-7",round:"",flat:"",icon:"more_vert"},on:{click:function(t){t.stopPropagation()}}},[o("q-menu",[o("q-list",["running"!==e.taskType?o("q-item",{attrs:{clickable:""},on:{click:function(i){return e.changeState(t.id,"running")}}},[o("q-item-section",[e._v("还原")])],1):e._e(),"store"!==e.taskType?o("q-item",{attrs:{clickable:""},on:{click:function(i){return e.changeState(t.id,"store")}}},[o("q-item-section",[e._v("归档")])],1):e._e(),"finished"!==e.taskType?o("q-item",{attrs:{clickable:""},on:{click:function(i){return e.changeState(t.id,"finished")}}},[o("q-item-section",[e._v("完成")])],1):e._e(),o("q-item",{staticClass:"text-red",attrs:{clickable:""}},[o("q-item-section",{on:{click:function(i){return e.deleteTask(t)}}},[e._v("删除 ")])],1)],1)],1)],1)],1)])]),o("q-card-section",{domProps:{innerHTML:e._s(t.text)}}),o("q-separator"),o("q-card-section",{staticClass:"fit row  justify-end"},[o("q-chip",{staticClass:"text-caption",attrs:{dense:""}},[e._v(" "+e._s(t.time)+" ")])],1)],1)],1)})),o("q-dialog",{model:{value:e.dialog.show,callback:function(t){e.$set(e.dialog,"show",t)},expression:"dialog.show"}},[o("q-card",{class:e.getClass(e.dialog),staticStyle:{width:"600px","max-width":"80vw"}},[o("q-card-section",[o("q-input",{ref:"dialogTitle",staticClass:"text-h5",attrs:{dense:"",label:"标题",borderless:"",rules:[function(t){return!!t||"请输入标题"}]},model:{value:e.dialog.title,callback:function(t){e.$set(e.dialog,"title",t)},expression:"dialog.title"}})],1),o("q-card-section",[o("q-editor",{attrs:{dense:"",flat:"","content-class":"bg-"+e.dialog.color,"toolbar-bg":e.dialog.color,"min-height":"5rem"},model:{value:e.dialog.text,callback:function(t){e.$set(e.dialog,"text",t)},expression:"dialog.text"}})],1),o("q-card-actions",{attrs:{align:"right"}},[o("q-btn",{attrs:{flat:"",round:"",color:"primary",icon:"colorize"}},[o("q-popup-proxy",{model:{value:e.colorPickerShow,callback:function(t){e.colorPickerShow=t},expression:"colorPickerShow"}},[o("q-banner",e._l(e.colors,(function(t,i){return o("q-btn",{key:i,attrs:{round:"",color:t,size:"xs"},on:{click:function(i){e.dialog.color=t,e.colorPickerShow=!e.colorPickerShow}}})})),1)],1)],1),o("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:"取消",color:"primary"}}),o("q-btn",{attrs:{flat:"",label:"确定",color:"primary"},on:{click:function(t){return e.submitModify()}}})],1)],1)],1)],2)},s=[],a=(i("4de4"),i("7db0"),i("5530")),n=i("2f62"),r={name:"TaskList",components:{},props:{taskType:{type:String,default:"running"}},data:function(){return{colors:["indigo-2","indigo-11","purple-2","grey","cyan-1","teal-1","green-1","yellow-1"],colorPickerShow:!1,dialog:{show:!1,title:"",id:"",text:"",color:""}}},methods:{editerTab:function(){var t="\t",e=this.$refs.dialogDetial.$refs.input,i=e.selectionStart,o=e.selectionEnd;if(void 0!==i&&void 0!==o){var s=e.value,a=s.substring(0,i)+t+s.substring(o);e.value=a,e.focus(),e.selectionStart=i+t.length,e.selectionEnd=i+t.length,this.dialog.text=a}},showDialog:function(t,e){this.dialog.show=!0,this.dialog.title=e.title,this.dialog.text=e.text+"",this.dialog.color=e.color,this.dialog.id=e.id},submitModify:function(){var t=this;if(this.$refs.dialogTitle.validate(),!this.$refs.dialogTitle.hasError){var e=this.todoList.find((function(e){return e.id===t.dialog.id}));e.title=this.dialog.title,e.text=this.dialog.text+"",e.color=this.dialog.color,e.active=!1,this.$store.dispatch("saveTask",{todoList:this.todoList}),this.dialog.show=!1}},changeState:function(t,e){if(this.todoList){var i=this.todoList.find((function(e){return e.id===t}));i.active=!1,i.state=e,this.$store.dispatch("saveTask",{todoList:this.todoList})}},getClass:function(t){return void 0===t.active||t.active?"shadow-8 bg-"+t.color:"bg-"+t.color},deleteTask:function(t){var e=this,i=this.todoList.filter((function(e){return e.id!==t.id}));this.$store.dispatch("saveTask",{todoList:i}),this.$q.notify({message:"当前笔记["+t.title+"]已删除",progress:!0,timeout:5e3,actions:[{label:"撤销",color:"yellow",handler:function(){i.push(t),e.$store.dispatch("saveTask",{todoList:i}),e.$q.notify("删除已撤销")}}]})},hoverStyle:function(t){t.currentTarget.className="q-card shadow-8"},leaveStyle:function(t){t.currentTarget.className="q-card"}},computed:Object(a["a"])({},Object(n["b"])({todoList:function(t){return t.todoList},searchText:function(t){return t.searchText}}))},c=r,l=(i("767f"),i("2877")),d=i("fe09"),u=Object(l["a"])(c,o,s,!1,null,null,null);e["a"]=u.exports;u.options.components=Object.assign({QBanner:d["c"],QIntersection:d["p"],QCard:d["e"],QCardSection:d["g"],QBtn:d["d"],QMenu:d["u"],QList:d["t"],QItem:d["q"],QItemSection:d["r"],QSeparator:d["y"],QChip:d["h"],QDialog:d["j"],QInput:d["o"],QEditor:d["l"],QCardActions:d["f"],QPopupProxy:d["w"]},u.options.components||{}),u.options.directives=Object.assign({ClosePopup:d["a"]},u.options.directives||{})},dc0d:function(t,e,i){"use strict";i.r(e);var o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("TaskList",{attrs:{taskType:"finished"}})},s=[],a=i("d3d7"),n={name:"finish",components:{TaskList:a["a"]}},r=n,c=i("2877"),l=Object(c["a"])(r,o,s,!1,null,null,null);e["default"]=l.exports}}]);
//# sourceMappingURL=chunk-f0c66bf2.1e4cfc89.js.map