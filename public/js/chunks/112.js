(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[112],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/charts-and-maps/charts/apex-charts/ApexCharts.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/charts-and-maps/charts/apex-charts/ApexCharts.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_apexcharts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-apexcharts */ "./node_modules/vue-apexcharts/dist/vue-apexcharts.js");
/* harmony import */ var vue_apexcharts__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_apexcharts__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apexChartData_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./apexChartData.js */ "./resources/js/src/views/charts-and-maps/charts/apex-charts/apexChartData.js");
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


/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      apexChatData: _apexChartData_js__WEBPACK_IMPORTED_MODULE_1__["default"]
    };
  },
  components: {
    VueApexCharts: vue_apexcharts__WEBPACK_IMPORTED_MODULE_0___default.a
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/charts-and-maps/charts/apex-charts/ApexCharts.vue?vue&type=template&id=7af1a348&":
/*!***********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/charts-and-maps/charts/apex-charts/ApexCharts.vue?vue&type=template&id=7af1a348& ***!
  \***********************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { attrs: { id: "extra-component-chartist-demo" } }, [
    _vm._m(0),
    _vm._v(" "),
    _c("div", { staticClass: "vx-row" }, [
      _c(
        "div",
        { staticClass: "vx-col md:w-1/2 w-full mb-base" },
        [
          _c(
            "vx-card",
            { attrs: { title: "Line Chart", "code-toggler": "" } },
            [
              _c("vue-apex-charts", {
                attrs: {
                  type: "line",
                  height: "350",
                  options: _vm.apexChatData.lineChartSimple.chartOptions,
                  series: _vm.apexChatData.lineChartSimple.series
                }
              }),
              _vm._v(" "),
              _c("template", { slot: "codeContainer" }, [
                _vm._v(
                  "\n" +
                    _vm._s(_vm.apexChatData.lineChartSimpleCode) +
                    "\n                    "
                )
              ])
            ],
            2
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "vx-col md:w-1/2 w-full mb-base" },
        [
          _c(
            "vx-card",
            { attrs: { title: "Line Area Chart", "code-toggler": "" } },
            [
              _c("vue-apex-charts", {
                attrs: {
                  type: "area",
                  height: "350",
                  options: _vm.apexChatData.lineAreaChartSpline.chartOptions,
                  series: _vm.apexChatData.lineAreaChartSpline.series
                }
              }),
              _vm._v(" "),
              _c("template", { slot: "codeContainer" }, [
                _vm._v(
                  "\n" +
                    _vm._s(_vm.apexChatData.lineAreaChartSplineCode) +
                    "\n                    "
                )
              ])
            ],
            2
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "vx-col md:w-1/2 w-full mb-base" },
        [
          _c(
            "vx-card",
            { attrs: { title: "Column Chart", "code-toggler": "" } },
            [
              _c("vue-apex-charts", {
                attrs: {
                  type: "bar",
                  height: "350",
                  options: _vm.apexChatData.columnChart.chartOptions,
                  series: _vm.apexChatData.columnChart.series
                }
              }),
              _vm._v(" "),
              _c("template", { slot: "codeContainer" }, [
                _vm._v(
                  "\n" +
                    _vm._s(_vm.apexChatData.columnChartCode) +
                    "\n                    "
                )
              ])
            ],
            2
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "vx-col md:w-1/2 w-full mb-base" },
        [
          _c(
            "vx-card",
            { attrs: { title: "Bar Chart", "code-toggler": "" } },
            [
              _c("vue-apex-charts", {
                attrs: {
                  type: "bar",
                  height: "350",
                  options: _vm.apexChatData.barChart.chartOptions,
                  series: _vm.apexChatData.barChart.series
                }
              }),
              _vm._v(" "),
              _c("template", { slot: "codeContainer" }, [
                _vm._v(
                  "\n" +
                    _vm._s(_vm.apexChatData.barChartCode) +
                    "\n                    "
                )
              ])
            ],
            2
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "vx-col w-full mb-base" },
        [
          _c(
            "vx-card",
            { attrs: { title: "Mixed Chart", "code-toggler": "" } },
            [
              _c("vue-apex-charts", {
                attrs: {
                  type: "line",
                  height: "350",
                  options: _vm.apexChatData.mixedChart.chartOptions,
                  series: _vm.apexChatData.mixedChart.series
                }
              }),
              _vm._v(" "),
              _c("template", { slot: "codeContainer" }, [
                _vm._v(
                  "\n" +
                    _vm._s(_vm.apexChatData.mixedChartCode) +
                    "\n                    "
                )
              ])
            ],
            2
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "vx-col w-full mb-base" },
        [
          _c(
            "vx-card",
            { attrs: { title: "Candlestick Chart", "code-toggler": "" } },
            [
              _c("vue-apex-charts", {
                attrs: {
                  type: "candlestick",
                  height: "350",
                  options: _vm.apexChatData.candlestickChart.chartOptions,
                  series: _vm.apexChatData.candlestickChart.series
                }
              }),
              _vm._v(" "),
              _c("template", { slot: "codeContainer" }, [
                _vm._v(
                  "\n" +
                    _vm._s(_vm.apexChatData.candlestickChartCode) +
                    "\n                    "
                )
              ])
            ],
            2
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "vx-col md:w-1/2 w-full mb-base" },
        [
          _c(
            "vx-card",
            { attrs: { title: "3D Bubble Chart", "code-toggler": "" } },
            [
              _c("vue-apex-charts", {
                attrs: {
                  type: "bubble",
                  height: "350",
                  options: _vm.apexChatData.bubbleChart.chartOptions,
                  series: _vm.apexChatData.bubbleChart.series
                }
              }),
              _vm._v(" "),
              _c("template", { slot: "codeContainer" }, [
                _vm._v(
                  "\n" +
                    _vm._s(_vm.apexChatData.bubbleChartCode) +
                    "\n                    "
                )
              ])
            ],
            2
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "vx-col md:w-1/2 w-full mb-base" },
        [
          _c(
            "vx-card",
            { attrs: { title: "Scatter Chart", "code-toggler": "" } },
            [
              _c("vue-apex-charts", {
                attrs: {
                  type: "scatter",
                  height: "350",
                  options: _vm.apexChatData.scatterChart.chartOptions,
                  series: _vm.apexChatData.scatterChart.series
                }
              }),
              _vm._v(" "),
              _c("template", { slot: "codeContainer" }, [
                _vm._v(
                  "\n" +
                    _vm._s(_vm.apexChatData.scatterChartCode) +
                    "\n                    "
                )
              ])
            ],
            2
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "vx-col w-full mb-base" },
        [
          _c(
            "vx-card",
            { attrs: { title: "Heat Map Chart", "code-toggler": "" } },
            [
              _c("vue-apex-charts", {
                attrs: {
                  type: "heatmap",
                  height: "350",
                  options: _vm.apexChatData.heatMapChart.chartOptions,
                  series: _vm.apexChatData.heatMapChart.series
                }
              }),
              _vm._v(" "),
              _c("template", { slot: "codeContainer" }, [
                _vm._v(
                  "\n" +
                    _vm._s(_vm.apexChatData.heatMapChartCode) +
                    "\n                    "
                )
              ])
            ],
            2
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "vx-col md:w-1/2 w-full mb-base" },
        [
          _c(
            "vx-card",
            { attrs: { title: "Pie Chart", "code-toggler": "" } },
            [
              _c("vue-apex-charts", {
                attrs: {
                  type: "pie",
                  height: "350",
                  options: _vm.apexChatData.pieChart.chartOptions,
                  series: _vm.apexChatData.pieChart.series
                }
              }),
              _vm._v(" "),
              _c("template", { slot: "codeContainer" }, [
                _vm._v(
                  "\n" +
                    _vm._s(_vm.apexChatData.pieChartCode) +
                    "\n                    "
                )
              ])
            ],
            2
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "vx-col md:w-1/2 w-full mb-base" },
        [
          _c(
            "vx-card",
            { attrs: { title: "Donut Chart", "code-toggler": "" } },
            [
              _c("vue-apex-charts", {
                attrs: {
                  type: "donut",
                  height: "350",
                  options: _vm.apexChatData.donutChart.chartOptions,
                  series: _vm.apexChatData.donutChart.series
                }
              }),
              _vm._v(" "),
              _c("template", { slot: "codeContainer" }, [
                _vm._v(
                  "\n" +
                    _vm._s(_vm.apexChatData.donutChartCode) +
                    "\n                    "
                )
              ])
            ],
            2
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "vx-col md:w-1/2 w-full mb-base" },
        [
          _c(
            "vx-card",
            { attrs: { title: "Radial Bar Chart", "code-toggler": "" } },
            [
              _c("vue-apex-charts", {
                attrs: {
                  type: "radialBar",
                  height: "350",
                  options: _vm.apexChatData.radialBarChart.chartOptions,
                  series: _vm.apexChatData.radialBarChart.series
                }
              }),
              _vm._v(" "),
              _c("template", { slot: "codeContainer" }, [
                _vm._v(
                  "\n" +
                    _vm._s(_vm.apexChatData.radialBarChartCode) +
                    "\n                    "
                )
              ])
            ],
            2
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "vx-col md:w-1/2 w-full" },
        [
          _c(
            "vx-card",
            { attrs: { title: "Radar Chart", "code-toggler": "" } },
            [
              _c("vue-apex-charts", {
                attrs: {
                  type: "radar",
                  height: "350",
                  options: _vm.apexChatData.radarChart.chartOptions,
                  series: _vm.apexChatData.radarChart.series
                }
              }),
              _vm._v(" "),
              _c("template", { slot: "codeContainer" }, [
                _vm._v(
                  "\n" +
                    _vm._s(_vm.apexChatData.radarChartCode) +
                    "\n                    "
                )
              ])
            ],
            2
          )
        ],
        1
      )
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", { staticClass: "mb-4" }, [
      _vm._v("A Vue.js component for ApexCharts. Read full documnetation "),
      _c(
        "a",
        {
          attrs: {
            href: "https://apexcharts.com/docs/installation/",
            target: "_blank",
            rel: "nofollow"
          }
        },
        [_vm._v("here")]
      )
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/views/charts-and-maps/charts/apex-charts/ApexCharts.vue":
/*!**********************************************************************************!*\
  !*** ./resources/js/src/views/charts-and-maps/charts/apex-charts/ApexCharts.vue ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ApexCharts_vue_vue_type_template_id_7af1a348___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ApexCharts.vue?vue&type=template&id=7af1a348& */ "./resources/js/src/views/charts-and-maps/charts/apex-charts/ApexCharts.vue?vue&type=template&id=7af1a348&");
