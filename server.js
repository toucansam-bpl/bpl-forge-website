/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./public/img/bpl-logo.png":
/*!*********************************!*\
  !*** ./public/img/bpl-logo.png ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"static/media/bpl-logo.8b1be392.png\";\n\n//# sourceURL=webpack:///./public/img/bpl-logo.png?");

/***/ }),

/***/ "./src/server/middleware/renderer.js":
/*!*******************************************!*\
  !*** ./src/server/middleware/renderer.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__dirname) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nvar _react = _interopRequireDefault(__webpack_require__(/*! react */ \"react\"));\n\nvar _fs = __webpack_require__(/*! fs */ \"fs\");\n\nvar _path = __webpack_require__(/*! path */ \"path\");\n\nvar _mobxReact = __webpack_require__(/*! mobx-react */ \"mobx-react\");\n\nvar _server = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n\nvar _jss = __webpack_require__(/*! react-jss/lib/jss */ \"react-jss/lib/jss\");\n\nvar _JssProvider = _interopRequireDefault(__webpack_require__(/*! react-jss/lib/JssProvider */ \"react-jss/lib/JssProvider\"));\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nvar _styles = __webpack_require__(/*! @material-ui/core/styles */ \"@material-ui/core/styles\");\n\nvar _green = _interopRequireDefault(__webpack_require__(/*! @material-ui/core/colors/green */ \"@material-ui/core/colors/green\"));\n\nvar _red = _interopRequireDefault(__webpack_require__(/*! @material-ui/core/colors/red */ \"@material-ui/core/colors/red\"));\n\nvar _App = _interopRequireDefault(__webpack_require__(/*! ../../shared/App */ \"./src/shared/App.js\"));\n\nvar _NodeApi = _interopRequireDefault(__webpack_require__(/*! ../../shared/domain/api/NodeApi */ \"./src/shared/domain/api/NodeApi.js\"));\n\nvar _RoundStore = _interopRequireDefault(__webpack_require__(/*! ../../shared/stores/RoundStore */ \"./src/shared/stores/RoundStore.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\nvar renderFullPage =\n/*#__PURE__*/\nfunction () {\n  var _ref = _asyncToGenerator(\n  /*#__PURE__*/\n  regeneratorRuntime.mark(function _callee(html, css) {\n    return regeneratorRuntime.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            return _context.abrupt(\"return\", new Promise(function (resolve, reject) {\n              var filePath = (0, _path.resolve)(__dirname, '..', '..', '..', 'public', 'index.html');\n              (0, _fs.readFile)(filePath, 'utf8', function (err, page) {\n                if (err) {\n                  return reject(err);\n                }\n\n                resolve(page.replace('<div id=\"root\"></div>', \"<div id=\\\"root\\\">\".concat(html, \"</div>\")).replace('<style id=\"jss-server-side\"></style>', \"<style id=\\\"jss-server-side\\\">\".concat(css, \"</style>\")));\n              });\n            }));\n\n          case 1:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee, this);\n  }));\n\n  return function renderFullPage(_x, _x2) {\n    return _ref.apply(this, arguments);\n  };\n}();\n\nvar _default = function _default(req, res) {\n  // Create a sheetsRegistry instance.\n  var sheetsRegistry = new _jss.SheetsRegistry();\n  console.log(\"Serving \".concat(req.url)); // Create a theme instance.\n\n  var theme = (0, _styles.createMuiTheme)({\n    palette: {\n      primary: _green.default,\n      accent: _red.default,\n      type: 'light'\n    }\n  });\n  var generateClassName = (0, _styles.createGenerateClassName)();\n  var roundStore = new _RoundStore.default(new _NodeApi.default());\n  var stores = {\n    roundStore: roundStore // Render the component to a string.\n\n  };\n  var html = (0, _server.renderToString)(_react.default.createElement(_JssProvider.default, {\n    registry: sheetsRegistry,\n    generateClassName: generateClassName\n  }, _react.default.createElement(_styles.MuiThemeProvider, {\n    theme: theme,\n    sheetsManager: new Map()\n  }, _react.default.createElement(_mobxReact.Provider, stores, _react.default.createElement(_reactRouterDom.StaticRouter, {\n    location: req.url,\n    context: {}\n  }, _react.default.createElement(_App.default, null)))))); // Grab the CSS from our sheetsRegistry.\n\n  var css = sheetsRegistry.toString();\n\n  var runner =\n  /*#__PURE__*/\n  function () {\n    var _ref2 = _asyncToGenerator(\n    /*#__PURE__*/\n    regeneratorRuntime.mark(function _callee2() {\n      var pageHtml;\n      return regeneratorRuntime.wrap(function _callee2$(_context2) {\n        while (1) {\n          switch (_context2.prev = _context2.next) {\n            case 0:\n              _context2.prev = 0;\n              _context2.next = 3;\n              return renderFullPage(html, css);\n\n            case 3:\n              pageHtml = _context2.sent;\n              res.send(pageHtml);\n              _context2.next = 11;\n              break;\n\n            case 7:\n              _context2.prev = 7;\n              _context2.t0 = _context2[\"catch\"](0);\n              console.log(\"Error in server: \".concat(_context2.t0));\n              res.status(500).end();\n\n            case 11:\n            case \"end\":\n              return _context2.stop();\n          }\n        }\n      }, _callee2, this, [[0, 7]]);\n    }));\n\n    return function runner() {\n      return _ref2.apply(this, arguments);\n    };\n  }();\n\n  runner();\n};\n\nexports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, \"src/server/middleware\"))\n\n//# sourceURL=webpack:///./src/server/middleware/renderer.js?");

