(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{335:function(e,t,n){"use strict";n.r(t);var a=n(50),a={name:"component-doc",components:{"mo-demo0":Object(a.a)({render:function(){var e=this.$createElement,e=this._self._c||e;return e("div",[e("div",{staticStyle:{height:"300px"}},[e("v-chart-line",{attrs:{series:this.series,categories:this.categories}})],1)])},staticRenderFns:[]},{data:function(){return{series:[{name:"KPI",data:[180,80,38,144,89]},{name:"NPM",data:[150,178.34,50,178,78]},{name:"ICU",data:[99,56,76,28,140]},{name:"GDP",data:[28,90,96,96,145]},{name:"PDD",data:[62,24,156,60,89]},{name:"KFF",data:[80,98,134,96,78]}],categories:["Jim","Lucy","Lily","Adele","Novak"]}}}),"mo-demo1":Object(a.a)({render:function(){var e=this,t=e.$createElement,t=e._self._c||t;return t("div",[t("v-row",{attrs:{gutter:24}},[t("v-col",{attrs:{span:10}},[t("v-chart-line",{attrs:{series:e.series,height:300,categories:e.categories}})],1),e._v(" "),t("v-col",{attrs:{span:14}},[t("v-chart-line",{attrs:{series:e.series,height:300,categories:e.categories}})],1)],1)],1)},staticRenderFns:[]},{data:function(){return{series:[{name:"KPI",data:[180,80,38,144,89]},{name:"NPM",data:[150,178.34,50,178,78]},{name:"ICU",data:[99,56,76,28,140]},{name:"GDP",data:[28,90,96,96,145]},{name:"PDD",data:[62,24,156,60,89]},{name:"KFF",data:[80,98,134,96,78]}],categories:["Novak Djokovic","maria sharapova","Serena Williams","Victória Azárenka","Petra Kvitová"]}}}),"mo-demo2":Object(a.a)({render:function(){var e=this,t=e.$createElement,t=e._self._c||t;return t("div",[t("v-row",{attrs:{gutter:24}},[t("v-col",{attrs:{span:12}},[t("v-chart-line",{attrs:{title:"直线",series:e.series,height:300,type:1,categories:e.categories}})],1),e._v(" "),t("v-col",{attrs:{span:12}},[t("v-chart-line",{attrs:{title:"曲线且从坐标原点开始绘制",series:e.series,height:300,type:2,isOffset:!1,categories:e.categories}})],1)],1)],1)},staticRenderFns:[]},{data:function(){return{series:[{name:"KPI",data:[180,80,38,144,89]},{name:"NPM",data:[150,178.34,50,178,78]},{name:"ICU",data:[99,56,76,28,140]},{name:"GDP",data:[28,90,96,96,145]},{name:"PDD",data:[62,24,156,60,89]},{name:"KFF",data:[80,98,134,96,78]}],categories:["Jim","Lucy","Lily","Adele","Novak"]}}}),"mo-demo3":Object(a.a)({render:function(){var e=this,t=e.$createElement,t=e._self._c||t;return t("div",[t("v-row",{attrs:{gutter:24}},[t("v-col",{attrs:{span:12}},[t("v-chart-line",{attrs:{title:"缓动函数: easeOutExpo",series:e.series,animation:"easeOutExpo",height:300,categories:e.categories}})],1),e._v(" "),t("v-col",{attrs:{span:12}},[t("v-chart-line",{attrs:{title:"无动画",series:e.series,height:300,animation:"",categories:e.categories}})],1)],1)],1)},staticRenderFns:[]},{data:function(){return{series:[{name:"KPI",data:[180,80,38,144,89]},{name:"NPM",data:[150,178.34,50,178,78]},{name:"ICU",data:[99,56,76,28,140]},{name:"GDP",data:[28,90,96,96,145]},{name:"PDD",data:[62,24,156,60,89]},{name:"KFF",data:[80,98,134,96,78]}],categories:["Jim","Lucy","Lily","Adele","Novak"]}}}),"mo-demo4":Object(a.a)({render:function(){var e=this.$createElement,e=this._self._c||e;return e("div",[e("div",[e("v-chart-line",{attrs:{title:"折线图标题",comment:"注：数据为后台监测数据",height:300,series:this.series,categories:this.categories}})],1)])},staticRenderFns:[]},{data:function(){return{series:[{name:"KPI",data:[180,80,38,144,89]},{name:"NPM",data:[150,178.34,50,178,78]},{name:"ICU",data:[99,56,76,28,140]},{name:"GDP",data:[28,90,96,96,145]},{name:"PDD",data:[62,24,156,60,89]},{name:"KFF",data:[80,98,134,96,78]}],categories:["Jim","Lucy","Lily","Adele","Novak"]}}}),"mo-demo5":Object(a.a)({render:function(){var e=this,t=e.$createElement,t=e._self._c||t;return t("div",[t("div",[t("v-chart-line",{attrs:{height:300,series:e.series,categories:e.categories},on:{legendClick:e.legendClick}})],1)])},staticRenderFns:[]},{data:function(){return{series:[{name:"KPI",data:[180,80,38,144,89]},{name:"NPM",data:[150,178.34,50,178,78]},{name:"ICU",data:[99,56,76,28,140]},{name:"GDP",data:[28,90,96,96,145]},{name:"PDD",data:[62,24,156,60,89]},{name:"KFF",data:[80,98,134,96,78]}],categories:["Jim","Lucy","Lily","Adele","Novak"]}},methods:{legendClick:function(e){this.$message.success("点击[".concat(e,"]"))}}}),"mo-demo6":Object(a.a)({render:function(){var e=this,t=e.$createElement,t=e._self._c||t;return t("div",[t("v-row",{attrs:{gutter:24}},[t("v-col",{attrs:{span:12}},[t("v-chart-line",{attrs:{title:"显示折线图坐标点",series:e.series,height:300,"show-point":!0,categories:e.categories}})],1),e._v(" "),t("v-col",{attrs:{span:12}},[t("v-chart-line",{attrs:{title:"无悬浮提提示，legend：square",series:e.series,legend:"square",height:300,"show-tip":!1,categories:e.categories}})],1)],1)],1)},staticRenderFns:[]},{data:function(){return{series:[{name:"KPI",data:[180,80,38,144,89]},{name:"NPM",data:[150,178.34,50,178,78]},{name:"ICU",data:[99,56,76,28,140]},{name:"GDP",data:[28,90,96,96,145]},{name:"PDD",data:[62,24,156,60,89]},{name:"KFF",data:[80,98,134,96,78]}],categories:["Jim","Lucy","Lily","Adele","Novak"]}}})}},n=n(1),n=Object(n.a)(a,function(){var e=this,t=e.$createElement,t=e._self._c||t;return t("section",{staticClass:"content reasy-doc"},[t("h1",[e._v("折线图")]),t("p",[e._v("表征分类型变量 vs 数值型变量的关系。")]),e._m(0),e._m(1),e._m(2),t("p",[e._v("折线图的默认配置示例。")]),t("demo-block",[t("div",[t("p",[e._v("默认配置要保证组件的外层容器有对应的"),t("code",[e._v("高")]),e._v("和"),t("code",[e._v("宽")]),e._v("，否则无法渲染图表。")])]),t("template",{slot:"source"},[t("mo-demo0")],1),t("template",{slot:"highlight"},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{class:"html"}},[e._v('<div style="height: 300px;">\n  <v-chart-line\n    :series="series"\n    :categories="categories"\n  >\n  </v-chart-line>\n</div>\n\n<script>\nexport default {\n  data(){\n    return {\n      series: [\n        {\n          name: "KPI",\n          data: [180, 80, 38, 144, 89]\n        },\n        {\n          name: "NPM",\n          data: [150, 178.34, 50, 178, 78]\n        },\n        {\n          name: "ICU",\n          data: [99, 56, 76, 28, 140]\n        },\n        {\n          name: "GDP",\n          data: [28, 90, 96, 96, 145]\n        },\n        {\n          name: "PDD",\n          data: [62, 24, 156, 60, 89]\n        },\n        {\n          name: "KFF",\n          data: [80, 98, 134, 96, 78]\n        }\n      ],\n      categories: ["Jim", "Lucy", "Lily", "Adele", "Novak"]\n    }\n  }\n}\n<\/script>\n')])])])],2),e._m(3),t("p",[e._v("根据文本进行位置自适应调整。")]),t("demo-block",[t("template",{slot:"source"},[t("mo-demo1")],1),t("template",{slot:"highlight"},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{class:"html"}},[e._v('<v-row :gutter="24">\n  <v-col :span="10">\n    <v-chart-line\n      :series="series"\n      :height="300"\n      :categories="categories"\n    ></v-chart-line>\n  </v-col>\n  <v-col :span="14">\n    <v-chart-line\n      :series="series"\n      :height="300"\n      :categories="categories"\n    ></v-chart-line>\n  </v-col>\n</v-row>\n\n<script>\nexport default {\n  data(){\n    return {\n      series: [\n        {\n          name: "KPI",\n          data: [180, 80, 38, 144, 89]\n        },\n        {\n          name: "NPM",\n          data: [150, 178.34, 50, 178, 78]\n        },\n        {\n          name: "ICU",\n          data: [99, 56, 76, 28, 140]\n        },\n        {\n          name: "GDP",\n          data: [28, 90, 96, 96, 145]\n        },\n        {\n          name: "PDD",\n          data: [62, 24, 156, 60, 89]\n        },\n        {\n          name: "KFF",\n          data: [80, 98, 134, 96, 78]\n        }\n      ],\n      categories: ["Novak Djokovic", "maria sharapova", "Serena Williams", "Victória Azárenka", "Petra Kvitová"]\n    }\n  }\n}\n<\/script>\n')])])])],2),e._m(4),t("p",[e._v("提供曲线和直线两种样式的折线图。同时可以设置从坐标原点进行折线图的绘制，或者从坐标原点后面开始绘制。")]),t("demo-block",[t("div",[t("p",[e._v("通过"),t("code",[e._v("type")]),e._v("设置折线图的样式，其中"),t("code",[e._v("1")]),e._v("为直线，"),t("code",[e._v("2")]),e._v("为曲线，默认为曲线"),t("code",[e._v("2")]),e._v("。")])]),t("template",{slot:"source"},[t("mo-demo2")],1),t("template",{slot:"highlight"},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{class:"html"}},[e._v('<v-row :gutter="24">\n  <v-col :span="12">\n    <v-chart-line\n      title="直线"\n      :series="series"\n      :height="300"\n      :type="1"\n      :categories="categories"\n    ></v-chart-line>\n  </v-col>\n  <v-col :span="12">\n    <v-chart-line\n      title="曲线且从坐标原点开始绘制"\n      :series="series"\n      :height="300"\n      :type="2"\n      :isOffset="false"\n      :categories="categories"\n    ></v-chart-line>\n  </v-col>\n</v-row>\n      \n<script>\nexport default {\n  data(){\n    return {\n      series: [\n        {\n          name: "KPI",\n          data: [180, 80, 38, 144, 89]\n        },\n        {\n          name: "NPM",\n          data: [150, 178.34, 50, 178, 78]\n        },\n        {\n          name: "ICU",\n          data: [99, 56, 76, 28, 140]\n        },\n        {\n          name: "GDP",\n          data: [28, 90, 96, 96, 145]\n        },\n        {\n          name: "PDD",\n          data: [62, 24, 156, 60, 89]\n        },\n        {\n          name: "KFF",\n          data: [80, 98, 134, 96, 78]\n        }\n      ],\n      categories: ["Jim", "Lucy", "Lily", "Adele", "Novak"]\n    }\n  }\n}\n<\/script>\n')])])])],2),e._m(5),e._m(6),t("demo-block",[t("div",[t("p",[e._v("通过"),t("code",[e._v("animation")]),e._v("属性设置动画类型，默认为"),t("code",[e._v("easeOutCubic")]),e._v("，为空则不设置任何动画。")])]),t("template",{slot:"source"},[t("mo-demo3")],1),t("template",{slot:"highlight"},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{class:"html"}},[e._v('<v-row :gutter="24">\n  <v-col :span="12">\n    <v-chart-line\n      title="缓动函数: easeOutExpo"\n      :series="series"\n      animation="easeOutExpo"\n      :height="300"\n      :categories="categories"\n    ></v-chart-line>\n  </v-col>\n  <v-col :span="12">\n    <v-chart-line\n      title="无动画"\n      :series="series"\n      :height="300"\n      animation=""\n      :categories="categories"\n    ></v-chart-line>\n  </v-col>\n</v-row>\n\n<script>\n  export default {\n    data() {\n      return {\n        series: [\n          {\n            name: "KPI",\n            data: [180, 80, 38, 144, 89]\n          },\n          {\n            name: "NPM",\n            data: [150, 178.34, 50, 178, 78]\n          },\n          {\n            name: "ICU",\n            data: [99, 56, 76, 28, 140]\n          },\n          {\n            name: "GDP",\n            data: [28, 90, 96, 96, 145]\n          },\n          {\n            name: "PDD",\n            data: [62, 24, 156, 60, 89]\n          },\n          {\n            name: "KFF",\n            data: [80, 98, 134, 96, 78]\n          }\n        ],\n        categories: ["Jim", "Lucy", "Lily", "Adele", "Novak"]\n      };\n    }\n  };\n<\/script>\n')])])])],2),e._m(7),t("p",[e._v("设置折线图的标题和备注信息。")]),t("demo-block",[t("div",[t("p",[e._v("通过"),t("code",[e._v("title")]),e._v("属性设置标题，显示在左上角。通过"),t("code",[e._v("comment")]),e._v("属性设置备注，显示在右下角。")])]),t("template",{slot:"source"},[t("mo-demo4")],1),t("template",{slot:"highlight"},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{class:"html"}},[e._v('<div>\n  <v-chart-line\n    title="折线图标题"\n    comment="注：数据为后台监测数据"\n    :height="300"\n    :series="series"\n    :categories="categories"\n  >\n  </v-chart-line>\n</div>\n\n<script>\nexport default {\n  data(){\n    return {\n      series: [\n        {\n          name: "KPI",\n          data: [180, 80, 38, 144, 89]\n        },\n        {\n          name: "NPM",\n          data: [150, 178.34, 50, 178, 78]\n        },\n        {\n          name: "ICU",\n          data: [99, 56, 76, 28, 140]\n        },\n        {\n          name: "GDP",\n          data: [28, 90, 96, 96, 145]\n        },\n        {\n          name: "PDD",\n          data: [62, 24, 156, 60, 89]\n        },\n        {\n          name: "KFF",\n          data: [80, 98, 134, 96, 78]\n        }\n      ],\n      categories: ["Jim", "Lucy", "Lily", "Adele", "Novak"]\n    }\n  }\n}\n<\/script>\n')])])])],2),e._m(8),t("p",[e._v("定义与折线图的交互逻辑。")]),t("demo-block",[t("div",[t("p",[e._v("通过"),t("code",[e._v("legendClick")]),e._v("事件进行切换显示图例交互， 参数为被点击的图例索引。")])]),t("template",{slot:"source"},[t("mo-demo5")],1),t("template",{slot:"highlight"},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{class:"html"}},[e._v('<div>\n  <v-chart-line\n    :height="300"\n    :series="series"\n    :categories="categories"\n    @legendClick="legendClick"\n  >\n  </v-chart-line>\n</div>\n\n<script>\n  export default {\n    data() {\n      return {\n        series: [\n          {\n            name: "KPI",\n            data: [180, 80, 38, 144, 89]\n          },\n          {\n            name: "NPM",\n            data: [150, 178.34, 50, 178, 78]\n          },\n          {\n            name: "ICU",\n            data: [99, 56, 76, 28, 140]\n          },\n          {\n            name: "GDP",\n            data: [28, 90, 96, 96, 145]\n          },\n          {\n            name: "PDD",\n            data: [62, 24, 156, 60, 89]\n          },\n          {\n            name: "KFF",\n            data: [80, 98, 134, 96, 78]\n          }\n        ],\n        categories: ["Jim", "Lucy", "Lily", "Adele", "Novak"]\n      };\n    },\n    methods: {\n      legendClick(index) {\n        this.$message.success(`点击[${index}]`);\n      }\n    }\n  };\n<\/script>\n')])])])],2),e._m(9),t("p",[e._v("可以控制折线图上坐标点是否显示，图例形状，鼠标悬浮是否显示详情等。")]),t("demo-block",[t("div",[t("p",[e._v("通过"),t("code",[e._v("tip-text")]),e._v("来设置悬浮提示的预设文本，"),t("code",[e._v("legend")]),e._v("属性设置图例形状，"),t("code",[e._v("show-tip")]),e._v("属性设置是否显示悬浮提示信息。")])]),t("template",{slot:"source"},[t("mo-demo6")],1),t("template",{slot:"highlight"},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{class:"html"}},[e._v('<v-row :gutter="24">\n  <v-col :span="12">\n    <v-chart-line\n      title="显示折线图坐标点"\n      :series="series"\n      :height="300"\n      :show-point="true"\n      :categories="categories"\n    ></v-chart-line>\n  </v-col>\n  <v-col :span="12">\n    <v-chart-line\n      title="无悬浮提提示，legend：square"\n      :series="series"\n      legend="square"\n      :height="300"\n      :show-tip="false"\n      :categories="categories"\n    ></v-chart-line>\n  </v-col>\n</v-row>\n      \n<script>\nexport default {\n  data(){\n    return {\n      series: [\n        {\n          name: "KPI",\n          data: [180, 80, 38, 144, 89]\n        },\n        {\n          name: "NPM",\n          data: [150, 178.34, 50, 178, 78]\n        },\n        {\n          name: "ICU",\n          data: [99, 56, 76, 28, 140]\n        },\n        {\n          name: "GDP",\n          data: [28, 90, 96, 96, 145]\n        },\n        {\n          name: "PDD",\n          data: [62, 24, 156, 60, 89]\n        },\n        {\n          name: "KFF",\n          data: [80, 98, 134, 96, 78]\n        }\n      ],\n      categories: ["Jim", "Lucy", "Lily", "Adele", "Novak"]\n    }\n  }\n}\n<\/script>\n')])])])],2),e._m(10),e._m(11),e._m(12),e._m(13),e._m(14),e._m(15),t("side-link")],1)},[function(){var e=this,t=e.$createElement,t=e._self._c||t;return t("h2",{attrs:{id:"an-xu-yin-yong"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#an-xu-yin-yong"}},[e._v("¶")]),e._v(" 按需引用")])},function(){var e=this,t=e.$createElement,t=e._self._c||t;return t("pre",[t("code",{staticClass:"language-js"},[e._v('import { Base, Line } from "@reasy-team/reasy-ui";\n\nVue.use(Line);\nVue.use(Base);\n')])])},function(){var e=this,t=e.$createElement,t=e._self._c||t;return t("h2",{attrs:{id:"ji-chu-shi-li"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ji-chu-shi-li"}},[e._v("¶")]),e._v(" 基础示例")])},function(){var e=this,t=e.$createElement,t=e._self._c||t;return t("h2",{attrs:{id:"dui-wen-ben-de-zi-gua-ying"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#dui-wen-ben-de-zi-gua-ying"}},[e._v("¶")]),e._v(" 对文本的自适应")])},function(){var e=this,t=e.$createElement,t=e._self._c||t;return t("h2",{attrs:{id:"zhe-xian-lei-xing"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#zhe-xian-lei-xing"}},[e._v("¶")]),e._v(" 折线类型")])},function(){var e=this,t=e.$createElement,t=e._self._c||t;return t("h2",{attrs:{id:"dong-hua"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#dong-hua"}},[e._v("¶")]),e._v(" 动画")])},function(){var e=this,t=e.$createElement,t=e._self._c||t;return t("p",[e._v("设置折线图的的显示动画的缓存函数名，也可以不设置任何动画。缓动函数名请参考："),t("a",{attrs:{href:"https://easings.net/cn#"}},[e._v("缓动函数")])])},function(){var e=this,t=e.$createElement,t=e._self._c||t;return t("h2",{attrs:{id:"fu-jia-xin-xi-she-zhi"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#fu-jia-xin-xi-she-zhi"}},[e._v("¶")]),e._v(" 附加信息设置")])},function(){var e=this,t=e.$createElement,t=e._self._c||t;return t("h2",{attrs:{id:"shi-jian"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#shi-jian"}},[e._v("¶")]),e._v(" 事件")])},function(){var e=this,t=e.$createElement,t=e._self._c||t;return t("h2",{attrs:{id:"qi-ta-she-zhi"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#qi-ta-she-zhi"}},[e._v("¶")]),e._v(" 其它设置")])},function(){var e=this,t=e.$createElement,t=e._self._c||t;return t("h2",{attrs:{id:"props"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#props"}},[e._v("¶")]),e._v(" Props")])},function(){var e=this,t=e.$createElement,t=e._self._c||t;return t("table",[t("thead",[t("tr",[t("th",[e._v("参数")]),t("th",[e._v("说明")]),t("th",[e._v("类型")]),t("th",[e._v("可选值")]),t("th",[e._v("默认值")])])]),t("tbody",[t("tr",[t("td",[e._v("colors")]),t("td",[e._v("数据列颜色配置")]),t("td",[e._v("array")]),t("td",[e._v("-")]),t("td",[e._v("['#FFCD58','#ACE06F',"),t("br"),e._v("'#7EE6F2','#6EBBFF',"),t("br"),e._v("'#FF7348','#B792F7']")])]),t("tr",[t("td",[e._v("series")]),t("td",[e._v("数据列，必填")]),t("td",[e._v("array")]),t("td"),t("td")]),t("tr",[t("td",[e._v("categories")]),t("td",[e._v("类别，对应x轴描述，必填")]),t("td",[e._v("array")]),t("td",[e._v("-")]),t("td",[e._v("-")])]),t("tr",[t("td",[e._v("legend")]),t("td",[e._v("图例")]),t("td",[e._v("string")]),t("td",[e._v("circle, square")]),t("td",[e._v("circle")])]),t("tr",[t("td",[e._v("animation")]),t("td",[e._v("动画效果，空表示不需要动画")]),t("td",[e._v("string")]),t("td",[e._v("-")]),t("td",[e._v("easeOutCubic")])]),t("tr",[t("td",[e._v("width")]),t("td",[e._v("宽，单位px")]),t("td",[e._v("number")]),t("td",[e._v("-")]),t("td",[e._v("外层容器的宽")])]),t("tr",[t("td",[e._v("height")]),t("td",[e._v("高，单位px")]),t("td",[e._v("number")]),t("td",[e._v("-")]),t("td",[e._v("外层容器的高")])]),t("tr",[t("td",[e._v("type")]),t("td",[e._v("折线类型")]),t("td",[e._v("number")]),t("td",[e._v("1: 直线 2: 曲线")]),t("td",[e._v("2")])]),t("tr",[t("td",[e._v("tip-text")]),t("td",[e._v("鼠标悬浮预留提示信息，独行显示")]),t("td",[e._v("string")]),t("td",[e._v("-")]),t("td",[e._v("-")])]),t("tr",[t("td",[e._v("show-tip")]),t("td",[e._v("鼠标悬浮显示数据")]),t("td",[e._v("boolean")]),t("td",[e._v("-")]),t("td",[e._v("true")])]),t("tr",[t("td",[e._v("title")]),t("td",[e._v("图表标题")]),t("td",[e._v("string")]),t("td",[e._v("-")]),t("td",[e._v("-")])]),t("tr",[t("td",[e._v("comment")]),t("td",[e._v("图表注释")]),t("td",[e._v("string")]),t("td",[e._v("-")]),t("td",[e._v("-")])]),t("tr",[t("td",[e._v("is-offset")]),t("td",[e._v("是否从坐标原点后面开始绘制")]),t("td",[e._v("boolean")]),t("td",[e._v("-")]),t("td",[e._v("true")])]),t("tr",[t("td",[e._v("show-point")]),t("td",[e._v("是否显示曲线坐标点")]),t("td",[e._v("boolean")]),t("td",[e._v("-")]),t("td",[e._v("false")])])])])},function(){var e=this,t=e.$createElement,t=e._self._c||t;return t("p",[t("strong",[e._v("series数据项属性")])])},function(){var e=this,t=e.$createElement,t=e._self._c||t;return t("table",[t("thead",[t("tr",[t("th",[e._v("参数")]),t("th",[e._v("说明")]),t("th",[e._v("类型")]),t("th",[e._v("可选值")]),t("th",[e._v("默认值")])])]),t("tbody",[t("tr",[t("td",[e._v("name")]),t("td",[e._v("系列名称")]),t("td",[e._v("string")]),t("td",[e._v("-")]),t("td",[e._v("-")])]),t("tr",[t("td",[e._v("data")]),t("td",[e._v("系列数据")]),t("td",[e._v("array")]),t("td",[e._v("-")]),t("td",[e._v("-")])])])])},function(){var e=this.$createElement,e=this._self._c||e;return e("h2",{attrs:{id:"events"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#events"}},[this._v("¶")]),this._v(" @Events")])},function(){var e=this,t=e.$createElement,t=e._self._c||t;return t("table",[t("thead",[t("tr",[t("th",[e._v("方法名")]),t("th",[e._v("说明")]),t("th",[e._v("参数")])])]),t("tbody",[t("tr",[t("td",[e._v("legendClick")]),t("td",[e._v("图例点击事件")]),t("td",[e._v("被点击的图例名称")])])])])}],!1,null,null,null);t.default=n.exports}}]);