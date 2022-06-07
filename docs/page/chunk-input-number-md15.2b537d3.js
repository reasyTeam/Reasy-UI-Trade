(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{260:function(n,t,e){"use strict";e.r(t);var r=e(41),r={name:"component-doc",components:{"mo-demo0":Object(r.a)({render:function(){var t=this,n=t.$createElement,n=t._self._c||n;return n("div",[n("div",{staticClass:"input-group"},[n("v-input-number",{attrs:{size:"L",name:"input-num-l"},model:{value:t.num,callback:function(n){t.num=n},expression:"num"}})],1),t._v(" "),n("div",{staticClass:"input-group"},[n("v-input-number",{attrs:{size:"M",name:"input-num-m"},model:{value:t.num,callback:function(n){t.num=n},expression:"num"}})],1),t._v(" "),n("div",{staticClass:"input-group"},[n("v-input-number",{attrs:{size:"S",name:"input-num-s"},model:{value:t.num,callback:function(n){t.num=n},expression:"num"}})],1),t._v(" "),n("div",{staticClass:"input-group"},[n("v-input-number",{attrs:{size:"L",name:"input-num-r1","controls-position":"right"},model:{value:t.num,callback:function(n){t.num=n},expression:"num"}})],1),t._v(" "),n("div",{staticClass:"input-group"},[n("v-input-number",{attrs:{size:"M",name:"input-num-m-r","controls-position":"right"},model:{value:t.num,callback:function(n){t.num=n},expression:"num"}})],1),t._v(" "),n("div",{staticClass:"input-group"},[n("v-input-number",{attrs:{size:"S",name:"input-num-s-r","controls-position":"right"},model:{value:t.num,callback:function(n){t.num=n},expression:"num"}})],1)])},staticRenderFns:[]},{data:function(){return{num:5}}}),"mo-demo1":Object(r.a)({render:function(){var t=this,n=t.$createElement,n=t._self._c||n;return n("div",[n("v-input-number",{attrs:{disabled:"",name:"input-num-d"},model:{value:t.num,callback:function(n){t.num=n},expression:"num"}}),t._v(" "),n("v-input-number",{attrs:{min:0,name:"input-num-r-d",max:10,disabled:"","controls-position":"right"},model:{value:t.num,callback:function(n){t.num=n},expression:"num"}})],1)},staticRenderFns:[]},{data:function(){return{num:5}}}),"mo-demo2":Object(r.a)({render:function(){var t=this,n=t.$createElement,n=t._self._c||n;return n("div",[n("v-input-number",{attrs:{name:"input-range",min:1,max:10},model:{value:t.num,callback:function(n){t.num=n},expression:"num"}})],1)},staticRenderFns:[]},{data:function(){return{num:5}}}),"mo-demo3":Object(r.a)({render:function(){var t=this,n=t.$createElement,n=t._self._c||n;return n("div",[n("v-input-number",{attrs:{name:"input-no-c","is-controls":!1},model:{value:t.num,callback:function(n){t.num=n},expression:"num"}})],1)},staticRenderFns:[]},{data:function(){return{num:0}}}),"mo-demo4":Object(r.a)({render:function(){var t=this,n=t.$createElement,n=t._self._c||n;return n("div",[n("v-input-number",{attrs:{min:0,name:"input-num-r",max:10,"controls-position":"right"},model:{value:t.num,callback:function(n){t.num=n},expression:"num"}})],1)},staticRenderFns:[]},{data:function(){return{num:0}}}),"mo-demo5":Object(r.a)({render:function(){var t=this,n=t.$createElement,n=t._self._c||n;return n("div",[n("v-input-number",{attrs:{name:"input-num-step",min:0,max:10,step:2},model:{value:t.num,callback:function(n){t.num=n},expression:"num"}})],1)},staticRenderFns:[]},{data:function(){return{num:0}}}),"mo-demo6":Object(r.a)({render:function(){var t=this,n=t.$createElement,n=t._self._c||n;return n("div",[n("v-input-number",{attrs:{min:0,name:"input-num-pre",max:10,precision:2},model:{value:t.num,callback:function(n){t.num=n},expression:"num"}})],1)},staticRenderFns:[]},{data:function(){return{num:0}}})}},e=e(1),e=Object(e.a)(r,function(){var n=this,t=n.$createElement,t=n._self._c||t;return t("section",{staticClass:"content reasy-doc"},[n._m(0),t("p",[n._v("通过鼠标或键盘，输入范围内的数值。")]),n._m(1),n._m(2),n._m(3),n._m(4),t("demo-block",[t("template",{slot:"source"},[t("mo-demo0")],1),t("template",{slot:"highlight"},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{class:"html"}},[n._v('<div class="input-group">\n  <v-input-number size="L" name="input-num-l" v-model="num"></v-input-number>\n</div>\n<div class="input-group">\n  <v-input-number size="M" name="input-num-m" v-model="num"></v-input-number>\n</div>\n<div class="input-group">\n  <v-input-number size="S" name="input-num-s" v-model="num"></v-input-number>\n</div>\n<div class="input-group">\n  <v-input-number size="L" name="input-num-r1"  v-model="num" controls-position="right"></v-input-number>\n</div>\n<div class="input-group">\n  <v-input-number size="M" name="input-num-m-r" v-model="num" controls-position="right"></v-input-number>\n</div>\n<div class="input-group">\n  <v-input-number size="S" name="input-num-s-r" v-model="num" controls-position="right"></v-input-number>\n</div>\n<script>\n  export default {\n    data() {\n      return {\n        num: 5\n      };\n    }\n  };\n<\/script>\n')])])])],2),n._m(5),n._m(6),t("demo-block",[t("template",{slot:"source"},[t("mo-demo1")],1),t("template",{slot:"highlight"},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{class:"html"}},[n._v('<v-input-number disabled name="input-num-d" v-model="num"></v-input-number>\n\n<v-input-number\n  v-model="num"\n  :min="0"\n  name="input-num-r-d"\n  :max="10"\n  disabled\n  controls-position="right"\n></v-input-number>\n\n<script>\n  export default {\n    data() {\n      return {\n        num: 5\n      };\n    }\n  };\n<\/script>\n')])])])],2),n._m(7),n._m(8),t("demo-block",[t("template",{slot:"source"},[t("mo-demo2")],1),t("template",{slot:"highlight"},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{class:"html"}},[n._v('<v-input-number v-model="num" name="input-range" :min="1" :max="10"></v-input-number>\n<script>\n  export default {\n    data() {\n      return {\n        num: 5\n      };\n    }\n  };\n<\/script>\n')])])])],2),n._m(9),n._m(10),t("p",[n._v("不显示控制器按钮")]),t("demo-block",[t("template",{slot:"source"},[t("mo-demo3")],1),t("template",{slot:"highlight"},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{class:"html"}},[n._v('<v-input-number v-model="num" name="input-no-c" :is-controls="false"></v-input-number>\n<script>\n  export default {\n    data() {\n      return {\n        num: 0\n      };\n    }\n  };\n<\/script>\n')])])])],2),n._m(11),n._m(12),t("demo-block",[t("template",{slot:"source"},[t("mo-demo4")],1),t("template",{slot:"highlight"},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{class:"html"}},[n._v('<v-input-number\n  v-model="num"\n  :min="0" \n  name="input-num-r"\n  :max="10"\n  controls-position="right"\n></v-input-number>\n<script>\n  export default {\n    data() {\n      return {\n        num: 0\n      };\n    }\n  };\n<\/script>\n')])])])],2),n._m(13),n._m(14),t("demo-block",[t("template",{slot:"source"},[t("mo-demo5")],1),t("template",{slot:"highlight"},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{class:"html"}},[n._v('<v-input-number v-model="num" name="input-num-step" :min="0" :max="10" :step="2"></v-input-number>\n<script>\n  export default {\n    data() {\n      return {\n        num: 0\n      };\n    }\n  };\n<\/script>\n')])])])],2),n._m(15),n._m(16),t("demo-block",[t("template",{slot:"source"},[t("mo-demo6")],1),t("template",{slot:"highlight"},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{class:"html"}},[n._v('<v-input-number\n  v-model="num"\n  :min="0"\n  name="input-num-pre"\n  :max="10"\n  :precision="2"\n></v-input-number>\n<script>\n  export default {\n    data() {\n      return {\n        num: 0\n      };\n    }\n  };\n<\/script>\n')])])])],2),n._m(17),n._m(18),n._m(19),n._m(20),t("side-link")],1)},[function(){var n=this,t=n.$createElement,t=n._self._c||t;return t("h2",{attrs:{id:"ji-shu-qi"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ji-shu-qi"}},[n._v("¶")]),n._v(" 计数器")])},function(){var n=this,t=n.$createElement,t=n._self._c||t;return t("h3",{attrs:{id:"an-xu-yin-yong"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#an-xu-yin-yong"}},[n._v("¶")]),n._v(" 按需引用")])},function(){var n=this,t=n.$createElement,t=n._self._c||t;return t("pre",[t("code",{staticClass:"language-js"},[n._v('// 依赖于v-button\nimport { Base, Input, Button } from "@reasy-team/reasy-ui";\n\nVue.use(Input);\nVue.use(Button);\nVue.use(Base);\n')])])},function(){var n=this,t=n.$createElement,t=n._self._c||t;return t("h3",{attrs:{id:"shu-ru-kuang-da-xiao"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#shu-ru-kuang-da-xiao"}},[n._v("¶")]),n._v(" 输入框大小")])},function(){var n=this,t=n.$createElement,t=n._self._c||t;return t("p",[t("code",[n._v("size")]),n._v("配置输入框大小，大中小分别为 "),t("code",[n._v("L")]),n._v("，"),t("code",[n._v("M")]),n._v("，"),t("code",[n._v("S")]),n._v("，默认为"),t("code",[n._v("M")])])},function(){var n=this,t=n.$createElement,t=n._self._c||t;return t("h3",{attrs:{id:"jin-yong"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#jin-yong"}},[n._v("¶")]),n._v(" 禁用")])},function(){var n=this,t=n.$createElement,t=n._self._c||t;return t("p",[t("code",[n._v("disabled")]),n._v("配置是否禁用")])},function(){var n=this,t=n.$createElement,t=n._self._c||t;return t("h3",{attrs:{id:"ji-shu-qi-fan-wei"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ji-shu-qi-fan-wei"}},[n._v("¶")]),n._v(" 计数器范围")])},function(){var n=this,t=n.$createElement,t=n._self._c||t;return t("p",[t("code",[n._v("min")]),n._v("和"),t("code",[n._v("max")]),n._v("控制计数器可配置的范围")])},function(){var n=this,t=n.$createElement,t=n._self._c||t;return t("h3",{attrs:{id:"kong-zhi-qi-an-niu"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#kong-zhi-qi-an-niu"}},[n._v("¶")]),n._v(" 控制器按钮")])},function(){var n=this,t=n.$createElement,t=n._self._c||t;return t("p",[t("code",[n._v("is-controls")]),n._v("控制计数器按钮，默认为"),t("code",[n._v("true")])])},function(){var n=this,t=n.$createElement,t=n._self._c||t;return t("h3",{attrs:{id:"kong-zhi-qi-wei-zhi"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#kong-zhi-qi-wei-zhi"}},[n._v("¶")]),n._v(" 控制器位置")])},function(){var n=this,t=n.$createElement,t=n._self._c||t;return t("p",[t("code",[n._v("controls-position")]),n._v("控制器位置，默认为空值，控制按钮在输入框两侧，可选值"),t("code",[n._v("right")]),n._v("，按钮位置在右侧")])},function(){var n=this,t=n.$createElement,t=n._self._c||t;return t("h3",{attrs:{id:"bu-chang"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#bu-chang"}},[n._v("¶")]),n._v(" 步长")])},function(){var n=this,t=n.$createElement,t=n._self._c||t;return t("p",[t("code",[n._v("step")]),n._v("配置计数器的步长，默认为"),t("code",[n._v("1")])])},function(){var n=this.$createElement,n=this._self._c||n;return n("h3",{attrs:{id:"jing-du"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#jing-du"}},[this._v("¶")]),this._v(" 精度")])},function(){var n=this.$createElement,n=this._self._c||n;return n("p",[n("code",[this._v("precision")]),this._v("配置计数器的精度")])},function(){var n=this.$createElement,n=this._self._c||n;return n("h3",{attrs:{id:"v-input-number-attributes"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#v-input-number-attributes"}},[this._v("¶")]),this._v(" v-input-number Attributes")])},function(){var n=this,t=n.$createElement,t=n._self._c||t;return t("table",[t("thead",[t("tr",[t("th",[n._v("参数")]),t("th",[n._v("说明")]),t("th",[n._v("类型")]),t("th",[n._v("可选值")]),t("th",[n._v("默认值")])])]),t("tbody",[t("tr",[t("td",[n._v("v-model")]),t("td",[n._v("绑定值")]),t("td",[n._v("number")]),t("td",[n._v("—")]),t("td",[n._v("—")])]),t("tr",[t("td",[n._v("no-id")]),t("td",[n._v("是否不需要id，为false则以"),t("code",[n._v("name")]),n._v("作为id，除特殊情况，表单中使用必须添加id")]),t("td",[n._v("boolean")]),t("td",[n._v("-")]),t("td",[n._v("false")])]),t("tr",[t("td",[n._v("name")]),t("td",[n._v("原生属性name，同时渲染为id属性，当"),t("code",[n._v("no-id")]),n._v("为false时"),t("strong",[n._v("必填")])]),t("td",[n._v("string")]),t("td",[n._v("-")]),t("td",[n._v("-")])]),t("tr",[t("td",[n._v("disabled")]),t("td",[n._v("是否禁用")]),t("td",[n._v("boolean")]),t("td",[n._v("—")]),t("td",[n._v("false")])]),t("tr",[t("td",[n._v("width")]),t("td",[n._v("输入框长度，支持数字和字符串，如 70 或 70px 或 70%")]),t("td",[n._v("string / number")]),t("td",[n._v("—")]),t("td",[n._v("—")])]),t("tr",[t("td",[n._v("min")]),t("td",[n._v("输入框最小值")]),t("td",[n._v("number")]),t("td",[n._v("—")]),t("td",[n._v("-Infinity")])]),t("tr",[t("td",[n._v("max")]),t("td",[n._v("输入框最大值")]),t("td",[n._v("number")]),t("td",[n._v("—")]),t("td",[n._v("Infinity")])]),t("tr",[t("td",[n._v("is-controls")]),t("td",[n._v("输入框右侧是否有控制器")]),t("td",[n._v("boolean")]),t("td",[n._v("—")]),t("td",[n._v("true")])]),t("tr",[t("td",[n._v("controls-position")]),t("td",[n._v("控制器按钮位置")]),t("td",[n._v("string")]),t("td",[n._v("right")]),t("td",[n._v("—")])]),t("tr",[t("td",[n._v("size")]),t("td",[n._v("输入框尺寸")]),t("td",[n._v("string")]),t("td",[n._v("S / M / L")]),t("td",[n._v("M")])]),t("tr",[t("td",[n._v("step")]),t("td",[n._v("步长")]),t("td",[n._v("number")]),t("td",[n._v("—")]),t("td",[n._v("1")])]),t("tr",[t("td",[n._v("precision")]),t("td",[n._v("数值精度，小于步长精度时计算会用步长的精度")]),t("td",[n._v("number")]),t("td",[n._v("0 或正整数")]),t("td",[n._v("—")])])])])},function(){var n=this.$createElement,n=this._self._c||n;return n("h2",{attrs:{id:"v-input-number-events"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#v-input-number-events"}},[this._v("¶")]),this._v(" v-input-number Events")])},function(){var n=this,t=n.$createElement,t=n._self._c||t;return t("table",[t("thead",[t("tr",[t("th",[n._v("事件名")]),t("th",[n._v("说明")]),t("th",[n._v("参数")])])]),t("tbody",[t("tr",[t("td",[n._v("change")]),t("td",[n._v("值改变时执行")]),t("td",[n._v("改变后的值")])])])])}],!1,null,null,null);t.default=e.exports}}]);