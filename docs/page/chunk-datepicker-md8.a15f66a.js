(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{325:function(e,t,a){"use strict";a.r(t);var r=a(50),r={name:"component-doc",components:{"mo-demo0":Object(r.a)({render:function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("div",[e("v-datepicker",{attrs:{name:"datepicker6"},model:{value:t.date,callback:function(e){t.date=e},expression:"date"}})],1)},staticRenderFns:[]},{data:function(){return{date:"2021-01-12"}}}),"mo-demo1":Object(r.a)({render:function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("div",[e("v-datepicker",{attrs:{name:"datepicker1",disabled:""},model:{value:t.date,callback:function(e){t.date=e},expression:"date"}})],1)},staticRenderFns:[]},{data:function(){return{date:"2021-01-12"}}}),"mo-demo2":Object(r.a)({render:function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("div",[e("v-datepicker",{attrs:{name:"datepicker2",type:"datetime"},model:{value:t.date,callback:function(e){t.date=e},expression:"date"}})],1)},staticRenderFns:[]},{data:function(){return{date:"2021-01-12 12:11:23"}}}),"mo-demo3":Object(r.a)({render:function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("div",[e("v-datepicker",{attrs:{name:"datepicker3","is-range":""},model:{value:t.date,callback:function(e){t.date=e},expression:"date"}})],1)},staticRenderFns:[]},{data:function(){return{date:["2021-01-12","2021-02-11"]}}}),"mo-demo4":Object(r.a)({render:function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("div",[e("v-datepicker",{attrs:{width:"400px","is-range":"",name:"datepicker4",type:"datetime"},model:{value:t.date,callback:function(e){t.date=e},expression:"date"}})],1)},staticRenderFns:[]},{data:function(){return{date:["2021-01-12 11:00:22","2021-02-11 17:03:12"]}}}),"mo-demo5":Object(r.a)({render:function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("div",[e("v-datepicker",{attrs:{format:"YYYY/MM/DD",name:"datepicker5",max:"2037/12/31",min:"2000/01/01"},model:{value:t.date,callback:function(e){t.date=e},expression:"date"}})],1)},staticRenderFns:[]},{data:function(){return{date:"2021/01/12"}}})}},a=a(1),a=Object(a.a)(r,function(){var e=this,t=e.$createElement,t=e._self._c||t;return t("section",{staticClass:"content reasy-doc"},[t("h1",[e._v("日期选择器")]),t("p",[e._v("输入或选择日期的控件，支持年、月、日。")]),e._m(0),e._m(1),e._m(2),e._m(3),t("demo-block",[t("template",{slot:"source"},[t("mo-demo0")],1),t("template",{slot:"highlight"},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{class:"html"}},[e._v('<v-datepicker name="datepicker6" v-model="date"></v-datepicker>\n<script>\n  export default {\n    data() {\n      return {\n        date: "2021-01-12"\n      };\n    }\n  };\n<\/script>\n')])])])],2),e._m(4),t("demo-block",[t("template",{slot:"source"},[t("mo-demo1")],1),t("template",{slot:"highlight"},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{class:"html"}},[e._v('<v-datepicker name="datepicker1" disabled v-model="date"></v-datepicker>\n<script>\n  export default {\n    data() {\n      return {\n        date: "2021-01-12"\n      };\n    }\n  };\n<\/script>\n')])])])],2),e._m(5),e._m(6),t("demo-block",[t("template",{slot:"source"},[t("mo-demo2")],1),t("template",{slot:"highlight"},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{class:"html"}},[e._v('<v-datepicker name="datepicker2" type="datetime" v-model="date"></v-datepicker>\n<script>\n  export default {\n    data() {\n      return {\n        date: "2021-01-12 12:11:23"\n      };\n    }\n  };\n<\/script>\n')])])])],2),e._m(7),e._m(8),e._m(9),t("demo-block",[t("template",{slot:"source"},[t("mo-demo3")],1),t("template",{slot:"highlight"},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{class:"html"}},[e._v('<v-datepicker name="datepicker3" is-range v-model="date"></v-datepicker>\n<script>\n  export default {\n    data() {\n      return {\n        date: ["2021-01-12", "2021-02-11"]\n      };\n    }\n  };\n<\/script>\n')])])])],2),t("p",[e._v("时间范围选择")]),t("demo-block",[t("template",{slot:"source"},[t("mo-demo4")],1),t("template",{slot:"highlight"},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{class:"html"}},[e._v('<v-datepicker\n  width="400px"\n  is-range \n  name="datepicker4"\n  type="datetime"\n  v-model="date"\n></v-datepicker>\n<script>\n  export default {\n    data() {\n      return {\n        date: ["2021-01-12 11:00:22", "2021-02-11 17:03:12"]\n      };\n    }\n  };\n<\/script>\n')])])])],2),e._m(10),e._m(11),e._m(12),t("demo-block",[t("template",{slot:"source"},[t("mo-demo5")],1),t("template",{slot:"highlight"},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{class:"html"}},[e._v('<v-datepicker\n  format="YYYY/MM/DD"\n  v-model="date"  \n  name="datepicker5"\n  max="2037/12/31"\n  min="2000/01/01"\n></v-datepicker>\n<script>\n  export default {\n    data() {\n      return {\n        date: "2021/01/12"\n      };\n    }\n  };\n<\/script>\n')])])])],2),e._m(13),e._m(14),e._m(15),e._m(16),t("side-link")],1)},[function(){var e=this,t=e.$createElement,t=e._self._c||t;return t("h2",{attrs:{id:"an-xu-yin-yong"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#an-xu-yin-yong"}},[e._v("¶")]),e._v(" 按需引用")])},function(){var e=this,t=e.$createElement,t=e._self._c||t;return t("p",[e._v("该组件依赖于"),t("code",[e._v("v-scroll")]),e._v("组件。")])},function(){var e=this,t=e.$createElement,t=e._self._c||t;return t("pre",[t("code",{staticClass:"language-js"},[e._v('import { Base, Scroll, Datepicker, Timepicker, Input, Button, Layout } from "@reasy-team/reasy-ui";\n\nVue.use(Scroll);\nVue.use(Datepicker);\nVue.use(Timepicker);\nVue.use(Input);\nVue.use(Layout);\nVue.use(Button);\nVue.use(Base);\n')])])},function(){var e=this,t=e.$createElement,t=e._self._c||t;return t("h2",{attrs:{id:"ji-ben-yong-fa"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ji-ben-yong-fa"}},[e._v("¶")]),e._v(" 基本用法")])},function(){var e=this,t=e.$createElement,t=e._self._c||t;return t("h2",{attrs:{id:"jin-yong"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#jin-yong"}},[e._v("¶")]),e._v(" 禁用")])},function(){var e=this,t=e.$createElement,t=e._self._c||t;return t("h2",{attrs:{id:"zhi-chi-shi-jian"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#zhi-chi-shi-jian"}},[e._v("¶")]),e._v(" 支持时间")])},function(){var e=this,t=e.$createElement,t=e._self._c||t;return t("p",[t("code",[e._v("type")]),e._v("支持"),t("code",[e._v("date")]),e._v("日期选择和"),t("code",[e._v("datetime")]),e._v("时间日期选择，默认为"),t("code",[e._v("date")])])},function(){var e=this,t=e.$createElement,t=e._self._c||t;return t("h2",{attrs:{id:"zhi-chi-fan-wei-xuan-ze"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#zhi-chi-fan-wei-xuan-ze"}},[e._v("¶")]),e._v(" 支持范围选择")])},function(){var e=this,t=e.$createElement,t=e._self._c||t;return t("p",[t("code",[e._v("is-range")]),e._v("支持表示支持范围选择，支持范围选择时，值必须为数组。")])},function(){var e=this,t=e.$createElement,t=e._self._c||t;return t("p",[t("code",[e._v("placeholder")]),e._v("和"),t("code",[e._v("end-placeholder")]),e._v("分别表示开始时间和结束时间的占位符")])},function(){var e=this,t=e.$createElement,t=e._self._c||t;return t("h2",{attrs:{id:"zi-ding-yi-ge-shi"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#zi-ding-yi-ge-shi"}},[e._v("¶")]),e._v(" 自定义格式")])},function(){var e=this,t=e.$createElement,t=e._self._c||t;return t("p",[t("code",[e._v("format")]),e._v("为自定义日期格式，"),t("code",[e._v("YYYY")]),e._v("表示年，"),t("code",[e._v("MM")]),e._v("表示月，"),t("code",[e._v("DD")]),e._v("表示天， "),t("code",[e._v("hh")]),e._v("表示小时，"),t("code",[e._v("mm")]),e._v("表示分钟，"),t("code",[e._v("ss")]),e._v("表示秒")])},function(){var e=this,t=e.$createElement,t=e._self._c||t;return t("p",[e._v("定义"),t("code",[e._v("format")]),e._v("时，必须定义"),t("code",[e._v("min")]),e._v("和"),t("code",[e._v("max")]),e._v("，避免最大最小值取值错误")])},function(){var e=this,t=e.$createElement,t=e._self._c||t;return t("h2",{attrs:{id:"props"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#props"}},[e._v("¶")]),e._v(" Props")])},function(){var e=this,t=e.$createElement,t=e._self._c||t;return t("table",[t("thead",[t("tr",[t("th",[e._v("参数")]),t("th",[e._v("说明")]),t("th",[e._v("类型")]),t("th",[e._v("可选值")]),t("th",[e._v("默认值")])])]),t("tbody",[t("tr",[t("td",[e._v("value / v-model")]),t("td",[e._v("绑定值")]),t("td",[e._v("string")]),t("td",[e._v("—")]),t("td",[e._v("—")])]),t("tr",[t("td",[e._v("type")]),t("td",[e._v("日期时间类型，date 日期 "),t("br"),e._v("datetime 时间日期")]),t("td",[e._v("string")]),t("td",[e._v("date / datetime")]),t("td",[e._v("date")])]),t("tr",[t("td",[e._v("no-id")]),t("td",[e._v("是否不需要id，为false则以"),t("code",[e._v("name")]),e._v("作为id，除特殊情况，表单中使用必须添加id")]),t("td",[e._v("boolean")]),t("td",[e._v("-")]),t("td",[e._v("false")])]),t("tr",[t("td",[e._v("name")]),t("td",[e._v("原生属性name，同时渲染为id属性，当"),t("code",[e._v("no-id")]),e._v("为false时"),t("strong",[e._v("必填")])]),t("td",[e._v("string")]),t("td",[e._v("-")]),t("td",[e._v("-")])]),t("tr",[t("td",[e._v("disabled")]),t("td",[e._v("是否禁用")]),t("td",[e._v("boolean")]),t("td",[e._v("—")]),t("td",[e._v("false")])]),t("tr",[t("td",[e._v("width")]),t("td",[e._v("日期选择器宽度")]),t("td",[e._v("string / Number")]),t("td",[e._v("—")]),t("td",[e._v("—")])]),t("tr",[t("td",[e._v("is-clear")]),t("td",[e._v("是否支持清除")]),t("td",[e._v("boolean")]),t("td",[e._v("—")]),t("td",[e._v("true")])]),t("tr",[t("td",[e._v("is-range")]),t("td",[e._v("是否支持范围选择")]),t("td",[e._v("boolean")]),t("td",[e._v("—")]),t("td",[e._v("false")])]),t("tr",[t("td",[e._v("placeholder")]),t("td",[e._v("占位内容，支持范围选择时为开始日期的占位符"),t("br"),e._v("不支持范围时为日期选择框的占位符")]),t("td",[e._v("string")]),t("td",[e._v("—")]),t("td",[t("code",[e._v("is-range")]),e._v("为真时，默认是开始时间，其他默认是选择时间")])]),t("tr",[t("td",[e._v("end-placeholder")]),t("td",[e._v("支持范围选择时结束时间的占位符")]),t("td",[e._v("string")]),t("td"),t("td",[e._v("结束时间")])]),t("tr",[t("td",[e._v("format")]),t("td",[e._v("日期格式，YYYY-MM-DD hh:mm:ss"),t("br"),e._v("日期格式 YYYY-MM-DD 可任意调整年月日的位置 "),t("br"),e._v("YYYY 表示年 MM 表示月 DD 表示天 分隔符可自定义"),t("br"),t("br"),e._v("时分秒格式见"),t("code",[e._v("v-timepicker")])]),t("td",[e._v("string")]),t("td",[e._v("—")]),t("td",[e._v("YYYY-MM-DD")])]),t("tr",[t("td",[e._v("min")]),t("td",[e._v("最小日期，必须与日期格式对应")]),t("td",[e._v("string")]),t("td",[e._v("—")]),t("td",[e._v("2000-01-01")])]),t("tr",[t("td",[e._v("max")]),t("td",[e._v("最大日期，必须与日期格式对应")]),t("td",[e._v("string")]),t("td",[e._v("—")]),t("td",[e._v("2037-12-31")])]),t("tr",[t("td",[e._v("minute-interval")]),t("td",[e._v("分钟间隔")]),t("td",[e._v("number")]),t("td",[e._v("—")]),t("td",[e._v("1")])]),t("tr",[t("td",[e._v("second-interval")]),t("td",[e._v("秒间隔")]),t("td",[e._v("number")]),t("td",[e._v("—")]),t("td",[e._v("1")])])])])},function(){var e=this.$createElement,e=this._self._c||e;return e("h2",{attrs:{id:"events"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#events"}},[this._v("¶")]),this._v(" @Events")])},function(){var e=this,t=e.$createElement,t=e._self._c||t;return t("table",[t("thead",[t("tr",[t("th",[e._v("事件名")]),t("th",[e._v("说明")]),t("th",[e._v("参数")])])]),t("tbody",[t("tr",[t("td",[e._v("change")]),t("td",[e._v("值改变时执行")]),t("td",[e._v("改变后的值")])])])])}],!1,null,null,null);t.default=a.exports}}]);