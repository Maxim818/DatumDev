(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[25],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/datum/layouts/Main.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/datum/layouts/Main.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _datum_layouts_components_navbar_TheNavbarHorizontal_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/datum/layouts/components/navbar/TheNavbarHorizontal.vue */ "./resources/js/src/datum/layouts/components/navbar/TheNavbarHorizontal.vue");
/* harmony import */ var _datum_layouts_components_navbar_HorizontalNavMenu_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/datum/layouts/components/navbar/HorizontalNavMenu.vue */ "./resources/js/src/datum/layouts/components/navbar/HorizontalNavMenu.vue");
/* harmony import */ var _datum_layouts_components_navbar_HorizontalDetailMenu_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/datum/layouts/components/navbar/HorizontalDetailMenu.vue */ "./resources/js/src/datum/layouts/components/navbar/HorizontalDetailMenu.vue");
/* harmony import */ var _datum_layouts_components_navbar_navMenuItems_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/datum/layouts/components/navbar/navMenuItems.js */ "./resources/js/src/datum/layouts/components/navbar/navMenuItems.js");
/* harmony import */ var _datum_layouts_components_navbar_TheNavbarVertical_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/datum/layouts/components/navbar/TheNavbarVertical.vue */ "./resources/js/src/datum/layouts/components/navbar/TheNavbarVertical.vue");
/* harmony import */ var _datum_layouts_components_navbar_VerticalNavMenu_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/datum/layouts/components/navbar/VerticalNavMenu.vue */ "./resources/js/src/datum/layouts/components/navbar/VerticalNavMenu.vue");
/* harmony import */ var _datum_layouts_components_TheFooter_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/datum/layouts/components/TheFooter.vue */ "./resources/js/src/datum/layouts/components/TheFooter.vue");
/* harmony import */ var _datum_config_themeConfig_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/datum/config/themeConfig.js */ "./resources/js/src/datum/config/themeConfig.js");
/* harmony import */ var vue_backtotop__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vue-backtotop */ "./node_modules/vue-backtotop/src/main.js");
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
 // Top Horizontalbar

 // Main Navbar Menu

 // Detail Menu

 // Menuitem

 // Top Verticalbar

 // Vertical Navmenu

 // Footer

 // Main Setting