/***/ }),

/***/ "./src/server/server.js":
/*!******************************!*\
  !*** ./src/server/server.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _express = _interopRequireDefault(__webpack_require__(/*! express */ \"express\"));\n\nvar _cors = _interopRequireDefault(__webpack_require__(/*! cors */ \"cors\"));\n\nvar _renderer = _interopRequireDefault(__webpack_require__(/*! ./middleware/renderer */ \"./src/server/middleware/renderer.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar app = (0, _express.default)();\napp.use((0, _cors.default)());\napp.get('^/$', _renderer.default);\napp.use(_express.default.static('public'));\napp.get('*', _renderer.default);\napp.listen(3000, function () {\n  console.log(\"Server is listening on port: 3000\");\n});\n\n//# sourceURL=webpack:///./src/server/server.js?");

/***/ }),

/***/ "./src/shared/App.js":
/*!***************************!*\
  !*** ./src/shared/App.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nvar _react = _interopRequireWildcard(__webpack_require__(/*! react */ \"react\"));\n\nvar _core = __webpack_require__(/*! @material-ui/core */ \"@material-ui/core\");\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nvar _bplLogo = _interopRequireDefault(__webpack_require__(/*! ../../public/img/bpl-logo.png */ \"./public/img/bpl-logo.png\"));\n\nvar _CalculatorScreen = _interopRequireDefault(__webpack_require__(/*! ./CalculatorScreen/CalculatorScreen */ \"./src/shared/CalculatorScreen/CalculatorScreen.js\"));\n\nvar _DelegateScreen = _interopRequireDefault(__webpack_require__(/*! ./DelegateScreen/DelegateScreen */ \"./src/shared/DelegateScreen/DelegateScreen.js\"));\n\nvar _RoundScreen = _interopRequireDefault(__webpack_require__(/*! ./RoundScreen/RoundScreen */ \"./src/shared/RoundScreen/RoundScreen.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }\n\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nvar styles = function styles(theme) {\n  return {\n    content: {\n      marginTop: \"70px\",\n      padding: \"30px 15px\",\n      minHeight: \"calc(100% - 123px)\"\n    },\n    flex: {\n      flex: 1\n    },\n    menuButton: {\n      marginLeft: -12,\n      marginRight: 20\n    }\n  };\n};\n\nvar App =\n/*#__PURE__*/\nfunction (_Component) {\n  _inherits(App, _Component);\n\n  function App() {\n    _classCallCheck(this, App);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(App).apply(this, arguments));\n  }\n\n  _createClass(App, [{\n    key: \"render\",\n    value: function render() {\n      var classes = this.props.classes;\n      return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_core.CssBaseline, null), _react.default.createElement(_core.AppBar, {\n        position: \"static\"\n      }, _react.default.createElement(_core.Toolbar, null, _react.default.createElement(_core.Typography, {\n        variant: \"title\",\n        color: \"inherit\",\n        className: classes.flex\n      }, _react.default.createElement(\"img\", {\n        src: _bplLogo.default,\n        alt: \"BPL logo\",\n        style: {\n          height: '1.16667em',\n          verticalAlign: 'bottom'\n        }\n      }), _react.default.createElement(\"span\", {\n        style: {\n          marginLeft: '15px'\n        }\n      }, _react.default.createElement(_reactRouterDom.Link, {\n        to: \"/\"\n      }, \"BPL Delegate Explorer\"))), _react.default.createElement(_reactRouterDom.Link, {\n        to: \"/calculator\"\n      }, \"Calculator\"), _react.default.createElement(_core.Hidden, {\n        smDown: true\n      }, _react.default.createElement(_core.Typography, {\n        color: \"inherit\"\n      })))), _react.default.createElement(\"div\", {\n        className: classes.content\n      }, _react.default.createElement(_reactRouterDom.Switch, null, _react.default.createElement(_reactRouterDom.Route, {\n        path: \"/\",\n        exact: true,\n        component: _RoundScreen.default\n      }), _react.default.createElement(_reactRouterDom.Route, {\n        path: \"/delegate/:address\",\n        component: _DelegateScreen.default\n      }), _react.default.createElement(_reactRouterDom.Route, {\n        path: \"/calculator\",\n        exact: true,\n        component: _CalculatorScreen.default\n      }))));\n    }\n  }]);\n\n  return App;\n}(_react.Component);\n\nvar _default = (0, _core.withStyles)(styles)(App);\n\nexports.default = _default;\n\n//# sourceURL=webpack:///./src/shared/App.js?");

/***/ }),

/***/ "./src/shared/CalculatorScreen/CalculatorScreen.js":
/*!*********************************************************!*\
  !*** ./src/shared/CalculatorScreen/CalculatorScreen.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nvar _react = _interopRequireWildcard(__webpack_require__(/*! react */ \"react\"));\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }\n\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nvar CalculatorScreen =\n/*#__PURE__*/\nfunction (_Component) {\n  _inherits(CalculatorScreen, _Component);\n\n  function CalculatorScreen() {\n    _classCallCheck(this, CalculatorScreen);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(CalculatorScreen).apply(this, arguments));\n  }\n\n  _createClass(CalculatorScreen, [{\n    key: \"render\",\n    value: function render() {\n      return _react.default.createElement(\"div\", null, \"Calculator Screen\");\n    }\n  }]);\n\n  return CalculatorScreen;\n}(_react.Component);\n\nexports.default = CalculatorScreen;\n\n//# sourceURL=webpack:///./src/shared/CalculatorScreen/CalculatorScreen.js?");

