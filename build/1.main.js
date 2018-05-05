webpackJsonp([1],{

/***/ 24:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_bustCache_header_vue__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_ca89ef62_hasScoped_false_transformToRequire_img_src_image_xlink_href_source_src_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_bustCache_header_vue__ = __webpack_require__(71);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(68)
}
var normalizeComponent = __webpack_require__(1)
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_bustCache_header_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_ca89ef62_hasScoped_false_transformToRequire_img_src_image_xlink_href_source_src_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_bustCache_header_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\frontend\\components\\header.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-ca89ef62", Component.options)
  } else {
    hotAPI.reload("data-v-ca89ef62", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 68:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(69);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(23)("8858a2ae", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-ca89ef62\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./header.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-ca89ef62\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./header.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 69:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(22)(undefined);
// imports


// module
exports.push([module.i, "\n.menu-enter,\n.menu-leave-to {\n  height: 0;\n}\n.menu-enter-active,\n.menu-leave-active {\n  transition: height 1.5s ease;\n}\n.menu-enter,\n.menu-leave-to {\n  height: 0;\n}\n.menu-enter-to,\n.menu-leave {\n  height: 155px;\n}\n.menu-enter-active,\n.menu-leave-active {\n  transition: height 0.5s ease;\n}\n.up-top-before {\n  display: none;\n  overflow: hidden;\n}\n.up-top {\n  position: fixed;\n  right: 5%;\n  bottom: 30%;\n  font-size: 35px;\n  display: inline-block;\n}\n.up-top:hover {\n  color: aqua;\n  cursor: pointer;\n}\n.motto {\n  cursor: pointer;\n}\n.nav-li a {\n  cursor: pointer;\n  color: white;\n  text-decoration: none;\n}\n/*pc设备*/\n@media (min-width: 900px) {\nul.nav-bar {\n    display: flex;\n    flex-direction: row;\n    flex-wrap: nowrap;\n    justify-content: space-around;\n    align-items: center;\n}\n.menu-control {\n    display: none;\n}\n.nav-li,\n  .nav-li a {\n    transition: color 1.5s;\n    margin-top: 21px;\n}\nli.nav-li a:hover {\n    color: black;\n}\n.nav-fixed {\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100%;\n    background-color: #8ef7d2;\n    z-index: 115;\n}\n}\n\n/*移动设备*/\n@media (max-width: 900px) {\nheader > div.nav > ul.nav-bar {\n    display: none;\n}\n.menu-control {\n    position: absolute;\n    top: 0;\n    left: 0;\n    z-index: 99;\n    display: flex;\n    width: 100%;\n    justify-content: flex-start;\n    flex-wrap: wrap;\n    background-color: #8ef7d2;\n    border-bottom: 1px solid #eeeeee;\n}\n.menu-control div:first-child {\n    flex-basis: 100%;\n    text-align: right;\n}\n.menu-btn {\n    margin: 3px;\n    background-color: #8ef7d2;\n    color: white;\n    transition: color 1.2s;\n    border: none;\n    outline: black;\n    font-size: 21px;\n}\n.menu-btn:hover {\n    color: black;\n}\n.menu-control ul.nav-bar {\n    padding: 0;\n    background-color: #8ef7d2;\n    overflow: hidden;\n}\n.menu-control ul li.nav-li a {\n    width: 100%;\n    padding: 0 0 0 10px;\n    margin: 3px 0;\n    transition: color 1.5s;\n}\n.menu-control ul.nav-bar .nav-li a:hover {\n    color: black;\n}\n.nav-fixed {\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100%;\n    background-color: #8ef7d2;\n    z-index: 115;\n}\n}\n", ""]);

// exports


/***/ }),

/***/ 70:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  name: "my-header",
  mounted: function mounted() {
    window.addEventListener("scroll", this.changeFixed);
  },
  data: function data() {
    return {
      ifShow: false,
      ifFixed: false,
      goTop: false
    };
  },

  methods: {
    changeFixed: function changeFixed() {
      this.goTop = window.scrollY > 0;
      this.ifFixed = window.scrollY > document.querySelector("header").offsetHeight - 90;
    },
    upTop: function upTop() {
      var interval = setInterval(function () {
        var osTop = document.documentElement.scrollTop || document.body.scrollTop;

        var speed = Math.floor(-osTop / 6);

        document.documentElement.scrollTop = document.body.scrollTop = osTop + speed;

        if (osTop === 0) {
          clearInterval(interval);
        }
      }, 30);
    }
  }
});

/***/ }),

/***/ 71:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("header", [
    _c(
      "div",
      { staticClass: "menu-control", class: { "nav-fixed": _vm.ifFixed } },
      [
        _c("div", [
          _c(
            "button",
            {
              staticClass: "menu-btn",
              on: {
                click: function($event) {
                  _vm.ifShow = !_vm.ifShow
                }
              }
            },
            [_vm._v("\n        menu\n      ")]
          )
        ]),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "nav" },
          [
            _c("transition", { attrs: { name: "menu" } }, [
              _vm.ifShow
                ? _c("ul", { staticClass: "nav-bar" }, [
                    _c(
                      "li",
                      {
                        staticClass: "nav-li",
                        on: {
                          click: function($event) {
                            _vm.ifShow = false
                          }
                        }
                      },
                      [
                        _c("router-link", { attrs: { to: "/index" } }, [
                          _vm._v("index")
                        ])
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "li",
                      {
                        staticClass: "nav-li",
                        on: {
                          click: function($event) {
                            _vm.ifShow = false
                          }
                        }
                      },
                      [
                        _c("router-link", { attrs: { to: "/archives" } }, [
                          _vm._v("archives")
                        ])
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "li",
                      {
                        staticClass: "nav-li",
                        on: {
                          click: function($event) {
                            _vm.ifShow = false
                          }
                        }
                      },
                      [
                        _c("router-link", { attrs: { to: "/about" } }, [
                          _vm._v("about")
                        ])
                      ],
                      1
                    )
                  ])
                : _vm._e()
            ])
          ],
          1
        )
      ]
    ),
    _vm._v(" "),
    _c("div", { staticClass: "nav", class: { "nav-fixed": _vm.ifFixed } }, [
      _c("ul", { staticClass: "nav-bar" }, [
        _c(
          "li",
          { staticClass: "nav-li" },
          [_c("router-link", { attrs: { to: "/index" } }, [_vm._v("index")])],
          1
        ),
        _vm._v(" "),
        _c(
          "li",
          { staticClass: "nav-li" },
          [
            _c("router-link", { attrs: { to: "/archives" } }, [
              _vm._v("archives")
            ])
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "li",
          { staticClass: "nav-li" },
          [_c("router-link", { attrs: { to: "/about" } }, [_vm._v("about")])],
          1
        )
      ])
    ]),
    _vm._v(" "),
    _vm._m(0),
    _vm._v(" "),
    _c(
      "div",
      {
        staticClass: "up-top-before",
        class: { "up-top": _vm.goTop },
        on: {
          click: function($event) {
            _vm.upTop()
          }
        }
      },
      [_c("i", [_vm._v("up")])]
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h1", { staticClass: "title" }, [
      _c("a", { staticClass: "title-link", attrs: { href: "javascript:;" } }, [
        _vm._v("Cave Shao")
      ]),
      _vm._v(" "),
      _c("p", { staticClass: "motto" }, [_vm._v("先到为君 后到为臣")])
    ])
  }
]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-ca89ef62", esExports)
  }
}

/***/ })

});