(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{276:function(t,e,a){"use strict";a.r(e);var n=a(41),n={name:"component-doc",components:{"mo-demo0":Object(n.a)({render:function(){var e=this,t=e.$createElement,t=e._self._c||t;return t("div",[t("v-radio",{attrs:{name:"radio",options:e.options},model:{value:e.radio1,callback:function(t){e.radio1=t},expression:"radio1"}})],1)},staticRenderFns:[]},{data:function(){return{radio1:1,options:[1,2,3,4]}}}),"mo-demo1":Object(n.a)({render:function(){var e=this,t=e.$createElement,t=e._self._c||t;return t("div",[t("v-radio",{attrs:{name:"radio-d",disabled:"",options:e.options1},model:{value:e.radio1,callback:function(t){e.radio1=t},expression:"radio1"}}),e._v(" "),t("div",[t("v-radio",{attrs:{name:"radio-d1",options:e.options2},model:{value:e.radio2,callback:function(t){e.radio2=t},expression:"radio2"}})],1)],1)},staticRenderFns:[]},{data:function(){return{radio1:1,options1:[1,2,3,4],radio2:1,options2:[{label:"选项1",value:1},{label:"选项2",value:2},{label:"选项3",value:3,disabled:!0},{label:"选项4",value:4}]}}})}},a=a(1),a=Object(a.a)(n,function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("section",{staticClass:"content reasy-doc"},[t._m(0),e("p",[t._v("用于一组可选项单项选择。")]),t._m(1),t._m(2),t._m(3),e("demo-block",[e("template",{slot:"source"},[e("mo-demo0")],1),e("template",{slot:"highlight"},[e("pre",{pre:!0},[e("code",{pre:!0,attrs:{class:"html"}},[t._v('<v-radio v-model="radio1" name="radio" :options="options"></v-radio>\n<script>\n  export default {\n    data() {\n      return {\n        radio1: 1,\n        options: [1, 2, 3, 4]\n      };\n    }\n  };\n<\/script>\n')])])])],2),t._m(4),e("demo-block",[e("template",{slot:"source"},[e("mo-demo1")],1),e("template",{slot:"highlight"},[e("pre",{pre:!0},[e("code",{pre:!0,attrs:{class:"html"}},[t._v('<v-radio v-model="radio1" name="radio-d" disabled :options="options1"></v-radio>\n<div>\n  <v-radio v-model="radio2" name="radio-d1" :options="options2"></v-radio>\n</div>\n<script>\n  export default {\n    data() {\n      return {\n        radio1: 1,\n        options1: [1, 2, 3, 4],\n        radio2: 1,\n        options2: [\n          {\n            label: "选项1",\n            value: 1\n          },\n          {\n            label: "选项2",\n            value: 2\n          },\n          {\n            label: "选项3",\n            value: 3,\n            disabled: true\n          },\n          {\n            label: "选项4",\n            value: 4\n          }\n        ]\n      };\n    }\n  };\n<\/script>\n')])])])],2),t._m(5),t._m(6),t._m(7),t._m(8),t._m(9),t._m(10),t._m(11),e("side-link")],1)},[function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("h2",{attrs:{id:"dan-xuan-kuang"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#dan-xuan-kuang"}},[t._v("¶")]),t._v(" 单选框")])},function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("h3",{attrs:{id:"an-xu-yin-yong"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#an-xu-yin-yong"}},[t._v("¶")]),t._v(" 按需引用")])},function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("pre",[e("code",{staticClass:"language-js"},[t._v('import { Base, Radio } from "@reasy-team/reasy-ui";\n\nVue.use(Radio);\nVue.use(Base);\n')])])},function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("h3",{attrs:{id:"ji-chu-yong-fa"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ji-chu-yong-fa"}},[t._v("¶")]),t._v(" 基础用法")])},function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("h3",{attrs:{id:"jin-yong"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#jin-yong"}},[t._v("¶")]),t._v(" 禁用")])},function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("h3",{attrs:{id:"v-radio-attributes"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#v-radio-attributes"}},[t._v("¶")]),t._v(" v-radio Attributes")])},function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("table",[e("thead",[e("tr",[e("th",[t._v("参数")]),e("th",[t._v("说明")]),e("th",[t._v("类型")]),e("th",[t._v("可选值")]),e("th",[t._v("默认值")])])]),e("tbody",[e("tr",[e("td",[t._v("v-model")]),e("td",[t._v("绑定值")]),e("td",[t._v("string")]),e("td",[t._v("—")]),e("td",[t._v("—")])]),e("tr",[e("td",[t._v("no-id")]),e("td",[t._v("是否不需要id，为false则以"),e("code",[t._v("name")]),t._v("作为id，除特殊情况，表单中使用必须添加id")]),e("td",[t._v("boolean")]),e("td",[t._v("-")]),e("td",[t._v("false")])]),e("tr",[e("td",[t._v("name")]),e("td",[t._v("原生属性name，同时渲染为id属性，当"),e("code",[t._v("no-id")]),t._v("为false时"),e("strong",[t._v("必填")])]),e("td",[t._v("string")]),e("td",[t._v("-")]),e("td",[t._v("-")])]),e("tr",[e("td",[t._v("options")]),e("td",[t._v("下拉选项数组对象")]),e("td",[t._v("Array")]),e("td",[t._v("—")]),e("td",[t._v("[]")])]),e("tr",[e("td",[t._v("disabled")]),e("td",[t._v("是否禁用")]),e("td",[t._v("boolean")]),e("td"),e("td",[t._v("false")])]),e("tr",[e("td",[t._v("before-change")]),e("td",[t._v("切换选中前的钩子，返回 false 时，不会修改选中项")]),e("td",[t._v("function(value) {}")]),e("td",[t._v("—")]),e("td",[t._v("function() {return true}")])])])])},function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("p",[e("strong",[t._v("options 选项支持字符串、数字、boolean 或者对象，不为对象时显示的选项文字和值一致")])])},function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("h4",{attrs:{id:"options-shu-xing"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#options-shu-xing"}},[t._v("¶")]),t._v(" options 属性")])},function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("table",[e("thead",[e("tr",[e("th",[t._v("参数")]),e("th",[t._v("说明")]),e("th",[t._v("类型")]),e("th",[t._v("可选值")]),e("th",[t._v("默认值")])])]),e("tbody",[e("tr",[e("td",[t._v("label")]),e("td",[t._v("选项文字")]),e("td",[t._v("string")]),e("td",[t._v("—")]),e("td",[t._v("—")])]),e("tr",[e("td",[t._v("value")]),e("td",[t._v("选项值")]),e("td",[t._v("string / boolean / number")]),e("td",[t._v("—")]),e("td",[t._v("—")])]),e("tr",[e("td",[t._v("disabled")]),e("td",[t._v("选项是否禁用")]),e("td",[t._v("boolean")]),e("td",[t._v("—")]),e("td",[t._v("false")])])])])},function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("h3",{attrs:{id:"v-radio-events"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#v-radio-events"}},[t._v("¶")]),t._v(" v-radio Events")])},function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("table",[e("thead",[e("tr",[e("th",[t._v("事件名")]),e("th",[t._v("说明")]),e("th",[t._v("参数")])])]),e("tbody",[e("tr",[e("td",[t._v("change")]),e("td",[t._v("值改变时触发")]),e("td",[t._v("改变后的值")])]),e("tr",[e("td",[t._v("click")]),e("td",[t._v("点击选项时触发")]),e("td",[t._v("选项 value")])])])])}],!1,null,null,null);e.default=a.exports}}]);