/***/ }),

/***/ "./src/shared/DelegateScreen/DelegateScreen.js":
/*!*****************************************************!*\
  !*** ./src/shared/DelegateScreen/DelegateScreen.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nvar _react = _interopRequireWildcard(__webpack_require__(/*! react */ \"react\"));\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }\n\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nvar DelegateScreen =\n/*#__PURE__*/\nfunction (_Component) {\n  _inherits(DelegateScreen, _Component);\n\n  function DelegateScreen() {\n    _classCallCheck(this, DelegateScreen);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(DelegateScreen).apply(this, arguments));\n  }\n\n  _createClass(DelegateScreen, [{\n    key: \"render\",\n    value: function render() {\n      return _react.default.createElement(\"div\", null, \"Delegate Screen\");\n    }\n  }]);\n\n  return DelegateScreen;\n}(_react.Component);\n\nexports.default = DelegateScreen;\n\n//# sourceURL=webpack:///./src/shared/DelegateScreen/DelegateScreen.js?");

/***/ }),

/***/ "./src/shared/RoundScreen/RoundScreen.js":
/*!***********************************************!*\
  !*** ./src/shared/RoundScreen/RoundScreen.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nvar _react = _interopRequireWildcard(__webpack_require__(/*! react */ \"react\"));\n\nvar _mobxReact = __webpack_require__(/*! mobx-react */ \"mobx-react\");\n\nvar _core = __webpack_require__(/*! @material-ui/core */ \"@material-ui/core\");\n\nvar _Avatar = _interopRequireDefault(__webpack_require__(/*! @material-ui/core/Avatar */ \"@material-ui/core/Avatar\"));\n\nvar _ListItemText = _interopRequireDefault(__webpack_require__(/*! @material-ui/core/ListItemText */ \"@material-ui/core/ListItemText\"));\n\nvar _Announcement = _interopRequireDefault(__webpack_require__(/*! @material-ui/icons/Announcement */ \"@material-ui/icons/Announcement\"));\n\nvar _CheckCircle = _interopRequireDefault(__webpack_require__(/*! @material-ui/icons/CheckCircle */ \"@material-ui/icons/CheckCircle\"));\n\nvar _Update = _interopRequireDefault(__webpack_require__(/*! @material-ui/icons/Update */ \"@material-ui/icons/Update\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }\n\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }\n\nfunction _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }\n\nvar styles = function styles(theme) {\n  return {\n    missedBlockAvatar: {\n      backgroundColor: theme.palette.error.main\n    },\n    successfulBlockAvatar: {\n      backgroundColor: theme.palette.primary.main\n    }\n  };\n};\n\nvar CompletedSlot = (0, _core.withStyles)(styles)(function (_ref) {\n  var hasMissedBlock = _ref.hasMissedBlock,\n      rest = _objectWithoutProperties(_ref, [\"hasMissedBlock\"]);\n\n  return hasMissedBlock ? _react.default.createElement(CompletedMissedSlot, rest) : _react.default.createElement(CompletedForgedSlot, rest);\n});\n\nvar CompletedForgedSlot = function CompletedForgedSlot(_ref2) {\n  var classes = _ref2.classes,\n      name = _ref2.name,\n      slot = _ref2.slot,\n      timestamp = _ref2.timestamp;\n  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_Avatar.default, {\n    className: classes.successfulBlockAvatar\n  }, _react.default.createElement(_CheckCircle.default, null)), _react.default.createElement(_ListItemText.default, {\n    primary: \"\".concat(slot, \" - \").concat(name),\n    secondary: \"Forged at: \".concat(new Date(timestamp).toLocaleString())\n  }));\n};\n\nvar CompletedMissedSlot = function CompletedMissedSlot(_ref3) {\n  var classes = _ref3.classes,\n      name = _ref3.name,\n      slot = _ref3.slot,\n      timestamp = _ref3.timestamp;\n  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_Avatar.default, {\n    className: classes.missedBlockAvatar\n  }, _react.default.createElement(_Announcement.default, null)), _react.default.createElement(_ListItemText.default, {\n    primary: \"\".concat(slot, \" - \").concat(name),\n    secondary: \"Missed block at: \".concat(new Date(timestamp).toLocaleString())\n  }));\n};\n\nvar UpcomingSlot = function UpcomingSlot(_ref4) {\n  var slot = _ref4.slot,\n      name = _ref4.name,\n      timestamp = _ref4.timestamp;\n  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_Avatar.default, null, _react.default.createElement(_Update.default, null)), _react.default.createElement(_ListItemText.default, {\n    primary: \"\".concat(slot, \" - \").concat(name),\n    secondary: \"Expected at: \".concat(new Date(timestamp).toLocaleString())\n  }));\n};\n\nvar RoundScreen =\n/*#__PURE__*/\nfunction (_Component) {\n  _inherits(RoundScreen, _Component);\n\n  function RoundScreen() {\n    var _getPrototypeOf2;\n\n    var _this;\n\n    _classCallCheck(this, RoundScreen);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(RoundScreen)).call.apply(_getPrototypeOf2, [this].concat(args)));\n    _this.state = {\n      hasProcessedIncoming: false,\n      hasProcessedOutgoing: false\n    };\n    return _this;\n  }\n\n  _createClass(RoundScreen, [{\n    key: \"incomingComplete\",\n    value: function incomingComplete() {\n      console.log('incoming complete', this.state);\n\n      if (!this.state.hasProcessedIncoming) {\n        this.props.roundStore.completeSlotTransition();\n        this.setState(function (s) {\n          return _objectSpread({}, s, {\n            hasProcessedIncoming: true,\n            hasProcessedOutgoing: false\n          });\n        });\n      }\n    }\n  }, {\n    key: \"outgoingComplete\",\n    value: function outgoingComplete() {\n      console.log('outgoing complete', this.state);\n\n      if (!this.state.hasProcessedOutgoing) {\n        this.props.roundStore.transferSlots();\n        this.setState(function (s) {\n          return _objectSpread({}, s, {\n            hasProcessedIncoming: false,\n            hasProcessedOutgoing: true\n          });\n        });\n      }\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this2 = this;\n\n      var _this$props = this.props,\n          classes = _this$props.classes,\n          roundStore = _this$props.roundStore;\n      return _react.default.createElement(_core.Grid, {\n        container: true\n      }, _react.default.createElement(_core.Grid, {\n        item: true,\n        xs: 8\n      }, roundStore.init.match({\n        pending: function pending() {\n          return _react.default.createElement(\"div\", null, \"Loading, please wait..\");\n        },\n        rejected: function rejected(err) {\n          return _react.default.createElement(\"div\", null, \"Error: \", err.message);\n        },\n        resolved: function resolved() {\n          return _react.default.createElement(_core.List, null, roundStore.outgoingUpcomingSlots.map(function (forger) {\n            return _react.default.createElement(_core.Collapse, {\n              component: _core.ListItem,\n              in: !roundStore.hasOutgoingSlots,\n              key: forger.slot,\n              timeout: 500,\n              onExited: function onExited() {\n                return _this2.outgoingComplete();\n              }\n            }, _react.default.createElement(UpcomingSlot, forger));\n          }), roundStore.upcomingSlots.map(function (forger) {\n            return _react.default.createElement(_core.ListItem, {\n              key: forger.slot\n            }, _react.default.createElement(UpcomingSlot, forger));\n          }));\n        }\n      })), _react.default.createElement(_core.Grid, {\n        item: true,\n        xs: 4\n      }, roundStore.init.match({\n        pending: function pending() {\n          return _react.default.createElement(\"div\", null, \"Loading, please wait..\");\n        },\n        rejected: function rejected(err) {\n          return _react.default.createElement(\"div\", null, \"Error: \", err.message);\n        },\n        resolved: function resolved() {\n          return _react.default.createElement(_core.List, null, roundStore.incomingCompletedSlots.map(function (forger) {\n            return _react.default.createElement(_core.Collapse, {\n              component: _core.ListItem,\n              in: roundStore.hasIncomingSlots,\n              key: forger.slot,\n              timeout: 500,\n              onEntered: function onEntered() {\n                return _this2.incomingComplete();\n              }\n            }, _react.default.createElement(CompletedSlot, forger));\n          }), roundStore.completedSlots.map(function (forger) {\n            return _react.default.createElement(_core.ListItem, {\n              key: forger.slot\n            }, _react.default.createElement(CompletedSlot, forger));\n          }));\n        }\n      })));\n    }\n  }]);\n\n  return RoundScreen;\n}(_react.Component);\n\nvar _default = (0, _core.withStyles)(styles)((0, _mobxReact.inject)('roundStore')((0, _mobxReact.observer)(RoundScreen)));\n\nexports.default = _default;\n\n//# sourceURL=webpack:///./src/shared/RoundScreen/RoundScreen.js?");

