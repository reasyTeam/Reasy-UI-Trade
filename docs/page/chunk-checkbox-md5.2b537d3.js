(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{250:function(e,t,c){"use strict";c.r(t);var n=c(41),n={name:"component-doc",components:{"mo-demo0":Object(n.a)({render:function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("div",[e("v-form",[e("v-form-item",{attrs:{label:"正常"}},[e("v-checkbox",{attrs:{name:"checkbox-false"},model:{value:t.unchecked,callback:function(e){t.unchecked=e},expression:"unchecked"}},[t._v("选项")])],1),t._v(" "),e("v-form-item",{attrs:{label:"选中"}},[e("v-checkbox",{attrs:{name:"checkbox-true"},model:{value:t.checked,callback:function(e){t.checked=e},expression:"checked"}},[t._v("选项")])],1),t._v(" "),e("v-form-item",{attrs:{label:"未选中禁用"}},[e("v-checkbox",{attrs:{disabled:"",name:"checkbox1"},model:{value:t.unchecked,callback:function(e){t.unchecked=e},expression:"unchecked"}},[t._v("选项")])],1),t._v(" "),e("v-form-item",{attrs:{label:"选中禁用"}},[e("v-checkbox",{attrs:{disabled:"",name:"checkbox2"},model:{value:t.checked,callback:function(e){t.checked=e},expression:"checked"}},[t._v("选项")])],1)],1)],1)},staticRenderFns:[]},{data:function(){return{unchecked:!1,checked:!0}}}),"mo-demo1":Object(n.a)({render:function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("div",[e("v-checkbox",{attrs:{name:"checkbox3",disabled:""},model:{value:t.checked,callback:function(e){t.checked=e},expression:"checked"}},[t._v("禁用")])],1)},staticRenderFns:[]},{data:function(){return{checked:!1}}}),"mo-demo2":Object(n.a)({render:function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("div",[e("v-checkbox",{attrs:{name:"checkbox-on","on-value":"on","off-value":"off"},model:{value:t.checked,callback:function(e){t.checked=e},expression:"checked"}},[t._v("自定义值")])],1)},staticRenderFns:[]},{data:function(){return{checked:"on"}}})}},c=c(1),c=Object(c.a)(n,function(){var e=this,t=e.$createElement,t=e._self._c||t;return t("section",{staticClass:"content reasy-doc"},[e._m(0),t("p",[e._v("一组备选项中进行多选")]),e._m(1),e._m(2),e._m(3),t("p",[e._v("单独使用可以切换两种状态")]),t("demo-block",[t("template",{slot:"source"},[t("mo-demo0")],1),t("template",{slot:"highlight"},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{class:"html"}},[e._v('\x3c!-- `checked` 为 true 或 false --\x3e\n<v-form>\n  <v-form-item label="正常">\n    <v-checkbox v-model="unchecked" name="checkbox-false">选项</v-checkbox>\n  </v-form-item>\n  <v-form-item label="选中">\n    <v-checkbox v-model="checked" name="checkbox-true">选项</v-checkbox>\n  </v-form-item>\n  <v-form-item label="未选中禁用">\n    <v-checkbox v-model="unchecked" disabled name="checkbox1">选项</v-checkbox>\n  </v-form-item>\n  <v-form-item label="选中禁用">\n    <v-checkbox v-model="checked" disabled name="checkbox2">选项</v-checkbox>\n  </v-form-item>\n</v-form>\n<script>\n  export default {\n    data() {\n      return {\n        unchecked: false,\n        checked: true\n      };\n    }\n  };\n<\/script>\n')])])])],2),e._m(4),t("demo-block",[t("template",{slot:"source"},[t("mo-demo1")],1),t("template",{slot:"highlight"},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{class:"html"}},[e._v('<v-checkbox v-model="checked" name="checkbox3" disabled>禁用</v-checkbox>\n<script>\n  export default {\n    data() {\n      return {\n        checked: false\n      };\n    }\n  };\n<\/script>\n')])])])],2),e._m(5),e._m(6),t("demo-block",[t("template",{slot:"source"},[t("mo-demo2")],1),t("template",{slot:"highlight"},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{class:"html"}},[e._v('<v-checkbox v-model="checked" name="checkbox-on" on-value="on" off-value="off"\n  >自定义值</v-checkbox\n>\n<script>\n  export default {\n    data() {\n      return {\n        checked: "on"\n      };\n    }\n  };\n<\/script>\n')])])])],2),e._m(7),e._m(8),e._m(9),e._m(10),t("side-link")],1)},[function(){var e=this,t=e.$createElement,t=e._self._c||t;return t("h2",{attrs:{id:"fu-xuan-kuang"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#fu-xuan-kuang"}},[e._v("¶")]),e._v(" 复选框")])},function(){var e=this,t=e.$createElement,t=e._self._c||t;return t("h3",{attrs:{id:"an-xu-yin-yong"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#an-xu-yin-yong"}},[e._v("¶")]),e._v(" 按需引用")])},function(){var e=this,t=e.$createElement,t=e._self._c||t;return t("pre",[t("code",{staticClass:"language-js"},[e._v('import { Base, Checkbox } from "@reasy-team/reasy-ui";\n\nVue.use(Checkbox);\nVue.use(Base);\n')])])},function(){var e=this,t=e.$createElement,t=e._self._c||t;return t("h3",{attrs:{id:"ji-chu-yong-fa"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ji-chu-yong-fa"}},[e._v("¶")]),e._v(" 基础用法")])},function(){var e=this,t=e.$createElement,t=e._self._c||t;return t("h3",{attrs:{id:"jin-yong"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#jin-yong"}},[e._v("¶")]),e._v(" 禁用")])},function(){var e=this,t=e.$createElement,t=e._self._c||t;return t("h3",{attrs:{id:"zi-ding-yi-xuan-zhong-zhi"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#zi-ding-yi-xuan-zhong-zhi"}},[e._v("¶")]),e._v(" 自定义选中值")])},function(){var e=this,t=e.$createElement,t=e._self._c||t;return t("p",[t("code",[e._v("on-value")]),e._v("为选中后的值 "),t("code",[e._v("off-value")]),e._v("为未选中时的值")])},function(){var e=this,t=e.$createElement,t=e._self._c||t;return t("h3",{attrs:{id:"v-checkbox-attributes"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#v-checkbox-attributes"}},[e._v("¶")]),e._v(" v-checkbox Attributes")])},function(){var e=this,t=e.$createElement,t=e._self._c||t;return t("table",[t("thead",[t("tr",[t("th",[e._v("参数")]),t("th",[e._v("说明")]),t("th",[e._v("类型")]),t("th",[e._v("可选值")]),t("th",[e._v("默认值")])])]),t("tbody",[t("tr",[t("td",[e._v("value / v-model")]),t("td",[e._v("绑定值")]),t("td",[e._v("string / number / boolean")]),t("td",[e._v("—")]),t("td",[e._v("—")])]),t("tr",[t("td",[e._v("no-id")]),t("td",[e._v("是否不需要id，为false则以"),t("code",[e._v("name")]),e._v("作为id，除特殊情况，表单中使用必须添加id")]),t("td",[e._v("boolean")]),t("td",[e._v("-")]),t("td",[e._v("false")])]),t("tr",[t("td",[e._v("name")]),t("td",[e._v("原生属性name，同时渲染为id属性，当"),t("code",[e._v("no-id")]),e._v("为false时"),t("strong",[e._v("必填")])]),t("td",[e._v("string")]),t("td",[e._v("-")]),t("td",[e._v("-")])]),t("tr",[t("td",[e._v("disabled")]),t("td",[e._v("是否禁用")]),t("td",[e._v("boolean")]),t("td",[e._v("—")]),t("td",[e._v("false")])]),t("tr",[t("td",[e._v("on-value")]),t("td",[e._v("选中时的值")]),t("td",[e._v("string / number / boolean")]),t("td",[e._v("—")]),t("td",[e._v("true")])]),t("tr",[t("td",[e._v("off-value")]),t("td",[e._v("未选中时的值")]),t("td",[e._v("string / number / boolean")]),t("td",[e._v("—")]),t("td",[e._v("false")])]),t("tr",[t("td",[e._v("before-change")]),t("td",[e._v("切换之前执行的函数，返回 false 时，不会执行数据更新")]),t("td",[e._v("function(value) {}")]),t("td",[e._v("—")]),t("td",[e._v("function() {return true}")])]),t("tr",[t("td",[e._v("tooltip")]),t("td",[e._v("文字提示，配置参考v-tooltip指令")]),t("td",[e._v("object")]),t("td",[e._v("—")]),t("td",[e._v("—")])])])])},function(){var e=this,t=e.$createElement,t=e._self._c||t;return t("h3",{attrs:{id:"v-checkbox-events"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#v-checkbox-events"}},[e._v("¶")]),e._v(" v-checkbox Events")])},function(){var e=this,t=e.$createElement,t=e._self._c||t;return t("table",[t("thead",[t("tr",[t("th",[e._v("事件名")]),t("th",[e._v("说明")]),t("th",[e._v("参数")])])]),t("tbody",[t("tr",[t("td",[e._v("change")]),t("td",[e._v("值改变时触发")]),t("td",[e._v("改变后的值")])]),t("tr",[t("td",[e._v("click")]),t("td",[e._v("点击选项时触发")]),t("td",[e._v("当前值")])])])])}],!1,null,null,null);t.default=c.exports}}]);