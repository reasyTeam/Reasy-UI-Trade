(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{351:function(e,t,n){"use strict";n.r(t);var r=n(50),r={name:"component-doc",components:{"mo-demo0":Object(r.a)({render:function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("div",[e("v-slider",{attrs:{name:"slider"},model:{value:t.slider,callback:function(e){t.slider=e},expression:"slider"}})],1)},staticRenderFns:[]},{data:function(){return{slider:12}}}),"mo-demo1":Object(r.a)({render:function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("div",[e("v-slider",{attrs:{name:"slider-range",min:10,max:15},model:{value:t.slider,callback:function(e){t.slider=e},expression:"slider"}})],1)},staticRenderFns:[]},{data:function(){return{slider:12}}}),"mo-demo2":Object(r.a)({render:function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("div",[e("v-slider",{attrs:{name:"slider-show","show-range":"",min:10,max:15},model:{value:t.slider,callback:function(e){t.slider=e},expression:"slider"}})],1)},staticRenderFns:[]},{data:function(){return{slider:12}}}),"mo-demo3":Object(r.a)({render:function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("div",[e("v-slider",{attrs:{"show-input":"",name:"slider-input",min:10,max:15},model:{value:t.slider,callback:function(e){t.slider=e},expression:"slider"}})],1)},staticRenderFns:[]},{data:function(){return{slider:12}}}),"mo-demo4":Object(r.a)({render:function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("div",[e("v-slider",{attrs:{name:"slider-ctr","show-input":"","show-input-controls":"",min:10,max:15},model:{value:t.slider,callback:function(e){t.slider=e},expression:"slider"}})],1)},staticRenderFns:[]},{data:function(){return{slider:12}}}),"mo-demo5":Object(r.a)({render:function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("div",[e("v-slider",{attrs:{step:.1,precision:2,"show-input":"","show-input-controls":"",min:0,max:1,name:"slider-step"},model:{value:t.slider,callback:function(e){t.slider=e},expression:"slider"}})],1)},staticRenderFns:[]},{data:function(){return{slider:.52}}}),"mo-demo6":Object(r.a)({render:function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("div",[e("v-slider",{attrs:{"show-tooltip":"",name:"slider-tip"},model:{value:t.slider,callback:function(e){t.slider=e},expression:"slider"}})],1)},staticRenderFns:[]},{data:function(){return{slider:12}}}),"mo-demo7":Object(r.a)({render:function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("div",[e("v-slider",{attrs:{"show-tooltip":"",name:"slider-f",format:t.format},model:{value:t.slider,callback:function(e){t.slider=e},expression:"slider"}})],1)},staticRenderFns:[]},{data:function(){return{slider:12}},methods:{format:function(e){return e+"KB/s"}}}),"mo-demo8":Object(r.a)({render:function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("div",[e("v-slider",{attrs:{step:.1,disabled:"",precision:2,"show-input":"","show-input-controls":"",min:0,max:1,name:"slider-d"},model:{value:t.slider,callback:function(e){t.slider=e},expression:"slider"}})],1)},staticRenderFns:[]},{data:function(){return{slider:.52}}})}},n=n(1),n=Object(n.a)(r,function(){var e=this,t=e.$createElement,t=e._self._c||t;return t("section",{staticClass:"content reasy-doc"},[t("h1",[e._v("滑块")]),t("p",[e._v("滑动型输入器，在范围内滑动选择数据。")]),e._m(0),e._m(1),e._m(2),t("demo-block",[t("template",{slot:"source"},[t("mo-demo0")],1),t("template",{slot:"highlight"},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{class:"html"}},[e._v('<v-slider name="slider" v-model="slider"></v-slider>\n<script>\n  export default {\n    data() {\n      return {\n        slider: 12\n      };\n    }\n  };\n<\/script>\n')])])])],2),e._m(3),t("demo-block",[t("template",{slot:"source"},[t("mo-demo1")],1),t("template",{slot:"highlight"},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{class:"html"}},[e._v('<v-slider name="slider-range" :min="10" :max="15" v-model="slider"></v-slider>\n<script>\n  export default {\n    data() {\n      return {\n        slider: 12\n      };\n    }\n  };\n<\/script>\n')])])])],2),t("p",[e._v("显示范围")]),t("demo-block",[t("template",{slot:"source"},[t("mo-demo2")],1),t("template",{slot:"highlight"},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{class:"html"}},[e._v('<v-slider name="slider-show" show-range :min="10" :max="15" v-model="slider"></v-slider>\n<script>\n  export default {\n    data() {\n      return {\n        slider: 12\n      };\n    }\n  };\n<\/script>\n')])])])],2),e._m(4),t("demo-block",[t("template",{slot:"source"},[t("mo-demo3")],1),t("template",{slot:"highlight"},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{class:"html"}},[e._v('<v-slider show-input name="slider-input" :min="10" :max="15" v-model="slider"></v-slider>\n<script>\n  export default {\n    data() {\n      return {\n        slider: 12\n      };\n    }\n  };\n<\/script>\n')])])])],2),t("p",[e._v("显示输入框控制器")]),t("demo-block",[t("template",{slot:"source"},[t("mo-demo4")],1),t("template",{slot:"highlight"},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{class:"html"}},[e._v('<v-slider\n  name="slider-ctr"\n  show-input\n  show-input-controls\n  :min="10"\n  :max="15"\n  v-model="slider"\n></v-slider>\n<script>\n  export default {\n    data() {\n      return {\n        slider: 12\n      };\n    }\n  };\n<\/script>\n')])])])],2),e._m(5),t("demo-block",[t("template",{slot:"source"},[t("mo-demo5")],1),t("template",{slot:"highlight"},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{class:"html"}},[e._v('<v-slider\n  :step="0.1"\n  :precision="2"\n  show-input\n  show-input-controls\n  :min="0"\n  :max="1"\n  v-model="slider"\n  name="slider-step"\n></v-slider>\n<script>\n  export default {\n    data() {\n      return {\n        slider: 0.52\n      };\n    }\n  };\n<\/script>\n')])])])],2),e._m(6),t("demo-block",[t("template",{slot:"source"},[t("mo-demo6")],1),t("template",{slot:"highlight"},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{class:"html"}},[e._v('<v-slider show-tooltip name="slider-tip" v-model="slider"></v-slider>\n<script>\n  export default {\n    data() {\n      return {\n        slider: 12\n      };\n    }\n  };\n<\/script>\n')])])])],2),t("p",[e._v("格式化 toolTip 显示")]),t("demo-block",[t("template",{slot:"source"},[t("mo-demo7")],1),t("template",{slot:"highlight"},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{class:"html"}},[e._v('<v-slider show-tooltip name="slider-f" :format="format" v-model="slider"></v-slider>\n<script>\n  export default {\n    data() {\n      return {\n        slider: 12\n      };\n    },\n    methods: {\n      format(value) {\n        return value + "KB/s";\n      }\n    }\n  };\n<\/script>\n')])])])],2),e._m(7),t("demo-block",[t("template",{slot:"source"},[t("mo-demo8")],1),t("template",{slot:"highlight"},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{class:"html"}},[e._v('<v-slider\n  :step="0.1"\n  disabled\n  :precision="2"\n  show-input\n  show-input-controls\n  :min="0"\n  :max="1"\n  name="slider-d"\n  v-model="slider"\n></v-slider>\n<script>\n  export default {\n    data() {\n      return {\n        slider: 0.52\n      };\n    }\n  };\n<\/script>\n')])])])],2),e._m(8),e._m(9),e._m(10),e._m(11),t("side-link")],1)},[function(){var e=this,t=e.$createElement,t=e._self._c||t;return t("h2",{attrs:{id:"an-xu-yin-yong"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#an-xu-yin-yong"}},[e._v("¶")]),e._v(" 按需引用")])},function(){var e=this,t=e.$createElement,t=e._self._c||t;return t("pre",[t("code",{staticClass:"language-js"},[e._v('// 当显示输入时需要同时引入Input和Button组件\nimport { Base, Input, Button, Slider } from "@reasy-team/reasy-ui";\n\nVue.use(Slider);\nVue.use(Button);\nVue.use(Input);\nVue.use(Base);\n')])])},function(){var e=this,t=e.$createElement,t=e._self._c||t;return t("h2",{attrs:{id:"ji-ben-yong-fa"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ji-ben-yong-fa"}},[e._v("¶")]),e._v(" 基本用法")])},function(){var e=this,t=e.$createElement,t=e._self._c||t;return t("h2",{attrs:{id:"zi-ding-yi-fan-wei"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#zi-ding-yi-fan-wei"}},[e._v("¶")]),e._v(" 自定义范围")])},function(){var e=this,t=e.$createElement,t=e._self._c||t;return t("h2",{attrs:{id:"xian-shi-shu-ru-kuang"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#xian-shi-shu-ru-kuang"}},[e._v("¶")]),e._v(" 显示输入框")])},function(){var e=this,t=e.$createElement,t=e._self._c||t;return t("h2",{attrs:{id:"jing-du-he-bu-chang"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#jing-du-he-bu-chang"}},[e._v("¶")]),e._v(" 精度和步长")])},function(){var e=this,t=e.$createElement,t=e._self._c||t;return t("h2",{attrs:{id:"tooltip"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#tooltip"}},[e._v("¶")]),e._v(" Tooltip")])},function(){var e=this,t=e.$createElement,t=e._self._c||t;return t("h2",{attrs:{id:"jin-yong"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#jin-yong"}},[e._v("¶")]),e._v(" 禁用")])},function(){var e=this,t=e.$createElement,t=e._self._c||t;return t("h2",{attrs:{id:"props"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#props"}},[e._v("¶")]),e._v(" Props")])},function(){var e=this,t=e.$createElement,t=e._self._c||t;return t("table",[t("thead",[t("tr",[t("th",[e._v("参数")]),t("th",[e._v("说明")]),t("th",[e._v("类型")]),t("th",[e._v("可选值")]),t("th",[e._v("默认值")])])]),t("tbody",[t("tr",[t("td",[e._v("v-model")]),t("td",[e._v("绑定值")]),t("td",[e._v("number")]),t("td",[e._v("—")]),t("td",[e._v("—")])]),t("tr",[t("td",[e._v("no-id")]),t("td",[e._v("是否不需要id，为false则以"),t("code",[e._v("name")]),e._v("作为id，除特殊情况，表单中使用必须添加id")]),t("td",[e._v("boolean")]),t("td",[e._v("-")]),t("td",[e._v("false")])]),t("tr",[t("td",[e._v("name")]),t("td",[e._v("原生属性name，同时渲染为id属性，当"),t("code",[e._v("no-id")]),e._v("为false时"),t("strong",[e._v("必填")])]),t("td",[e._v("string")]),t("td",[e._v("-")]),t("td",[e._v("-")])]),t("tr",[t("td",[e._v("min")]),t("td",[e._v("最小值")]),t("td",[e._v("number")]),t("td",[e._v("—")]),t("td",[e._v("0")])]),t("tr",[t("td",[e._v("max")]),t("td",[e._v("最大值")]),t("td",[e._v("number")]),t("td",[e._v("—")]),t("td",[e._v("100")])]),t("tr",[t("td",[e._v("disabled")]),t("td",[e._v("是否禁用")]),t("td",[e._v("boolean")]),t("td",[e._v("—")]),t("td",[e._v("false")])]),t("tr",[t("td",[e._v("step")]),t("td",[e._v("步长")]),t("td",[e._v("number")]),t("td",[e._v("—")]),t("td",[e._v("1")])]),t("tr",[t("td",[e._v("size")]),t("td",[e._v("输入框大小")]),t("td",[e._v("string")]),t("td",[e._v("S / M / L")]),t("td",[e._v("M")])]),t("tr",[t("td",[e._v("precision")]),t("td",[e._v("精度，小于步长精度时取步长精度")]),t("td",[e._v("Number")]),t("td"),t("td")]),t("tr",[t("td",[e._v("show-range")]),t("td",[e._v("是否显示范围提示文字")]),t("td",[e._v("boolean")]),t("td"),t("td",[e._v("false")])]),t("tr",[t("td",[e._v("show-input")]),t("td",[e._v("是否显示输入框")]),t("td",[e._v("boolean")]),t("td",[e._v("—")]),t("td",[e._v("false")])]),t("tr",[t("td",[e._v("show-input-controls")]),t("td",[e._v("输入框是否显示加减")]),t("td",[e._v("boolean")]),t("td"),t("td",[e._v("false")])]),t("tr",[t("td",[e._v("show-tooltip")]),t("td",[e._v("是否显示 tooltip")]),t("td",[e._v("boolean")]),t("td",[e._v("—")]),t("td",[e._v("true")])]),t("tr",[t("td",[e._v("format")]),t("td",[e._v("tooltip 显示格式化, function(value){return value}")]),t("td",[e._v("Function")]),t("td",[e._v("—")]),t("td",[e._v("—")])])])])},function(){var e=this,t=e.$createElement,t=e._self._c||t;return t("h2",{attrs:{id:"events"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#events"}},[e._v("¶")]),e._v(" @Events")])},function(){var e=this,t=e.$createElement,t=e._self._c||t;return t("table",[t("thead",[t("tr",[t("th",[e._v("事件名")]),t("th",[e._v("说明")]),t("th",[e._v("参数")])])]),t("tbody",[t("tr",[t("td",[e._v("change")]),t("td",[e._v("值改变时执行")]),t("td",[e._v("改变后的值")])])])])}],!1,null,null,null);t.default=n.exports}}]);