/***/ }),

/***/ "./src/shared/domain/api/NodeApi.js":
/*!******************************************!*\
  !*** ./src/shared/domain/api/NodeApi.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nvar _nodeFetch = _interopRequireDefault(__webpack_require__(/*! node-fetch */ \"node-fetch\"));\n\nvar _querystring = _interopRequireDefault(__webpack_require__(/*! querystring */ \"querystring\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\nvar api = 'https://api.bplforge.com/api';\n\nfunction makeApiRequest(_x, _x2) {\n  return _makeApiRequest.apply(this, arguments);\n}\n\nfunction _makeApiRequest() {\n  _makeApiRequest = _asyncToGenerator(\n  /*#__PURE__*/\n  regeneratorRuntime.mark(function _callee8(url, params) {\n    return regeneratorRuntime.wrap(function _callee8$(_context8) {\n      while (1) {\n        switch (_context8.prev = _context8.next) {\n          case 0:\n            return _context8.abrupt(\"return\", new Promise(\n            /*#__PURE__*/\n            function () {\n              var _ref = _asyncToGenerator(\n              /*#__PURE__*/\n              regeneratorRuntime.mark(function _callee7(resolve, reject) {\n                var query, requestUrl, rawResponse, response;\n                return regeneratorRuntime.wrap(function _callee7$(_context7) {\n                  while (1) {\n                    switch (_context7.prev = _context7.next) {\n                      case 0:\n                        _context7.prev = 0;\n                        query = params ? \"?\".concat(_querystring.default.stringify(params)) : '';\n                        requestUrl = \"\".concat(api, \"/\").concat(url).concat(query);\n                        _context7.next = 5;\n                        return (0, _nodeFetch.default)(requestUrl, {\n                          method: 'GET'\n                        });\n\n                      case 5:\n                        rawResponse = _context7.sent;\n                        _context7.next = 8;\n                        return rawResponse.json();\n\n                      case 8:\n                        response = _context7.sent;\n\n                        if (response.success) {\n                          resolve(response);\n                        } else {\n                          reject(new Error(\"Request did not complete successfully.\"));\n                        }\n\n                        _context7.next = 15;\n                        break;\n\n                      case 12:\n                        _context7.prev = 12;\n                        _context7.t0 = _context7[\"catch\"](0);\n                        reject(_context7.t0);\n\n                      case 15:\n                      case \"end\":\n                        return _context7.stop();\n                    }\n                  }\n                }, _callee7, this, [[0, 12]]);\n              }));\n\n              return function (_x6, _x7) {\n                return _ref.apply(this, arguments);\n              };\n            }()));\n\n          case 1:\n          case \"end\":\n            return _context8.stop();\n        }\n      }\n    }, _callee8, this);\n  }));\n  return _makeApiRequest.apply(this, arguments);\n}\n\nvar NodeApi =\n/*#__PURE__*/\nfunction () {\n  function NodeApi() {\n    _classCallCheck(this, NodeApi);\n  }\n\n  _createClass(NodeApi, [{\n    key: \"getActiveDelegates\",\n    value: function () {\n      var _getActiveDelegates = _asyncToGenerator(\n      /*#__PURE__*/\n      regeneratorRuntime.mark(function _callee() {\n        return regeneratorRuntime.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                return _context.abrupt(\"return\", makeApiRequest('delegates', 0, 201));\n\n              case 1:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee, this);\n      }));\n\n      return function getActiveDelegates() {\n        return _getActiveDelegates.apply(this, arguments);\n      };\n    }()\n  }, {\n    key: \"getBlocks\",\n    value: function () {\n      var _getBlocks = _asyncToGenerator(\n      /*#__PURE__*/\n      regeneratorRuntime.mark(function _callee2() {\n        var offset,\n            limit,\n            _args2 = arguments;\n        return regeneratorRuntime.wrap(function _callee2$(_context2) {\n          while (1) {\n            switch (_context2.prev = _context2.next) {\n              case 0:\n                offset = _args2.length > 0 && _args2[0] !== undefined ? _args2[0] : 0;\n                limit = _args2.length > 1 && _args2[1] !== undefined ? _args2[1] : 100;\n                return _context2.abrupt(\"return\", makeApiRequest('blocks', {\n                  limit: limit,\n                  offset: offset\n                }));\n\n              case 3:\n              case \"end\":\n                return _context2.stop();\n            }\n          }\n        }, _callee2, this);\n      }));\n\n      return function getBlocks() {\n        return _getBlocks.apply(this, arguments);\n      };\n    }()\n  }, {\n    key: \"getCurrentRound\",\n    value: function () {\n      var _getCurrentRound = _asyncToGenerator(\n      /*#__PURE__*/\n      regeneratorRuntime.mark(function _callee3() {\n        return regeneratorRuntime.wrap(function _callee3$(_context3) {\n          while (1) {\n            switch (_context3.prev = _context3.next) {\n              case 0:\n                return _context3.abrupt(\"return\", makeApiRequest('rounds'));\n\n              case 1:\n              case \"end\":\n                return _context3.stop();\n            }\n          }\n        }, _callee3, this);\n      }));\n\n      return function getCurrentRound() {\n        return _getCurrentRound.apply(this, arguments);\n      };\n    }()\n  }, {\n    key: \"getRewardBlocks\",\n    value: function () {\n      var _getRewardBlocks = _asyncToGenerator(\n      /*#__PURE__*/\n      regeneratorRuntime.mark(function _callee4(generatorPublicKey) {\n        return regeneratorRuntime.wrap(function _callee4$(_context4) {\n          while (1) {\n            switch (_context4.prev = _context4.next) {\n              case 0:\n                return _context4.abrupt(\"return\", makeApiRequest('blocks', {\n                  generatorPublicKey: generatorPublicKey\n                }));\n\n              case 1:\n              case \"end\":\n                return _context4.stop();\n            }\n          }\n        }, _callee4, this);\n      }));\n\n      return function getRewardBlocks(_x3) {\n        return _getRewardBlocks.apply(this, arguments);\n      };\n    }()\n  }, {\n    key: \"getTransactions\",\n    value: function () {\n      var _getTransactions = _asyncToGenerator(\n      /*#__PURE__*/\n      regeneratorRuntime.mark(function _callee5(address) {\n        return regeneratorRuntime.wrap(function _callee5$(_context5) {\n          while (1) {\n            switch (_context5.prev = _context5.next) {\n              case 0:\n                return _context5.abrupt(\"return\", makeApiRequest('transactions', {\n                  senderId: address,\n                  recipientId: address\n                }));\n\n              case 1:\n              case \"end\":\n                return _context5.stop();\n            }\n          }\n        }, _callee5, this);\n      }));\n\n      return function getTransactions(_x4) {\n        return _getTransactions.apply(this, arguments);\n      };\n    }()\n  }, {\n    key: \"getVoters\",\n    value: function () {\n      var _getVoters = _asyncToGenerator(\n      /*#__PURE__*/\n      regeneratorRuntime.mark(function _callee6(publicKey) {\n        return regeneratorRuntime.wrap(function _callee6$(_context6) {\n          while (1) {\n            switch (_context6.prev = _context6.next) {\n              case 0:\n                return _context6.abrupt(\"return\", makeApiRequest('delegates/voters', {\n                  publicKey: publicKey\n                }));\n\n              case 1:\n              case \"end\":\n                return _context6.stop();\n            }\n          }\n        }, _callee6, this);\n      }));\n\n      return function getVoters(_x5) {\n        return _getVoters.apply(this, arguments);\n      };\n    }()\n  }]);\n\n  return NodeApi;\n}();\n\nexports.default = NodeApi;\n\n//# sourceURL=webpack:///./src/shared/domain/api/NodeApi.js?");

