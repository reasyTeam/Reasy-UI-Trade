(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{321:function(e,t,n){"use strict";n.r(t);var a=n(50),a={name:"component-doc",components:{"mo-demo0":Object(a.a)({render:function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("div",[e("v-checkbox-group",{attrs:{name:"check-group",options:t.options,width:"300px"},model:{value:t.checked,callback:function(e){t.checked=e},expression:"checked"}})],1)},staticRenderFns:[]},{data:function(){return{checked:[],options:[{label:"选项一",value:1},{label:"选项二",value:2},{label:"选项三",value:3},{label:"选项四",value:4},{label:"选项四",value:5},{label:"选项四",value:6},{label:"选项四",value:7},{label:"选项四",value:8},{label:"选项四",value:9},{label:"选项四",value:10},{label:"选项四",value:11}]}}}),"mo-demo1":Object(a.a)({render:function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("div",[e("v-checkbox-group",{attrs:{name:"check-g5",options:t.options},model:{value:t.checked,callback:function(e){t.checked=e},expression:"checked"}})],1)},staticRenderFns:[]},{data:function(){return{checked:[],options:[1,2,3,4]}}}),"mo-demo2":Object(a.a)({render:function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("div",[e("v-checkbox-group",{attrs:{"is-select-all":"",name:"check-g1",options:t.options},model:{value:t.checked,callback:function(e){t.checked=e},expression:"checked"}})],1)},staticRenderFns:[]},{data:function(){return{checked:[],options:[{label:"选项一",value:1},{label:"选项二",value:2},{label:"选项三",value:3},{label:"选项四",value:4}]}}}),"mo-demo3":Object(a.a)({render:function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("div",[e("v-checkbox-group",{attrs:{"is-select-all":"",name:"check-g2","select-text":"选中所有",options:t.options},model:{value:t.checked,callback:function(e){t.checked=e},expression:"checked"}})],1)},staticRenderFns:[]},{data:function(){return{checked:[],options:[{label:"选项一",value:1},{label:"选项二",value:2},{label:"选项三",value:3},{label:"选项四",value:4}]}}}),"mo-demo4":Object(a.a)({render:function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("div",[e("v-checkbox-group",{attrs:{"is-select-all":"",name:"check-g3",disabled:"",options:t.options},model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}}),t._v(" "),e("v-checkbox-group",{attrs:{"is-select-all":"",name:"check-group-d",disabled:"",options:t.options},model:{value:t.checked,callback:function(e){t.checked=e},expression:"checked"}})],1)},staticRenderFns:[]},{data:function(){return{checked:[],selected:[1,3],options:[{label:"选项一",value:1},{label:"选项二",value:2},{label:"选项三",value:3},{label:"选项四",value:4}]}}}),"mo-demo5":Object(a.a)({render:function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("div",[e("v-checkbox-group",{attrs:{name:"check-group-part",options:t.options},model:{value:t.checked,callback:function(e){t.checked=e},expression:"checked"}})],1)},staticRenderFns:[]},{data:function(){return{checked:[1,3],options:[{label:"选项一",value:1},{label:"选项二",value:2},{label:"选项三",value:3,disabled:!0},{label:"选项四",value:4,disabled:!0}]}}}),"mo-demo6":Object(a.a)({render:function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("div",[e("v-checkbox-group",{attrs:{min:2,max:4,name:"check-g4",options:t.options},model:{value:t.checked,callback:function(e){t.checked=e},expression:"checked"}})],1)},staticRenderFns:[]},{data:function(){return{checked:[1,2,3],options:[{label:"选项一",value:1},{label:"选项二",value:2},{label:"选项三",value:3},{label:"选项四",value:4},{label:"选项五",value:5},{label:"选项六",value:6}]}}})}},n=n(1),n=Object(n.a)(a,function(){var e=this,t=e.$createElement,t=e._self._c||t;return t("section",{staticClass:"content reasy-doc"},[t("h1",[e._v("复选框组")]),t("p",[e._v("适应于支持选择多个选项")]),e._m(0),e._m(1),e._m(2),t("demo-block",[t("template",{slot:"source"},[t("mo-demo0")],1),t("template",{slot:"highlight"},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{class:"html"}},[e._v('<v-checkbox-group v-model="checked" name="check-group" :options="options" width="300px"></v-checkbox-group>\n<script>\n  export default {\n    data() {\n      return {\n        checked: [],\n        options: [\n          {\n            label: "选项一",\n            value: 1\n          },\n          {\n            label: "选项二",\n            value: 2\n          },\n          {\n            label: "选项三",\n            value: 3\n          },\n          {\n            label: "选项四",\n            value: 4\n          },\n          {\n            label: "选项四",\n            value: 5\n          },\n          {\n            label: "选项四",\n            value: 6\n          },\n          {\n            label: "选项四",\n            value: 7\n          },\n          {\n            label: "选项四",\n            value: 8\n          },\n          {\n            label: "选项四",\n            value: 9\n          },\n          {\n            label: "选项四",\n            value: 10\n          },\n          {\n            label: "选项四",\n            value: 11\n          }\n        ]\n      };\n    }\n  };\n<\/script>\n')])])])],2),t("p",[e._v("如果选项和值一致时，options 选项可简化为具体的值")]),t("demo-block",[t("template",{slot:"source"},[t("mo-demo1")],1),t("template",{slot:"highlight"},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{class:"html"}},[e._v('<v-checkbox-group v-model="checked" name="check-g5" :options="options"></v-checkbox-group>\n<script>\n  export default {\n    data() {\n      return {\n        checked: [],\n        options: [1, 2, 3, 4]\n      };\n    }\n  };\n<\/script>\n')])])])],2),e._m(3),e._m(4),t("demo-block",[t("template",{slot:"source"},[t("mo-demo2")],1),t("template",{slot:"highlight"},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{class:"html"}},[e._v('<v-checkbox-group\n  is-select-all\n  name="check-g1"\n  v-model="checked"\n  :options="options"\n></v-checkbox-group>\n<script>\n  export default {\n    data() {\n      return {\n        checked: [],\n        options: [\n          {\n            label: "选项一",\n            value: 1\n          },\n          {\n            label: "选项二",\n            value: 2\n          },\n          {\n            label: "选项三",\n            value: 3\n          },\n          {\n            label: "选项四",\n            value: 4\n          }\n        ]\n      };\n    }\n  };\n<\/script>\n')])])])],2),t("p",[e._v("自定义全选文字")]),e._m(5),t("demo-block",[t("template",{slot:"source"},[t("mo-demo3")],1),t("template",{slot:"highlight"},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{class:"html"}},[e._v('<v-checkbox-group\n  is-select-all\n  name="check-g2"\n  select-text="选中所有"\n  v-model="checked"\n  :options="options"\n></v-checkbox-group>\n<script>\n  export default {\n    data() {\n      return {\n        checked: [],\n        options: [\n          {\n            label: "选项一",\n            value: 1\n          },\n          {\n            label: "选项二",\n            value: 2\n          },\n          {\n            label: "选项三",\n            value: 3\n          },\n          {\n            label: "选项四",\n            value: 4\n          }\n        ]\n      };\n    }\n  };\n<\/script>\n')])])])],2),e._m(6),t("p",[e._v("全部选项禁用")]),t("demo-block",[t("template",{slot:"source"},[t("mo-demo4")],1),t("template",{slot:"highlight"},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{class:"html"}},[e._v('<v-checkbox-group\n  is-select-all\n  name="check-g3"\n  disabled\n  v-model="selected"\n  :options="options"\n></v-checkbox-group>\n<v-checkbox-group\n  is-select-all\n  name="check-group-d"\n  disabled\n  v-model="checked"\n  :options="options"\n></v-checkbox-group>\n<script>\n  export default {\n    data() {\n      return {\n        checked: [],\n        selected:[1, 3],\n        options: [\n          {\n            label: "选项一",\n            value: 1\n          },\n          {\n            label: "选项二",\n            value: 2\n          },\n          {\n            label: "选项三",\n            value: 3\n          },\n          {\n            label: "选项四",\n            value: 4\n          }\n        ]\n      };\n    }\n  };\n<\/script>\n')])])])],2),t("p",[e._v("部分选项禁用")]),t("demo-block",[t("template",{slot:"source"},[t("mo-demo5")],1),t("template",{slot:"highlight"},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{class:"html"}},[e._v('<v-checkbox-group v-model="checked" name="check-group-part" :options="options"></v-checkbox-group>\n<script>\n  export default {\n    data() {\n      return {\n        checked: [1,3],\n        options: [\n          {\n            label: "选项一",\n            value: 1\n          },\n          {\n            label: "选项二",\n            value: 2\n          },\n          {\n            label: "选项三",\n            value: 3,\n            disabled: true\n          },\n          {\n            label: "选项四",\n            value: 4,\n            disabled: true\n          }\n        ]\n      };\n    }\n  };\n<\/script>\n')])])])],2),e._m(7),e._m(8),t("demo-block",[t("template",{slot:"source"},[t("mo-demo6")],1),t("template",{slot:"highlight"},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{class:"html"}},[e._v('<v-checkbox-group\n  :min="2"\n  :max="4"\n  v-model="checked"\n  name="check-g4"\n  :options="options"\n></v-checkbox-group>\n<script>\n  export default {\n    data() {\n      return {\n        checked: [1, 2, 3],\n        options: [\n          {\n            label: "选项一",\n            value: 1\n          },\n          {\n            label: "选项二",\n            value: 2\n          },\n          {\n            label: "选项三",\n            value: 3\n          },\n          {\n            label: "选项四",\n            value: 4\n          },\n          {\n            label: "选项五",\n            value: 5\n          },\n          {\n            label: "选项六",\n            value: 6\n          }\n        ]\n      };\n    }\n  };\n<\/script>\n')])])])],2),e._m(9),e._m(10),e._m(11),e._m(12),e._m(13),e._m(14),t("side-link")],1)},[function(){var e=this,t=e.$createElement,t=e._self._c||t;return t("h2",{attrs:{id:"an-xu-yin-yong"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#an-xu-yin-yong"}},[e._v("¶")]),e._v(" 按需引用")])},function(){var e=this,t=e.$createElement,t=e._self._c||t;return t("pre",[t("code",{staticClass:"language-js"},[e._v('import { Base, Checkbox } from "@reasy-team/reasy-ui";\n\nVue.use(Checkbox);\nVue.use(Base);\n')])])},function(){var e=this,t=e.$createElement,t=e._self._c||t;return t("h2",{attrs:{id:"ji-ben-yong-fa"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ji-ben-yong-fa"}},[e._v("¶")]),e._v(" 基本用法")])},function(){var e=this,t=e.$createElement,t=e._self._c||t;return t("h2",{attrs:{id:"zhi-chi-quan-xuan"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#zhi-chi-quan-xuan"}},[e._v("¶")]),e._v(" 支持全选")])},function(){var e=this,t=e.$createElement,t=e._self._c||t;return t("p",[t("code",[e._v("is-select-all")]),e._v(" 配置支持全选")])},function(){var e=this,t=e.$createElement,t=e._self._c||t;return t("p",[t("code",[e._v("slect-text")]),e._v("配置全选的文字")])},function(){var e=this,t=e.$createElement,t=e._self._c||t;return t("h2",{attrs:{id:"jin-yong"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#jin-yong"}},[e._v("¶")]),e._v(" 禁用")])},function(){var e=this,t=e.$createElement,t=e._self._c||t;return t("h2",{attrs:{id:"xuan-xiang-fan-wei"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#xuan-xiang-fan-wei"}},[e._v("¶")]),e._v(" 选项范围")])},function(){var e=this,t=e.$createElement,t=e._self._c||t;return t("p",[e._v("支持"),t("code",[e._v("min")]),e._v("和"),t("code",[e._v("max")]),e._v("，配置选项的最少选择个数和最大选择个数")])},function(){var e=this,t=e.$createElement,t=e._self._c||t;return t("h2",{attrs:{id:"props"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#props"}},[e._v("¶")]),e._v(" Props")])},function(){var e=this,t=e.$createElement,t=e._self._c||t;return t("table",[t("thead",[t("tr",[t("th",[e._v("参数")]),t("th",[e._v("说明")]),t("th",[e._v("类型")]),t("th",[e._v("可选值")]),t("th",[e._v("默认值")])])]),t("tbody",[t("tr",[t("td",[e._v("value / v-model")]),t("td",[e._v("绑定值")]),t("td",[e._v("Arrray")]),t("td",[e._v("—")]),t("td",[e._v("[]")])]),t("tr",[t("td",[e._v("no-id")]),t("td",[e._v("是否不需要id，为false则以"),t("code",[e._v("name")]),e._v("作为id，除特殊情况，表单中使用必须添加id")]),t("td",[e._v("boolean")]),t("td",[e._v("-")]),t("td",[e._v("false")])]),t("tr",[t("td",[e._v("name")]),t("td",[e._v("原生属性name，同时渲染为id属性，当"),t("code",[e._v("no-id")]),e._v("为false时"),t("strong",[e._v("必填")])]),t("td",[e._v("string")]),t("td",[e._v("-")]),t("td",[e._v("-")])]),t("tr",[t("td",[e._v("disabled")]),t("td",[e._v("是否禁用全部复选框，包括全选复选框")]),t("td",[e._v("boolean")]),t("td",[e._v("—")]),t("td",[e._v("false")])]),t("tr",[t("td",[e._v("disabled-check-all")]),t("td",[e._v("是否仅禁用全选复选框。特殊情况下使用(一般配合options中的disabled，在多个checkbox组之间修改交互而使用)")]),t("td",[e._v("boolean")]),t("td",[e._v("—")]),t("td",[e._v("false")])]),t("tr",[t("td",[e._v("options")]),t("td",[e._v("选项数组对象[{label: 显示文字，"),t("br"),e._v(" value：值，disabled: 是否禁用此项}]")]),t("td",[e._v("Array")]),t("td",[e._v("—")]),t("td",[e._v("[]")])]),t("tr",[t("td",[e._v("is-select-all")]),t("td",[e._v("是否支持全选")]),t("td",[e._v("boolean")]),t("td",[e._v("—")]),t("td",[e._v("false")])]),t("tr",[t("td",[e._v("select-text")]),t("td",[e._v("全部选中的文字描述")]),t("td",[e._v("string")]),t("td",[e._v("—")]),t("td",[e._v("全选")])]),t("tr",[t("td",[e._v("min")]),t("td",[e._v("最小支持选项")]),t("td",[e._v("number")]),t("td",[e._v("—")]),t("td",[e._v("0")])]),t("tr",[t("td",[e._v("max")]),t("td",[e._v("最大支持选项，最大为选项的个数")]),t("td",[e._v("number")]),t("td",[e._v("—")]),t("td",[e._v("—")])]),t("tr",[t("td",[e._v("tooltip")]),t("td",[e._v("文字提示，配置参考v-tooltip指令。提示内容默认为options项中的label值。若配置了content值，那么所有的复选框的提示内容都为content值")]),t("td",[e._v("object")]),t("td",[e._v("—")]),t("td",[e._v("—")])])])])},function(){var e=this,t=e.$createElement,t=e._self._c||t;return t("h2",{attrs:{id:"options-xuan-xiang"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#options-xuan-xiang"}},[e._v("¶")]),e._v(" options 选项")])},function(){var e=this,t=e.$createElement,t=e._self._c||t;return t("table",[t("thead",[t("tr",[t("th",[e._v("参数")]),t("th",[e._v("说明")]),t("th",[e._v("类型")]),t("th",[e._v("可选值")]),t("th",[e._v("默认值")])])]),t("tbody",[t("tr",[t("td",[e._v("label")]),t("td",[e._v("选项框描述文字")]),t("td",[e._v("string")]),t("td"),t("td")]),t("tr",[t("td",[e._v("value")]),t("td",[e._v("选项框值，各选项的值不能一样")]),t("td",[e._v("string / number / boolean")]),t("td"),t("td")]),t("tr",[t("td",[e._v("disabled")]),t("td",[e._v("该选项是否禁用")]),t("td",[e._v("boolean")]),t("td"),t("td",[e._v("false")])])])])},function(){var e=this,t=e.$createElement,t=e._self._c||t;return t("h2",{attrs:{id:"events"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#events"}},[e._v("¶")]),e._v(" @Events")])},function(){var e=this,t=e.$createElement,t=e._self._c||t;return t("table",[t("thead",[t("tr",[t("th",[e._v("事件名")]),t("th",[e._v("说明")]),t("th",[e._v("参数")])])]),t("tbody",[t("tr",[t("td",[e._v("change")]),t("td",[e._v("值改变时触发")]),t("td",[e._v("改变后的值")])]),t("tr",[t("td",[e._v("click")]),t("td",[e._v("点击选项时触发")]),t("td",[e._v("选项 value")])])])])}],!1,null,null,null);t.default=n.exports}}]);