/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    BackToTop: vue_backtotop__WEBPACK_IMPORTED_MODULE_8__["default"],
    HNavMenu: _datum_layouts_components_navbar_HorizontalNavMenu_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    TheFooter: _datum_layouts_components_TheFooter_vue__WEBPACK_IMPORTED_MODULE_6__["default"],
    TheNavbarHorizontal: _datum_layouts_components_navbar_TheNavbarHorizontal_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    TheNavbarVertical: _datum_layouts_components_navbar_TheNavbarVertical_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
    VNavMenu: _datum_layouts_components_navbar_VerticalNavMenu_vue__WEBPACK_IMPORTED_MODULE_5__["default"],
    HDetailMenu: _datum_layouts_components_navbar_HorizontalDetailMenu_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      disableCustomizer: _datum_config_themeConfig_js__WEBPACK_IMPORTED_MODULE_7__["default"].disableCustomizer,
      disableThemeTour: _datum_config_themeConfig_js__WEBPACK_IMPORTED_MODULE_7__["default"].disableThemeTour,
      dynamicWatchers: {},
      footerType: _datum_config_themeConfig_js__WEBPACK_IMPORTED_MODULE_7__["default"].footerType || 'static',
      hideScrollToTop: _datum_config_themeConfig_js__WEBPACK_IMPORTED_MODULE_7__["default"].hideScrollToTop,
      isNavbarDark: false,
      navbarColor: _datum_config_themeConfig_js__WEBPACK_IMPORTED_MODULE_7__["default"].navbarColor || '#fff',
      navbarType: _datum_config_themeConfig_js__WEBPACK_IMPORTED_MODULE_7__["default"].navbarType || 'floating',
      navMenuItems: _datum_layouts_components_navbar_navMenuItems_js__WEBPACK_IMPORTED_MODULE_3__["default"],
      detailMenuItems: {},
      routerTransition: _datum_config_themeConfig_js__WEBPACK_IMPORTED_MODULE_7__["default"].routerTransition || 'none',
      routeTitle: this.$route.meta.pageTitle,
      steps: [{
        target: '#btnVNavMenuMinToggler',
        content: 'Toggle Collapse Sidebar.'
      }, {
        target: '.vx-navbar__starred-pages',
        content: 'Create your own bookmarks. You can also re-arrange them using drag & drop.'
      }, {
        target: '.i18n-locale',
        content: 'You can change language from here.'
      }, {
        target: '.navbar-fuzzy-search',
        content: 'Try fuzzy search to visit pages in flash.'
      }, {
        target: '.customizer-btn',
        content: 'Customize template based on your preference',
        params: {
          placement: 'left'
        }
      }, {
        target: '.vs-button.buy-now',
        content: 'Buy this awesomeness at affordable price!',
        params: {
          placement: 'top'
        }
      }]
    };
  },
  watch: {
    "$route": function $route() {
      this.routeTitle = this.$route.meta.pageTitle;
    },
    isThemeDark: function isThemeDark(val) {
      var color = this.navbarColor == "#fff" && val ? "#10163a" : "#fff";
      this.updateNavbarColor(color);
    },
    "$store.state.mainLayoutType": function $storeStateMainLayoutType(val) {
      this.setNavMenuVisibility(val);
      this.disableThemeTour = true;
    }
  },
  computed: {
    bodyOverlay: function bodyOverlay() {
      return this.$store.state.bodyOverlay;
    },
    contentAreaClass: function contentAreaClass() {
      if (this.mainLayoutType === "vertical") {
        if (this.verticalNavMenuWidth == "default") return "content-area-reduced";else if (this.verticalNavMenuWidth == "reduced") return "content-area-lg";else return "content-area-full";
      } // else if(this.mainLayoutType === "boxed") return "content-area-reduced"
      else return "content-area-full";
    },
    footerClasses: function footerClasses() {
      return {
        'footer-hidden': this.footerType == 'hidden',
        'footer-sticky': this.footerType == 'sticky',
        'footer-static': this.footerType == 'static'
      };
    },
    isAppPage: function isAppPage() {
      return this.$route.meta.no_scroll;
    },
    isThemeDark: function isThemeDark() {
      return this.$store.state.theme == 'dark';
    },
    layoutTypeClass: function layoutTypeClass() {
      return "main-".concat(this.mainLayoutType);
    },
    mainLayoutType: function mainLayoutType() {
      return this.$store.state.mainLayoutType;
    },
    navbarClasses: function navbarClasses() {
      return {
        'navbar-hidden': this.navbarType == 'hidden',
        'navbar-sticky': this.navbarType == 'sticky',
        'navbar-static': this.navbarType == 'static',
        'navbar-floating': this.navbarType == 'floating'
      };
    },
    verticalNavMenuWidth: function verticalNavMenuWidth() {
      return this.$store.state.verticalNavMenuWidth;
    },
    windowWidth: function windowWidth() {
      return this.$store.state.windowWidth;
    }
  },
  methods: {
    changeRouteTitle: function changeRouteTitle(title) {
      this.routeTitle = title;
    },
    updateNavbar: function updateNavbar(val) {
      if (val == "static") this.updateNavbarColor(this.isThemeDark ? "#10163a" : "#fff");
      this.navbarType = val;
    },
    updateNavbarColor: function updateNavbarColor(val) {
      this.navbarColor = val;
      if (val == "#fff") this.isNavbarDark = false;else this.isNavbarDark = true;
    },
    updateFooter: function updateFooter(val) {
      this.footerType = val;
    },
    updateRouterTransition: function updateRouterTransition(val) {
      this.routerTransition = val;
    },
    setNavMenuVisibility: function setNavMenuVisibility(layoutType) {
      if (layoutType === 'horizontal' && this.windowWidth >= 1200 || layoutType === "vertical" && this.windowWidth < 1200) {
        this.$store.commit('TOGGLE_IS_VERTICAL_NAV_MENU_ACTIVE', false);
        this.$store.dispatch('updateVerticalNavMenuWidth', 'no-nav-menu');
      } else {
        this.$store.commit('TOGGLE_IS_VERTICAL_NAV_MENU_ACTIVE', true);
      }
    },
    toggleHideScrollToTop: function toggleHideScrollToTop(val) {
      this.hideScrollToTop = val;
    }
  },
  created: function created() {
    var _this = this;

    this.$vs.theme({
      primary: '#9D2E2E',
      success: '#28C76F',
      danger: '#EA5455',
      warning: '#FF9F43',
      dark: '#313131'
    });
    var color = this.navbarColor == "#fff" && this.isThemeDark ? "#10163a" : this.navbarColor;
    this.updateNavbarColor(color);
    this.setNavMenuVisibility(this.$store.state.mainLayoutType); // Dynamic Watchers for tour
    // Reason: Once tour is disabled it is not required to enable it.
    // So, watcher is required for just disabling it.

    this.dynamicWatchers.windowWidth = this.$watch("$store.state.windowWidth", function (val) {
      if (val < 1200) {
        _this.disableThemeTour = true;

        _this.dynamicWatchers.windowWidth();
      }
    });
    this.dynamicWatchers.verticalNavMenuWidth = this.$watch("$store.state.verticalNavMenuWidth", function () {
      _this.disableThemeTour = true;

      _this.dynamicWatchers.verticalNavMenuWidth();
    });
    this.dynamicWatchers.rtl = this.$watch("$vs.rtl", function () {
      _this.disableThemeTour = true;

      _this.dynamicWatchers.rtl();
    });
  },
  beforeDestroy: function beforeDestroy() {
    var _this2 = this;

    Object.keys(this.dynamicWatchers).map(function (i) {
      _this2.dynamicWatchers[i]();

      delete _this2.dynamicWatchers[i];
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/datum/layouts/components/EmailNow.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/datum/layouts/components/EmailNow.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
  name: "email-now"
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/datum/layouts/components/FilterDropDown.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/datum/layouts/components/FilterDropDown.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
  components: {},
  data: function data() {
    return {
      customFilters: [{
        index: 0,
        title: 'Market Cap',
        category: 'primary'
      }, {
        index: 1,
        title: '< 10m',
        category: 'item'
      }, {
        index: 2,
        title: '11m - 100m',
        category: 'item'
      }, {
        index: 3,
        title: '101m - 500m',
        category: 'item'
      }, {
        index: 4,
        title: '> 501m',
        category: 'item'
      }, {
        index: 5,
        title: 'Maximum Supply',
        category: 'primary'
      }, {
        index: 6,
        title: '< 500,000',
        category: 'item'
      }, {
        index: 7,
        title: '500,000 - 10m',
        category: 'item'
      }, {
        index: 8,
        title: '10m - 100m',
        category: 'item'
      }, {
        index: 9,
        title: '> 100m',
        category: 'item'
      }, {
        index: 10,
        title: 'Calculating Supply % of Max',
        category: 'primary'
      }, {
        index: 11,
        title: '< 10%',
        category: 'item'
      }, {
        index: 12,
        title: '11% - 50%',
        category: 'item'
      }, {
        index: 13,
        title: '51% - 75%',
        category: 'item'
      }, {
        index: 14,
        title: '> 75%',
        category: 'item'
      }],
      settings: {
        maxScrollbarLength: 60,
        wheelSpeed: .60
      }
    };
  },
  methods: {
    elapsedTime: function elapsedTime(startTime) {
      var x = new Date(startTime);
      var now = new Date();
      var timeDiff = now - x;
      timeDiff /= 1000;
      var seconds = Math.round(timeDiff);
      timeDiff = Math.floor(timeDiff / 60);
      var minutes = Math.round(timeDiff % 60);
      timeDiff = Math.floor(timeDiff / 60);
      var hours = Math.round(timeDiff % 24);
      timeDiff = Math.floor(timeDiff / 24);
      var days = Math.round(timeDiff % 365);
      timeDiff = Math.floor(timeDiff / 365);
      var years = timeDiff;

      if (years > 0) {
        return years + (years > 1 ? ' Years ' : ' Year ') + 'ago';
      } else if (days > 0) {
        return days + (days > 1 ? ' Days ' : ' Day ') + 'ago';
      } else if (hours > 0) {
        return hours + (hours > 1 ? ' Hrs ' : ' Hour ') + 'ago';
      } else if (minutes > 0) {
        return minutes + (minutes > 1 ? ' Mins ' : ' Min ') + 'ago';
      } else if (seconds > 0) {
        return seconds + (seconds > 1 ? ' sec ago' : 'just now');
      }

      return 'Just Now';
    },
    // Method for creating dummy notification time
    randomDate: function randomDate(_ref) {
      var hr = _ref.hr,
          min = _ref.min,
          sec = _ref.sec;
      var date = new Date();
      if (hr) date.setHours(date.getHours() - hr);
      if (min) date.setMinutes(date.getMinutes() - min);
      if (sec) date.setSeconds(date.getSeconds() - sec);
      return date;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/datum/layouts/components/I18n.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/datum/layouts/components/I18n.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
  computed: {
    i18n_locale_img: function i18n_locale_img() {
      var locale = this.$i18n.locale;
      if (locale == "uk") return __webpack_require__(/*! @assets/images/flags/uk.png */ "./resources/assets/images/flags/uk.png");else if (locale == "en") return __webpack_require__(/*! @assets/images/flags/en.png */ "./resources/assets/images/flags/en.png");else if (locale == "pt") return __webpack_require__(/*! @assets/images/flags/pt.png */ "./resources/assets/images/flags/pt.png");else if (locale == "fr") return __webpack_require__(/*! @assets/images/flags/fr.png */ "./resources/assets/images/flags/fr.png");else if (locale == "de") return __webpack_require__(/*! @assets/images/flags/de.png */ "./resources/assets/images/flags/de.png");else return __webpack_require__(/*! @assets/images/flags/en.png */ "./resources/assets/images/flags/en.png");
    },
    getCurrentLocaleData: function getCurrentLocaleData() {
      var locale = this.$i18n.locale;
      if (locale == "uk") return {
        flag: "us",
        lang: 'English'
      };else if (locale == "en") return {
        flag: "br",
        lang: 'English'
      };else if (locale == "pt") return {
        flag: "br",
        lang: 'Portuguese'
      };else if (locale == "fr") return {
        flag: "fr",
        lang: 'French'
      };else if (locale == "de") return {
        flag: "de",
        lang: 'German'
      };
    }
  },
  methods: {
    updateLocale: function updateLocale(locale) {
      this.$i18n.locale = locale;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/datum/layouts/components/SearchBar.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/datum/layouts/components/SearchBar.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_vx_auto_suggest_VxAutoSuggest_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/components/vx-auto-suggest/VxAutoSuggest.vue */ "./resources/js/src/components/vx-auto-suggest/VxAutoSuggest.vue");
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
  name: 'search-bar',
  components: {
    VxAutoSuggest: _components_vx_auto_suggest_VxAutoSuggest_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      navbarSearchAndPinList: this.$store.state.navbarSearchAndPinList,
      showFullSearch: true
    };
  },
  computed: {
    get_ext_img: function get_ext_img() {
      return function (ext) {
        if (ext == "doc") return __webpack_require__(/*! @assets/images/file-icons/doc.png */ "./resources/assets/images/file-icons/doc.png");else if (ext == "jpg") return __webpack_require__(/*! @assets/images/file-icons/jpg.png */ "./resources/assets/images/file-icons/jpg.png");else if (ext == "xls") return __webpack_require__(/*! @assets/images/file-icons/xls.png */ "./resources/assets/images/file-icons/xls.png");else if (ext == "pdf") return __webpack_require__(/*! @assets/images/file-icons/pdf.png */ "./resources/assets/images/file-icons/pdf.png");else return __webpack_require__(/*! @assets/images/file-icons/doc.png */ "./resources/assets/images/file-icons/doc.png");
      };
    }
  },
  methods: {
    selected: function selected(item) {
      item.pages ? this.$router.push(item.pages.url).catch(function () {}) : null;
      this.showFullSearch = true;
    },
    hnd_search_query_update: function hnd_search_query_update(query) {
      // Show overlay if any character is entered
      this.$store.commit('TOGGLE_CONTENT_OVERLAY', query ? true : false);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/datum/layouts/components/TheFooter.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/datum/layouts/components/TheFooter.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _datum_layouts_components_EmailNow_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/datum/layouts/components/EmailNow.vue */ "./resources/js/src/datum/layouts/components/EmailNow.vue");
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
  name: "the-footer",
  props: {
    classes: {
      type: String
    }
  },
  inject: {
    components: {
      default: {
        EmailNow: _datum_layouts_components_EmailNow_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/datum/layouts/components/navbar/HorizontalDetailMenu.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/datum/layouts/components/navbar/HorizontalDetailMenu.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-select */ "./node_modules/vue-select/dist/vue-select.js");
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_select__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _datum_layouts_components_FilterDropDown_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/datum/layouts/components/FilterDropDown.vue */ "./resources/js/src/datum/layouts/components/FilterDropDown.vue");
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
  props: {
    //navbarColor  : { type: String, default: "#fff", },
    //navMenuItems : { type: Array,  required: false   },
    isCoins: true,
    isTokens: false
  },
  components: {
    'v-select': vue_select__WEBPACK_IMPORTED_MODULE_0___default.a,
    FilterDropDown: _datum_layouts_components_FilterDropDown_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  computed: {
    navbarColor: function navbarColor() {
      return this.$store.state.theme === "dark" ? "#10163a" : "#fff";
    }
  },
  data: function data() {
    return {
      currency: "USD",
      currencies: [{
        currency: "USD"
      }, {
        currency: "GBP"
      }, {
        currency: "EUR"
      }]
    };
  },
  methods: {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/datum/layouts/components/navbar/HorizontalNavMenu.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/datum/layouts/components/navbar/HorizontalNavMenu.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _layouts_components_horizontal_nav_menu_HorizontalNavMenuGroup_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/layouts/components/horizontal-nav-menu/HorizontalNavMenuGroup.vue */ "./resources/js/src/layouts/components/horizontal-nav-menu/HorizontalNavMenuGroup.vue");
/* harmony import */ var _layouts_components_horizontal_nav_menu_HorizontalNavMenuHeader_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/layouts/components/horizontal-nav-menu/HorizontalNavMenuHeader.vue */ "./resources/js/src/layouts/components/horizontal-nav-menu/HorizontalNavMenuHeader.vue");
/* harmony import */ var _datum_layouts_components_navbar_HorizontalNavMenuItem_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/datum/layouts/components/navbar/HorizontalNavMenuItem.vue */ "./resources/js/src/datum/layouts/components/navbar/HorizontalNavMenuItem.vue");
/* harmony import */ var _datum_layouts_components_SearchBar_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/datum/layouts/components/SearchBar.vue */ "./resources/js/src/datum/layouts/components/SearchBar.vue");
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
  props: {
    // navbarColor  : { type: String, default: "#fff", },
    navMenuItems: {
      type: Array,
      required: true
    }
  },
  components: {
    HNavMenuGroup: _layouts_components_horizontal_nav_menu_HorizontalNavMenuGroup_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    HNavMenuHeader: _layouts_components_horizontal_nav_menu_HorizontalNavMenuHeader_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    HNavMenuItem: _datum_layouts_components_navbar_HorizontalNavMenuItem_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    SearchBar: _datum_layouts_components_SearchBar_vue__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  computed: {
    navbarColor: function navbarColor() {
      //return this.$store.state.theme === "dark" ? "#10163a" : "#fff"
      return "#3A3A3A";
    }
  },
  methods: {
    checkGrpChildrenActive: function checkGrpChildrenActive(group) {
      var _this = this;

      var path = this.$route.fullPath;
      var active = false;
      var routeParent = this.$route.meta ? this.$route.meta.parent : undefined;

      if (group.submenu) {
        group.submenu.forEach(function (item) {
          if (active) return true;

          if ((path == item.url || routeParent == item.slug) && item.url) {
            active = true;
          } else if (item.submenu) {
            _this.checkGrpChildrenActive(item);
          }
        });
      }

      return active;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/datum/layouts/components/navbar/HorizontalNavMenuItem.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/datum/layouts/components/navbar/HorizontalNavMenuItem.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
  name: 'v-nav-menu-item',
  props: {
    icon: {
      type: String,
      default: ""
    },
    iconSmall: {
      type: Boolean,
      default: false
    },
    iconPack: {
      type: String,
      default: 'material-icons'
    },
    href: {
      type: [String, null],
      default: '#'
    },
    to: {
      type: [String, Object, null],
      default: null
    },
    slug: {
      type: String,
      default: null
    },
    index: {
      type: [String, Number],
      default: null
    },
    featherIcon: {
      type: Boolean,
      default: false
    },
    target: {
      type: String,
      default: '_self'
    },
    isDisabled: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    iconClasses: function iconClasses() {
      return this.iconSmall ? 'w-3 h-3 mr-3' : 'w-5 h-5 mr-3';
    },
    canSee: function canSee() {
      this.$acl.check(this.$store.state.AppActiveUser.userRole);
      return this.to ? this.$acl.check(this.$router.match(this.to).meta.rule) : true;
    },
    activeLink: function activeLink() {
      //console.log("to: " + this.to);
      //console.log("path: " + this.$route.path);
      //console.log("slug: " + this.slug);
      //console.log("parent: " + this.$route.meta.parent);
      return this.to == this.$route.path || this.$route.meta.parent == this.slug && this.to ? true : false;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/datum/layouts/components/navbar/TheNavbarHorizontal.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/datum/layouts/components/navbar/TheNavbarHorizontal.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _datum_layouts_components_I18n_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/datum/layouts/components/I18n.vue */ "./resources/js/src/datum/layouts/components/I18n.vue");
/* harmony import */ var _datum_layouts_Logo_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/datum/layouts/Logo.vue */ "./resources/js/src/datum/layouts/Logo.vue");
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
  name: "the-navbar-horizontal",
  props: {
    logo: {
      type: String
    },
    navbarType: {
      type: String,
      required: true
    }
  },
  components: {
    Logo: _datum_layouts_Logo_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    I18n: _datum_layouts_components_I18n_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  computed: {
    navbarColor: function navbarColor() {
      var color = "#313131";
      if (this.navbarType === "sticky") color = "#313131";else if (this.navbarType === 'static') {
        if (this.scrollY < 50) {
          //color = "#f7f7f7"
          color = "#313131";
        }
      }
      this.isThemedark === "dark" ? color === "#fff" ? color = "#10163a" : color = "#262c49" : null;
      return color;
    },
    isThemedark: function isThemedark() {
      return this.$store.state.theme;
    },
    navbarStyle: function navbarStyle() {
      return this.navbarType === "static" ? {
        transition: "all .25s ease-in-out"
      } : {};
    },
    //navbarClasses()        { return this.scrollY > 5 && this.navbarType === "static" ? null : "d-theme-dark-light-bg shadow-none" },
    navbarClasses: function navbarClasses() {
      return this.navbarType === "static" ? null : "d-theme-dark-light-bg shadow-none";
    },
    // Maxim
    scrollY: function scrollY() {
      return this.$store.state.scrollY;
    },
    verticalNavMenuWidth: function verticalNavMenuWidth() {
      return this.$store.state.verticalNavMenuWidth;
    },
    windowWidth: function windowWidth() {
      return this.$store.state.windowWidth;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/datum/layouts/components/navbar/TheNavbarVertical.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/datum/layouts/components/navbar/TheNavbarVertical.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _datum_layouts_components_I18n_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/datum/layouts/components/I18n.vue */ "./resources/js/src/datum/layouts/components/I18n.vue");
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
  name: "the-navbar-vertical",
  props: {
    navbarColor: {
      type: String,
      default: "#fff"
    }
  },
  components: {
    I18n: _datum_layouts_components_I18n_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  computed: {
    navbarColorLocal: function navbarColorLocal() {
      //return this.$store.state.theme === "dark" && this.navbarColor === "#fff" ? "#10163a" : this.navbarColor
      return "#313131";
    },
    verticalNavMenuWidth: function verticalNavMenuWidth() {
      return this.$store.state.verticalNavMenuWidth;
    },
    textColor: function textColor() {
      return {
        'text-white': this.navbarColor != '#10163a' && this.$store.state.theme === 'dark' || this.navbarColor != '#fff' && this.$store.state.theme !== 'dark'
      };
    },
    windowWidth: function windowWidth() {
      return this.$store.state.windowWidth;
    },
    // NAVBAR STYLE
    classObj: function classObj() {
      if (this.verticalNavMenuWidth == "default") return "navbar-default";else if (this.verticalNavMenuWidth == "reduced") return "navbar-reduced";else if (this.verticalNavMenuWidth) return "navbar-full";
    }
  },
  methods: {
    showSidebar: function showSidebar() {
      this.$store.commit('TOGGLE_IS_VERTICAL_NAV_MENU_ACTIVE', true);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/datum/layouts/components/navbar/VerticalNavMenu.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/datum/layouts/components/navbar/VerticalNavMenu.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-perfect-scrollbar */ "./node_modules/vue-perfect-scrollbar/dist/index.js");
/* harmony import */ var vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _layouts_components_vertical_nav_menu_VerticalNavMenuGroup_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/layouts/components/vertical-nav-menu/VerticalNavMenuGroup.vue */ "./resources/js/src/layouts/components/vertical-nav-menu/VerticalNavMenuGroup.vue");
/* harmony import */ var _datum_layouts_components_navbar_VerticalNavMenuItem_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/datum/layouts/components/navbar/VerticalNavMenuItem.vue */ "./resources/js/src/datum/layouts/components/navbar/VerticalNavMenuItem.vue");
/* harmony import */ var _datum_layouts_Logo_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/datum/layouts/Logo.vue */ "./resources/js/src/datum/layouts/Logo.vue");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

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
  name: 'v-nav-menu',
  components: {
    VNavMenuGroup: _layouts_components_vertical_nav_menu_VerticalNavMenuGroup_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    VNavMenuItem: _datum_layouts_components_navbar_VerticalNavMenuItem_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    VuePerfectScrollbar: vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_0___default.a,
    Logo: _datum_layouts_Logo_vue__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  props: {
    logo: {
      type: String
    },
    openGroupHover: {
      type: Boolean,
      default: false
    },
    parent: {
      type: String
    },
    reduceNotRebound: {
      type: Boolean,
      default: true
    },
    navMenuItems: {
      type: Array,
      required: true
    },
    title: {
      type: String
    }
  },
  data: function data() {
    return {
      clickNotClose: false,
      // disable close navMenu on outside click
      isMouseEnter: false,
      reduce: false,
      // determines if navMenu is reduce - component property
      showCloseButton: false,
      // show close button in smaller devices
      settings: {
        // perfectScrollbar settings
        maxScrollbarLength: 60,
        wheelSpeed: 1,
        swipeEasing: true
      },
      showShadowBottom: false
    };
  },
  computed: {
    isGroupActive: function isGroupActive() {
      var _this = this;

      return function (item) {
        var path = _this.$route.fullPath;
        var routeParent = _this.$route.meta ? _this.$route.meta.parent : undefined;
        var open = false;

        var func = function func(item) {
          if (item.submenu) {
            item.submenu.forEach(function (item) {
              if (item.url && (path === item.url || routeParent === item.slug)) {
                open = true;
              } else if (item.submenu) {
                func(item);
              }
            });
          }
        };

        func(item);
        return open;
      };
    },
    menuItemsUpdated: function menuItemsUpdated() {
      var clone = this.navMenuItems.slice();
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        var _loop = function _loop() {
          var _step$value = _slicedToArray(_step.value, 2),
              index = _step$value[0],
              item = _step$value[1];

          if (item.header && item.items.length && (index || 1)) {
            var i = clone.findIndex(function (ix) {
              return ix.header === item.header;
            });
            var _iteratorNormalCompletion2 = true;
            var _didIteratorError2 = false;
            var _iteratorError2 = undefined;

            try {
              for (var _iterator2 = item.items.entries()[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                var _step2$value = _slicedToArray(_step2.value, 2),
                    subIndex = _step2$value[0],
                    subItem = _step2$value[1];

                clone.splice(i + 1 + subIndex, 0, subItem);
              }
            } catch (err) {
              _didIteratorError2 = true;
              _iteratorError2 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
                  _iterator2.return();
                }
              } finally {
                if (_didIteratorError2) {
                  throw _iteratorError2;
                }
              }
            }
          }
        };

        for (var _iterator = this.navMenuItems.entries()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          _loop();
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return != null) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      return clone;
    },
    isVerticalNavMenuActive: {
      get: function get() {
        return this.$store.state.isVerticalNavMenuActive;
      },
      set: function set(val) {
        this.$store.commit('TOGGLE_IS_VERTICAL_NAV_MENU_ACTIVE', val);
      }
    },
    layoutType: function layoutType() {
      return this.$store.state.mainLayoutType;
    },
    reduceButton: {
      get: function get() {
        return this.$store.state.reduceButton;
      },
      set: function set(val) {
        this.$store.commit('TOGGLE_REDUCE_BUTTON', val);
      }
    },
    isVerticalNavMenuReduced: function isVerticalNavMenuReduced() {
      return Boolean(this.reduce && this.reduceButton);
    },
    verticalNavMenuItemsMin: function verticalNavMenuItemsMin() {
      return this.$store.state.verticalNavMenuItemsMin;
    },
    windowWidth: function windowWidth() {
      return this.$store.state.windowWidth;
    }
  },
  watch: {
    '$route': function $route() {
      if (this.isVerticalNavMenuActive && this.showCloseButton) this.$store.commit('TOGGLE_IS_VERTICAL_NAV_MENU_ACTIVE', false);
    },
    reduce: function reduce(val) {
      var verticalNavMenuWidth = val ? "reduced" : this.$store.state.windowWidth < 1200 ? "no-nav-menu" : "default";
      this.$store.dispatch('updateVerticalNavMenuWidth', verticalNavMenuWidth);
      setTimeout(function () {
        window.dispatchEvent(new Event('resize'));
      }, 100);
    },
    layoutType: function layoutType() {
      this.setVerticalNavMenuWidth();
    },
    reduceButton: function reduceButton() {
      this.setVerticalNavMenuWidth();
    },
    windowWidth: function windowWidth() {
      this.setVerticalNavMenuWidth();
    }
  },
  methods: {
    // handleWindowResize(event) {
    //   this.windowWidth = event.currentTarget.innerWidth;
    //   this.setVerticalNavMenuWidth()
    // },
    onSwipeLeft: function onSwipeLeft() {
      if (this.isVerticalNavMenuActive && this.showCloseButton) this.isVerticalNavMenuActive = false;
    },
    onSwipeAreaSwipeRight: function onSwipeAreaSwipeRight() {
      if (!this.isVerticalNavMenuActive && this.showCloseButton) this.isVerticalNavMenuActive = true;
    },
    psSectionScroll: function psSectionScroll() {
      this.showShadowBottom = this.$refs.verticalNavMenuPs.$el.scrollTop > 0 ? true : false;
    },
    mouseEnter: function mouseEnter() {
      if (this.reduce) this.$store.commit('UPDATE_VERTICAL_NAV_MENU_ITEMS_MIN', false);
      this.isMouseEnter = true;
    },
    mouseLeave: function mouseLeave() {
      if (this.reduce) this.$store.commit('UPDATE_VERTICAL_NAV_MENU_ITEMS_MIN', true);
      this.isMouseEnter = false;
    },
    setVerticalNavMenuWidth: function setVerticalNavMenuWidth() {
      if (this.windowWidth > 1200) {
        if (this.layoutType === 'vertical') {
          // Set reduce
          this.reduce = this.reduceButton ? true : false; // Open NavMenu

          this.$store.commit('TOGGLE_IS_VERTICAL_NAV_MENU_ACTIVE', true); // Set Menu Items Only Icon Mode

          var verticalNavMenuItemsMin = this.reduceButton && !this.isMouseEnter ? true : false;
          this.$store.commit('UPDATE_VERTICAL_NAV_MENU_ITEMS_MIN', verticalNavMenuItemsMin); // Menu Action buttons

          this.clickNotClose = true;
          this.showCloseButton = false;
          var verticalNavMenuWidth = this.isVerticalNavMenuReduced ? "reduced" : "default";
          this.$store.dispatch('updateVerticalNavMenuWidth', verticalNavMenuWidth);
          return;
        }
      } // Close NavMenu


      this.$store.commit('TOGGLE_IS_VERTICAL_NAV_MENU_ACTIVE', false); // Reduce button

      if (this.reduceButton) this.reduce = false; // Menu Action buttons

      this.showCloseButton = true;
      this.clickNotClose = false; // Update NavMenu Width

      this.$store.dispatch('updateVerticalNavMenuWidth', 'no-nav-menu'); // Remove Only Icon in Menu

      this.$store.commit('UPDATE_VERTICAL_NAV_MENU_ITEMS_MIN', false); // if(this.layoutType === 'vertical' || (this.layoutType === 'horizontal' && this.windowWidth < 1200))
      // if (this.windowWidth < 1200) {
      //   // Close NavMenu
      //   this.$store.commit('TOGGLE_IS_VERTICAL_NAV_MENU_ACTIVE', false)
      //   // Reduce button
      //   if (this.reduceButton) this.reduce = false
      //   // Menu Action buttons
      //   this.showCloseButton = true
      //   this.clickNotClose   = false
      //   // Update NavMenu Width
      //   this.$store.dispatch('updateVerticalNavMenuWidth', 'no-nav-menu')
      //   // Remove Only Icon in Menu
      //   this.$store.commit('UPDATE_VERTICAL_NAV_MENU_ITEMS_MIN', false)
      // } else {
      //   // Set reduce
      //   this.reduce = this.reduceButton ? true : false
      //   // Open NavMenu
      //   this.$store.commit('TOGGLE_IS_VERTICAL_NAV_MENU_ACTIVE', true)
      //   // Set Menu Items Only Icon Mode
      //   const verticalNavMenuItemsMin = (this.reduceButton && !this.isMouseEnter) ? true : false
      //   this.$store.commit('UPDATE_VERTICAL_NAV_MENU_ITEMS_MIN', verticalNavMenuItemsMin)
      //   // Menu Action buttons
      //   this.clickNotClose   = true
      //   this.showCloseButton = false
      //   const verticalNavMenuWidth   = this.isVerticalNavMenuReduced ? "reduced" : "default"
      //   this.$store.dispatch('updateVerticalNavMenuWidth', verticalNavMenuWidth)
      // }
    },
    toggleReduce: function toggleReduce(val) {
      this.reduceButton = val;
      this.setVerticalNavMenuWidth();
    }
  },
  mounted: function mounted() {
    this.setVerticalNavMenuWidth();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/datum/layouts/components/navbar/VerticalNavMenuItem.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/datum/layouts/components/navbar/VerticalNavMenuItem.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
  name: 'v-nav-menu-item',
  props: {
    icon: {
      type: String,
      default: ""
    },
    iconSmall: {
      type: Boolean,
      default: false
    },
    iconPack: {
      type: String,
      default: 'material-icons'
    },
    href: {
      type: [String, null],
      default: '#'
    },
    to: {
      type: [String, Object, null],
      default: null
    },
    slug: {
      type: String,
      default: null
    },
    index: {
      type: [String, Number],
      default: null
    },
    featherIcon: {
      type: Boolean,
      default: false
    },
    target: {
      type: String,
      default: '_self'
    },
    isDisabled: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    canSee: function canSee() {
      this.$acl.check(this.$store.state.AppActiveUser.userRole);
      return this.to ? this.$acl.check(this.$router.match(this.to).meta.rule) : true;
    },
    activeLink: function activeLink() {
      //console.log("to: " + this.to);
      //console.log("path: " + this.$route.path);
      //console.log("slug: " + this.slug);
      //console.log("parent: " + this.$route.meta.parent);
      return this.to == this.$route.path || this.$route.meta.parent == this.slug && this.to ? true : false;
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/datum/layouts/Main.vue?vue&type=style&index=0&lang=scss&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/datum/layouts/Main.vue?vue&type=style&index=0&lang=scss& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "[dir] .router-content {\n  margin-bottom: 30px !important;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/datum/layouts/components/EmailNow.vue?vue&type=style&index=0&lang=scss&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/datum/layouts/components/EmailNow.vue?vue&type=style&index=0&lang=scss& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".email-now {\n  position: fixed;\n  bottom: 2%;\n  z-index: 51000;\n}[dir=ltr] .email-now {\n  right: 30px;\n}[dir=rtl] .email-now {\n  left: 30px;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/datum/layouts/components/FilterDropDown.vue?vue&type=style&index=0&lang=scss&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/datum/layouts/components/FilterDropDown.vue?vue&type=style&index=0&lang=scss& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "[dir=ltr] .filter-icon {\n  margin-right: 5px !important;\n}[dir=rtl] .filter-icon {\n  margin-left: 5px !important;\n}\n[dir=ltr] .more-filters {\n  margin-right: 30px !important;\n}\n[dir=rtl] .more-filters {\n  margin-left: 30px !important;\n}\n[dir] .filter-item {\n  border-bottom: none !important;\n}\n[dir=ltr] .filter-item .con-slot-label {\n  margin-left: 20px !important;\n}\n[dir=rtl] .filter-item .con-slot-label {\n  margin-right: 20px !important;\n}\n.filter-header {\n  color: inherit !important;\n  font-weight: 400 !important;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/datum/layouts/components/TheFooter.vue?vue&type=style&index=0&lang=scss&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/datum/layouts/components/TheFooter.vue?vue&type=style&index=0&lang=scss& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".the-footer {\n  z-index: 100000 !important;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/datum/layouts/components/navbar/HorizontalDetailMenu.vue?vue&type=style&index=0&lang=scss&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/datum/layouts/components/navbar/HorizontalDetailMenu.vue?vue&type=style&index=0&lang=scss& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "[dir=ltr] .detail-item {\n  margin-right: 20px;\n}[dir=rtl] .detail-item {\n  margin-left: 20px;\n}\n.vs__clear {\n  display: none;\n}\n[dir] .v-select {\n  padding: 10px 0px;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/datum/layouts/components/navbar/HorizontalDetailMenu.vue?vue&type=style&index=1&lang=scss&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/datum/layouts/components/navbar/HorizontalDetailMenu.vue?vue&type=style&index=1&lang=scss& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*=========================================================================================\n    File Name: _variables.scss\n    Description: partial- SCSS varibales\n    ----------------------------------------------------------------------------------------\n    Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template\n      Author: Pixinvent\n    Author URL: http://www.themeforest.net/user/pixinvent\n==========================================================================================*/\n\n/*========================================================\n        SPACING\n=========================================================*/\n\n/*========================================================\n        COLORS\n=========================================================*/\n\n/*========================================================\n        TYPOGRAPHY\n=========================================================*/\n\n/*========================================================\n        TYPOGRAPHY\n=========================================================*/\n\n/*========================================================\n        DARK THEME\n=========================================================*/\n.menu-item .nav-link {\n  color: inherit;\n}\n.menu-item .disabled-item span {\n  color: #e2e2e2;\n}\n[dir] .h-nav-menu-dd {\n  background-color: #fff;\n}\n\n/* DARK THEME */\n[dir] .theme-dark .h-nav-menu-dd {\n  background-color: #262c49;\n  box-shadow: 0px 0px 30px #0f163a !important;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/datum/layouts/components/navbar/HorizontalNavMenu.vue?vue&type=style&index=0&lang=scss&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/datum/layouts/components/navbar/HorizontalNavMenu.vue?vue&type=style&index=0&lang=scss& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*=========================================================================================\n    File Name: _variables.scss\n    Description: partial- SCSS varibales\n    ----------------------------------------------------------------------------------------\n    Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template\n      Author: Pixinvent\n    Author URL: http://www.themeforest.net/user/pixinvent\n==========================================================================================*/\n\n/*========================================================\n        SPACING\n=========================================================*/\n\n/*========================================================\n        COLORS\n=========================================================*/\n\n/*========================================================\n        TYPOGRAPHY\n=========================================================*/\n\n/*========================================================\n        TYPOGRAPHY\n=========================================================*/\n\n/*========================================================\n        DARK THEME\n=========================================================*/\n.py-datum {\n  color: #ffffff;\n}\n[dir] .py-datum {\n  padding: 0px !important;\n}\n.menu-item .nav-link {\n  color: inherit;\n}\n.menu-item .disabled-item span {\n  color: #e2e2e2;\n}\n[dir] .h-nav-menu-dd {\n  background-color: #fff;\n}\n\n/* DARK THEME */\n[dir] .theme-dark .h-nav-menu-dd {\n  background-color: #262c49;\n  box-shadow: 0px 0px 30px #0f163a !important;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/datum/layouts/components/navbar/HorizontalNavMenuItem.vue?vue&type=style&index=0&lang=scss&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/datum/layouts/components/navbar/HorizontalNavMenuItem.vue?vue&type=style&index=0&lang=scss& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*=========================================================================================\n    File Name: _variables.scss\n    Description: partial- SCSS varibales\n    ----------------------------------------------------------------------------------------\n    Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template\n      Author: Pixinvent\n    Author URL: http://www.themeforest.net/user/pixinvent\n==========================================================================================*/\n\n/*========================================================\n        SPACING\n=========================================================*/\n\n/*========================================================\n        COLORS\n=========================================================*/\n\n/*========================================================\n        TYPOGRAPHY\n=========================================================*/\n\n/*========================================================\n        TYPOGRAPHY\n=========================================================*/\n\n/*========================================================\n        DARK THEME\n=========================================================*/\n[dir] .menu-item li .h-nav-menu-item a {\n  padding: 0.75rem 1.5rem;\n}\n.menu-item li .h-nav-menu-item > * {\n  -webkit-transition: 0.25s ease-in-out;\n  transition: 0.25s ease-in-out;\n}\n[dir=ltr] .menu-item li .h-nav-menu-item > *:hover {\n  -webkit-transform: translateX(5px);\n          transform: translateX(5px);\n}\n[dir=rtl] .menu-item li .h-nav-menu-item > *:hover {\n  -webkit-transform: translateX(-5px);\n          transform: translateX(-5px);\n}\n[dir] .menu-item li .h-nav-menu-item.h-nav-active-item {\n  background-color: #f6f6f6;\n}\n[dir] .theme-dark .menu-item li .h-nav-menu-item.h-nav-active-item {\n  background-color: #10163a;\n}\n[dir] .menu-link .h-nav-menu-item:hover .nav-link {\n  background: #9d2e2e;\n}\n[dir] .theme-dark .menu-link .h-nav-menu-item:hover .nav-link {\n  background: #262c49;\n}\n.menu-link .h-nav-menu-item.h-nav-active-item a {\n  text-decoration: underline;\n}\n[dir] .menu-link .h-nav-menu-item.h-nav-active-item a {\n  background: #9d2e2e !important;\n}\n[dir] .menu-link .h-nav-menu-item a {\n  border-radius: 0px;\n  padding: 1.5rem 3rem;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/datum/layouts/components/navbar/VerticalNavMenu.vue?vue&type=style&index=0&lang=scss&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/datum/layouts/components/navbar/VerticalNavMenu.vue?vue&type=style&index=0&lang=scss& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*=========================================================================================\n  File Name: verticalNavMenu.scss\n  Description: Styles for v-nav-menu component. Imported in VerticalNavMenu.vue file\n  ----------------------------------------------------------------------------------------\n  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template\n  Author: Pixinvent\n  Author URL: http://www.themeforest.net/user/pixinvent\n==========================================================================================*/\n\n/*=========================================================================================\n    File Name: _variables.scss\n    Description: partial- SCSS varibales\n    ----------------------------------------------------------------------------------------\n    Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template\n      Author: Pixinvent\n    Author URL: http://www.themeforest.net/user/pixinvent\n==========================================================================================*/\n\n/*========================================================\n        SPACING\n=========================================================*/\n\n/*========================================================\n        COLORS\n=========================================================*/\n\n/*========================================================\n        TYPOGRAPHY\n=========================================================*/\n\n/*========================================================\n        TYPOGRAPHY\n=========================================================*/\n\n/*========================================================\n        DARK THEME\n=========================================================*/\n.v-nav-menu-swipe-area {\n  position: fixed;\n  height: calc(var(--vh, 1vh) * 100);\n  width: 30px;\n  z-index: 1;\n  top: 0;\n}\n[dir] .v-nav-menu-swipe-area {\n  background: transparent;\n}\n[dir=ltr] .v-nav-menu-swipe-area {\n  left: 0;\n}\n[dir=rtl] .v-nav-menu-swipe-area {\n  right: 0;\n}\n.v-nav-menu {\n  white-space: nowrap;\n}\n.v-nav-menu .vs-sidebar--background {\n  z-index: 51000;\n}\n.v-nav-menu .vs-sidebar {\n  z-index: 51000;\n  position: fixed;\n}\n[dir] .v-nav-menu .vs-sidebar .vs-sidebar--items {\n  padding: 0;\n}\n.v-nav-menu .vs-sidebar.vs-sidebar-reduce {\n  max-width: 80px;\n}\n[dir] .v-nav-menu .vs-sidebar.vs-sidebar-reduce:hover {\n  box-shadow: 0 15px 30px 0 rgba(0, 0, 0, 0.11), 0 5px 15px 0 rgba(0, 0, 0, 0.08) !important;\n}\n.v-nav-menu .vs-sidebar.vs-sidebar-reduce:hover:not(.vs-sidebar-reduceNotRebound):not(.vs-sidebar-reduceNotHoverExpand) .vs-sidebar-group .group-header i {\n  display: block;\n}\n.v-nav-menu .vs-sidebar.vs-sidebar-reduce .vs-sidebar-group .group-header i {\n  display: none;\n}\n.v-nav-menu .header-sidebar {\n  width: 100%;\n}\n[dir=ltr] .v-nav-menu .header-sidebar {\n  padding: 20px 19px 16px 23px;\n}\n[dir=rtl] .v-nav-menu .header-sidebar {\n  padding: 20px 23px 16px 19px;\n}\n[dir] .v-nav-menu .header-sidebar .logo img {\n  padding: 4px 0;\n}\n.v-nav-menu .header-sidebar .feather-icon svg {\n  color: #9D2E2E;\n}\n.v-nav-menu .shadow-bottom {\n  position: absolute;\n  z-index: 2;\n  height: 60px;\n  width: 100%;\n  pointer-events: none;\n  -webkit-filter: blur(5px);\n          filter: blur(5px);\n}\n[dir] .v-nav-menu .shadow-bottom {\n  margin-top: -1.3rem;\n  background: -webkit-gradient(linear, left top, left bottom, color-stop(41%, white), color-stop(95%, rgba(255, 255, 255, 0.11)), to(rgba(255, 255, 255, 0)));\n  background: linear-gradient(white 41%, rgba(255, 255, 255, 0.11) 95%, rgba(255, 255, 255, 0) 100%);\n}\n.v-nav-menu .scroll-area-v-nav-menu {\n  position: relative;\n  width: 100%;\n  height: calc(var(--vh, 1vh) * 100 - 69px);\n}\n[dir] .v-nav-menu .scroll-area-v-nav-menu {\n  margin: auto;\n}\n[dir] .v-nav-menu .scroll-area-v-nav-menu > .vs-sidebar-group {\n  padding: 0 15px;\n}\n[dir] .v-nav-menu .scroll-area-v-nav-menu > .vs-sidebar--item {\n  padding: 0 15px;\n}\n.v-nav-menu .navigation-header {\n  font-size: 0.9rem;\n  display: block;\n  font-weight: 500;\n  text-transform: uppercase;\n  color: #999;\n}\n[dir] .v-nav-menu .navigation-header {\n  margin-bottom: 0.8rem;\n}\n[dir=ltr] .v-nav-menu .navigation-header {\n  margin-left: 2.2rem;\n}\n[dir=rtl] .v-nav-menu .navigation-header {\n  margin-right: 2.2rem;\n}\n[dir] .v-nav-menu .navigation-header:not(:first-child) {\n  margin-top: 2rem;\n}\n.v-nav-menu .feather-icon {\n  color: #565656;\n}\n[dir=ltr] .v-nav-menu .feather-icon {\n  margin-right: 14px;\n}\n[dir=rtl] .v-nav-menu .feather-icon {\n  margin-left: 14px;\n}\n.v-nav-menu .feather-icon .feather {\n  width: 20px;\n  height: 20px;\n}\n.v-nav-menu .con-vs-chip {\n  min-height: 24px;\n}\n[dir] .v-nav-menu .con-vs-chip {\n  box-shadow: 0px 0px 7px 3px rgba(0, 0, 0, 0.1);\n}\n.v-nav-menu .con-vs-chip .vs-chip--text {\n  color: #fff;\n  font-size: 0.8rem;\n}\n.v-nav-menu .vs-sidebar--item {\n  -webkit-transition: none;\n  transition: none;\n  overflow: visible !important;\n}\n.v-nav-menu .vs-sidebar--item:hover a {\n  color: inherit;\n}\n[dir=ltr] .v-nav-menu .vs-sidebar--item:hover a > * {\n  -webkit-transform: translateX(5px);\n          transform: translateX(5px);\n}\n[dir=rtl] .v-nav-menu .vs-sidebar--item:hover a > * {\n  -webkit-transform: translateX(-5px);\n          transform: translateX(-5px);\n}\n.v-nav-menu .vs-sidebar--item.vs-sidebar-item-active {\n  font-weight: 400;\n  z-index: 1;\n  position: relative;\n}\n[dir] .v-nav-menu .vs-sidebar--item.vs-sidebar-item-active {\n  border: none !important;\n}\n.v-nav-menu .vs-sidebar--item a {\n  font-size: 1rem;\n  -webkit-transition: none;\n  transition: none;\n  opacity: unset;\n  color: #626262;\n}\n[dir] .v-nav-menu .vs-sidebar--item a {\n  border-radius: 4px;\n  padding: 10px 15px;\n}\n.v-nav-menu .vs-sidebar--item a > * {\n  -webkit-transition: -webkit-transform 0.25s ease;\n  transition: -webkit-transform 0.25s ease;\n  transition: transform 0.25s ease;\n  transition: transform 0.25s ease, -webkit-transform 0.25s ease;\n}\n.v-nav-menu .vs-sidebar--item a span {\n  font-size: 15px;\n}\n.v-nav-menu .vs-sidebar--item.disabled-item a span {\n  color: #e2e2e2;\n}\n.theme-dark .v-nav-menu .vs-sidebar--item.disabled-item a {\n  opacity: 0.3;\n}\n.v-nav-menu .vs-sidebar--item .router-link-active {\n  font-weight: 400;\n}\n[dir] .v-nav-menu .vs-sidebar--item .router-link-active {\n  box-shadow: 0px 0px 10px 1px rgba(var(--vs-primary), 0.7);\n}\n.v-nav-menu .vs-sidebar--item .router-link-active .feather-icon {\n  color: #fff;\n}\n.v-nav-menu .vs-sidebar--item .router-link-active span {\n  color: #22292f;\n}\n#sidebar-demo .vs-sidebar {\n  z-index: 52000;\n}\n#sidebar-demo .vs-sidebar-staticPosition {\n  z-index: 10000;\n}\n#sidebar-demo #parentx-demo-7 .parentx:not(.show-custom-sidebar) .vs-sidebar {\n  display: none;\n  z-index: 1 !important;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/datum/layouts/Main.vue?vue&type=style&index=0&lang=scss&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/datum/layouts/Main.vue?vue&type=style&index=0&lang=scss& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Main.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/datum/layouts/Main.vue?vue&type=style&index=0&lang=scss&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/datum/layouts/components/EmailNow.vue?vue&type=style&index=0&lang=scss&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/datum/layouts/components/EmailNow.vue?vue&type=style&index=0&lang=scss& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./EmailNow.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/datum/layouts/components/EmailNow.vue?vue&type=style&index=0&lang=scss&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/datum/layouts/components/FilterDropDown.vue?vue&type=style&index=0&lang=scss&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/datum/layouts/components/FilterDropDown.vue?vue&type=style&index=0&lang=scss& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./FilterDropDown.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/datum/layouts/components/FilterDropDown.vue?vue&type=style&index=0&lang=scss&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/datum/layouts/components/TheFooter.vue?vue&type=style&index=0&lang=scss&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/datum/layouts/components/TheFooter.vue?vue&type=style&index=0&lang=scss& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TheFooter.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/datum/layouts/components/TheFooter.vue?vue&type=style&index=0&lang=scss&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/datum/layouts/components/navbar/HorizontalDetailMenu.vue?vue&type=style&index=0&lang=scss&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/datum/layouts/components/navbar/HorizontalDetailMenu.vue?vue&type=style&index=0&lang=scss& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../node_modules/css-loader!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./HorizontalDetailMenu.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/datum/layouts/components/navbar/HorizontalDetailMenu.vue?vue&type=style&index=0&lang=scss&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/datum/layouts/components/navbar/HorizontalDetailMenu.vue?vue&type=style&index=1&lang=scss&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/datum/layouts/components/navbar/HorizontalDetailMenu.vue?vue&type=style&index=1&lang=scss& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../node_modules/css-loader!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./HorizontalDetailMenu.vue?vue&type=style&index=1&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/datum/layouts/components/navbar/HorizontalDetailMenu.vue?vue&type=style&index=1&lang=scss&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/datum/layouts/components/navbar/HorizontalNavMenu.vue?vue&type=style&index=0&lang=scss&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/datum/layouts/components/navbar/HorizontalNavMenu.vue?vue&type=style&index=0&lang=scss& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../node_modules/css-loader!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./HorizontalNavMenu.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/datum/layouts/components/navbar/HorizontalNavMenu.vue?vue&type=style&index=0&lang=scss&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/datum/layouts/components/navbar/HorizontalNavMenuItem.vue?vue&type=style&index=0&lang=scss&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/datum/layouts/components/navbar/HorizontalNavMenuItem.vue?vue&type=style&index=0&lang=scss& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../node_modules/css-loader!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./HorizontalNavMenuItem.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/datum/layouts/components/navbar/HorizontalNavMenuItem.vue?vue&type=style&index=0&lang=scss&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/datum/layouts/components/navbar/VerticalNavMenu.vue?vue&type=style&index=0&lang=scss&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/datum/layouts/components/navbar/VerticalNavMenu.vue?vue&type=style&index=0&lang=scss& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../node_modules/css-loader!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./VerticalNavMenu.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/datum/layouts/components/navbar/VerticalNavMenu.vue?vue&type=style&index=0&lang=scss&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/datum/layouts/Logo.vue?vue&type=template&id=fcae518c&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/datum/layouts/Logo.vue?vue&type=template&id=fcae518c& ***!
  \**************************************************************************************************************************************************************************************************************/
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
  return _c(
    "svg",
    {
      attrs: {
        version: "1.1",
        id: "Layer_1",
        xmlns: "http://www.w3.org/2000/svg",
        "xmlns:xlink": "http://www.w3.org/1999/xlink",
        x: "0px",
        y: "0px",
        width: "138px",
        height: "108px",
        viewBox: "0 0 138 108",
        "enable-background": "new 0 0 138 108",
        "xml:space": "preserve"
      }
    },
    [
      _c("image", {
        attrs: {
          id: "image0",
          width: "138",
          height: "108",
          x: "0",
          y: "0",
          "xlink:href":
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIoAAABsCAMAAACCRNrJAAAABGdBTUEAALGPC/xhBQAAACBjSFJN\nAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAflBMVEWdLi6dLi6dLi6dLi6d\nLi6dLi7p2Nj///+yaGjYuLi5d3e/hobkzs707Ozew8OrV1fFk5Pv4+PSrKz69vakRETMoKCAJCRw\nHh6HJiaWLCxUFBQAAABeGBilc3NnZ2ckJCRKERGPKSmjo6O9qKhnGxslBQUTAgI/DQ0zCQl4ISFU\nrWh4AAAABXRSTlMA/uVKSHlqG0MAAAABYktHRAcWYYjrAAAACXBIWXMAAAsTAAALEwEAmpwYAAAA\nB3RJTUUH4wscETgYKAz3UAAABA9JREFUaN7tmet2ojAQgLVtIIACgiI0rou7cun7v+DmNslI663o\nas/J/ElM5vJlkgw5xwl5Gpk8GsChOBSH4lAcikN5vDgUh+JQ7obi+b7vUH4wCvU8L3gOlJDPew7F\noTwDSjSb8xDzODlESeWwvwio+p1lWSz0eJuFHEs1xExmppfy2Tj3/XwmFZbZQtgFyTkUKvSUZAgF\nDfuzpRjxkfCwmWq0+MZSRCUBKPKrH+W6n0enUWiOIuTGYYKH/dl1KH5mNdMIuaenUFTIRRamwVzp\n21OTr0JCU086FEOeJzKV89ZLT6NwrTjLZrKTqz2V3r1TKEI9T1U/tigUrWEGaTk8tidRFvJcpAor\ntt6T4ygUlmxSoRyu1DarxAms61DyBC0ODEReouMo8UHWIuNQXI/kc5hLUQLsEK5ZcGDwCWVAah1i\nWVyNAtFD7DA9iZIMYn8qcTTkcj0KjC5x0sOTKGJ2cQSFBh66vd9DIdeh4AtmURLM8VAUXfg8KflD\nUWSFS5fDXN0ZZY5+wwHFFY6Q/5KVZFABwU1mauSh86MoyWgUWVdW5leEUYwV/RplhXHT8SjyAbKE\nXx5GMS/77GuUg831xqNQH60tNdd2hQjVt9t6gzok92Q1tPw+ivzs+p4o1ElsK4gMox5M4RyFoSi8\nPON+xpWSzL8FylI/kVRFE2EpbBwfDDwxYm8QgQeVOVla8hugEDq3DuUzST1H0XNSfgDgfYuLb2x1\nwlugkCW8Q+chMSj8aawTMI9kyJAU65IQeLQq0xWklKIy+DVKuS7Oo/CwEX+drOip0eqdCdnw4V/b\n7fY379c7Prz981fp7FlTSBXWvleEMCtCbSN7YuIMynnZNazt6o6xjpA1Y33fNzxmJQha6b9irDAT\nTUV4p29ZK5qdsGbSui3Ho/SsExHLlu05Sq/p3nnTiEwRUrOaT7RyolVDZMPHtHUvrKueNaNR1nrt\nMppG4QkRbSF3oBQKGkVPWBRjXYmVjETpZQKk2wKhdKLpRMBexDiGYq03emYECmMfOEXSX9moJe4Y\nKz9k5gGl0wiAYq15CsejoPMmT2fTMljrhnUNK9TEnksP2hYFrEu5m2NQqiGKkrWe5VQ1nmgLYKwH\n1uNRiAlrN6jaG7dwoXVWClC8ywb1+nryde3Mse3gOsAZgXaIctNju7eXuTEoNfCdQ+H5M5d5jRW+\ng8J9yBK3QyXuchReBlWJ625Q4kSZbetNrQs/lI1LUUpxsDd1e5PCT3YdfA4RSn0hCljXt/gcivSu\n1/pulOrmVCVcTOiUu0OLsjqwroYuf8qfMA7l8eJQHIpDcSgOxaE4FIfiUByKQ3EoDsWhOBSH4lAc\nyh1Qpo8mAJlOXh6NAPIyeX2StExfJ5O3lyeAmb68Tf4BUVVtuD0PMVgAAAAldEVYdGRhdGU6Y3Jl\nYXRlADIwMTktMTEtMjhUMTc6NTY6MjQrMDM6MDD5Uh4yAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDE5\nLTExLTI4VDE3OjU2OjI0KzAzOjAwiA+mjgAAAABJRU5ErkJggg=="
        }
      })
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/datum/layouts/Main.vue?vue&type=template&id=084e6048&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/datum/layouts/Main.vue?vue&type=template&id=084e6048& ***!
  \**************************************************************************************************************************************************************************************************************/
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
  return _c(
    "div",
    {
      staticClass: "layout--datum",
      class: [
        _vm.layoutTypeClass,
        _vm.navbarClasses,
        _vm.footerClasses,
        { "no-scroll": _vm.isAppPage }
      ]
    },
    [
      _c("v-nav-menu", {
        attrs: {
          navMenuItems: _vm.navMenuItems,
          title: "Datum",
          parent: ".layout--datum"
        }
      }),
      _vm._v(" "),
      _c(
        "div",
        {
          class: [_vm.contentAreaClass, { "show-overlay": _vm.bodyOverlay }],
          attrs: { id: "content-area" }
        },
        [
          _c("div", { attrs: { id: "content-overlay" } }),
          _vm._v(" "),
          _vm.mainLayoutType === "horizontal" && _vm.windowWidth >= 1200
            ? [
                _c("the-navbar-horizontal", {
                  class: [
                    { "text-white": _vm.isNavbarDark && !_vm.isThemeDark },
                    { "text-base": !_vm.isNavbarDark && _vm.isThemeDark }
                  ],
                  attrs: { navbarType: _vm.navbarType }
                }),
                _vm._v(" "),
                _c("h-nav-menu", {
                  class: [
                    { "text-white": _vm.isNavbarDark && !_vm.isThemeDark },
                    { "text-base": !_vm.isNavbarDark && _vm.isThemeDark }
                  ],
                  attrs: { navMenuItems: _vm.navMenuItems }
                }),
                _vm._v(" "),
                _c("h-detail-menu", {
                  attrs: { navMenuItems: _vm.detailMenuItems }
                })
              ]
            : [
                _c("the-navbar-vertical", {
                  class: [
                    { "text-white": _vm.isNavbarDark && !_vm.isThemeDark },
                    { "text-base": !_vm.isNavbarDark && _vm.isThemeDark }
                  ],
                  attrs: { navbarColor: _vm.navbarColor }
                })
              ],
          _vm._v(" "),
          _c("div", { staticClass: "content-wrapper" }, [
            _c("div", { staticClass: "router-view" }, [
              _c("div", { staticClass: "router-content" }, [
                _c(
                  "div",
                  { staticClass: "content-area__content" },
                  [
                    !_vm.hideScrollToTop
                      ? _c(
                          "back-to-top",
                          {
                            attrs: {
                              bottom: "10%",
                              right: _vm.$vs.rtl
                                ? "calc(100% - 2.2rem - 38px)"
                                : "30px",
                              visibleoffset: "500"
                            }
                          },
                          [
                            _c("vs-button", {
                              staticClass: "shadow-lg btn-back-to-top",
                              attrs: {
                                "icon-pack": "feather",
                                icon: "icon-arrow-up"
                              }
                            })
                          ],
                          1
                        )
                      : _vm._e(),
                    _vm._v(" "),
                    _c(
                      "transition",
                      { attrs: { name: _vm.routerTransition, mode: "out-in" } },
                      [
                        _c("router-view", {
                          on: {
                            changeRouteTitle: _vm.changeRouteTitle,
                            setAppClasses: function(classesStr) {
                              return _vm.$emit("setAppClasses", classesStr)
                            }
                          }
                        })
                      ],
                      1
                    )
                  ],
                  1
                )
              ])
            ])
          ]),
          _vm._v(" "),
          _c("the-footer")
        ],
        2
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/datum/layouts/components/EmailNow.vue?vue&type=template&id=1fd9c718&functional=true&":
/*!*********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/datum/layouts/components/EmailNow.vue?vue&type=template&id=1fd9c718&functional=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function(_h, _vm) {
  var _c = _vm._c
  return _c("vs-button", {
    staticClass: "email-now",
    attrs: {
      color: "primary",
      icon: "icon-mail",
      iconPack: "feather",
      type: "filled",
      radius: "",
      target: "",
      href: { url: "https://1.envato.market/vuexy_admin" }
    }
  })
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/datum/layouts/components/FilterDropDown.vue?vue&type=template&id=4370f1a3&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/datum/layouts/components/FilterDropDown.vue?vue&type=template&id=4370f1a3& ***!
  \***********************************************************************************************************************************************************************************************************************************/
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
  return _c(
    "vs-dropdown",
    {
      staticClass: "cursor-pointer more-filters",
      attrs: { "vs-custom-content": "", "vs-trigger-click": "" }
    },
    [
      _c(
        "span",
        { staticClass: "flex items-center w-full" },
        [
          _c("feather-icon", {
            staticClass: "filter-icon cursor-pointer mt-1 sm:mr-6 mr-2",
            attrs: { icon: "FilterIcon" }
          }),
          _vm._v(" "),
          _c("span", { staticClass: "truncate mr-3 select-none" }, [
            _vm._v("More Filters")
          ])
        ],
        1
      ),
      _vm._v(" "),
      _c("vs-dropdown-menu", { staticClass: "vx-navbar-dropdown" }, [
        _c(
          "ul",
          { staticClass: "bordered-items" },
          _vm._l(_vm.customFilters, function(filter) {
            return _c(
              "li",
              {
                key: filter.index,
                staticClass:
                  "flex justify-between px-2 py-2 notification cursor-pointer"
              },
              [
                _c(
                  "div",
                  { staticClass: "flex items-start" },
                  [
                    filter.category === "item"
                      ? _c("vs-checkbox", { staticClass: "filter-item" }, [
                          _vm._v(_vm._s(filter.title))
                        ])
                      : _c("div", { staticClass: "mx-2 filter-header" }, [
                          _c(
                            "span",
                            {
                              staticClass:
                                "font-medium block notification-title"
                            },
                            [_vm._v(_vm._s(filter.title))]
                          )
                        ])
                  ],
                  1
                )
              ]
            )
          }),
          0
        )
      ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/datum/layouts/components/I18n.vue?vue&type=template&id=4656b3f8&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/datum/layouts/components/I18n.vue?vue&type=template&id=4656b3f8& ***!
  \*************************************************************************************************************************************************************************************************************************/
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
  return _c(
    "vs-dropdown",
    {
      staticClass: "cursor-pointer",
      attrs: { "vs-custom-content": "", "vs-trigger-click": "" }
    },
    [
      _c(
        "span",
        { staticClass: "cursor-pointer flex items-center i18n-locale" },
        [
          _c("img", {
            staticClass: "h-3 w-4",
            attrs: { src: _vm.i18n_locale_img, alt: _vm.$i18n.locale }
          })
        ]
      ),
      _vm._v(" "),
      _c(
        "vs-dropdown-menu",
        { staticClass: "w-48 i18n-dropdown vx-navbar-dropdown" },
        [
          _c(
            "vs-dropdown-item",
            {
              on: {
                click: function($event) {
                  return _vm.updateLocale("uk")
                }
              }
            },
            [
              _c("img", {
                staticClass: "h-4 w-5 mr-1",
                attrs: {
                  src: __webpack_require__(/*! @assets/images/flags/uk.png */ "./resources/assets/images/flags/uk.png"),
                  alt: "uk"
                }
              })
            ]
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/datum/layouts/components/SearchBar.vue?vue&type=template&id=5e93c561&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/datum/layouts/components/SearchBar.vue?vue&type=template&id=5e93c561& ***!
  \******************************************************************************************************************************************************************************************************************************/
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
  return _c(
    "div",
    { staticClass: "flex mx-auto" },
    [
      _c(
        "div",
        {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: _vm.showFullSearch,
              expression: "showFullSearch"
            }
          ],
          staticClass: "search-full-container w-full h-full",
          class: { flex: _vm.showFullSearch }
        },
        [
          _c("vx-auto-suggest", {
            ref: "navbarSearch",
            staticClass: "w-full",
            attrs: {
              autoFocus: _vm.showFullSearch,
              data: _vm.navbarSearchAndPinList,
              search_key: "title",
              "background-overlay": "",
              inputClassses:
                "w-full vs-input-no-border vs-input-no-shdow-focus",
              icon: "SearchIcon",
              placeholder: "Search here for a coin"
            },
            on: {
              input: _vm.hnd_search_query_update,
              selected: _vm.selected,
              closeSearchbar: function($event) {
                _vm.showFullSearch = true
              }
            },
            scopedSlots: _vm._u([
              {
                key: "group",
                fn: function(ref) {
                  var group_name = ref.group_name
                  return [
                    _c("p", { staticClass: "font-semibold text-primary" }, [
                      _vm._v(_vm._s(_vm._f("title")(group_name)))
                    ])
                  ]
                }
              },
              {
                key: "pages",
                fn: function(ref) {
                  var suggestion = ref.suggestion
                  return [
                    _c(
                      "div",
                      { staticClass: "flex items-end leading-none py-1" },
                      [
                        _c("feather-icon", {
                          staticClass: "mr-4",
                          attrs: {
                            icon: suggestion.icon,
                            svgClasses: "h-5 w-5"
                          }
                        }),
                        _vm._v(" "),
                        _c("span", { staticClass: "mt-1" }, [
                          _vm._v(_vm._s(suggestion.title))
                        ])
                      ],
                      1
                    )
                  ]
                }
              },
              {
                key: "files",
                fn: function(ref) {
                  var suggestion = ref.suggestion
                  return [
                    _c(
                      "div",
                      { staticClass: "flex items-center justify-between" },
                      [
                        _c("div", { staticClass: "flex items-center" }, [
                          _c(
                            "div",
                            { staticClass: "img-container w-8 mr-3 flex" },
                            [
                              _c("img", {
                                staticClass: "responsive",
                                attrs: {
                                  src: _vm.get_ext_img(suggestion.ext),
                                  alt: suggestion.file_name
                                }
                              })
                            ]
                          ),
                          _vm._v(" "),
                          _c("div", { staticClass: "leading-none mt-1" }, [
                            _c("p", { staticClass: "mb-1" }, [
                              _vm._v(_vm._s(suggestion.file_name))
                            ]),
                            _vm._v(" "),
                            _c("small", [
                              _vm._v("by " + _vm._s(suggestion.from))
                            ])
                          ])
                        ]),
                        _vm._v(" "),
                        _c("small", [_vm._v(_vm._s(suggestion.size))])
                      ]
                    )
                  ]
                }
              },
              {
                key: "contacts",
                fn: function(ref) {
                  var suggestion = ref.suggestion
                  return [
                    _c(
                      "div",
                      { staticClass: "flex items-center justify-between" },
                      [
                        _c("div", { staticClass: "flex items-center" }, [
                          _c("img", {
                            staticClass: "w-8 h-8 mr-3 rounded-full",
                            attrs: { src: suggestion.img, alt: suggestion.name }
                          }),
                          _vm._v(" "),
                          _c("div", { staticClass: "leading-none mt-1" }, [
                            _c("p", [_vm._v(_vm._s(suggestion.name))]),
                            _vm._v(" "),
                            _c("small", [_vm._v(_vm._s(suggestion.email))])
                          ])
                        ]),
                        _vm._v(" "),
                        _c("small", [_vm._v(_vm._s(suggestion.time))])
                      ]
                    )
                  ]
                }
              },
              {
                key: "noResult",
                fn: function(ref) {
                  var group_name = ref.group_name
                  return [
                    _c(
                      "div",
                      { staticClass: "flex items-center" },
                      [
                        _c("feather-icon", {
                          staticClass: "mr-4",
                          attrs: { icon: "InfoIcon", svgClasses: "h-5 w-5" }
                        }),
                        _vm._v(" "),
                        _c("span", [_vm._v("No results found.")])
                      ],
                      1
                    )
                  ]
                }
              }
            ])
          })
        ],
        1
      ),
      _vm._v(" "),
      _c("feather-icon", {
        staticClass: "ml-4",
        staticStyle: { color: "white !important" },
        attrs: { icon: "SearchIcon" }
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/datum/layouts/components/TheFooter.vue?vue&type=template&id=3d710dfc&functional=true&":
/*!**********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/datum/layouts/components/TheFooter.vue?vue&type=template&id=3d710dfc&functional=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function(_h, _vm) {
  var _c = _vm._c
  return _c(
    "footer",
    {
      staticClass: "the-footer flex-wrap justify-between",
      class: _vm.classes,
      staticStyle: {
        "background-color": "#313131",
        color: "white",
        height: "20px",
        "z-index": "10000"
      }
    },
    [_c(_vm.injections.components.EmailNow, { tag: "component" })],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/datum/layouts/components/navbar/HorizontalDetailMenu.vue?vue&type=template&id=dbcdcbee&":
/*!************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/datum/layouts/components/navbar/HorizontalDetailMenu.vue?vue&type=template&id=dbcdcbee& ***!
  \************************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "relative" }, [
    _c(
      "div",
      { staticClass: "vx-navbar-wrapper nav-menu-wrapper" },
      [
        _c(
          "vs-navbar",
          {
            staticClass: "vx-navbar navbar-custom navbar-skelton",
            staticStyle: { padding: "8px 0px" },
            attrs: { color: _vm.navbarColor }
          },
          [
            _c(
              "vs-checkbox",
              {
                staticClass: "detail-item",
                model: {
                  value: _vm.isCoins,
                  callback: function($$v) {
                    _vm.isCoins = $$v
                  },
                  expression: "isCoins"
                }
              },
              [_vm._v("Coins")]
            ),
            _vm._v(" "),
            _c(
              "vs-checkbox",
              {
                staticClass: "detail-item",
                model: {
                  value: _vm.isTokens,
                  callback: function($$v) {
                    _vm.isTokens = $$v
                  },
                  expression: "isTokens"
                }
              },
              [_vm._v("Tokens")]
            ),
            _vm._v(" "),
            _c("FilterDropDown"),
            _vm._v(" "),
            _c("v-select", {
              staticClass: "w-32 currency-select detail-item",
              attrs: {
                label: "currency",
                options: _vm.currencies,
                dir: _vm.$vs.rtl ? "rtl" : "ltr"
              },
              model: {
                value: _vm.currency,
                callback: function($$v) {
                  _vm.currency = $$v
                },
                expression: "currency"
              }
            })
          ],
          1
        )
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/datum/layouts/components/navbar/HorizontalNavMenu.vue?vue&type=template&id=26e55839&":
/*!*********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/datum/layouts/components/navbar/HorizontalNavMenu.vue?vue&type=template&id=26e55839& ***!
  \*********************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "relative" }, [
    _c(
      "div",
      {
        staticClass: "vx-navbar-wrapper nav-menu-wrapper",
        staticStyle: { "background-color": "#3A3A3A", "padding-left": "150px" }
      },
      [
        _c(
          "vs-navbar",
          {
            staticClass: "vx-navbar navbar-custom navbar-skelton",
            attrs: { color: _vm.navbarColor }
          },
          [
            _c(
              "ul",
              { staticClass: "menu-items flex flex-wrap w-full items-center" },
              [
                _vm._l(_vm.navMenuItems, function(item, index) {
                  return _c(
                    "li",
                    {
                      key: index,
                      staticClass: "menu-item",
                      class: {
                        "mr-2": !(_vm.navMenuItems.length === index + 1)
                      }
                    },
                    [
                      item.header
                        ? [
                            _c("h-nav-menu-header", {
                              staticClass: "menu-header relative",
                              attrs: { header: item }
                            })
                          ]
                        : item.submenu
                        ? [
                            _c("h-nav-menu-group", {
                              key: "group-" + index,
                              staticClass: "menu-group relative py-4 py-datum",
                              attrs: {
                                bottom: "",
                                group: item,
                                groupIndex: index,
                                open: _vm.checkGrpChildrenActive(item)
                              }
                            })
                          ]
                        : item.url
                        ? _c(
                            "div",
                            { staticClass: "menu-link" },
                            [
                              _c(
                                "h-nav-menu-item",
                                {
                                  staticClass:
                                    "relative py-4 cursor-pointer py-datum",
                                  attrs: {
                                    to:
                                      item.slug !== "external"
                                        ? item.url
                                        : null,
                                    href:
                                      item.slug === "external"
                                        ? item.url
                                        : null,
                                    icon: item.icon,
                                    target: item.target,
                                    isDisabled: item.isDisabled,
                                    slug: item.slug
                                  }
                                },
                                [
                                  _c("span", { staticClass: "truncate" }, [
                                    _vm._v(
                                      _vm._s(_vm.$t(item.i18n) || item.name)
                                    )
                                  ]),
                                  _vm._v(" "),
                                  item.tag
                                    ? _c(
                                        "vs-chip",
                                        { attrs: { color: item.tagColor } },
                                        [_vm._v(_vm._s(item.tag))]
                                      )
                                    : _vm._e()
                                ],
                                1
                              )
                            ],
                            1
                          )
                        : _vm._e()
                    ],
                    2
                  )
                }),
                _vm._v(" "),
                _c("li", { staticClass: "mx-auto" }, [_c("search-bar")], 1)
              ],
              2
            )
          ]
        )
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/datum/layouts/components/navbar/HorizontalNavMenuItem.vue?vue&type=template&id=77c9bd6c&":
/*!*************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/datum/layouts/components/navbar/HorizontalNavMenuItem.vue?vue&type=template&id=77c9bd6c& ***!
  \*************************************************************************************************************************************************************************************************************************************************/
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
  return _vm.canSee
    ? _c(
        "div",
        {
          staticClass: "h-nav-menu-item",
          class: [
            { "h-nav-active-item text-primary font-medium": _vm.activeLink },
            { "disabled-item pointer-events-none": _vm.isDisabled }
          ]
        },
        [
          _vm.to
            ? _c(
                "router-link",
                {
                  class: [
                    { "router-link-active": _vm.activeLink },
                    "nav-link flex items-center"
                  ],
                  attrs: { exact: "", to: _vm.to, target: _vm.target }
                },
                [
                  !_vm.featherIcon
                    ? _c("vs-icon", {
                        attrs: { "icon-pack": _vm.iconPack, icon: _vm.icon }
                      })
                    : _c("feather-icon", {
                        class: _vm.iconClasses,
                        attrs: { icon: _vm.icon }
                      }),
                  _vm._v(" "),
                  _vm._t("default")
                ],
                2
              )
            : _c(
                "a",
                {
                  staticClass: "nav-link flex items-center",
                  attrs: { target: _vm.target, href: _vm.href }
                },
                [
                  !_vm.featherIcon
                    ? _c("vs-icon", {
                        attrs: { "icon-pack": _vm.iconPack, icon: _vm.icon }
                      })
                    : _c("feather-icon", {
                        class: _vm.iconClasses,
                        attrs: { icon: _vm.icon }
                      }),
                  _vm._v(" "),
                  _vm._t("default")
                ],
                2
              )
        ],
        1
      )
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/datum/layouts/components/navbar/TheNavbarHorizontal.vue?vue&type=template&id=45d2a680&":
/*!***********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/datum/layouts/components/navbar/TheNavbarHorizontal.vue?vue&type=template&id=45d2a680& ***!
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
  return _c(
    "div",
    { staticClass: "relative", staticStyle: { "z-index": "10000000" } },
    [
      _c(
        "div",
        { staticClass: "vx-navbar-wrapper navbar-full p-0" },
        [
          _c(
            "vs-navbar",
            {
              staticClass: "navbar-custom navbar-skelton",
              class: _vm.navbarClasses,
              style: _vm.navbarStyle,
              attrs: { color: _vm.navbarColor }
            },
            [
              _c("div", { staticClass: "mx-auto flex items-center" }),
              _vm._v(" "),
              _c(
                "router-link",
                {
                  staticClass:
                    "vx-logo cursor-pointer mx-auto flex items-center",
                  attrs: { tag: "div", to: "/" }
                },
                [
                  _c("logo", {
                    staticClass: "w-48 mr-4 fill-current text-primary",
                    staticStyle: {
                      position: "absolute",
                      top: "0px",
                      left: "5px"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c("i18n")
            ],
            1
          )
        ],
        1
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/datum/layouts/components/navbar/TheNavbarVertical.vue?vue&type=template&id=06bb29d2&":
/*!*********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/datum/layouts/components/navbar/TheNavbarVertical.vue?vue&type=template&id=06bb29d2& ***!
  \*********************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "relative" }, [
    _c(
      "div",
      { staticClass: "vx-navbar-wrapper", class: _vm.classObj },
      [
        _c(
          "vs-navbar",
          {
            staticClass: "vx-navbar navbar-custom navbar-skelton",
            class: _vm.textColor,
            staticStyle: { "background-color": "#313131 !important" },
            attrs: { color: _vm.navbarColorLocal }
          },
          [
            _c("feather-icon", {
              staticClass: "sm:inline-flex xl:hidden cursor-pointer p-2",
              attrs: { icon: "MenuIcon" },
              on: {
                click: function($event) {
                  $event.stopPropagation()
                  return _vm.showSidebar($event)
                }
              }
            }),
            _vm._v(" "),
            _c("vs-spacer"),
            _vm._v(" "),
            _c("i18n")
          ],
          1
        )
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/datum/layouts/components/navbar/VerticalNavMenu.vue?vue&type=template&id=7547ca67&":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/datum/layouts/components/navbar/VerticalNavMenu.vue?vue&type=template&id=7547ca67& ***!
  \*******************************************************************************************************************************************************************************************************************************************/
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
  return _c(
    "div",
    { staticClass: "parentx" },
    [
      _c(
        "vs-sidebar",
        {
          directives: [
            {
              name: "hammer",
              rawName: "v-hammer:swipe.left",
              value: _vm.onSwipeLeft,
              expression: "onSwipeLeft",
              arg: "swipe",
              modifiers: { left: true }
            }
          ],
          ref: "verticalNavMenu",
          staticClass: "v-nav-menu items-no-padding",
          attrs: {
            "default-index": "-1",
            "click-not-close": _vm.clickNotClose,
            "reduce-not-rebound": _vm.reduceNotRebound,
            parent: _vm.parent,
            hiddenBackground: _vm.clickNotClose,
            reduce: _vm.reduce
          },
          model: {
            value: _vm.isVerticalNavMenuActive,
            callback: function($$v) {
              _vm.isVerticalNavMenuActive = $$v
            },
            expression: "isVerticalNavMenuActive"
          }
        },
        [
          _c(
            "div",
            { on: { mouseenter: _vm.mouseEnter, mouseleave: _vm.mouseLeave } },
            [
              _c(
                "div",
                {
                  staticClass: "header-sidebar flex items-end justify-between",
                  attrs: { slot: "header" },
                  slot: "header"
                },
                [
                  _c("logo", {
                    staticClass: "w-48 mr-4 fill-current text-primary"
                  }),
                  _vm._v(" "),
                  _c(
                    "div",
                    [
                      _vm.showCloseButton
                        ? [
                            _c("feather-icon", {
                              staticClass: "m-0 cursor-pointer",
                              staticStyle: { color: "#9D2E2E !important" },
                              attrs: { icon: "XIcon" },
                              on: {
                                click: function($event) {
                                  return _vm.$store.commit(
                                    "TOGGLE_IS_VERTICAL_NAV_MENU_ACTIVE",
                                    false
                                  )
                                }
                              }
                            })
                          ]
                        : !_vm.showCloseButton && !_vm.verticalNavMenuItemsMin
                        ? [
                            _c("feather-icon", {
                              staticClass: "mr-0 cursor-pointer",
                              attrs: {
                                id: "btnVNavMenuMinToggler",
                                icon: _vm.reduce ? "CircleIcon" : "DiscIcon",
                                "svg-classes": "stroke-current text-primary"
                              },
                              on: {
                                click: function($event) {
                                  return _vm.toggleReduce(!_vm.reduce)
                                }
                              }
                            })
                          ]
                        : _vm._e()
                    ],
                    2
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c("div", {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: _vm.showShadowBottom,
                    expression: "showShadowBottom"
                  }
                ],
                staticClass: "shadow-bottom"
              }),
              _vm._v(" "),
              _c(
                "VuePerfectScrollbar",
                {
                  key: _vm.$vs.rtl,
                  ref: "verticalNavMenuPs",
                  staticClass: "scroll-area-v-nav-menu pt-2",
                  attrs: { settings: _vm.settings },
                  on: { "ps-scroll-y": _vm.psSectionScroll }
                },
                [
                  _vm._l(_vm.menuItemsUpdated, function(item, index) {
                    return [
                      item.header && !_vm.verticalNavMenuItemsMin
                        ? _c(
                            "span",
                            {
                              key: "header-" + index,
                              staticClass: "navigation-header truncate"
                            },
                            [
                              _vm._v(
                                "\n            " +
                                  _vm._s(_vm.$t(item.i18n) || item.header) +
                                  "\n          "
                              )
                            ]
                          )
                        : !item.header
                        ? [
                            !item.submenu
                              ? _c(
                                  "v-nav-menu-item",
                                  {
                                    key: "item-" + index,
                                    attrs: {
                                      index: index,
                                      to:
                                        item.slug !== "external"
                                          ? item.url
                                          : null,
                                      href:
                                        item.slug === "external"
                                          ? item.url
                                          : null,
                                      icon: item.icon,
                                      target: item.target,
                                      isDisabled: item.isDisabled,
                                      slug: item.slug
                                    }
                                  },
                                  [
                                    _c(
                                      "span",
                                      {
                                        directives: [
                                          {
                                            name: "show",
                                            rawName: "v-show",
                                            value: !_vm.verticalNavMenuItemsMin,
                                            expression:
                                              "!verticalNavMenuItemsMin"
                                          }
                                        ],
                                        staticClass: "truncate"
                                      },
                                      [
                                        _vm._v(
                                          _vm._s(_vm.$t(item.i18n) || item.name)
                                        )
                                      ]
                                    ),
                                    _vm._v(" "),
                                    item.tag &&
                                    (_vm.isMouseEnter || !_vm.reduce)
                                      ? _c(
                                          "vs-chip",
                                          {
                                            staticClass: "ml-auto",
                                            attrs: { color: item.tagColor }
                                          },
                                          [_vm._v(_vm._s(item.tag))]
                                        )
                                      : _vm._e()
                                  ],
                                  1
                                )
                              : [
                                  _c("v-nav-menu-group", {
                                    key: "group-" + index,
                                    attrs: {
                                      openHover: _vm.openGroupHover,
                                      group: item,
                                      groupIndex: index,
                                      open: _vm.isGroupActive(item)
                                    }
                                  })
                                ]
                          ]
                        : _vm._e()
                    ]
                  })
                ],
                2
              )
            ],
            1
          )
        ]
      ),
      _vm._v(" "),
      !_vm.isVerticalNavMenuActive
        ? _c("div", {
            directives: [
              {
                name: "hammer",
                rawName: "v-hammer:swipe.right",
                value: _vm.onSwipeAreaSwipeRight,
                expression: "onSwipeAreaSwipeRight",
                arg: "swipe",
                modifiers: { right: true }
              }
            ],
            staticClass: "v-nav-menu-swipe-area"
          })
        : _vm._e()
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/datum/layouts/components/navbar/VerticalNavMenuItem.vue?vue&type=template&id=0e2b689a&":
/*!***********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/datum/layouts/components/navbar/VerticalNavMenuItem.vue?vue&type=template&id=0e2b689a& ***!
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
  return _vm.canSee
    ? _c(
        "div",
        {
          staticClass: "vs-sidebar--item",
          class: [
            { "vs-sidebar-item-active": _vm.activeLink },
            { "disabled-item pointer-events-none": _vm.isDisabled }
          ]
        },
        [
          _vm.to
            ? _c(
                "router-link",
                {
                  class: [{ "router-link-active": _vm.activeLink }],
                  attrs: {
                    tabindex: "-1",
                    exact: "",
                    to: _vm.to,
                    target: _vm.target
                  }
                },
                [
                  !_vm.featherIcon
                    ? _c("vs-icon", {
                        attrs: { "icon-pack": _vm.iconPack, icon: _vm.icon }
                      })
                    : _c("feather-icon", {
                        class: { "w-3 h-3": _vm.iconSmall },
                        attrs: { icon: _vm.icon }
                      }),
                  _vm._v(" "),
                  _vm._t("default")
                ],
                2
              )
            : _c(
                "a",
                {
                  attrs: { target: _vm.target, href: _vm.href, tabindex: "-1" }
                },
                [
                  !_vm.featherIcon
                    ? _c("vs-icon", {
                        attrs: { "icon-pack": _vm.iconPack, icon: _vm.icon }
                      })
                    : _c("feather-icon", {
                        class: { "w-3 h-3": _vm.iconSmall },
                        attrs: { icon: _vm.icon }
                      }),
                  _vm._v(" "),
                  _vm._t("default")
                ],
                2
              )
        ],
        1
      )
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/datum/config/themeConfig.js":
/*!******************************************************!*\
  !*** ./resources/js/src/datum/config/themeConfig.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuesax__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuesax */ "./node_modules/vuesax/dist/vuesax.common.js");
/* harmony import */ var vuesax__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vuesax__WEBPACK_IMPORTED_MODULE_1__);
/*=========================================================================================
  File Name: themeConfig.js
  Description: Theme configuration
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: hhttp://www.themeforest.net/user/pixinvent
==========================================================================================*/
// MAIN COLORS - VUESAX THEME COLORS
var colors = {
  primary: '#9D2E2E',
  success: '#28C76F',
  danger: '#EA5455',
  warning: '#FF9F43',
  dark: '#313131'
}; // CONFIGS

var themeConfig = {
  disableCustomizer: true,
  // options[Boolean] : true, false(default)
  disableThemeTour: true,
  // options[Boolean] : true, false(default)
  footerType: "static",
  // options[String]  : static(default) / sticky / hidden
  hideScrollToTop: false,
  // options[Boolean] : true, false(default)
  mainLayoutType: "horizontal",
  // options[String]  : vertical(default) / horizontal
  navbarColor: "#fff",
  // options[String]  : HEX color / rgb / rgba / Valid HTML Color name - (default: #fff)
  navbarType: "static",
  // options[String]  : floating(default) / static / sticky / hidden
  routerTransition: "zoom-fade",
  // options[String]  : zoom-fade / slide-fade / fade-bottom / fade / zoom-out / none(default)
  rtl: false,
  // options[Boolean] : true, false(default)
  sidebarCollapsed: false,
  // options[Boolean] : true, false(default)
  theme: "light",
  // options[String]  : "light"(default), "dark", "semi-dark"
  // Not required yet - WIP
  userInfoLocalStorageKey: "userInfo" // NOTE: themeTour will be disabled in screens < 1200. Please refer docs for more info.

};


vue__WEBPACK_IMPORTED_MODULE_0___default.a.use(vuesax__WEBPACK_IMPORTED_MODULE_1___default.a, {
  theme: {
    colors: {
      primary: 'rgb(157, 46, 46)',
      success: 'rgb(23, 201, 100)',
      danger: 'rgb(242, 19, 93)',
      warning: 'rgb(255, 130, 0)',
      dark: 'rgb(36, 33, 69)'
    }
  },
  rtl: themeConfig.rtl
});
/* harmony default export */ __webpack_exports__["default"] = (themeConfig);

/***/ }),

/***/ "./resources/js/src/datum/layouts/Logo.vue":
/*!*************************************************!*\
  !*** ./resources/js/src/datum/layouts/Logo.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Logo_vue_vue_type_template_id_fcae518c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Logo.vue?vue&type=template&id=fcae518c& */ "./resources/js/src/datum/layouts/Logo.vue?vue&type=template&id=fcae518c&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  script,
  _Logo_vue_vue_type_template_id_fcae518c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Logo_vue_vue_type_template_id_fcae518c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/datum/layouts/Logo.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/datum/layouts/Logo.vue?vue&type=template&id=fcae518c&":
/*!********************************************************************************!*\
  !*** ./resources/js/src/datum/layouts/Logo.vue?vue&type=template&id=fcae518c& ***!
  \********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Logo_vue_vue_type_template_id_fcae518c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Logo.vue?vue&type=template&id=fcae518c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/datum/layouts/Logo.vue?vue&type=template&id=fcae518c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Logo_vue_vue_type_template_id_fcae518c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Logo_vue_vue_type_template_id_fcae518c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/datum/layouts/Main.vue":
/*!*************************************************!*\
  !*** ./resources/js/src/datum/layouts/Main.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Main_vue_vue_type_template_id_084e6048___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Main.vue?vue&type=template&id=084e6048& */ "./resources/js/src/datum/layouts/Main.vue?vue&type=template&id=084e6048&");
/* harmony import */ var _Main_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Main.vue?vue&type=script&lang=js& */ "./resources/js/src/datum/layouts/Main.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Main_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Main.vue?vue&type=style&index=0&lang=scss& */ "./resources/js/src/datum/layouts/Main.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Main_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Main_vue_vue_type_template_id_084e6048___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Main_vue_vue_type_template_id_084e6048___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/datum/layouts/Main.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/datum/layouts/Main.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/src/datum/layouts/Main.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Main_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Main.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/datum/layouts/Main.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Main_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/datum/layouts/Main.vue?vue&type=style&index=0&lang=scss&":
/*!***********************************************************************************!*\
  !*** ./resources/js/src/datum/layouts/Main.vue?vue&type=style&index=0&lang=scss& ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Main_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Main.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/datum/layouts/Main.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Main_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Main_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Main_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Main_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Main_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/src/datum/layouts/Main.vue?vue&type=template&id=084e6048&":
/*!********************************************************************************!*\
  !*** ./resources/js/src/datum/layouts/Main.vue?vue&type=template&id=084e6048& ***!
  \********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Main_vue_vue_type_template_id_084e6048___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Main.vue?vue&type=template&id=084e6048& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/datum/layouts/Main.vue?vue&type=template&id=084e6048&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Main_vue_vue_type_template_id_084e6048___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Main_vue_vue_type_template_id_084e6048___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/datum/layouts/components/EmailNow.vue":
/*!****************************************************************!*\
  !*** ./resources/js/src/datum/layouts/components/EmailNow.vue ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _EmailNow_vue_vue_type_template_id_1fd9c718_functional_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EmailNow.vue?vue&type=template&id=1fd9c718&functional=true& */ "./resources/js/src/datum/layouts/components/EmailNow.vue?vue&type=template&id=1fd9c718&functional=true&");
/* harmony import */ var _EmailNow_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EmailNow.vue?vue&type=script&lang=js& */ "./resources/js/src/datum/layouts/components/EmailNow.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _EmailNow_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./EmailNow.vue?vue&type=style&index=0&lang=scss& */ "./resources/js/src/datum/layouts/components/EmailNow.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _EmailNow_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _EmailNow_vue_vue_type_template_id_1fd9c718_functional_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _EmailNow_vue_vue_type_template_id_1fd9c718_functional_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  true,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/datum/layouts/components/EmailNow.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/datum/layouts/components/EmailNow.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/src/datum/layouts/components/EmailNow.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EmailNow_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./EmailNow.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/datum/layouts/components/EmailNow.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EmailNow_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/datum/layouts/components/EmailNow.vue?vue&type=style&index=0&lang=scss&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/src/datum/layouts/components/EmailNow.vue?vue&type=style&index=0&lang=scss& ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_EmailNow_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./EmailNow.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/datum/layouts/components/EmailNow.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_EmailNow_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_EmailNow_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_EmailNow_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_EmailNow_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_EmailNow_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/src/datum/layouts/components/EmailNow.vue?vue&type=template&id=1fd9c718&functional=true&":
/*!***************************************************************************************************************!*\
  !*** ./resources/js/src/datum/layouts/components/EmailNow.vue?vue&type=template&id=1fd9c718&functional=true& ***!
  \***************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EmailNow_vue_vue_type_template_id_1fd9c718_functional_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./EmailNow.vue?vue&type=template&id=1fd9c718&functional=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/datum/layouts/components/EmailNow.vue?vue&type=template&id=1fd9c718&functional=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EmailNow_vue_vue_type_template_id_1fd9c718_functional_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EmailNow_vue_vue_type_template_id_1fd9c718_functional_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/datum/layouts/components/FilterDropDown.vue":
/*!**********************************************************************!*\
  !*** ./resources/js/src/datum/layouts/components/FilterDropDown.vue ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FilterDropDown_vue_vue_type_template_id_4370f1a3___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FilterDropDown.vue?vue&type=template&id=4370f1a3& */ "./resources/js/src/datum/layouts/components/FilterDropDown.vue?vue&type=template&id=4370f1a3&");
/* harmony import */ var _FilterDropDown_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FilterDropDown.vue?vue&type=script&lang=js& */ "./resources/js/src/datum/layouts/components/FilterDropDown.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _FilterDropDown_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FilterDropDown.vue?vue&type=style&index=0&lang=scss& */ "./resources/js/src/datum/layouts/components/FilterDropDown.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _FilterDropDown_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FilterDropDown_vue_vue_type_template_id_4370f1a3___WEBPACK_IMPORTED_MODULE_0__["render"],
  _FilterDropDown_vue_vue_type_template_id_4370f1a3___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/datum/layouts/components/FilterDropDown.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/datum/layouts/components/FilterDropDown.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/src/datum/layouts/components/FilterDropDown.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FilterDropDown_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./FilterDropDown.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/datum/layouts/components/FilterDropDown.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FilterDropDown_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/datum/layouts/components/FilterDropDown.vue?vue&type=style&index=0&lang=scss&":
/*!********************************************************************************************************!*\
  !*** ./resources/js/src/datum/layouts/components/FilterDropDown.vue?vue&type=style&index=0&lang=scss& ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_FilterDropDown_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./FilterDropDown.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/datum/layouts/components/FilterDropDown.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_FilterDropDown_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_FilterDropDown_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_FilterDropDown_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_FilterDropDown_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_FilterDropDown_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/src/datum/layouts/components/FilterDropDown.vue?vue&type=template&id=4370f1a3&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/src/datum/layouts/components/FilterDropDown.vue?vue&type=template&id=4370f1a3& ***!
  \*****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FilterDropDown_vue_vue_type_template_id_4370f1a3___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./FilterDropDown.vue?vue&type=template&id=4370f1a3& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/datum/layouts/components/FilterDropDown.vue?vue&type=template&id=4370f1a3&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FilterDropDown_vue_vue_type_template_id_4370f1a3___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FilterDropDown_vue_vue_type_template_id_4370f1a3___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/datum/layouts/components/I18n.vue":
/*!************************************************************!*\
  !*** ./resources/js/src/datum/layouts/components/I18n.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _I18n_vue_vue_type_template_id_4656b3f8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./I18n.vue?vue&type=template&id=4656b3f8& */ "./resources/js/src/datum/layouts/components/I18n.vue?vue&type=template&id=4656b3f8&");
/* harmony import */ var _I18n_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./I18n.vue?vue&type=script&lang=js& */ "./resources/js/src/datum/layouts/components/I18n.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _I18n_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _I18n_vue_vue_type_template_id_4656b3f8___WEBPACK_IMPORTED_MODULE_0__["render"],
  _I18n_vue_vue_type_template_id_4656b3f8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/datum/layouts/components/I18n.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/datum/layouts/components/I18n.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/src/datum/layouts/components/I18n.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_I18n_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./I18n.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/datum/layouts/components/I18n.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_I18n_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/datum/layouts/components/I18n.vue?vue&type=template&id=4656b3f8&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/src/datum/layouts/components/I18n.vue?vue&type=template&id=4656b3f8& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_I18n_vue_vue_type_template_id_4656b3f8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./I18n.vue?vue&type=template&id=4656b3f8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/datum/layouts/components/I18n.vue?vue&type=template&id=4656b3f8&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_I18n_vue_vue_type_template_id_4656b3f8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_I18n_vue_vue_type_template_id_4656b3f8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/datum/layouts/components/SearchBar.vue":
/*!*****************************************************************!*\
  !*** ./resources/js/src/datum/layouts/components/SearchBar.vue ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SearchBar_vue_vue_type_template_id_5e93c561___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SearchBar.vue?vue&type=template&id=5e93c561& */ "./resources/js/src/datum/layouts/components/SearchBar.vue?vue&type=template&id=5e93c561&");
/* harmony import */ var _SearchBar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SearchBar.vue?vue&type=script&lang=js& */ "./resources/js/src/datum/layouts/components/SearchBar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SearchBar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SearchBar_vue_vue_type_template_id_5e93c561___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SearchBar_vue_vue_type_template_id_5e93c561___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/datum/layouts/components/SearchBar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/datum/layouts/components/SearchBar.vue?vue&type=script&lang=js&":
/*!******************************************************************************************!*\
  !*** ./resources/js/src/datum/layouts/components/SearchBar.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchBar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./SearchBar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/datum/layouts/components/SearchBar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchBar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/datum/layouts/components/SearchBar.vue?vue&type=template&id=5e93c561&":
/*!************************************************************************************************!*\
  !*** ./resources/js/src/datum/layouts/components/SearchBar.vue?vue&type=template&id=5e93c561& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchBar_vue_vue_type_template_id_5e93c561___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./SearchBar.vue?vue&type=template&id=5e93c561& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/datum/layouts/components/SearchBar.vue?vue&type=template&id=5e93c561&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchBar_vue_vue_type_template_id_5e93c561___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchBar_vue_vue_type_template_id_5e93c561___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/datum/layouts/components/TheFooter.vue":
/*!*****************************************************************!*\
  !*** ./resources/js/src/datum/layouts/components/TheFooter.vue ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TheFooter_vue_vue_type_template_id_3d710dfc_functional_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TheFooter.vue?vue&type=template&id=3d710dfc&functional=true& */ "./resources/js/src/datum/layouts/components/TheFooter.vue?vue&type=template&id=3d710dfc&functional=true&");
/* harmony import */ var _TheFooter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TheFooter.vue?vue&type=script&lang=js& */ "./resources/js/src/datum/layouts/components/TheFooter.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _TheFooter_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TheFooter.vue?vue&type=style&index=0&lang=scss& */ "./resources/js/src/datum/layouts/components/TheFooter.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _TheFooter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TheFooter_vue_vue_type_template_id_3d710dfc_functional_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TheFooter_vue_vue_type_template_id_3d710dfc_functional_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  true,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/datum/layouts/components/TheFooter.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/datum/layouts/components/TheFooter.vue?vue&type=script&lang=js&":
/*!******************************************************************************************!*\
  !*** ./resources/js/src/datum/layouts/components/TheFooter.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TheFooter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TheFooter.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/datum/layouts/components/TheFooter.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TheFooter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/datum/layouts/components/TheFooter.vue?vue&type=style&index=0&lang=scss&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/src/datum/layouts/components/TheFooter.vue?vue&type=style&index=0&lang=scss& ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_TheFooter_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TheFooter.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/datum/layouts/components/TheFooter.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_TheFooter_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_TheFooter_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_TheFooter_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_TheFooter_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_TheFooter_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/src/datum/layouts/components/TheFooter.vue?vue&type=template&id=3d710dfc&functional=true&":
/*!****************************************************************************************************************!*\
  !*** ./resources/js/src/datum/layouts/components/TheFooter.vue?vue&type=template&id=3d710dfc&functional=true& ***!
  \****************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TheFooter_vue_vue_type_template_id_3d710dfc_functional_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TheFooter.vue?vue&type=template&id=3d710dfc&functional=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/datum/layouts/components/TheFooter.vue?vue&type=template&id=3d710dfc&functional=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TheFooter_vue_vue_type_template_id_3d710dfc_functional_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TheFooter_vue_vue_type_template_id_3d710dfc_functional_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/datum/layouts/components/navbar/HorizontalDetailMenu.vue":
/*!***********************************************************************************!*\
  !*** ./resources/js/src/datum/layouts/components/navbar/HorizontalDetailMenu.vue ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HorizontalDetailMenu_vue_vue_type_template_id_dbcdcbee___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HorizontalDetailMenu.vue?vue&type=template&id=dbcdcbee& */ "./resources/js/src/datum/layouts/components/navbar/HorizontalDetailMenu.vue?vue&type=template&id=dbcdcbee&");
/* harmony import */ var _HorizontalDetailMenu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HorizontalDetailMenu.vue?vue&type=script&lang=js& */ "./resources/js/src/datum/layouts/components/navbar/HorizontalDetailMenu.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _HorizontalDetailMenu_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./HorizontalDetailMenu.vue?vue&type=style&index=0&lang=scss& */ "./resources/js/src/datum/layouts/components/navbar/HorizontalDetailMenu.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _HorizontalDetailMenu_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./HorizontalDetailMenu.vue?vue&type=style&index=1&lang=scss& */ "./resources/js/src/datum/layouts/components/navbar/HorizontalDetailMenu.vue?vue&type=style&index=1&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");







/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__["default"])(
  _HorizontalDetailMenu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _HorizontalDetailMenu_vue_vue_type_template_id_dbcdcbee___WEBPACK_IMPORTED_MODULE_0__["render"],
  _HorizontalDetailMenu_vue_vue_type_template_id_dbcdcbee___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/datum/layouts/components/navbar/HorizontalDetailMenu.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/datum/layouts/components/navbar/HorizontalDetailMenu.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************!*\
  !*** ./resources/js/src/datum/layouts/components/navbar/HorizontalDetailMenu.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HorizontalDetailMenu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./HorizontalDetailMenu.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/datum/layouts/components/navbar/HorizontalDetailMenu.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HorizontalDetailMenu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/datum/layouts/components/navbar/HorizontalDetailMenu.vue?vue&type=style&index=0&lang=scss&":
/*!*********************************************************************************************************************!*\
  !*** ./resources/js/src/datum/layouts/components/navbar/HorizontalDetailMenu.vue?vue&type=style&index=0&lang=scss& ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_HorizontalDetailMenu_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/style-loader!../../../../../../../node_modules/css-loader!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./HorizontalDetailMenu.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/datum/layouts/components/navbar/HorizontalDetailMenu.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_HorizontalDetailMenu_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_HorizontalDetailMenu_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_HorizontalDetailMenu_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_HorizontalDetailMenu_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_HorizontalDetailMenu_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/src/datum/layouts/components/navbar/HorizontalDetailMenu.vue?vue&type=style&index=1&lang=scss&":
/*!*********************************************************************************************************************!*\
  !*** ./resources/js/src/datum/layouts/components/navbar/HorizontalDetailMenu.vue?vue&type=style&index=1&lang=scss& ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_HorizontalDetailMenu_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/style-loader!../../../../../../../node_modules/css-loader!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./HorizontalDetailMenu.vue?vue&type=style&index=1&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/datum/layouts/components/navbar/HorizontalDetailMenu.vue?vue&type=style&index=1&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_HorizontalDetailMenu_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_HorizontalDetailMenu_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_HorizontalDetailMenu_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_HorizontalDetailMenu_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_HorizontalDetailMenu_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/src/datum/layouts/components/navbar/HorizontalDetailMenu.vue?vue&type=template&id=dbcdcbee&":
/*!******************************************************************************************************************!*\
  !*** ./resources/js/src/datum/layouts/components/navbar/HorizontalDetailMenu.vue?vue&type=template&id=dbcdcbee& ***!
  \******************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HorizontalDetailMenu_vue_vue_type_template_id_dbcdcbee___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./HorizontalDetailMenu.vue?vue&type=template&id=dbcdcbee& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/datum/layouts/components/navbar/HorizontalDetailMenu.vue?vue&type=template&id=dbcdcbee&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HorizontalDetailMenu_vue_vue_type_template_id_dbcdcbee___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HorizontalDetailMenu_vue_vue_type_template_id_dbcdcbee___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/datum/layouts/components/navbar/HorizontalNavMenu.vue":
/*!********************************************************************************!*\
  !*** ./resources/js/src/datum/layouts/components/navbar/HorizontalNavMenu.vue ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HorizontalNavMenu_vue_vue_type_template_id_26e55839___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HorizontalNavMenu.vue?vue&type=template&id=26e55839& */ "./resources/js/src/datum/layouts/components/navbar/HorizontalNavMenu.vue?vue&type=template&id=26e55839&");
/* harmony import */ var _HorizontalNavMenu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HorizontalNavMenu.vue?vue&type=script&lang=js& */ "./resources/js/src/datum/layouts/components/navbar/HorizontalNavMenu.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _HorizontalNavMenu_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./HorizontalNavMenu.vue?vue&type=style&index=0&lang=scss& */ "./resources/js/src/datum/layouts/components/navbar/HorizontalNavMenu.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _HorizontalNavMenu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _HorizontalNavMenu_vue_vue_type_template_id_26e55839___WEBPACK_IMPORTED_MODULE_0__["render"],
  _HorizontalNavMenu_vue_vue_type_template_id_26e55839___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/datum/layouts/components/navbar/HorizontalNavMenu.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/datum/layouts/components/navbar/HorizontalNavMenu.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/src/datum/layouts/components/navbar/HorizontalNavMenu.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HorizontalNavMenu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./HorizontalNavMenu.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/datum/layouts/components/navbar/HorizontalNavMenu.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HorizontalNavMenu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/datum/layouts/components/navbar/HorizontalNavMenu.vue?vue&type=style&index=0&lang=scss&":
/*!******************************************************************************************************************!*\
  !*** ./resources/js/src/datum/layouts/components/navbar/HorizontalNavMenu.vue?vue&type=style&index=0&lang=scss& ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_HorizontalNavMenu_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/style-loader!../../../../../../../node_modules/css-loader!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./HorizontalNavMenu.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/datum/layouts/components/navbar/HorizontalNavMenu.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_HorizontalNavMenu_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_HorizontalNavMenu_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_HorizontalNavMenu_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_HorizontalNavMenu_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_HorizontalNavMenu_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/src/datum/layouts/components/navbar/HorizontalNavMenu.vue?vue&type=template&id=26e55839&":
/*!***************************************************************************************************************!*\
  !*** ./resources/js/src/datum/layouts/components/navbar/HorizontalNavMenu.vue?vue&type=template&id=26e55839& ***!
  \***************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HorizontalNavMenu_vue_vue_type_template_id_26e55839___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./HorizontalNavMenu.vue?vue&type=template&id=26e55839& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/datum/layouts/components/navbar/HorizontalNavMenu.vue?vue&type=template&id=26e55839&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HorizontalNavMenu_vue_vue_type_template_id_26e55839___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HorizontalNavMenu_vue_vue_type_template_id_26e55839___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/datum/layouts/components/navbar/HorizontalNavMenuItem.vue":
/*!************************************************************************************!*\
  !*** ./resources/js/src/datum/layouts/components/navbar/HorizontalNavMenuItem.vue ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HorizontalNavMenuItem_vue_vue_type_template_id_77c9bd6c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HorizontalNavMenuItem.vue?vue&type=template&id=77c9bd6c& */ "./resources/js/src/datum/layouts/components/navbar/HorizontalNavMenuItem.vue?vue&type=template&id=77c9bd6c&");
/* harmony import */ var _HorizontalNavMenuItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HorizontalNavMenuItem.vue?vue&type=script&lang=js& */ "./resources/js/src/datum/layouts/components/navbar/HorizontalNavMenuItem.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _HorizontalNavMenuItem_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./HorizontalNavMenuItem.vue?vue&type=style&index=0&lang=scss& */ "./resources/js/src/datum/layouts/components/navbar/HorizontalNavMenuItem.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _HorizontalNavMenuItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _HorizontalNavMenuItem_vue_vue_type_template_id_77c9bd6c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _HorizontalNavMenuItem_vue_vue_type_template_id_77c9bd6c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/datum/layouts/components/navbar/HorizontalNavMenuItem.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/datum/layouts/components/navbar/HorizontalNavMenuItem.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************!*\
  !*** ./resources/js/src/datum/layouts/components/navbar/HorizontalNavMenuItem.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HorizontalNavMenuItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./HorizontalNavMenuItem.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/datum/layouts/components/navbar/HorizontalNavMenuItem.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HorizontalNavMenuItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/datum/layouts/components/navbar/HorizontalNavMenuItem.vue?vue&type=style&index=0&lang=scss&":
/*!**********************************************************************************************************************!*\
  !*** ./resources/js/src/datum/layouts/components/navbar/HorizontalNavMenuItem.vue?vue&type=style&index=0&lang=scss& ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_HorizontalNavMenuItem_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/style-loader!../../../../../../../node_modules/css-loader!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./HorizontalNavMenuItem.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/datum/layouts/components/navbar/HorizontalNavMenuItem.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_HorizontalNavMenuItem_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_HorizontalNavMenuItem_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_HorizontalNavMenuItem_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_HorizontalNavMenuItem_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_HorizontalNavMenuItem_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/src/datum/layouts/components/navbar/HorizontalNavMenuItem.vue?vue&type=template&id=77c9bd6c&":
/*!*******************************************************************************************************************!*\
  !*** ./resources/js/src/datum/layouts/components/navbar/HorizontalNavMenuItem.vue?vue&type=template&id=77c9bd6c& ***!
  \*******************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HorizontalNavMenuItem_vue_vue_type_template_id_77c9bd6c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./HorizontalNavMenuItem.vue?vue&type=template&id=77c9bd6c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/datum/layouts/components/navbar/HorizontalNavMenuItem.vue?vue&type=template&id=77c9bd6c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HorizontalNavMenuItem_vue_vue_type_template_id_77c9bd6c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HorizontalNavMenuItem_vue_vue_type_template_id_77c9bd6c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/datum/layouts/components/navbar/TheNavbarHorizontal.vue":
/*!**********************************************************************************!*\
  !*** ./resources/js/src/datum/layouts/components/navbar/TheNavbarHorizontal.vue ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TheNavbarHorizontal_vue_vue_type_template_id_45d2a680___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TheNavbarHorizontal.vue?vue&type=template&id=45d2a680& */ "./resources/js/src/datum/layouts/components/navbar/TheNavbarHorizontal.vue?vue&type=template&id=45d2a680&");
/* harmony import */ var _TheNavbarHorizontal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TheNavbarHorizontal.vue?vue&type=script&lang=js& */ "./resources/js/src/datum/layouts/components/navbar/TheNavbarHorizontal.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _TheNavbarHorizontal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TheNavbarHorizontal_vue_vue_type_template_id_45d2a680___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TheNavbarHorizontal_vue_vue_type_template_id_45d2a680___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/datum/layouts/components/navbar/TheNavbarHorizontal.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/datum/layouts/components/navbar/TheNavbarHorizontal.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/src/datum/layouts/components/navbar/TheNavbarHorizontal.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TheNavbarHorizontal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TheNavbarHorizontal.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/datum/layouts/components/navbar/TheNavbarHorizontal.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TheNavbarHorizontal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/datum/layouts/components/navbar/TheNavbarHorizontal.vue?vue&type=template&id=45d2a680&":
/*!*****************************************************************************************************************!*\
  !*** ./resources/js/src/datum/layouts/components/navbar/TheNavbarHorizontal.vue?vue&type=template&id=45d2a680& ***!
  \*****************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TheNavbarHorizontal_vue_vue_type_template_id_45d2a680___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TheNavbarHorizontal.vue?vue&type=template&id=45d2a680& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/datum/layouts/components/navbar/TheNavbarHorizontal.vue?vue&type=template&id=45d2a680&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TheNavbarHorizontal_vue_vue_type_template_id_45d2a680___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TheNavbarHorizontal_vue_vue_type_template_id_45d2a680___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/datum/layouts/components/navbar/TheNavbarVertical.vue":
/*!********************************************************************************!*\
  !*** ./resources/js/src/datum/layouts/components/navbar/TheNavbarVertical.vue ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TheNavbarVertical_vue_vue_type_template_id_06bb29d2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TheNavbarVertical.vue?vue&type=template&id=06bb29d2& */ "./resources/js/src/datum/layouts/components/navbar/TheNavbarVertical.vue?vue&type=template&id=06bb29d2&");
/* harmony import */ var _TheNavbarVertical_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TheNavbarVertical.vue?vue&type=script&lang=js& */ "./resources/js/src/datum/layouts/components/navbar/TheNavbarVertical.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _TheNavbarVertical_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TheNavbarVertical_vue_vue_type_template_id_06bb29d2___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TheNavbarVertical_vue_vue_type_template_id_06bb29d2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/datum/layouts/components/navbar/TheNavbarVertical.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/datum/layouts/components/navbar/TheNavbarVertical.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/src/datum/layouts/components/navbar/TheNavbarVertical.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TheNavbarVertical_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TheNavbarVertical.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/datum/layouts/components/navbar/TheNavbarVertical.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TheNavbarVertical_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/datum/layouts/components/navbar/TheNavbarVertical.vue?vue&type=template&id=06bb29d2&":
/*!***************************************************************************************************************!*\
  !*** ./resources/js/src/datum/layouts/components/navbar/TheNavbarVertical.vue?vue&type=template&id=06bb29d2& ***!
  \***************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TheNavbarVertical_vue_vue_type_template_id_06bb29d2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TheNavbarVertical.vue?vue&type=template&id=06bb29d2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/datum/layouts/components/navbar/TheNavbarVertical.vue?vue&type=template&id=06bb29d2&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TheNavbarVertical_vue_vue_type_template_id_06bb29d2___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TheNavbarVertical_vue_vue_type_template_id_06bb29d2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/datum/layouts/components/navbar/VerticalNavMenu.vue":
/*!******************************************************************************!*\
  !*** ./resources/js/src/datum/layouts/components/navbar/VerticalNavMenu.vue ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _VerticalNavMenu_vue_vue_type_template_id_7547ca67___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VerticalNavMenu.vue?vue&type=template&id=7547ca67& */ "./resources/js/src/datum/layouts/components/navbar/VerticalNavMenu.vue?vue&type=template&id=7547ca67&");
/* harmony import */ var _VerticalNavMenu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./VerticalNavMenu.vue?vue&type=script&lang=js& */ "./resources/js/src/datum/layouts/components/navbar/VerticalNavMenu.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _VerticalNavMenu_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./VerticalNavMenu.vue?vue&type=style&index=0&lang=scss& */ "./resources/js/src/datum/layouts/components/navbar/VerticalNavMenu.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _VerticalNavMenu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _VerticalNavMenu_vue_vue_type_template_id_7547ca67___WEBPACK_IMPORTED_MODULE_0__["render"],
  _VerticalNavMenu_vue_vue_type_template_id_7547ca67___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/datum/layouts/components/navbar/VerticalNavMenu.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/datum/layouts/components/navbar/VerticalNavMenu.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/src/datum/layouts/components/navbar/VerticalNavMenu.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VerticalNavMenu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./VerticalNavMenu.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/datum/layouts/components/navbar/VerticalNavMenu.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VerticalNavMenu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/datum/layouts/components/navbar/VerticalNavMenu.vue?vue&type=style&index=0&lang=scss&":
/*!****************************************************************************************************************!*\
  !*** ./resources/js/src/datum/layouts/components/navbar/VerticalNavMenu.vue?vue&type=style&index=0&lang=scss& ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_VerticalNavMenu_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/style-loader!../../../../../../../node_modules/css-loader!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./VerticalNavMenu.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/datum/layouts/components/navbar/VerticalNavMenu.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_VerticalNavMenu_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_VerticalNavMenu_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_VerticalNavMenu_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_VerticalNavMenu_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_VerticalNavMenu_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/src/datum/layouts/components/navbar/VerticalNavMenu.vue?vue&type=template&id=7547ca67&":
/*!*************************************************************************************************************!*\
  !*** ./resources/js/src/datum/layouts/components/navbar/VerticalNavMenu.vue?vue&type=template&id=7547ca67& ***!
  \*************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VerticalNavMenu_vue_vue_type_template_id_7547ca67___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./VerticalNavMenu.vue?vue&type=template&id=7547ca67& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/datum/layouts/components/navbar/VerticalNavMenu.vue?vue&type=template&id=7547ca67&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VerticalNavMenu_vue_vue_type_template_id_7547ca67___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VerticalNavMenu_vue_vue_type_template_id_7547ca67___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/datum/layouts/components/navbar/VerticalNavMenuItem.vue":
/*!**********************************************************************************!*\
  !*** ./resources/js/src/datum/layouts/components/navbar/VerticalNavMenuItem.vue ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _VerticalNavMenuItem_vue_vue_type_template_id_0e2b689a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VerticalNavMenuItem.vue?vue&type=template&id=0e2b689a& */ "./resources/js/src/datum/layouts/components/navbar/VerticalNavMenuItem.vue?vue&type=template&id=0e2b689a&");
/* harmony import */ var _VerticalNavMenuItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./VerticalNavMenuItem.vue?vue&type=script&lang=js& */ "./resources/js/src/datum/layouts/components/navbar/VerticalNavMenuItem.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _VerticalNavMenuItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _VerticalNavMenuItem_vue_vue_type_template_id_0e2b689a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _VerticalNavMenuItem_vue_vue_type_template_id_0e2b689a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/datum/layouts/components/navbar/VerticalNavMenuItem.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/datum/layouts/components/navbar/VerticalNavMenuItem.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/src/datum/layouts/components/navbar/VerticalNavMenuItem.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VerticalNavMenuItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./VerticalNavMenuItem.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/datum/layouts/components/navbar/VerticalNavMenuItem.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VerticalNavMenuItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/datum/layouts/components/navbar/VerticalNavMenuItem.vue?vue&type=template&id=0e2b689a&":
/*!*****************************************************************************************************************!*\
  !*** ./resources/js/src/datum/layouts/components/navbar/VerticalNavMenuItem.vue?vue&type=template&id=0e2b689a& ***!
  \*****************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VerticalNavMenuItem_vue_vue_type_template_id_0e2b689a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./VerticalNavMenuItem.vue?vue&type=template&id=0e2b689a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/datum/layouts/components/navbar/VerticalNavMenuItem.vue?vue&type=template&id=0e2b689a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VerticalNavMenuItem_vue_vue_type_template_id_0e2b689a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VerticalNavMenuItem_vue_vue_type_template_id_0e2b689a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/datum/layouts/components/navbar/navMenuItems.js":
/*!**************************************************************************!*\
  !*** ./resources/js/src/datum/layouts/components/navbar/navMenuItems.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*=========================================================================================
  File Name: sidebarItems.js
  Description: Sidebar Items list. Add / Remove menu items from here.
  Strucutre:
          url     => router path
          name    => name to display in sidebar
          slug    => router path name
          icon    => Feather Icon component/icon name
          tag     => text to display on badge
          tagColor  => class to apply on badge element
          i18n    => Internationalization
          submenu   => submenu of current item (current item will become dropdown )
                NOTE: Submenu don't have any icon(you can add icon if u want to display)
          isDisabled  => disable sidebar item/group
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/
/* harmony default export */ __webpack_exports__["default"] = ([// {
//   url: "/apps/email",
//   name: "Email",
//   slug: "email",
//   icon: "MailIcon",
//   i18n: "Email",
// },
{
  url: "/currencies",
  name: "currencies",
  slug: "currencies",
  icon: null,
  i18n: "CURRENCIES"
}, {
  url: "/markets",
  name: "markets",
  slug: "markets",
  icon: null,
  i18n: "MAREKETS"
}, {
  url: "/watchlist",
  name: "watchlist",
  slug: "watchlist",
  icon: null,
  i18n: "WATCHLIST"
}]);

/***/ })

}]);