/***/ }),

/***/ "./src/shared/domain/util/time.js":
/*!****************************************!*\
  !*** ./src/shared/domain/util/time.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.getApiTimestamp = getApiTimestamp;\nexports.getTimestamp = getTimestamp;\nexports.nextMsTimestamp = exports.fromApiToMs = exports.currentMsTimestamp = void 0;\nvar blockInterval = 15 * 1000;\nvar epochTimeUtc = Date.UTC(2017, 2, 21, 13, 0, 0, 0);\nvar epochSeconds = Math.floor(epochTimeUtc / 1000);\n\nvar currentMsTimestamp = function currentMsTimestamp() {\n  return Date.now();\n};\n\nexports.currentMsTimestamp = currentMsTimestamp;\n\nvar fromApiToMs = function fromApiToMs(apiTimestamp) {\n  return (apiTimestamp + epochSeconds) * 1000;\n};\n\nexports.fromApiToMs = fromApiToMs;\n\nfunction getApiTimestamp() {\n  var currentSeconds = Math.floor(currentMsTimestamp() / 1000);\n  return currentSeconds - epochSeconds;\n}\n\nvar nextMsTimestamp = function nextMsTimestamp(msTimestamp) {\n  return msTimestamp + blockInterval;\n};\n\nexports.nextMsTimestamp = nextMsTimestamp;\n\nfunction getTimestamp(apiTimestamp) {\n  return (apiTimestamp + epochSeconds) * 1000;\n}\n\n//# sourceURL=webpack:///./src/shared/domain/util/time.js?");

/***/ }),