/* harmony import */ var _ApexCharts_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ApexCharts.vue?vue&type=script&lang=js& */ "./resources/js/src/views/charts-and-maps/charts/apex-charts/ApexCharts.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ApexCharts_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ApexCharts_vue_vue_type_template_id_7af1a348___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ApexCharts_vue_vue_type_template_id_7af1a348___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/charts-and-maps/charts/apex-charts/ApexCharts.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/charts-and-maps/charts/apex-charts/ApexCharts.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/src/views/charts-and-maps/charts/apex-charts/ApexCharts.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ApexCharts_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ApexCharts.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/charts-and-maps/charts/apex-charts/ApexCharts.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ApexCharts_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/charts-and-maps/charts/apex-charts/ApexCharts.vue?vue&type=template&id=7af1a348&":
/*!*****************************************************************************************************************!*\
  !*** ./resources/js/src/views/charts-and-maps/charts/apex-charts/ApexCharts.vue?vue&type=template&id=7af1a348& ***!
  \*****************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ApexCharts_vue_vue_type_template_id_7af1a348___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ApexCharts.vue?vue&type=template&id=7af1a348& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/charts-and-maps/charts/apex-charts/ApexCharts.vue?vue&type=template&id=7af1a348&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ApexCharts_vue_vue_type_template_id_7af1a348___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ApexCharts_vue_vue_type_template_id_7af1a348___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);