(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{340:function(t,n,o){"use strict";o.r(n);var i=o(50),e={name:"component-doc",components:{"mo-demo0":Object(i.a)({render:function(){var t=this,n=t.$createElement,n=t._self._c||n;return n("div",[[n("v-button",{staticClass:"notify-btn",attrs:{name:"button1"},on:{click:t.handleAutoHideClick}},[t._v("自动关闭")]),t._v(" "),n("v-button",{staticClass:"notify-btn",attrs:{name:"button2",type:"primary"},on:{click:t.handleKeepShowClick}},[t._v("一直显示")]),t._v(" "),n("v-button",{staticClass:"notify-btn",attrs:{name:"button3"},on:{click:t.handleStatueShowClick}},[t._v("显示状态")]),t._v(" "),n("v-button",{staticClass:"notify-btn",attrs:{name:"button4"},on:{click:t.handleInstanceClick}},[t._v(t._s(t.showInstance?"关闭该实例":"返回通知实例"))])]],2)},staticRenderFns:[]},{data:function(){return{showInstance:!1,instance:null}},methods:{handleAutoHideClick:function(){this.$notify({title:"自动隐藏标题",content:"这是常规用法的通知提醒框内容，自动隐藏",showConfirm:!0,position:"top-right"})},handleKeepShowClick:function(){this.$notify({title:"一直显示标题",content:"这是常规用法的通知提醒框内容，不会自动隐藏",showConfirm:!0,duration:0,position:"top-right"})},handleStatueShowClick:function(){this.$notify({status:"success",content:"显示状态",duration:0,position:"top-right"})},handleInstanceClick:function(){this.showInstance?(this.showInstance=!1,this.instance.close()):(this.showInstance=!0,this.instance=this.$notify.instance({status:"success",content:"返回实例，可以通过js控制关闭",duration:0,position:"top-right"}))}}}),"mo-demo1":(e={methods:{handleSuccess:function(){var t=this.$notify.instance.success("这是一条成功信息！",0);setTimeout(function(){t.close()},1e3)},handleError:function(){this.$notify.error("这是一条错误信息！")},handleWarning:function(){this.$notify.warning("这是一条警告！")},handleNotice:function(){this.$notify.notice("这是一条普通的消息提醒")}}},Object(i.a)({render:function(){var t=this,n=t.$createElement,n=t._self._c||n;return n("div",[[n("v-button",{staticClass:"notify-btn",attrs:{name:"button41",type:"primary"},on:{click:t.handleSuccess}},[t._v("成功")]),t._v(" "),n("v-button",{staticClass:"notify-btn",attrs:{name:"button5",type:"danger"},on:{click:t.handleError}},[t._v("失败")]),t._v(" "),n("v-button",{staticClass:"notify-btn",attrs:{name:"button6",type:"info"},on:{click:t.handleWarning}},[t._v("警告")]),t._v(" "),n("v-button",{staticClass:"notify-btn",attrs:{name:"button7",type:"primary"},on:{click:t.handleNotice}},[t._v("提醒")])]],2)},staticRenderFns:[]},e)),"mo-demo2":Object(i.a)({render:function(){var t=this,n=t.$createElement,n=t._self._c||n;return n("div",[[n("v-button",{staticClass:"notify-btn",attrs:{name:"button8"},on:{click:t.handleTopRightClick}},[t._v("右上角")]),t._v(" "),n("v-button",{staticClass:"notify-btn",attrs:{name:"button9"},on:{click:t.handleBottomRightClick}},[t._v("右下角")]),t._v(" "),n("v-button",{staticClass:"notify-btn",attrs:{name:"button10"},on:{click:t.handleTopLeftClick}},[t._v("左上角")]),t._v(" "),n("v-button",{staticClass:"notify-btn",attrs:{name:"button11"},on:{click:t.handleBottomLeftClick}},[t._v("左下角")])]],2)},staticRenderFns:[]},{methods:{handleTopRightClick:function(){this.$notify({title:"右上角标题",content:"这是右上角的通知提醒内容",showConfirm:!0,position:"top-right"})},handleBottomRightClick:function(){this.$notify({title:"右下角标题",content:"这是右下角的通知提醒内容",showConfirm:!0,position:"bottom-right"})},handleTopLeftClick:function(){this.$notify({title:"左上角标题",content:"这是左上角的通知提醒内容",showConfirm:!0,position:"top-left"})},handleBottomLeftClick:function(){this.$notify({title:"左下角标题",content:"这是左下角的通知提醒内容",showConfirm:!0,position:"bottom-left"})}}}),"mo-demo3":(e={methods:{handleClick:function(){var n=this;this.$notify({title:"关闭后回调使用的标题",content:"这里关闭后回调使用的通知提醒内容",showConfirm:!0,position:"top-right"}).then(function(t){n.$message.warn("通知提醒弹窗已关闭！"),console.log("auto-hide: "),console.log(t),console.log("\n")})}}},Object(i.a)({render:function(){var t=this.$createElement,t=this._self._c||t;return t("div",[[t("v-button",{staticClass:"notify-btn",attrs:{name:"button12"},on:{click:this.handleClick}},[this._v("关闭后的回调使用")])]],2)},staticRenderFns:[]},e)),"mo-demo4":Object(i.a)({render:function(){var t=this,n=t.$createElement,n=t._self._c||n;return n("div",[[n("v-button",{staticClass:"notify-btn",attrs:{name:"button13"},on:{click:t.handleShowCloseBtnClick}},[t._v("仅显示关闭按钮")]),t._v(" "),n("v-button",{staticClass:"notify-btn",attrs:{name:"button14"},on:{click:t.handleshowConfirmBtnClick}},[t._v("仅显示确定按钮")]),t._v(" "),n("v-button",{staticClass:"notify-btn",attrs:{name:"button15"},on:{click:t.handleshowCloseConfirmBtnClick}},[t._v("显示确定和关闭按钮")]),t._v(" "),n("v-button",{staticClass:"notify-btn",attrs:{name:"button16"},on:{click:t.handleHideAllBtnClick}},[t._v("不显示按钮")]),t._v(" "),n("v-button",{staticClass:"notify-btn",attrs:{name:"button17"},on:{click:t.handleCustomConfirmTextBtnClick}},[t._v("自定义确定文本")]),t._v(" "),n("v-button",{staticClass:"notify-btn",attrs:{name:"button18"},on:{click:t.handleNoTitleClick}},[t._v("无标题")])]],2)},staticRenderFns:[]},{methods:{handleShowCloseBtnClick:function(){this.$notify({title:"仅显示关闭按钮标题",content:"这是仅显示关闭按钮的内容",position:"top-right"})},handleshowConfirmBtnClick:function(){this.$notify({title:"仅显示确认按钮标题",content:"这是仅显示确认按钮的内容",showConfirm:!0,showClose:!1,position:"top-right"})},handleshowCloseConfirmBtnClick:function(){this.$notify({title:"显示确认和关闭按钮标题",content:"这是显示确认和关闭按钮的内容",showConfirm:!0,position:"top-right"})},handleHideAllBtnClick:function(){this.$notify({title:"不显示按钮标题",content:"这是不显示按钮的内容",showConfirm:!1,showClose:!1,position:"top-right"})},handleCustomConfirmTextBtnClick:function(){this.$notify({title:"自定义确认按钮文本标题",content:"这是自定义确认按钮文本的内容",showConfirm:!0,showClose:!1,confirmText:"知道了",position:"top-right"})},handleNoTitleClick:function(){this.$notify({content:"骊山四顾，阿房一炬，当时奢侈今何处？只见草萧疏，水萦纡。至今遗恨迷烟树。列国周齐秦汉楚，赢，都变做了土；输，都变做了土。",showConfirm:!0,showClose:!1,position:"top-right"})}}}),"mo-demo5":Object(i.a)({render:function(){var t=this.$createElement,t=this._self._c||t;return t("div",[[t("v-button",{staticClass:"notify-btn",attrs:{name:"button19"},on:{click:this.handleClick}},[this._v("使用HTML片段")])]],2)},staticRenderFns:[]},{methods:{handleClick:function(){this.$notify({title:"使用HTML片段标题",content:'<div class="custom-message">这里使用了HTML片段的通知提醒内容</div>',showConfirm:!0,dangerouslyUseHTMLString:!0,position:"top-right"})}}}),"mo-demo6":Object(i.a)({render:function(){var t=this,n=t.$createElement,n=t._self._c||n;return n("div",[[n("v-button",{staticClass:"notify-btn",attrs:{name:"button52"},on:{click:t.handleInstanceClick}},[t._v(t._s(t.showInstance?"关闭该实例":"返回通知实例"))]),t._v(" "),n("v-button",{staticClass:"notify-btn",attrs:{name:"button62",type:"info"},on:{click:t.handleWarning}},[t._v("警告")]),t._v(" "),n("v-button",{staticClass:"notify-btn",attrs:{name:"button72",type:"primary"},on:{click:t.handleNotice}},[t._v("提醒")])]],2)},staticRenderFns:[]},{data:function(){return{showInstance:!1,instance:null}},methods:{handleInstanceClick:function(){this.showInstance?(this.showInstance=!1,this.instance.close()):(this.showInstance=!0,this.instance=this.$notify.instance({status:"success",content:"返回实例，可以通过js控制关闭",duration:0,position:"top-right"}))},handleWarning:function(){this.$notify.instance.warning("这是一条警告！")},handleNotice:function(){this.$notify.instance.notice("这是一条普通的消息提醒")}}})}},i=o(1),o=Object(i.a)(e,function(){var t=this,n=t.$createElement,n=t._self._c||n;return n("section",{staticClass:"content reasy-doc"},[n("h1",[t._v("通知提醒")]),n("p",[t._v("全局展示通知提醒信息，用于较复杂的通知内容。")]),t._m(0),t._m(1),t._m(2),n("demo-block",[n("div",[n("p",[t._v("在全局注册了$notify方法，接收一个options字面量参数。在最简单的情况下，直接传入的"),n("code",[t._v("content")]),t._v("和"),n("code",[t._v("title")]),t._v("的来设置内容和标题。默认情况下，经过一段时间后Notification组件会关闭，可以通过设置"),n("code",[t._v("duration")]),t._v("控制关闭的时间间隔，特别的是，如果设置为"),n("code",[t._v("0")]),t._v("，则不会关闭。注："),n("code",[t._v("duration")]),t._v("接收一个"),n("code",[t._v("Number")]),t._v("，单位为毫秒，默认为"),n("code",[t._v("4500")]),t._v("。")])]),n("template",{slot:"source"},[n("mo-demo0")],1),n("template",{slot:"highlight"},[n("pre",{pre:!0},[n("code",{pre:!0,attrs:{class:"html"}},[t._v('<template>\n  <v-button name="button1"  class="notify-btn" @click="handleAutoHideClick">自动关闭</v-button>\n  <v-button name="button2"  class="notify-btn" type="primary" @click="handleKeepShowClick">一直显示</v-button>\n  <v-button name="button3" class="notify-btn" @click="handleStatueShowClick">显示状态</v-button>\n  <v-button name="button4" class="notify-btn" @click="handleInstanceClick">{{!showInstance ? \'返回通知实例\' :\'关闭该实例\'}}</v-button>\n</template>\n\n<script>\nexport default {\n  data(){\n    return {\n      showInstance:false,\n      instance:null\n    }\n  },\n  methods: {\n    handleAutoHideClick() {\n      this.$notify({\n        title: "自动隐藏标题",\n        content: "这是常规用法的通知提醒框内容，自动隐藏",\n        showConfirm: true,\n        position: "top-right"\n      });\n    },\n    handleKeepShowClick() {\n      this.$notify({\n        title: "一直显示标题",\n        content: "这是常规用法的通知提醒框内容，不会自动隐藏",\n        showConfirm: true,\n        duration: 0,\n        position: "top-right"\n      });\n    },handleStatueShowClick() {\n      this.$notify({\n        status: "success",\n        content: "显示状态",\n        duration: 0,\n        position: "top-right"\n      });\n    },\n    handleInstanceClick(){\n      if(!this.showInstance){\n        this.showInstance = true;\n        this.instance = this.$notify.instance({\n          status: "success",\n          content: "返回实例，可以通过js控制关闭",\n          duration: 0,\n          position: "top-right"\n        })\n      }else{\n        this.showInstance = false;\n        this.instance.close();\n      }\n    }\n  }\n};\n<\/script>\n')])])])],2),t._m(3),n("demo-block",[n("div",[n("p",[t._v("通过配置"),n("code",[t._v("status")]),t._v("显示预置的状态信息，目前可选的状态信息有"),n("code",[t._v("success")]),t._v("成功、"),n("code",[t._v("error")]),t._v("失败、"),n("code",[t._v("warning")]),t._v("警告、"),n("code",[t._v("notice")]),t._v("正常通知和"),n("code",[t._v("none")]),t._v("无状态，默认为"),n("code",[t._v("none")]),t._v("。")])]),n("template",{slot:"source"},[n("mo-demo1")],1),n("template",{slot:"highlight"},[n("pre",{pre:!0},[n("code",{pre:!0,attrs:{class:"html"}},[t._v('<template>\n  <v-button name="button41"  class="notify-btn" type="primary" @click="handleSuccess">成功</v-button>\n  <v-button name="button5"  class="notify-btn" type="danger" @click="handleError">失败</v-button>\n  <v-button name="button6"  class="notify-btn" type="info" @click="handleWarning">警告</v-button>\n  <v-button name="button7"  class="notify-btn" type="primary" @click="handleNotice">提醒</v-button>\n</template>\n\n<script>\nexport default {\n  methods: {\n    handleSuccess() {\n      // this.$notify({\n      //   status: "success",\n      //   content: "这是一条成功信息！",\n      //   position: "top-right"\n      // });\n      let notify = this.$notify.instance.success("这是一条成功信息！",0)\n\n      setTimeout(()=>{\n        notify.close();\n      },1000)\n    },\n    handleError() {\n      // this.$notify({\n      //   status: "error",\n      //   content: "这是一条错误信息！",\n      //   position: "top-right"\n      // });\n      this.$notify.error("这是一条错误信息！")\n\n    },\n    handleWarning() {\n      // this.$notify({\n      //   status: "warning",\n      //   content: "这是一条警告！",\n      //   position: "top-right"\n      // });\n      this.$notify.warning("这是一条警告！")\n\n    },\n    handleNotice() {\n      // this.$notify({\n      //   status: "notice",\n      //   content: "这是一条普通的消息提醒",\n      //   position: "top-right"\n      // });\n      this.$notify.notice("这是一条普通的消息提醒")\n\n    }\n  }\n};\n<\/script>\n')])])])],2),t._m(4),n("p",[t._v("可以让通知提醒框在屏幕四个角中的任意一角弹出")]),n("demo-block",[n("div",[n("p",[t._v("使用"),n("code",[t._v("position")]),t._v("属性来配置Notification的弹出位置，有以下4个选项："),n("code",[t._v("top-right")]),t._v("、"),n("code",[t._v("top-left")]),t._v("、"),n("code",[t._v("bottom-right")]),t._v("和"),n("code",[t._v("bottom-left")]),t._v("，默认值为"),n("code",[t._v("top-right")]),t._v("。")])]),n("template",{slot:"source"},[n("mo-demo2")],1),n("template",{slot:"highlight"},[n("pre",{pre:!0},[n("code",{pre:!0,attrs:{class:"html"}},[t._v('<template>\n  <v-button name="button8"  class="notify-btn" @click="handleTopRightClick">右上角</v-button>\n  <v-button name="button9"  class="notify-btn" @click="handleBottomRightClick">右下角</v-button>\n  <v-button name="button10"  class="notify-btn" @click="handleTopLeftClick">左上角</v-button>\n  <v-button name="button11"  class="notify-btn" @click="handleBottomLeftClick">左下角</v-button>\n</template>\n\n<script>\nexport default {\n  methods: {\n    handleTopRightClick() {\n      this.$notify({\n        title: "右上角标题",\n        content: "这是右上角的通知提醒内容",\n        showConfirm: true,\n        position: "top-right"\n      });\n    },\n    handleBottomRightClick() {\n      this.$notify({\n        title: "右下角标题",\n        content: "这是右下角的通知提醒内容",\n        showConfirm: true,\n        position: "bottom-right"\n      });\n    },\n    handleTopLeftClick() {\n      this.$notify({\n        title: "左上角标题",\n        content: "这是左上角的通知提醒内容",\n        showConfirm: true,\n        position: "top-left"\n      });\n    },\n    handleBottomLeftClick() {\n      this.$notify({\n        title: "左下角标题",\n        content: "这是左下角的通知提醒内容",\n        showConfirm: true,\n        position: "bottom-left"\n      });\n    }\n  }\n};\n<\/script>\n')])])])],2),t._m(5),n("demo-block",[n("div",[n("p",[t._v("调用$notify后返回一个"),n("code",[t._v("Promise")]),t._v("对象，通过使用"),n("code",[t._v("then")]),t._v("来执行关闭后的操作。")])]),n("template",{slot:"source"},[n("mo-demo3")],1),n("template",{slot:"highlight"},[n("pre",{pre:!0},[n("code",{pre:!0,attrs:{class:"html"}},[t._v('<template>\n  <v-button name="button12" class="notify-btn" @click="handleClick">关闭后的回调使用</v-button>\n</template>\n\n<script>\nexport default {\n  methods: {\n    handleClick() {\n      this.$notify({\n        title: "关闭后回调使用的标题",\n        content: `这里关闭后回调使用的通知提醒内容`,\n        showConfirm: true,\n        position: "top-right"\n      }).then(res => {\n        this.$message.warn("通知提醒弹窗已关闭！");\n        console.log(`auto-hide: `);\n        console.log(res);\n        console.log(`\\n`);\n      });\n    }\n  }\n};\n<\/script>\n')])])])],2),t._m(6),n("demo-block",[n("template",{slot:"source"},[n("mo-demo4")],1),n("template",{slot:"highlight"},[n("pre",{pre:!0},[n("code",{pre:!0,attrs:{class:"html"}},[t._v('<template>\n  <v-button name="button13" class="notify-btn" @click="handleShowCloseBtnClick">仅显示关闭按钮</v-button>\n  <v-button name="button14" class="notify-btn" @click="handleshowConfirmBtnClick">仅显示确定按钮</v-button>\n  <v-button name="button15" class="notify-btn" @click="handleshowCloseConfirmBtnClick">显示确定和关闭按钮</v-button>\n  <v-button name="button16" class="notify-btn" @click="handleHideAllBtnClick">不显示按钮</v-button>\n  <v-button name="button17" class="notify-btn" @click="handleCustomConfirmTextBtnClick">自定义确定文本</v-button>\n  <v-button name="button18" class="notify-btn" @click="handleNoTitleClick">无标题</v-button>\n</template>\n\n<script>\nexport default {\n  methods: {\n    handleShowCloseBtnClick() {\n      this.$notify({\n        title: "仅显示关闭按钮标题",\n        content: "这是仅显示关闭按钮的内容",\n        position: "top-right"\n      });\n    },\n    handleshowConfirmBtnClick() {\n      this.$notify({\n        title: "仅显示确认按钮标题",\n        content: "这是仅显示确认按钮的内容",\n        showConfirm: true,\n        showClose: false,\n        position: "top-right"\n      });\n    },\n    handleshowCloseConfirmBtnClick() {\n      this.$notify({\n        title: "显示确认和关闭按钮标题",\n        content: "这是显示确认和关闭按钮的内容",\n        showConfirm: true,\n        position: "top-right"\n      });\n    },\n    handleHideAllBtnClick() {\n      this.$notify({\n        title: "不显示按钮标题",\n        content: "这是不显示按钮的内容",\n        showConfirm: false,\n        showClose: false,\n        position: "top-right"\n      });\n    },\n    handleCustomConfirmTextBtnClick() {\n      this.$notify({\n        title: "自定义确认按钮文本标题",\n        content: "这是自定义确认按钮文本的内容",\n        showConfirm: true,\n        showClose: false,\n        confirmText: "知道了",\n        position: "top-right"\n      });\n    },\n    handleNoTitleClick() {\n      this.$notify({\n        content: "骊山四顾，阿房一炬，当时奢侈今何处？只见草萧疏，水萦纡。至今遗恨迷烟树。列国周齐秦汉楚，赢，都变做了土；输，都变做了土。",\n        showConfirm: true,\n        showClose: false,\n        position: "top-right"\n      });\n    }\n  }\n};\n<\/script>\n')])])])],2),t._m(7),n("demo-block",[n("template",{slot:"source"},[n("mo-demo5")],1),n("template",{slot:"highlight"},[n("pre",{pre:!0},[n("code",{pre:!0,attrs:{class:"html"}},[t._v('<template>\n  <v-button name="button19" class="notify-btn" @click="handleClick">使用HTML片段</v-button>\n</template>\n\n<script>\nexport default {\n  methods: {\n    handleClick() {\n      this.$notify({\n        title: "使用HTML片段标题",\n        content: `<div class="custom-message">这里使用了HTML片段的通知提醒内容</div>`,\n        showConfirm: true,\n        dangerouslyUseHTMLString: true,\n        position: "top-right"\n      });\n    }\n  }\n};\n<\/script>\n')])])])],2),t._m(8),n("demo-block",[n("div",[n("p",[t._v("使用"),n("code",[t._v("this.$notify.instance")]),t._v(" 可以返回通知实例进行处理，除了不会返回promise，用法和基本使用一致")])]),n("template",{slot:"source"},[n("mo-demo6")],1),n("template",{slot:"highlight"},[n("pre",{pre:!0},[n("code",{pre:!0,attrs:{class:"html"}},[t._v('<template>\n  <v-button name="button52" class="notify-btn" @click="handleInstanceClick">{{!showInstance ? \'返回通知实例\' :\'关闭该实例\'}}</v-button>\n  <v-button name="button62"  class="notify-btn" type="info" @click="handleWarning">警告</v-button>\n  <v-button name="button72"  class="notify-btn" type="primary" @click="handleNotice">提醒</v-button>\n</template>\n\n<script>\nexport default {\n  data(){\n    return {\n      showInstance:false,\n      instance:null\n    }\n  },\n  methods: {\n    handleInstanceClick(){\n      if(!this.showInstance){\n        this.showInstance = true;\n        this.instance = this.$notify.instance({\n          status: "success",\n          content: "返回实例，可以通过js控制关闭",\n          duration: 0,\n          position: "top-right"\n        })\n      }else{\n        this.showInstance = false;\n        this.instance.close();\n      }\n    },\n\n    handleWarning() {\n      this.$notify.instance.warning("这是一条警告！")\n    },\n    handleNotice() {\n      this.$notify.instance.notice("这是一条普通的消息提醒")\n    }\n  }\n};\n<\/script>\n')])])])],2),t._m(9),t._m(10),n("side-link")],1)},[function(){var t=this,n=t.$createElement,n=t._self._c||n;return n("h2",{attrs:{id:"an-xu-yin-yong"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#an-xu-yin-yong"}},[t._v("¶")]),t._v(" 按需引用")])},function(){var t=this,n=t.$createElement,n=t._self._c||n;return n("pre",[n("code",{staticClass:"language-js"},[t._v('import { Base, Notification } from "@reasy-team/reasy-ui";\n\nVue.use(Notification);\nVue.use(Base);\n')])])},function(){var t=this,n=t.$createElement,n=t._self._c||n;return n("h2",{attrs:{id:"ji-chu-shi-li"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#ji-chu-shi-li"}},[t._v("¶")]),t._v(" 基础示例")])},function(){var t=this,n=t.$createElement,n=t._self._c||n;return n("h2",{attrs:{id:"bu-tong-zhuang-tai-ti-xing"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#bu-tong-zhuang-tai-ti-xing"}},[t._v("¶")]),t._v(" 不同状态提醒")])},function(){var t=this,n=t.$createElement,n=t._self._c||n;return n("h2",{attrs:{id:"zi-ding-yi-dan-chu-wei-zhi"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#zi-ding-yi-dan-chu-wei-zhi"}},[t._v("¶")]),t._v(" 自定义弹出位置")])},function(){var t=this,n=t.$createElement,n=t._self._c||n;return n("h2",{attrs:{id:"dan-chuang-guan-bi-hui-diao"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#dan-chuang-guan-bi-hui-diao"}},[t._v("¶")]),t._v(" 弹窗关闭回调")])},function(){var t=this,n=t.$createElement,n=t._self._c||n;return n("h2",{attrs:{id:"zi-ding-yi-an-niu"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#zi-ding-yi-an-niu"}},[t._v("¶")]),t._v(" 自定义按钮")])},function(){var t=this,n=t.$createElement,n=t._self._c||n;return n("h2",{attrs:{id:"shi-yong-htmlpian-duan"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#shi-yong-htmlpian-duan"}},[t._v("¶")]),t._v(" 使用HTML片段")])},function(){var t=this,n=t.$createElement,n=t._self._c||n;return n("h2",{attrs:{id:"fan-hui-tong-zhi-shi-li-ke-yi-yong-yu-guan-bi"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#fan-hui-tong-zhi-shi-li-ke-yi-yong-yu-guan-bi"}},[t._v("¶")]),t._v(" 返回通知实例，可以用于关闭")])},function(){var t=this,n=t.$createElement,n=t._self._c||n;return n("h2",{attrs:{id:"props"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#props"}},[t._v("¶")]),t._v(" Props")])},function(){var t=this,n=t.$createElement,n=t._self._c||n;return n("table",[n("thead",[n("tr",[n("th",[t._v("参数")]),n("th",[t._v("说明")]),n("th",[t._v("类型")]),n("th",[t._v("可选值")]),n("th",[t._v("默认值")])])]),n("tbody",[n("tr",[n("td",[t._v("title")]),n("td",[t._v("标题")]),n("td",[t._v("string")]),n("td",[t._v("-")]),n("td",[t._v("-")])]),n("tr",[n("td",[t._v("status")]),n("td",[t._v("状态，不同状态显示不同的图标")]),n("td",[t._v("string")]),n("td",[t._v("success、error、notice、warning、none")]),n("td",[t._v("none")])]),n("tr",[n("td",[t._v("content")]),n("td",[t._v("说明文字")]),n("td",[t._v("string")]),n("td",[t._v("-")]),n("td",[t._v("-")])]),n("tr",[n("td",[t._v("duration")]),n("td",[t._v("显示时间，单位：毫秒。设置为0则不会关闭")]),n("td",[t._v("number")]),n("td",[t._v("-")]),n("td",[t._v("4500")])]),n("tr",[n("td",[t._v("position")]),n("td",[t._v("自定义弹出位置")]),n("td",[t._v("string")]),n("td",[t._v("top-right"),n("br"),t._v("top-left"),n("br"),t._v("bottom-right"),n("br"),t._v("bottom-left")]),n("td",[t._v("top-right")])]),n("tr",[n("td",[t._v("show-close")]),n("td",[t._v("是否显示关闭按钮")]),n("td",[t._v("boolean")]),n("td",[t._v("-")]),n("td",[t._v("true")])]),n("tr",[n("td",[t._v("show-confirm")]),n("td",[t._v("是否显示确定按钮")]),n("td",[t._v("boolean")]),n("td",[t._v("-")]),n("td",[t._v("false")])]),n("tr",[n("td",[t._v("confirm-text")]),n("td",[t._v("确定按钮文本")]),n("td",[t._v("string")]),n("td",[t._v("-")]),n("td",[t._v("确定")])]),n("tr",[n("td",[t._v("dangerouslyUseHTMLString")]),n("td",[t._v("把content当做html解析")]),n("td",[t._v("Boolean")]),n("td",[t._v("-")]),n("td",[t._v("false")])])])])}],!1,null,null,null);n.default=o.exports}}]);