/***/ "./src/shared/stores/RoundStore.js":
/*!*****************************************!*\
  !*** ./src/shared/stores/RoundStore.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nvar _mobx = __webpack_require__(/*! mobx */ \"mobx\");\n\nvar _mobxTask = __webpack_require__(/*! mobx-task */ \"mobx-task\");\n\nvar _time = __webpack_require__(/*! ../domain/util/time */ \"./src/shared/domain/util/time.js\");\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar blockInterval = 15 * 1000;\n\nvar byAscending = function byAscending(prop) {\n  return function (a, b) {\n    return a[prop] > b[prop] ? 1 : b[prop] > a[prop] ? -1 : 0;\n  };\n};\n\nvar byDescending = function byDescending(prop) {\n  return function (a, b) {\n    return a[prop] > b[prop] ? -11 : b[prop] > a[prop] ? 1 : 0;\n  };\n};\n\nvar RoundStore =\n/*#__PURE__*/\nfunction () {\n  function RoundStore(nodeApi) {\n    var _this = this;\n\n    _classCallCheck(this, RoundStore);\n\n    this.resume = function () {\n      console.log('Resuming block listener.');\n      _this.interval = setInterval(function () {\n        return _this.listenForNewBlocks();\n      }, blockInterval);\n    };\n\n    this.suspend = function () {\n      console.log('Suspending block listener.');\n      clearInterval(_this.interval);\n    };\n\n    this.completedSlots = [];\n    this.currentHeight = void 0;\n    this.hasIncomingSlots = false;\n    this.hasOutgoingSlots = false;\n    this.incomingCompletedSlots = [];\n    this.interval = void 0;\n    this.outgoingUpcomingSlots = [];\n    this.upcomingSlots = [];\n    this.nodeApi = nodeApi;\n    (0, _mobx.onBecomeObserved)(this, 'outgoingUpcomingSlots', this.resume);\n    (0, _mobx.onBecomeUnobserved)(this, 'outgoingUpcomingSlots', this.suspend);\n  }\n\n  _createClass(RoundStore, [{\n    key: \"init\",\n    value: function () {\n      var _init = _asyncToGenerator(\n      /*#__PURE__*/\n      regeneratorRuntime.mark(function _callee() {\n        var _this2 = this;\n\n        var currentRound, delegates, delegatesById, result;\n        return regeneratorRuntime.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                _context.next = 2;\n                return this.nodeApi.getCurrentRound();\n\n              case 2:\n                currentRound = _context.sent;\n                _context.next = 5;\n                return this.nodeApi.getActiveDelegates();\n\n              case 5:\n                delegates = _context.sent;\n                delegatesById = delegates.delegates.reduce(function (all, delegate) {\n                  all[delegate.publicKey] = delegate.username;\n                  return all;\n                }, {});\n                result = {\n                  completed: [],\n                  currentHeight: currentRound.fromBlock - 1,\n                  round: currentRound.roundNumber,\n                  fromBlock: currentRound.fromBlock,\n                  lastTimestamp: (0, _time.currentMsTimestamp)(),\n                  toBlock: currentRound.toBlock,\n                  upcoming: []\n                };\n                result = currentRound.delegateActivity.reduce(function (all, delegate) {\n                  if (delegate.hasMissedBlock) {\n                    all.lastTimestamp = (0, _time.nextMsTimestamp)(all.lastTimestamp);\n                  } else {\n                    all.currentHeight = delegate.blockHeight;\n                    all.lastTimestamp = (0, _time.fromApiToMs)(delegate.timestamp);\n                  }\n\n                  all.completed.push({\n                    name: delegatesById[delegate.publicKey],\n                    hasMissedBlock: delegate.hasMissedBlock,\n                    publicKey: delegate.publicKey,\n                    slot: delegate.roundSlot,\n                    timestamp: all.lastTimestamp,\n                    totalForged: delegate.totalForged\n                  });\n                  return all;\n                }, result);\n                result = currentRound.expectedForgers.reduce(function (all, delegate) {\n                  all.lastTimestamp = (0, _time.nextMsTimestamp)(all.lastTimestamp);\n                  all.upcoming.push({\n                    name: delegatesById[delegate.publicKey],\n                    publicKey: delegate.publicKey,\n                    slot: delegate.blockRoundSlot,\n                    timestamp: all.lastTimestamp\n                  });\n                  return all;\n                }, result);\n                result.completed.sort(byDescending('slot'));\n                this.currentHeight = result.currentHeight;\n                (0, _mobx.runInAction)(function () {\n                  _this2.completedSlots.replace(result.completed);\n\n                  _this2.upcomingSlots.replace(result.upcoming);\n                });\n\n              case 13:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee, this);\n      }));\n\n      return function init() {\n        return _init.apply(this, arguments);\n      };\n    }()\n  }, {\n    key: \"listenForNewBlocks\",\n    value: function () {\n      var _listenForNewBlocks = _asyncToGenerator(\n      /*#__PURE__*/\n      regeneratorRuntime.mark(function _callee2() {\n        var _this3 = this;\n\n        var blocks, newBlocks;\n        return regeneratorRuntime.wrap(function _callee2$(_context2) {\n          while (1) {\n            switch (_context2.prev = _context2.next) {\n              case 0:\n                _context2.next = 2;\n                return this.nodeApi.getBlocks(0, 5);\n\n              case 2:\n                blocks = _context2.sent;\n                newBlocks = blocks.blocks.filter(function (b) {\n                  return b.height > _this3.currentHeight;\n                });\n                newBlocks.sort(byAscending('height'));\n\n                if (newBlocks.length) {\n                  this.addBlocks(newBlocks);\n                }\n\n              case 6:\n              case \"end\":\n                return _context2.stop();\n            }\n          }\n        }, _callee2, this);\n      }));\n\n      return function listenForNewBlocks() {\n        return _listenForNewBlocks.apply(this, arguments);\n      };\n    }()\n  }, {\n    key: \"addBlocks\",\n    value: function addBlocks(blocks) {\n      var _this4 = this;\n\n      console.log(\"New blocks (\".concat(blocks.length, \") added at height \").concat(this.currentHeight), blocks);\n      blocks.forEach(function (block) {\n        var hasMissedBlock = true;\n\n        while (hasMissedBlock && _this4.upcomingSlots.length > 0) {\n          var slot = _this4.upcomingSlots.shift();\n\n          console.log(slot.publicKey, block.publicKey);\n          hasMissedBlock = slot.publicKey !== block.generatorPublicKey;\n          var blockProps = hasMissedBlock ? {} : {\n            totalForged: block.totalForged\n          };\n          console.log('Adding slot', slot);\n\n          _this4.outgoingUpcomingSlots.push(_objectSpread({}, slot, {\n            hasMissedBlock: hasMissedBlock\n          }, blockProps));\n        }\n\n        _this4.currentHeight = block.height;\n        console.log(\"Updated current height to \".concat(_this4.currentHeight));\n      });\n      setTimeout(function () {\n        return _this4.startSlotTransfer();\n      }, 0);\n    }\n  }, {\n    key: \"startSlotTransfer\",\n    value: function startSlotTransfer() {\n      console.log('Starting slot transfer');\n      this.hasOutgoingSlots = true;\n    }\n  }, {\n    key: \"transferSlots\",\n    value: function transferSlots() {\n      var _this5 = this;\n\n      console.log('Transferring slots');\n      var slot;\n\n      while (slot = this.outgoingUpcomingSlots.pop()) {\n        this.incomingCompletedSlots.push(slot);\n      }\n\n      this.hasOutgoingSlots = false;\n      setTimeout(function () {\n        return _this5.startTransferCompletion();\n      }, 0);\n    }\n  }, {\n    key: \"startTransferCompletion\",\n    value: function startTransferCompletion() {\n      console.log('Starting slot transfer completion');\n      this.hasIncomingSlots = true;\n    }\n  }, {\n    key: \"completeSlotTransition\",\n    value: function completeSlotTransition() {\n      console.log('Completing slot transition.');\n      var slot;\n      var toTransfer = [];\n\n      while (slot = this.incomingCompletedSlots.shift()) {\n        toTransfer.push(slot);\n      }\n\n      this.completedSlots.replace(toTransfer.concat(this.completedSlots));\n      this.hasIncomingSlots = false;\n    }\n  }]);\n\n  return RoundStore;\n}();\n\nexports.default = RoundStore;\n(0, _mobx.decorate)(RoundStore, {\n  addBlocks: _mobx.action,\n  completedSlots: _mobx.observable,\n  completeSlotTransition: _mobx.action,\n  hasIncomingSlots: _mobx.observable,\n  hasOutgoingSlots: _mobx.observable,\n  incomingCompletedSlots: _mobx.observable,\n  init: _mobxTask.task,\n  outgoingUpcomingSlots: _mobx.observable,\n  startSlotTransfer: _mobx.action,\n  startTransferCompletion: _mobx.action,\n  transferSlots: _mobx.action,\n  upcomingSlots: _mobx.observable\n});\n\n//# sourceURL=webpack:///./src/shared/stores/RoundStore.js?");

