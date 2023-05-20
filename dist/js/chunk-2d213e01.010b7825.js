(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d213e01"],{af17:function(a,n,t){"use strict";t.r(n);var e=function(){var a=this,n=a._self._c;return n("b-container",{attrs:{fluid:""}},[n("b-row",[n("b-col",{attrs:{cols:"6"}},[n("iq-card",{scopedSlots:a._u([{key:"headerTitle",fn:function(){return[n("h4",{staticClass:"card-title"},[a._v("Basic Dragdrop Example")])]},proxy:!0},{key:"headerAction",fn:function(){return[n("a",{directives:[{name:"b-toggle",rawName:"v-b-toggle.collapse-1",modifiers:{"collapse-1":!0}}],staticClass:"text-primary float-right",attrs:{role:"button"}},[n("i",{staticClass:"ri-code-s-slash-line"})])]},proxy:!0},{key:"body",fn:function(){return[n("b-collapse",{staticClass:"mb-2",attrs:{id:"collapse-1"}},[n("div",{staticClass:"card"},[n("kbd",{staticClass:"bg-dark"},[n("pre",{staticClass:"text-white",attrs:{id:"basic-dragdrop"}},[n("code",[a._v('\n<template>\n  <div class="row">\n    <div class="col-12">\n      <div class="form-group d-flex justify-content-between align-items-center">\n        <div class="form-check">\n          <input\n            id="disabled"\n            type="checkbox"\n            v-model="enabled"\n            class="form-check-input"\n          />\n          <label class="form-check-label" for="disabled">Drag and Drop enabled</label>\n        </div>\n        <div\n          class="buttons"\n          aria-label="Basic example"\n        >\n          <button class="btn btn-primary btn-sm" @click="add">Add</button>&nbsp;\n          <button class="btn btn-primary btn-sm" @click="replace">Replace</button>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class="row">\n    <div class="col-12">\n      <h5 class="mb-2">Draggable</h5>\n\n      <draggable\n        :list="list"\n        :disabled="!enabled"\n        class="list-group"\n        ghost-class="ghost"\n        :move="checkMove"\n        @start="dragging1 = true"\n        @end="dragging1 = false"\n      >\n        <div\n          class="list-group-item"\n          v-for="element in list"\n          :key="element.name"\n        >\n        </div>\n      </draggable>\n    </div>\n  </div>\n</template>\n<script>\nimport draggable from \'vuedraggable\'\nlet id = 1\nexport default {\n  name: \'DragDropDemo\',\n  display:\'DragDropDemo\',\n  order: 0,\n  components: {\n  draggable\n  },\n  data(){\n    return {\n      enabled: true,\n      list: [\n        { name: "John", id: 0 },\n        { name: "Joao", id: 1 },\n        { name: "Jean", id: 2 }\n      ],\n      dragging: false\n    };\n  },\n  computed: {\n    draggingInfo() {\n      return this.dragging ? "under drag" : "";\n    }\n  },\n  methods: {\n    add () {\n      this.list.push({ name: "Juan " + id, id: id++ });\n    },\n    replace () {\n      this.list = [{ name: "Edgard", id: id++ }];\n    },\n    checkMove (e) {\n'),a._v("\n    }\n  }\n}\n<\/script>\n")])])])])]),[n("div",{staticClass:"row"},[n("div",{staticClass:"col-12"},[n("div",{staticClass:"form-group d-flex justify-content-between align-items-center"},[n("div",{staticClass:"form-check"},[n("input",{directives:[{name:"model",rawName:"v-model",value:a.enabled,expression:"enabled"}],staticClass:"form-check-input",attrs:{id:"disabled",type:"checkbox"},domProps:{checked:Array.isArray(a.enabled)?a._i(a.enabled,null)>-1:a.enabled},on:{change:function(n){var t=a.enabled,e=n.target,s=!!e.checked;if(Array.isArray(t)){var i=null,r=a._i(t,i);e.checked?r<0&&(a.enabled=t.concat([i])):r>-1&&(a.enabled=t.slice(0,r).concat(t.slice(r+1)))}else a.enabled=s}}}),n("label",{staticClass:"form-check-label",attrs:{for:"disabled"}},[a._v("Drag and Drop enabled")])]),n("div",{staticClass:"buttons",attrs:{"aria-label":"Basic example"}},[n("button",{staticClass:"btn btn-primary btn-sm",on:{click:a.add}},[a._v("Add")]),a._v("  "),n("button",{staticClass:"btn btn-primary btn-sm",on:{click:a.replace}},[a._v("Replace")])])])])]),n("div",{staticClass:"row"},[n("div",{staticClass:"col-12"},[n("h5",{staticClass:"mb-2"},[a._v("Draggable "+a._s(a.draggingInfo))]),n("draggable",{staticClass:"list-group",attrs:{list:a.list,disabled:!a.enabled,"ghost-class":"ghost",move:a.checkMove},on:{start:function(n){a.dragging1=!0},end:function(n){a.dragging1=!1}}},a._l(a.list,(function(t){return n("div",{key:t.name,staticClass:"list-group-item"},[a._v(" "+a._s(t.name)+" ")])})),0)],1)])]]},proxy:!0}])})],1),n("b-col",{attrs:{cols:"6"}},[n("iq-card",{scopedSlots:a._u([{key:"headerTitle",fn:function(){return[n("h4",{staticClass:"card-title"},[a._v("Two Lists Dragdrop Example")])]},proxy:!0},{key:"headerAction",fn:function(){return[n("a",{directives:[{name:"b-toggle",rawName:"v-b-toggle.collapse-2",modifiers:{"collapse-2":!0}}],staticClass:"text-primary float-right",attrs:{role:"button"}},[n("i",{staticClass:"ri-code-s-slash-line"})])]},proxy:!0},{key:"body",fn:function(){return[n("b-collapse",{staticClass:"mb-2",attrs:{id:"collapse-2"}},[n("div",{staticClass:"card"},[n("kbd",{staticClass:"bg-dark"},[n("pre",{staticClass:"text-white",attrs:{id:"two-lists-dragdrop"}},[n("code",[a._v('\n<template>\n  <div class="row">\n    <div class="col-6">\n      <h5 class="mb-2">Draggable 1</h5>\n      <draggable class="list-group" :list="list1" group="people" @change="log">\n        <div\n          class="list-group-item"\n          v-for="(element, index) in list1"\n          :key="element.name"\n        >\n        </div>\n      </draggable>\n    </div>\n\n    <div class="col-6">\n      <h5 class="mb-2">Draggable 2</h5>\n      <draggable class="list-group" :list="list2" group="people" @change="log">\n        <div\n          class="list-group-item"\n          v-for="(element, index) in list2"\n          :key="element.name"\n        >\n        </div>\n      </draggable>\n    </div>\n  </div>\n</template>\n<script>\nimport draggable from \'vuedraggable\'\nlet id = 1\nexport default {\n  name: \'DragDropDemo\',\n  display:\'DragDropDemo\',\n  order: 0,\n  components: {\n  draggable\n  },\n  data(){\n    return {\n      enabled: true,\n      list1: [\n        { name: "John", id: 1 },\n        { name: "Joao", id: 2 },\n        { name: "Jean", id: 3 },\n        { name: "Gerard", id: 4 }\n      ],\n      list2: [\n        { name: "Juan", id: 5 },\n        { name: "Edgard", id: 6 },\n        { name: "Johnson", id: 7 }\n      ],\n      dragging: false\n    };\n  },\n  computed: {\n    draggingInfo() {\n      return this.dragging ? "under drag" : "";\n    }\n  },\n  methods: {\n    add () {\n      this.list.push({ name: "Juan " + id, id: id++ });\n    },\n    replace () {\n      this.list = [{ name: "Edgard", id: id++ }];\n    },\n    checkMove (e) {\n'),a._v("\n    }\n  }\n}\n<\/script>\n")])])])])]),[n("div",{staticClass:"row"},[n("div",{staticClass:"col-6"},[n("h5",{staticClass:"mb-2"},[a._v("Draggable 1")]),n("draggable",{staticClass:"list-group",attrs:{list:a.list1,group:"people"},on:{change:a.log}},a._l(a.list1,(function(t,e){return n("div",{key:t.name,staticClass:"list-group-item"},[a._v(" "+a._s(t.name)+" "+a._s(e)+" ")])})),0)],1),n("div",{staticClass:"col-6"},[n("h5",{staticClass:"mb-2"},[a._v("Draggable 2")]),n("draggable",{staticClass:"list-group",attrs:{list:a.list2,group:"people"},on:{change:a.log}},a._l(a.list2,(function(t,e){return n("div",{key:t.name,staticClass:"list-group-item"},[a._v(" "+a._s(t.name)+" "+a._s(e)+" ")])})),0)],1)])]]},proxy:!0}])})],1),n("b-col",{attrs:{cols:"6"}},[n("iq-card",{scopedSlots:a._u([{key:"headerTitle",fn:function(){return[n("h4",{staticClass:"card-title"},[a._v("Transitions Dragdrop Example")])]},proxy:!0},{key:"headerAction",fn:function(){return[n("a",{directives:[{name:"b-toggle",rawName:"v-b-toggle.collapse-5",modifiers:{"collapse-5":!0}}],staticClass:"text-primary float-right",attrs:{role:"button"}},[n("i",{staticClass:"ri-code-s-slash-line"})])]},proxy:!0},{key:"body",fn:function(){return[n("b-collapse",{staticClass:"mb-2",attrs:{id:"collapse-5"}},[n("div",{staticClass:"card"},[n("kbd",{staticClass:"bg-dark"},[n("pre",{staticClass:"text-white",attrs:{id:"transitions-dragdrop"}},[n("code",[a._v('\n<template>\n  <div class="row">\n    <div class="col-12">\n      <button class="btn btn-primary" @click="sort">\n        To original order\n      </button>\n    </div>\n  </div>\n  <div class="row">\n    <div class="col-12">\n      <h5>Transition</h5>\n      <draggable\n          class="list-group"\n          tag="ul"\n          v-model="transitionList"\n          v-bind="dragOptions"\n          @start="drag = true"\n          @end="drag = false">\n        <transition-group type="transition" :name="!drag ? \'flip-list\' : null">\n          <li class="list-group-item" v-for="element in transitionList" :key="element.order">\n            <i :class=" element.fixed ? \'fa fa-anchor\' : \'glyphicon glyphicon-pushpin\' " @click="element.fixed = !element.fixed" aria-hidden="true" ></i>\n          </li>\n        </transition-group>\n      </draggable>\n    </div>\n  </div>\n</template>\n<script>\nimport draggable from \'vuedraggable\'\nconst message = [\n  "vue.draggable",\n  "draggable",\n  "component",\n  "for",\n  "vue.js 2.0",\n  "based",\n  "on",\n  "Sortablejs"\n];\nexport default {\n  name: \'DragDropDemo\',\n  display:\'DragDropDemo\',\n  order: 0,\n  components: {\n    draggable\n  },\n  data(){\n    return {\n      transitionList: message.map((name, index) => {\n        return { name, order: index + 1 };\n      }),\n      drag: false\n    },\n  }\n  computed: {\n    draggingInfo() {\n      return this.dragging ? "under drag" : "";\n    }\n  },\n  methods: {\n    sort () {\n      this.transitionList = this.transitionList.sort((a, b) => a.order - b.order)\n    }\n  }\n}\n<\/script>\n')])])])])]),[n("div",{staticClass:"row"},[n("div",{staticClass:"col-12"},[n("div",{staticClass:"d-flex justify-content-between"},[n("h5",{staticClass:"mb-2"},[a._v("Transition")]),n("button",{staticClass:"btn btn-primary btn-sm mb-2",on:{click:a.sort}},[a._v(" To original order ")])]),n("draggable",a._b({staticClass:"list-group",attrs:{tag:"ul"},on:{start:function(n){a.drag=!0},end:function(n){a.drag=!1}},model:{value:a.transitionList,callback:function(n){a.transitionList=n},expression:"transitionList"}},"draggable",a.dragOptions,!1),[n("transition-group",{attrs:{type:"transition",name:a.drag?null:"flip-list"}},a._l(a.transitionList,(function(t){return n("li",{key:t.order,staticClass:"list-group-item"},[n("i",{class:t.fixed?"fa fa-anchor":"glyphicon glyphicon-pushpin",attrs:{"aria-hidden":"true"},on:{click:function(a){t.fixed=!t.fixed}}}),a._v(" "+a._s(t.name)+" ")])})),0)],1)],1)])]]},proxy:!0}])})],1),n("b-col",{attrs:{cols:"6"}},[n("iq-card",{scopedSlots:a._u([{key:"headerTitle",fn:function(){return[n("h4",{staticClass:"card-title"},[a._v("Table Column Dragdrop Example")])]},proxy:!0},{key:"headerAction",fn:function(){return[n("a",{directives:[{name:"b-toggle",rawName:"v-b-toggle.collapse-6",modifiers:{"collapse-6":!0}}],staticClass:"text-primary float-right",attrs:{role:"button"}},[n("i",{staticClass:"ri-code-s-slash-line"})])]},proxy:!0},{key:"body",fn:function(){return[n("b-collapse",{staticClass:"mb-2",attrs:{id:"collapse-6"}},[n("div",{staticClass:"card"},[n("kbd",{staticClass:"bg-dark"},[n("pre",{staticClass:"text-white",attrs:{id:"table-column-dragdrop"}},[n("code",[a._v('\n<template>\n  <div class="row">\n    <div class="col-8">\n    <h5>Draggable table</h5>\n    <table class="table table-striped">\n      <thead class="thead-dark">\n        <draggable v-model="headers" tag="tr">\n          <th v-for="header in headers" :key="header" scope="col">\n          </th>\n        </draggable>\n      </thead>\n    <tbody>\n      <tr v-for="item in list5" :key="item.name">\n        <td v-for="header in headers" :key="header">\n        </td>\n      </tr>\n    </tbody>\n    </table>\n    </div>\n  </div>\n</template>\n<script>\nimport draggable from \'vuedraggable\'\n\nexport default {\n  name: \'DragDropDemo\',\n  display:\'DragDropDemo\',\n  order: 0,\n  components: {\n    draggable\n  },\n  data(){\n    return {\n      headers: ["id", "name", "sport"],\n      list: [\n        { id: 1, name: "Abby", sport: "basket" },\n        { id: 2, name: "Brooke", sport: "foot" },\n        { id: 3, name: "Courtenay", sport: "volley" },\n        { id: 4, name: "David", sport: "rugby" }\n      ],\n      dragging: false\n    }\n  }\n}\n<\/script>\n')])])])])]),[n("div",{staticClass:"row"},[n("div",{staticClass:"col-12"},[n("h5",{staticClass:"mb-2"},[a._v("Draggable table")]),n("table",{staticClass:"table table-striped"},[n("thead",{staticClass:"thead-dark"},[n("draggable",{attrs:{tag:"tr"},model:{value:a.headers,callback:function(n){a.headers=n},expression:"headers"}},a._l(a.headers,(function(t){return n("th",{key:t,attrs:{scope:"col"}},[n("i",{staticClass:"fas fa-arrows-alt"}),a._v(a._s(t)+" ")])})),0)],1),n("tbody",a._l(a.list5,(function(t){return n("tr",{key:t.name},a._l(a.headers,(function(e){return n("td",{key:e},[a._v(a._s(t[e]))])})),0)})),0)])])])]]},proxy:!0}])})],1),n("b-col",{attrs:{cols:"6"}},[n("iq-card",{scopedSlots:a._u([{key:"headerTitle",fn:function(){return[n("h4",{staticClass:"card-title"},[a._v("Custom Clone Dragdrop Example")])]},proxy:!0},{key:"headerAction",fn:function(){return[n("a",{directives:[{name:"b-toggle",rawName:"v-b-toggle.collapse-3",modifiers:{"collapse-3":!0}}],staticClass:"text-primary float-right",attrs:{role:"button"}},[n("i",{staticClass:"ri-code-s-slash-line"})])]},proxy:!0},{key:"body",fn:function(){return[n("b-collapse",{staticClass:"mb-2",attrs:{id:"collapse-3"}},[n("div",{staticClass:"card"},[n("kbd",{staticClass:"bg-dark"},[n("pre",{staticClass:"text-white",attrs:{id:"custom-clone-dragdrop"}},[n("code",[a._v('\n<template>\n  <div class="row">\n      <div class="col-6">\n        <h5 class="mb-2">Draggable 1</h5>\n        <draggable\n          class="dragArea list-group"\n          :list="list3"\n          :group="{ name: \'people\', pull: \'clone\', put: false }"\n          :clone="cloneDog"\n          @change="log"\n        >\n          <div class="list-group-item" v-for="element in list3" :key="element.id">\n          </div>\n        </draggable>\n      </div>\n\n      <div class="col-6">\n        <h5 class="mb-2">Draggable 2</h5>\n        <draggable\n          class="dragArea list-group"\n          :list="list4"\n          group="people"\n          @change="log"\n        >\n          <div class="list-group-item" v-for="element in list4" :key="element.id">\n          </div>\n        </draggable>\n      </div>\n    </div>\n</template>\n<script>\nimport draggable from \'vuedraggable\'\nlet idGlobal = 8\nexport default {\n  name: \'DragDropDemo\',\n  display:\'DragDropDemo\',\n  order: 0,\n  components: {\n    draggable\n  },\n  data(){\n    return {\n      enabled: true,\n      list3: [\n        { name: \'dog 1\', id: 1 },\n        { name: \'dog 2\', id: 2 },\n        { name: \'dog 3\', id: 3 },\n        { name: \'dog 4\', id: 4 }\n      ],\n      list4: [\n        { name: \'cat 5\', id: 5 },\n        { name: \'cat 6\', id: 6 },\n        { name: \'cat 7\', id: 7 }\n      ],\n      dragging: false\n    };\n    },\n    computed: {\n      draggingInfo() {\n        return this.dragging ? "under drag" : "";\n      }\n    },\n    methods: {\n      cloneDog  ({ id }) {\n      return {\n        id: idGlobal++,\n        name: `cat ${id}`\n    }\n  }\n}\n<\/script>\n')])])])])]),[n("div",{staticClass:"row"},[n("div",{staticClass:"col-6"},[n("h5",{staticClass:"mb-2"},[a._v("Draggable 1")]),n("draggable",{staticClass:"dragArea list-group",attrs:{list:a.list3,group:{name:"people",pull:"clone",put:!1},clone:a.cloneDog},on:{change:a.log}},a._l(a.list3,(function(t){return n("div",{key:t.id,staticClass:"list-group-item"},[a._v(" "+a._s(t.name)+" ")])})),0)],1),n("div",{staticClass:"col-6"},[n("h5",{staticClass:"mb-2"},[a._v("Draggable 2")]),n("draggable",{staticClass:"dragArea list-group",attrs:{list:a.list4,group:"people"},on:{change:a.log}},a._l(a.list4,(function(t){return n("div",{key:t.id,staticClass:"list-group-item"},[a._v(" "+a._s(t.name)+" ")])})),0)],1)])]]},proxy:!0}])})],1),n("b-col",{attrs:{cols:"6"}},[n("iq-card",{scopedSlots:a._u([{key:"headerTitle",fn:function(){return[n("h4",{staticClass:"card-title"},[a._v("Nested Dragdrop Example")])]},proxy:!0},{key:"headerAction",fn:function(){return[n("a",{directives:[{name:"b-toggle",rawName:"v-b-toggle.collapse-4",modifiers:{"collapse-4":!0}}],staticClass:"text-primary float-right",attrs:{role:"button"}},[n("i",{staticClass:"ri-code-s-slash-line"})])]},proxy:!0},{key:"body",fn:function(){return[n("b-collapse",{staticClass:"mb-2",attrs:{id:"collapse-4"}},[n("div",{staticClass:"card"},[n("kbd",{staticClass:"bg-dark"},[n("pre",{staticClass:"text-white",attrs:{id:"handle-dragdrop"}},[n("code",[a._v("\n<template>\n  <nested-draggable :tasks=\"nestedList\" />\n</template>\n<script>\nimport NestedDraggable from '@component/xray/dragdrop/nested-draggable'\nexport default{\n  components: { NestedDraggable },\n  data () {\n    return {\n      nestedList: [\n        {\n          name: 'task 1',\n          tasks: [\n            {\n              name: 'task 2',\n              tasks: []\n            }\n          ]\n        },\n        {\n          name: 'task 3',\n          tasks: [\n            {\n              name: 'task 4',\n              tasks: []\n            }\n          ]\n        },\n        {\n          name: 'task 5',\n          tasks: []\n        }\n      ]\n    }\n  }\n}\n<\/script>\n")])])])])]),[n("div",{staticClass:"row"},[n("div",{staticClass:"col-12"},[n("h5",{staticClass:"mb-2"},[a._v("Nested Draggable")]),n("nested-draggable",{attrs:{tasks:a.nestedList}})],1)])]]},proxy:!0}])})],1)],1)],1)},s=[],i=t("bcae"),r=t("b76a"),l=t.n(r),o=t("ee1c");let d=1,c=8;const g=["vue.draggable","draggable","component","based","Sortablejs"];var p={name:"DragDropDemo",mounted(){i["a"].index()},components:{draggable:l.a,NestedDraggable:o["default"]},display:"DragDropDemo",order:0,data(){return{enabled:!0,list:[{name:"John",id:0},{name:"Joao",id:1},{name:"Jean",id:2}],dragging1:!1,list1:[{name:"John",id:1},{name:"Joao",id:2},{name:"Jean",id:3},{name:"Gerard",id:4}],list2:[{name:"Juan",id:5},{name:"Edgard",id:6},{name:"Johnson",id:7}],list3:[{name:"dog 1",id:1},{name:"dog 2",id:2},{name:"dog 3",id:3},{name:"dog 4",id:4}],list4:[{name:"cat 5",id:5},{name:"cat 6",id:6},{name:"cat 7",id:7}],transitionList:g.map((a,n)=>({name:a,order:n+1})),drag:!1,headers:["id","name","sport"],list5:[{id:1,name:"Abby",sport:"basket"},{id:2,name:"Brooke",sport:"foot"},{id:3,name:"Courtenay",sport:"volley"},{id:4,name:"David",sport:"rugby"}],dragging:!0,nestedList:[{name:"task 1",tasks:[{name:"task 2",tasks:[]}]},{name:"task 3",tasks:[{name:"task 4",tasks:[]}]},{name:"task 5",tasks:[]}]}},computed:{draggingInfo(){return this.dragging?"under drag":""},dragOptions(){return{animation:200,group:"description",disabled:!1,ghostClass:"ghost"}}},methods:{log(){},checkMove(){},add(){this.list.push({name:"Juan "+d,id:d++})},replace(){this.list=[{name:"Edgard",id:d++}]},cloneDog({id:a}){return{id:c++,name:"cat "+a}},removeAt(a){this.list.splice(a,1)},sort(){this.transitionList=this.transitionList.sort((a,n)=>a.order-n.order)}}},m=p,b=t("2877"),u=Object(b["a"])(m,e,s,!1,null,null,null);n["default"]=u.exports}}]);
//# sourceMappingURL=chunk-2d213e01.010b7825.js.map