/***/ }),

/***/ 0:
/*!****************************************************!*\
  !*** multi @babel/polyfill ./src/server/server.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! @babel/polyfill */\"@babel/polyfill\");\nmodule.exports = __webpack_require__(/*! ./src/server/server.js */\"./src/server/server.js\");\n\n\n//# sourceURL=webpack:///multi_@babel/polyfill_./src/server/server.js?");

/***/ }),

/***/ "@babel/polyfill":
/*!**********************************!*\
  !*** external "@babel/polyfill" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/polyfill\");\n\n//# sourceURL=webpack:///external_%22@babel/polyfill%22?");

/***/ }),

/***/ "@material-ui/core":
/*!************************************!*\
  !*** external "@material-ui/core" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core%22?");

/***/ }),

/***/ "@material-ui/core/Avatar":
/*!*******************************************!*\
  !*** external "@material-ui/core/Avatar" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/Avatar\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/Avatar%22?");

/***/ }),

/***/ "@material-ui/core/ListItemText":
/*!*************************************************!*\
  !*** external "@material-ui/core/ListItemText" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/ListItemText\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/ListItemText%22?");

/***/ }),

/***/ "@material-ui/core/colors/green":
/*!*************************************************!*\
  !*** external "@material-ui/core/colors/green" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/colors/green\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/colors/green%22?");

/***/ }),

/***/ "@material-ui/core/colors/red":
/*!***********************************************!*\
  !*** external "@material-ui/core/colors/red" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/colors/red\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/colors/red%22?");

/***/ }),

/***/ "@material-ui/core/styles":
/*!*******************************************!*\
  !*** external "@material-ui/core/styles" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/styles\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/styles%22?");

/***/ }),

/***/ "@material-ui/icons/Announcement":
/*!**************************************************!*\
  !*** external "@material-ui/icons/Announcement" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/icons/Announcement\");\n\n//# sourceURL=webpack:///external_%22@material-ui/icons/Announcement%22?");

/***/ }),

/***/ "@material-ui/icons/CheckCircle":
/*!*************************************************!*\
  !*** external "@material-ui/icons/CheckCircle" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/icons/CheckCircle\");\n\n//# sourceURL=webpack:///external_%22@material-ui/icons/CheckCircle%22?");

/***/ }),

/***/ "@material-ui/icons/Update":
/*!********************************************!*\
  !*** external "@material-ui/icons/Update" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/icons/Update\");\n\n//# sourceURL=webpack:///external_%22@material-ui/icons/Update%22?");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"cors\");\n\n//# sourceURL=webpack:///external_%22cors%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"fs\");\n\n//# sourceURL=webpack:///external_%22fs%22?");

/***/ }),

/***/ "mobx":
/*!***********************!*\
  !*** external "mobx" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mobx\");\n\n//# sourceURL=webpack:///external_%22mobx%22?");

/***/ }),

/***/ "mobx-react":
/*!*****************************!*\
  !*** external "mobx-react" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mobx-react\");\n\n//# sourceURL=webpack:///external_%22mobx-react%22?");

/***/ }),

/***/ "mobx-task":
/*!****************************!*\
  !*** external "mobx-task" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mobx-task\");\n\n//# sourceURL=webpack:///external_%22mobx-task%22?");

/***/ }),

/***/ "node-fetch":
/*!*****************************!*\
  !*** external "node-fetch" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"node-fetch\");\n\n//# sourceURL=webpack:///external_%22node-fetch%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ }),

/***/ "querystring":
/*!******************************!*\
  !*** external "querystring" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"querystring\");\n\n//# sourceURL=webpack:///external_%22querystring%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ }),

/***/ "react-jss/lib/JssProvider":
/*!********************************************!*\
  !*** external "react-jss/lib/JssProvider" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-jss/lib/JssProvider\");\n\n//# sourceURL=webpack:///external_%22react-jss/lib/JssProvider%22?");

/***/ }),

/***/ "react-jss/lib/jss":
/*!************************************!*\
  !*** external "react-jss/lib/jss" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-jss/lib/jss\");\n\n//# sourceURL=webpack:///external_%22react-jss/lib/jss%22?");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-dom\");\n\n//# sourceURL=webpack:///external_%22react-router-dom%22?");

/***/ })

/******/ });