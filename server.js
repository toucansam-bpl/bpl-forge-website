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

module.exports = __webpack_require__.p + "static/media/bpl-logo.8b1be392.png";

/***/ }),

/***/ "./src/server/middleware/renderer.js":
/*!*******************************************!*\
  !*** ./src/server/middleware/renderer.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _fs = __webpack_require__(/*! fs */ "fs");

var _path = __webpack_require__(/*! path */ "path");

var _mobxReact = __webpack_require__(/*! mobx-react */ "mobx-react");

var _server = __webpack_require__(/*! react-dom/server */ "react-dom/server");

var _jss = __webpack_require__(/*! react-jss/lib/jss */ "react-jss/lib/jss");

var _JssProvider = _interopRequireDefault(__webpack_require__(/*! react-jss/lib/JssProvider */ "react-jss/lib/JssProvider"));

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "react-router-dom");

var _styles = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");

var _green = _interopRequireDefault(__webpack_require__(/*! @material-ui/core/colors/green */ "@material-ui/core/colors/green"));

var _red = _interopRequireDefault(__webpack_require__(/*! @material-ui/core/colors/red */ "@material-ui/core/colors/red"));

var _App = _interopRequireDefault(__webpack_require__(/*! ../../shared/App */ "./src/shared/App.js"));

var _BlockStore = _interopRequireDefault(__webpack_require__(/*! ../../shared/stores/BlockStore */ "./src/shared/stores/BlockStore.js"));

var _DelegateStore = _interopRequireDefault(__webpack_require__(/*! ../../shared/stores/DelegateStore */ "./src/shared/stores/DelegateStore.js"));

var _NodeApi = _interopRequireDefault(__webpack_require__(/*! ../../shared/domain/api/NodeApi */ "./src/shared/domain/api/NodeApi.js"));

var _RoundStore = _interopRequireDefault(__webpack_require__(/*! ../../shared/stores/RoundStore */ "./src/shared/stores/RoundStore.js"));

var _SlotStore = _interopRequireDefault(__webpack_require__(/*! ../../shared/stores/SlotStore */ "./src/shared/stores/SlotStore.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var renderFullPage =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(html, css) {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return", new Promise(function (resolve, reject) {
              var filePath = (0, _path.resolve)(__dirname, '..', '..', '..', 'public', 'index.html');
              (0, _fs.readFile)(filePath, 'utf8', function (err, page) {
                if (err) {
                  return reject(err);
                }

                resolve(page.replace('<div id="root"></div>', "<div id=\"root\">".concat(html, "</div>")).replace('<style id="jss-server-side"></style>', "<style id=\"jss-server-side\">".concat(css, "</style>")));
              });
            }));

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function renderFullPage(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

var _default = function _default(req, res) {
  // Create a sheetsRegistry instance.
  var sheetsRegistry = new _jss.SheetsRegistry();
  console.log("Serving ".concat(req.url)); // Create a theme instance.

  var theme = (0, _styles.createMuiTheme)({
    palette: {
      primary: _green.default,
      accent: _red.default,
      type: 'light'
    }
  });
  var generateClassName = (0, _styles.createGenerateClassName)();
  var nodeApi = new _NodeApi.default();
  var delegateStore = new _DelegateStore.default(nodeApi);
  var roundStore = new _RoundStore.default(nodeApi);
  var blockStore = new _BlockStore.default(nodeApi, roundStore);
  var slotStore = new _SlotStore.default(blockStore, delegateStore, roundStore);
  var stores = {
    blockStore: blockStore,
    roundStore: roundStore,
    slotStore: slotStore // Render the component to a string.

  };
  var html = (0, _server.renderToString)(_react.default.createElement(_JssProvider.default, {
    registry: sheetsRegistry,
    generateClassName: generateClassName
  }, _react.default.createElement(_styles.MuiThemeProvider, {
    theme: theme,
    sheetsManager: new Map()
  }, _react.default.createElement(_mobxReact.Provider, stores, _react.default.createElement(_reactRouterDom.StaticRouter, {
    location: req.url,
    context: {}
  }, _react.default.createElement(_App.default, null)))))); // Grab the CSS from our sheetsRegistry.

  var css = sheetsRegistry.toString();

  var runner =
  /*#__PURE__*/
  function () {
    var _ref2 = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee2() {
      var pageHtml;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _context2.next = 3;
              return renderFullPage(html, css);

            case 3:
              pageHtml = _context2.sent;
              res.send(pageHtml);
              _context2.next = 11;
              break;

            case 7:
              _context2.prev = 7;
              _context2.t0 = _context2["catch"](0);
              console.log("Error in server: ".concat(_context2.t0));
              res.status(500).end();

            case 11:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, this, [[0, 7]]);
    }));

    return function runner() {
      return _ref2.apply(this, arguments);
    };
  }();

  runner();
};

exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, "src/server/middleware"))

/***/ }),

/***/ "./src/server/server.js":
/*!******************************!*\
  !*** ./src/server/server.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _express = _interopRequireDefault(__webpack_require__(/*! express */ "express"));

var _cors = _interopRequireDefault(__webpack_require__(/*! cors */ "cors"));

var _renderer = _interopRequireDefault(__webpack_require__(/*! ./middleware/renderer */ "./src/server/middleware/renderer.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express.default)();
app.use((0, _cors.default)());
app.get('^/$', _renderer.default);
app.use(_express.default.static('public'));
app.get('*', _renderer.default);
app.listen(3000, function () {
  console.log("Server is listening on port: 3000");
});

/***/ }),

/***/ "./src/shared/App.js":
/*!***************************!*\
  !*** ./src/shared/App.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _core = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "react-router-dom");

var _bplLogo = _interopRequireDefault(__webpack_require__(/*! ../../public/img/bpl-logo.png */ "./public/img/bpl-logo.png"));

var _CalculatorScreen = _interopRequireDefault(__webpack_require__(/*! ./CalculatorScreen/CalculatorScreen */ "./src/shared/CalculatorScreen/CalculatorScreen.js"));

var _DelegateScreen = _interopRequireDefault(__webpack_require__(/*! ./DelegateScreen/DelegateScreen */ "./src/shared/DelegateScreen/DelegateScreen.js"));

var _RoundScreen = _interopRequireDefault(__webpack_require__(/*! ./RoundScreen/RoundScreen */ "./src/shared/RoundScreen/RoundScreen.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var styles = function styles(theme) {
  return {
    content: {
      marginTop: "70px",
      padding: "30px 15px",
      minHeight: "calc(100% - 123px)"
    },
    flex: {
      flex: 1
    },
    menuButton: {
      marginLeft: -12,
      marginRight: 20
    }
  };
};

var App =
/*#__PURE__*/
function (_Component) {
  _inherits(App, _Component);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, _getPrototypeOf(App).apply(this, arguments));
  }

  _createClass(App, [{
    key: "render",
    value: function render() {
      var classes = this.props.classes;
      return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_core.CssBaseline, null), _react.default.createElement(_core.AppBar, {
        position: "static"
      }, _react.default.createElement(_core.Toolbar, null, _react.default.createElement(_core.Typography, {
        variant: "title",
        color: "inherit",
        className: classes.flex
      }, _react.default.createElement("img", {
        src: _bplLogo.default,
        alt: "BPL logo",
        style: {
          height: '1.16667em',
          verticalAlign: 'bottom'
        }
      }), _react.default.createElement("span", {
        style: {
          marginLeft: '15px'
        }
      }, _react.default.createElement(_reactRouterDom.Link, {
        to: "/"
      }, "BPL Delegate Explorer"))), _react.default.createElement(_reactRouterDom.Link, {
        to: "/calculator"
      }, "Calculator"), _react.default.createElement(_core.Hidden, {
        smDown: true
      }, _react.default.createElement(_core.Typography, {
        color: "inherit"
      })))), _react.default.createElement("div", {
        className: classes.content
      }, _react.default.createElement(_reactRouterDom.Switch, null, _react.default.createElement(_reactRouterDom.Route, {
        path: "/",
        exact: true,
        component: _RoundScreen.default
      }), _react.default.createElement(_reactRouterDom.Route, {
        path: "/delegate/:address",
        component: _DelegateScreen.default
      }), _react.default.createElement(_reactRouterDom.Route, {
        path: "/calculator",
        exact: true,
        component: _CalculatorScreen.default
      }))));
    }
  }]);

  return App;
}(_react.Component);

var _default = (0, _core.withStyles)(styles)(App);

exports.default = _default;

/***/ }),

/***/ "./src/shared/CalculatorScreen/CalculatorScreen.js":
/*!*********************************************************!*\
  !*** ./src/shared/CalculatorScreen/CalculatorScreen.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var CalculatorScreen =
/*#__PURE__*/
function (_Component) {
  _inherits(CalculatorScreen, _Component);

  function CalculatorScreen() {
    _classCallCheck(this, CalculatorScreen);

    return _possibleConstructorReturn(this, _getPrototypeOf(CalculatorScreen).apply(this, arguments));
  }

  _createClass(CalculatorScreen, [{
    key: "render",
    value: function render() {
      return _react.default.createElement("div", null, "Calculator Screen");
    }
  }]);

  return CalculatorScreen;
}(_react.Component);

exports.default = CalculatorScreen;

/***/ }),

/***/ "./src/shared/DelegateScreen/DelegateScreen.js":
/*!*****************************************************!*\
  !*** ./src/shared/DelegateScreen/DelegateScreen.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var DelegateScreen =
/*#__PURE__*/
function (_Component) {
  _inherits(DelegateScreen, _Component);

  function DelegateScreen() {
    _classCallCheck(this, DelegateScreen);

    return _possibleConstructorReturn(this, _getPrototypeOf(DelegateScreen).apply(this, arguments));
  }

  _createClass(DelegateScreen, [{
    key: "render",
    value: function render() {
      return _react.default.createElement("div", null, "Delegate Screen");
    }
  }]);

  return DelegateScreen;
}(_react.Component);

exports.default = DelegateScreen;

/***/ }),

/***/ "./src/shared/RoundScreen/CompletedSlots.js":
/*!**************************************************!*\
  !*** ./src/shared/RoundScreen/CompletedSlots.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _mobxReact = __webpack_require__(/*! mobx-react */ "mobx-react");

var _core = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");

var _Announcement = _interopRequireDefault(__webpack_require__(/*! @material-ui/icons/Announcement */ "@material-ui/icons/Announcement"));

var _CheckCircle = _interopRequireDefault(__webpack_require__(/*! @material-ui/icons/CheckCircle */ "@material-ui/icons/CheckCircle"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var styles = function styles(theme) {
  return {
    missedBlockAvatar: {
      backgroundColor: theme.palette.error.main
    },
    successfulBlockAvatar: {
      backgroundColor: theme.palette.primary.main
    }
  };
};

var CompletedSlot = (0, _core.withStyles)(styles)(function (_ref) {
  var hasMissedBlock = _ref.hasMissedBlock,
      rest = _objectWithoutProperties(_ref, ["hasMissedBlock"]);

  return hasMissedBlock ? _react.default.createElement(CompletedMissedSlot, rest) : _react.default.createElement(CompletedForgedSlot, rest);
});

var CompletedForgedSlot = function CompletedForgedSlot(_ref2) {
  var classes = _ref2.classes,
      name = _ref2.name,
      rank = _ref2.rank,
      slot = _ref2.slot,
      timestamp = _ref2.timestamp,
      totalForged = _ref2.totalForged,
      vote = _ref2.vote;
  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_core.Grid, {
    container: true,
    spacing: 16
  }, _react.default.createElement(_core.Grid, {
    item: true
  }, _react.default.createElement(_core.Avatar, {
    className: classes.successfulBlockAvatar
  }, _react.default.createElement(_CheckCircle.default, null))), _react.default.createElement(_core.Grid, {
    item: true,
    xs: 12,
    sm: true,
    direction: "column",
    container: true
  }, _react.default.createElement(_core.Grid, {
    item: true
  }, _react.default.createElement(_core.Typography, {
    gutterBottom: true,
    variant: "subheading"
  }, "Slot ".concat(slot, " - ").concat(name))), _react.default.createElement(_core.Grid, {
    item: true,
    container: true
  }, _react.default.createElement(_core.Grid, {
    item: true,
    xs: 3
  }, _react.default.createElement(_core.Typography, {
    gutterBottom: true
  }, "Rank ".concat(rank)), _react.default.createElement(_core.Typography, {
    color: "textSecondary"
  }, "Vote: ".concat(vote.toFixed(0), " BPL"))), _react.default.createElement(_core.Grid, {
    item: true,
    xs: 3
  }, _react.default.createElement(_core.Typography, {
    gutterBottom: true
  }, "Forged ".concat(totalForged.toFixed(4), " BPL")), _react.default.createElement(_core.Typography, {
    color: "textSecondary"
  }, "Total forged: x BPL")), _react.default.createElement(_core.Grid, {
    item: true,
    xs: 3
  }, _react.default.createElement(_core.Typography, null, "".concat(new Date(timestamp).toLocaleString())))))));
};

var CompletedMissedSlot = function CompletedMissedSlot(_ref3) {
  var classes = _ref3.classes,
      name = _ref3.name,
      rank = _ref3.rank,
      slot = _ref3.slot,
      timestamp = _ref3.timestamp,
      vote = _ref3.vote;
  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_core.Grid, {
    container: true,
    spacing: 16
  }, _react.default.createElement(_core.Grid, {
    item: true
  }, _react.default.createElement(_core.Avatar, {
    className: classes.missedBlockAvatar
  }, _react.default.createElement(_Announcement.default, null))), _react.default.createElement(_core.Grid, {
    item: true,
    xs: 12,
    sm: true,
    direction: "column",
    container: true
  }, _react.default.createElement(_core.Grid, {
    item: true
  }, _react.default.createElement(_core.Typography, {
    gutterBottom: true,
    variant: "subheading"
  }, "Slot ".concat(slot, " - ").concat(name))), _react.default.createElement(_core.Grid, {
    item: true,
    container: true
  }, _react.default.createElement(_core.Grid, {
    item: true,
    xs: 3
  }, _react.default.createElement(_core.Typography, {
    gutterBottom: true
  }, "Rank ".concat(rank)), _react.default.createElement(_core.Typography, {
    color: "textSecondary"
  }, "Vote: ".concat(vote.toFixed(0), " BPL"))), _react.default.createElement(_core.Grid, {
    item: true,
    xs: 3
  }, _react.default.createElement(_core.Typography, {
    gutterBottom: true
  }, "Missed block"), _react.default.createElement(_core.Typography, {
    color: "textSecondary"
  }, "Total forged: x BPL")), _react.default.createElement(_core.Grid, {
    item: true,
    xs: 3
  }, _react.default.createElement(_core.Typography, null, "".concat(new Date(timestamp).toLocaleString())))))));
};

var CollapsableSlot = (0, _mobxReact.inject)('slotStore')((0, _mobxReact.observer)(function (_ref4) {
  var slotStore = _ref4.slotStore;
  return _react.default.createElement(_core.Collapse, {
    component: _core.ListItem,
    in: slotStore.slotInProcess.shouldBeVisible,
    key: slotStore.slotInProcess.slot.slot,
    timeout: 500,
    onEntered: function onEntered() {
      return slotStore.slotJoinedCompleted();
    }
  }, _react.default.createElement(CompletedSlot, slotStore.slotInProcess.slot));
}));

var CompletedSlots =
/*#__PURE__*/
function (_Component) {
  _inherits(CompletedSlots, _Component);

  function CompletedSlots() {
    _classCallCheck(this, CompletedSlots);

    return _possibleConstructorReturn(this, _getPrototypeOf(CompletedSlots).apply(this, arguments));
  }

  _createClass(CompletedSlots, [{
    key: "render",
    value: function render() {
      var slotStore = this.props.slotStore;
      var Incoming = slotStore.hasSlotInProcess && slotStore.slotInProcess.hasLeftUpcoming ? _react.default.createElement(CollapsableSlot, {
        slot: slotStore.slotInProcess.slot,
        store: slotStore
      }) : null;
      return _react.default.createElement(_react.default.Fragment, null, slotStore.init.match({
        pending: function pending() {
          return _react.default.createElement("div", null, "Loading, please wait..");
        },
        rejected: function rejected(err) {
          return _react.default.createElement("div", null, "Error: ", err.message);
        },
        resolved: function resolved() {
          return _react.default.createElement(_core.List, null, Incoming, slotStore.completedSlots.map(function (forger) {
            return _react.default.createElement(_core.ListItem, {
              key: forger.slot
            }, _react.default.createElement(CompletedSlot, forger));
          }));
        }
      }));
    }
  }]);

  return CompletedSlots;
}(_react.Component);

var _default = (0, _mobxReact.inject)('slotStore')((0, _mobxReact.observer)(CompletedSlots));

exports.default = _default;

/***/ }),

/***/ "./src/shared/RoundScreen/RoundScreen.js":
/*!***********************************************!*\
  !*** ./src/shared/RoundScreen/RoundScreen.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _core = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");

var _CompletedSlots = _interopRequireDefault(__webpack_require__(/*! ./CompletedSlots */ "./src/shared/RoundScreen/CompletedSlots.js"));

var _UpcomingSlots = _interopRequireDefault(__webpack_require__(/*! ./UpcomingSlots */ "./src/shared/RoundScreen/UpcomingSlots.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var RoundScreen =
/*#__PURE__*/
function (_Component) {
  _inherits(RoundScreen, _Component);

  function RoundScreen() {
    _classCallCheck(this, RoundScreen);

    return _possibleConstructorReturn(this, _getPrototypeOf(RoundScreen).apply(this, arguments));
  }

  _createClass(RoundScreen, [{
    key: "render",
    value: function render() {
      return _react.default.createElement(_core.Grid, {
        container: true
      }, _react.default.createElement(_core.Grid, {
        item: true,
        xs: 8
      }, _react.default.createElement(_CompletedSlots.default, null)), _react.default.createElement(_core.Grid, {
        item: true,
        xs: 4
      }, _react.default.createElement(_UpcomingSlots.default, null)));
    }
  }]);

  return RoundScreen;
}(_react.Component);

exports.default = RoundScreen;

/***/ }),

/***/ "./src/shared/RoundScreen/UpcomingSlots.js":
/*!*************************************************!*\
  !*** ./src/shared/RoundScreen/UpcomingSlots.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _mobxReact = __webpack_require__(/*! mobx-react */ "mobx-react");

var _core = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");

var _Update = _interopRequireDefault(__webpack_require__(/*! @material-ui/icons/Update */ "@material-ui/icons/Update"));

var _format = __webpack_require__(/*! ../domain/util/format */ "./src/shared/domain/util/format.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var UpcomingSlot = function UpcomingSlot(_ref) {
  var slot = _ref.slot,
      name = _ref.name,
      rank = _ref.rank,
      timestamp = _ref.timestamp,
      vote = _ref.vote;
  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_core.Grid, {
    container: true,
    spacing: 16
  }, _react.default.createElement(_core.Grid, {
    item: true
  }, _react.default.createElement(_core.Avatar, null, _react.default.createElement(_Update.default, null))), _react.default.createElement(_core.Grid, {
    item: true,
    xs: 12,
    sm: true,
    direction: "column",
    container: true
  }, _react.default.createElement(_core.Grid, {
    item: true
  }, _react.default.createElement(_core.Typography, {
    gutterBottom: true,
    variant: "subheading"
  }, "Slot ".concat(slot, " - ").concat(name))), _react.default.createElement(_core.Grid, {
    item: true,
    container: true
  }, _react.default.createElement(_core.Grid, {
    item: true,
    xs: 6
  }, _react.default.createElement(_core.Typography, {
    gutterBottom: true
  }, "Rank ".concat(rank)), _react.default.createElement(_core.Typography, {
    color: "textSecondary"
  }, "Vote: ".concat(vote.toFixed(0), " BPL"))), _react.default.createElement(_core.Grid, {
    item: true,
    xs: 4
  }, _react.default.createElement(_core.Typography, null, "".concat((0, _format.toHowLong)(timestamp))))))));
};

var CollapsableSlot = (0, _mobxReact.inject)('slotStore')((0, _mobxReact.observer)(function (_ref2) {
  var slotStore = _ref2.slotStore;
  return _react.default.createElement(_core.Collapse, {
    component: _core.ListItem,
    in: slotStore.slotInProcess.shouldBeVisible,
    key: slotStore.slotInProcess.slot.slot,
    timeout: 500,
    onExited: function onExited() {
      return slotStore.slotLeftUpcoming();
    }
  }, _react.default.createElement(UpcomingSlot, slotStore.slotInProcess.slot));
}));

var UpcomingSlots =
/*#__PURE__*/
function (_Component) {
  _inherits(UpcomingSlots, _Component);

  function UpcomingSlots() {
    _classCallCheck(this, UpcomingSlots);

    return _possibleConstructorReturn(this, _getPrototypeOf(UpcomingSlots).apply(this, arguments));
  }

  _createClass(UpcomingSlots, [{
    key: "render",
    value: function render() {
      var slotStore = this.props.slotStore;
      var Outgoing = slotStore.hasSlotInProcess && !slotStore.slotInProcess.hasLeftUpcoming ? _react.default.createElement(CollapsableSlot, {
        slot: slotStore.slotInProcess.slot,
        store: slotStore
      }) : null;
      return _react.default.createElement(_react.default.Fragment, null, slotStore.init.match({
        pending: function pending() {
          return _react.default.createElement("div", null, "Loading, please wait..");
        },
        rejected: function rejected(err) {
          return _react.default.createElement("div", null, "Error: ", err.message);
        },
        resolved: function resolved() {
          return _react.default.createElement(_core.List, null, Outgoing, slotStore.upcomingSlots.concat(slotStore.unprocessedSlots).map(function (forger) {
            return _react.default.createElement(_core.ListItem, {
              key: forger.slot
            }, _react.default.createElement(UpcomingSlot, forger));
          }));
        }
      }));
    }
  }]);

  return UpcomingSlots;
}(_react.Component);

var _default = (0, _mobxReact.inject)('slotStore')((0, _mobxReact.observer)(UpcomingSlots));

exports.default = _default;

/***/ }),

/***/ "./src/shared/domain/api/NodeApi.js":
/*!******************************************!*\
  !*** ./src/shared/domain/api/NodeApi.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _nodeFetch = _interopRequireDefault(__webpack_require__(/*! node-fetch */ "node-fetch"));

var _querystring = _interopRequireDefault(__webpack_require__(/*! querystring */ "querystring"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var api = 'https://api.bplforge.com/api';

function makeApiRequest(_x, _x2) {
  return _makeApiRequest.apply(this, arguments);
}

function _makeApiRequest() {
  _makeApiRequest = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee8(url, params) {
    return regeneratorRuntime.wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            return _context8.abrupt("return", new Promise(
            /*#__PURE__*/
            function () {
              var _ref = _asyncToGenerator(
              /*#__PURE__*/
              regeneratorRuntime.mark(function _callee7(resolve, reject) {
                var query, requestUrl, rawResponse, response;
                return regeneratorRuntime.wrap(function _callee7$(_context7) {
                  while (1) {
                    switch (_context7.prev = _context7.next) {
                      case 0:
                        _context7.prev = 0;
                        query = params ? "?".concat(_querystring.default.stringify(params)) : '';
                        requestUrl = "".concat(api, "/").concat(url).concat(query);
                        _context7.next = 5;
                        return (0, _nodeFetch.default)(requestUrl, {
                          method: 'GET'
                        });

                      case 5:
                        rawResponse = _context7.sent;
                        _context7.next = 8;
                        return rawResponse.json();

                      case 8:
                        response = _context7.sent;

                        if (response.success) {
                          resolve(response);
                        } else {
                          console.log(response);
                          reject(new Error("Request did not complete successfully."));
                        }

                        _context7.next = 15;
                        break;

                      case 12:
                        _context7.prev = 12;
                        _context7.t0 = _context7["catch"](0);
                        reject(_context7.t0);

                      case 15:
                      case "end":
                        return _context7.stop();
                    }
                  }
                }, _callee7, this, [[0, 12]]);
              }));

              return function (_x6, _x7) {
                return _ref.apply(this, arguments);
              };
            }()));

          case 1:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8, this);
  }));
  return _makeApiRequest.apply(this, arguments);
}

var NodeApi =
/*#__PURE__*/
function () {
  function NodeApi() {
    _classCallCheck(this, NodeApi);
  }

  _createClass(NodeApi, [{
    key: "getActiveDelegates",
    value: function () {
      var _getActiveDelegates = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                return _context.abrupt("return", makeApiRequest('delegates', 0, 201));

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function getActiveDelegates() {
        return _getActiveDelegates.apply(this, arguments);
      };
    }()
  }, {
    key: "getBlocks",
    value: function () {
      var _getBlocks = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2() {
        var offset,
            limit,
            _args2 = arguments;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                offset = _args2.length > 0 && _args2[0] !== undefined ? _args2[0] : 0;
                limit = _args2.length > 1 && _args2[1] !== undefined ? _args2[1] : 100;
                return _context2.abrupt("return", makeApiRequest('blocks', {
                  limit: limit,
                  offset: offset
                }));

              case 3:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      return function getBlocks() {
        return _getBlocks.apply(this, arguments);
      };
    }()
  }, {
    key: "getCurrentRound",
    value: function () {
      var _getCurrentRound = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee3() {
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                return _context3.abrupt("return", makeApiRequest('rounds'));

              case 1:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      return function getCurrentRound() {
        return _getCurrentRound.apply(this, arguments);
      };
    }()
  }, {
    key: "getRewardBlocks",
    value: function () {
      var _getRewardBlocks = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee4(generatorPublicKey) {
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                return _context4.abrupt("return", makeApiRequest('blocks', {
                  generatorPublicKey: generatorPublicKey
                }));

              case 1:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      return function getRewardBlocks(_x3) {
        return _getRewardBlocks.apply(this, arguments);
      };
    }()
  }, {
    key: "getTransactions",
    value: function () {
      var _getTransactions = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee5(address) {
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                return _context5.abrupt("return", makeApiRequest('transactions', {
                  senderId: address,
                  recipientId: address
                }));

              case 1:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      return function getTransactions(_x4) {
        return _getTransactions.apply(this, arguments);
      };
    }()
  }, {
    key: "getVoters",
    value: function () {
      var _getVoters = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee6(publicKey) {
        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                return _context6.abrupt("return", makeApiRequest('delegates/voters', {
                  publicKey: publicKey
                }));

              case 1:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      return function getVoters(_x5) {
        return _getVoters.apply(this, arguments);
      };
    }()
  }]);

  return NodeApi;
}();

exports.default = NodeApi;

/***/ }),

/***/ "./src/shared/domain/util/format.js":
/*!******************************************!*\
  !*** ./src/shared/domain/util/format.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fromApiString = fromApiString;
exports.toHowLong = toHowLong;

var _bigJs = _interopRequireDefault(__webpack_require__(/*! big-js */ "big-js"));

var _javascriptTimeAgo = _interopRequireDefault(__webpack_require__(/*! javascript-time-ago */ "javascript-time-ago"));

var _en = _interopRequireDefault(__webpack_require__(/*! javascript-time-ago/locale/en */ "javascript-time-ago/locale/en"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_javascriptTimeAgo.default.locale(_en.default); // Create relative date/time formatter.


var timeAgo = new _javascriptTimeAgo.default('en-US');

function fromApiString(bplString) {
  return (0, _bigJs.default)(bplString).div('100000000');
}

function toHowLong(timestamp) {
  return timeAgo.format(timestamp);
}

/***/ }),

/***/ "./src/shared/domain/util/logger.js":
/*!******************************************!*\
  !*** ./src/shared/domain/util/logger.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.log = log;

function log() {
  console.log.apply(console, Array.prototype.slice.call(arguments, 0));
}

/***/ }),

/***/ "./src/shared/domain/util/sorters.js":
/*!*******************************************!*\
  !*** ./src/shared/domain/util/sorters.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.byDescending = exports.byAscending = void 0;

var byAscending = function byAscending(prop) {
  return function (a, b) {
    return a[prop] > b[prop] ? 1 : b[prop] > a[prop] ? -1 : 0;
  };
};

exports.byAscending = byAscending;

var byDescending = function byDescending(prop) {
  return function (a, b) {
    return a[prop] > b[prop] ? -11 : b[prop] > a[prop] ? 1 : 0;
  };
};

exports.byDescending = byDescending;

/***/ }),

/***/ "./src/shared/domain/util/time.js":
/*!****************************************!*\
  !*** ./src/shared/domain/util/time.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getApiTimestamp = getApiTimestamp;
exports.getTimestamp = getTimestamp;
exports.nextMsTimestamp = exports.fromApiToMs = exports.currentMsTimestamp = void 0;
var blockInterval = 15 * 1000;
var epochTimeUtc = Date.UTC(2017, 2, 21, 13, 0, 0, 0);
var epochSeconds = Math.floor(epochTimeUtc / 1000);

var currentMsTimestamp = function currentMsTimestamp() {
  return Date.now();
};

exports.currentMsTimestamp = currentMsTimestamp;

var fromApiToMs = function fromApiToMs(apiTimestamp) {
  return (apiTimestamp + epochSeconds) * 1000;
};

exports.fromApiToMs = fromApiToMs;

function getApiTimestamp() {
  var currentSeconds = Math.floor(currentMsTimestamp() / 1000);
  return currentSeconds - epochSeconds;
}

var nextMsTimestamp = function nextMsTimestamp(msTimestamp) {
  return msTimestamp + blockInterval;
};

exports.nextMsTimestamp = nextMsTimestamp;

function getTimestamp(apiTimestamp) {
  return (apiTimestamp + epochSeconds) * 1000;
}

/***/ }),

/***/ "./src/shared/stores/BlockStore.js":
/*!*****************************************!*\
  !*** ./src/shared/stores/BlockStore.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mobx = __webpack_require__(/*! mobx */ "mobx");

var _logger = __webpack_require__(/*! ../domain/util/logger */ "./src/shared/domain/util/logger.js");

var _sorters = __webpack_require__(/*! ../domain/util/sorters */ "./src/shared/domain/util/sorters.js");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var blockInterval = 15 * 1000;

var BlockStore =
/*#__PURE__*/
function () {
  function BlockStore(nodeApi, roundStore) {
    var _this = this;

    _classCallCheck(this, BlockStore);

    this.blockListener = void 0;
    this.lastProcessedBlockHeight = void 0;
    this.unprocessedBlocks = new Map();

    this.resume = function () {
      (0, _logger.log)('Resuming block listener.');
      _this.blockListener = setInterval(function () {
        return _this.listenForNewBlocks();
      }, blockInterval);
    };

    this.suspend = function () {
      (0, _logger.log)('Suspending block listener.');
      clearInterval(_this.blockListener);
    };

    this.nodeApi = nodeApi;
    this.roundStore = roundStore;
    (0, _mobx.when)(function () {
      return _this.roundStore.hasNewRound;
    }, function () {
      return _this.init();
    });
    (0, _mobx.onBecomeObserved)(this, 'hasNextBlock', this.resume);
    (0, _mobx.onBecomeUnobserved)(this, 'hasNextBlock', this.suspend);
  }

  _createClass(BlockStore, [{
    key: "init",
    value: function init() {
      (0, _logger.log)('Initializing Block Store.');
      this.lastProcessedBlockHeight = this.roundStore.initialBlockHeight;
      (0, _logger.log)("Block store will load blocks after height ".concat(this.lastProcessedBlockHeight));
    }
  }, {
    key: "listenForNewBlocks",
    value: function () {
      var _listenForNewBlocks = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee() {
        var _this2 = this;

        var offset, hasLoadedNewBlocks, blocks, newBlocks;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                offset = 0;
                hasLoadedNewBlocks = true;

              case 2:
                if (!(!this.hasNextBlock && hasLoadedNewBlocks)) {
                  _context.next = 10;
                  break;
                }

                _context.next = 5;
                return this.nodeApi.getBlocks(offset, 10);

              case 5:
                blocks = _context.sent;
                newBlocks = blocks.blocks.filter(function (b) {
                  return b.height > _this2.lastProcessedBlockHeight;
                });

                if (newBlocks.length > 0) {
                  newBlocks.forEach(function (b) {
                    return _this2.unprocessedBlocks.set(b.height, b);
                  });
                  (0, _logger.log)("There are ".concat(newBlocks.length, " new blocks awaiting processing out of ").concat(this.unprocessedBlocks.size, " total."));
                  offset += 10;
                } else {
                  (0, _logger.log)("No new blocks loaded.");
                  hasLoadedNewBlocks = false;
                }

                _context.next = 2;
                break;

              case 10:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function listenForNewBlocks() {
        return _listenForNewBlocks.apply(this, arguments);
      };
    }()
  }, {
    key: "nextBlock",
    value: function nextBlock() {
      var next = this.unprocessedBlocks.get(this.nextBlockHeight);
      this.lastProcessedBlockHeight = this.nextBlockHeight;
      (0, _logger.log)("Processing block height ".concat(this.lastProcessedBlockHeight));
      return next;
    }
  }, {
    key: "hasNextBlock",
    get: function get() {
      return this.unprocessedBlocks.has(this.nextBlockHeight);
    }
  }, {
    key: "nextBlockHeight",
    get: function get() {
      return this.lastProcessedBlockHeight + 1;
    }
  }]);

  return BlockStore;
}();

exports.default = BlockStore;
(0, _mobx.decorate)(BlockStore, {
  hasNextBlock: _mobx.computed,
  lastProcessedBlockHeight: _mobx.observable,
  listenForNewBlocks: _mobx.action,
  nextBlock: _mobx.action,
  nextBlockHeight: _mobx.computed,
  unprocessedBlocks: _mobx.observable
});

/***/ }),

/***/ "./src/shared/stores/DelegateStore.js":
/*!********************************************!*\
  !*** ./src/shared/stores/DelegateStore.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mobx = __webpack_require__(/*! mobx */ "mobx");

var _logger = __webpack_require__(/*! ../domain/util/logger */ "./src/shared/domain/util/logger.js");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var DelegateStore =
/*#__PURE__*/
function () {
  function DelegateStore(nodeApi) {
    _classCallCheck(this, DelegateStore);

    this.delegates = new Map();
    this.nodeApi = nodeApi;
  }

  _createClass(DelegateStore, [{
    key: "init",
    value: function () {
      var _init = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee() {
        var _this = this;

        var delegates;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                (0, _logger.log)('Initializing Delegate Store.');
                _context.next = 3;
                return this.nodeApi.getActiveDelegates();

              case 3:
                delegates = _context.sent;
                delegates.delegates.forEach(function (d) {
                  return _this.delegates.set(d.publicKey, d);
                });

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function init() {
        return _init.apply(this, arguments);
      };
    }()
  }, {
    key: "get",
    value: function get(publicKey) {
      return this.delegates.get(publicKey);
    }
  }, {
    key: "hasLoadedDelegates",
    get: function get() {
      return this.delegates.size > 0;
    }
  }]);

  return DelegateStore;
}();

exports.default = DelegateStore;
(0, _mobx.decorate)(DelegateStore, {
  delegates: _mobx.observable,
  hasLoadedDelegates: _mobx.computed
});

/***/ }),

/***/ "./src/shared/stores/RoundStore.js":
/*!*****************************************!*\
  !*** ./src/shared/stores/RoundStore.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mobx = __webpack_require__(/*! mobx */ "mobx");

var _logger = __webpack_require__(/*! ../domain/util/logger */ "./src/shared/domain/util/logger.js");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var RoundStore =
/*#__PURE__*/
function () {
  function RoundStore(nodeApi) {
    _classCallCheck(this, RoundStore);

    this.newRound = null;
    this.nodeApi = nodeApi;
  }

  _createClass(RoundStore, [{
    key: "init",
    value: function () {
      var _init = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee() {
        var currentRound;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                (0, _logger.log)("Loading initial current round.");
                _context.next = 3;
                return this.nodeApi.getCurrentRound();

              case 3:
                currentRound = _context.sent;
                (0, _logger.log)("Initial current round loaded.", currentRound);
                this.newRound = currentRound;

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function init() {
        return _init.apply(this, arguments);
      };
    }()
  }, {
    key: "hasNewRound",
    get: function get() {
      return this.newRound !== null;
    }
  }, {
    key: "initialBlockHeight",
    get: function get() {
      return this.hasNewRound ? this.newRound.delegateActivity.reduce(function (initialHeight, slot) {
        var slotValue = slot.hasMissedBlock ? 0 : 1;
        return initialHeight + slotValue;
      }, this.newRound.fromBlock - 1) : 0;
    }
  }]);

  return RoundStore;
}();

exports.default = RoundStore;
(0, _mobx.decorate)(RoundStore, {
  hasNewRound: _mobx.computed,
  init: _mobx.action,
  initialBlockHeight: _mobx.computed,
  newRound: _mobx.observable
});

/***/ }),

/***/ "./src/shared/stores/SlotStore.js":
/*!****************************************!*\
  !*** ./src/shared/stores/SlotStore.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mobx = __webpack_require__(/*! mobx */ "mobx");

var _mobxTask = __webpack_require__(/*! mobx-task */ "mobx-task");

var _logger = __webpack_require__(/*! ../domain/util/logger */ "./src/shared/domain/util/logger.js");

var _slotFactory = _interopRequireWildcard(__webpack_require__(/*! ./slotFactory */ "./src/shared/stores/slotFactory.js"));

var _time = __webpack_require__(/*! ../domain/util/time */ "./src/shared/domain/util/time.js");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var SlotStore =
/*#__PURE__*/
function () {
  function SlotStore(blockStore, delegateStore, roundStore) {
    _classCallCheck(this, SlotStore);

    this.completedSlots = [];
    this.isAwaitingBlock = true;
    this.isAwaitingSlot = true;
    this.roundSlots = new Map();
    this.slotInProcess = null;
    this.upcomingSlots = [];
    this.unprocessedSlots = [];
    this.blockStore = blockStore;
    this.delegateStore = delegateStore;
    this.roundStore = roundStore;
  }

  _createClass(SlotStore, [{
    key: "init",
    value: function () {
      var _init = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee() {
        var _this = this;

        var result;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                (0, _logger.log)('Initializing Slot Store.');
                _context.next = 3;
                return (0, _mobx.when)(function () {
                  return _this.roundStore.hasNewRound && _this.delegateStore.hasLoadedDelegates;
                });

              case 3:
                result = (0, _slotFactory.default)(this.roundStore.newRound, this.delegateStore);
                this.watchForNextBlock();
                this.watchForUnprocessedSlot();
                (0, _mobx.runInAction)(function () {
                  _this.completedSlots.replace(result.completed);

                  _this.upcomingSlots.replace(result.upcoming);

                  _this.completedSlots.forEach(function (s) {
                    return _this.roundSlots.set(s.slot, s);
                  });

                  _this.upcomingSlots.forEach(function (s) {
                    return _this.roundSlots.set(s.slot, s);
                  });
                });

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function init() {
        return _init.apply(this, arguments);
      };
    }()
  }, {
    key: "watchForNextBlock",
    value: function watchForNextBlock() {
      var _this2 = this;

      (0, _mobx.when)(function () {
        return _this2.blockStore.hasNextBlock && _this2.isAwaitingBlock;
      }, function () {
        return _this2.processReceivedBlock();
      });
    }
  }, {
    key: "getRoundSlot",
    value: function getRoundSlot(totalSlot) {
      // From BPL-node code
      return this.roundSlots.get(totalSlot % 201);
    }
  }, {
    key: "processReceivedBlock",
    value: function processReceivedBlock() {
      var _this3 = this;

      this.isAwaitingBlock = false;
      this.watchForNextBlock();
      var nextBlock = this.blockStore.nextBlock();
      (0, _logger.log)('Processing next block.', nextBlock);
      var blockSlots = this.upcomingSlots.reduce(function (all, slot) {
        if (all.hasFoundProcessedSlot) {
          all.upcomingSlots.push(slot);
        } else {
          var completedSlot = (0, _slotFactory.createSlotFromBlock)(slot, all.block);
          all.hasFoundProcessedSlot = !completedSlot.hasMissedBlock;
          all.unprocessedSlots.push(completedSlot);
          console.log("Completed slot created and has missing block: ".concat(completedSlot.hasMissedBlock));

          if (completedSlot.hasMissedBlock) {
            all.totalSlotCount += 1;

            var roundSlot = _this3.getRoundSlot(all.totalSlotCount);

            var matchingDelegate = _this3.delegateStore.get(roundSlot.publicKey);

            var lastSlot = _this3.unprocessedSlots[_this3.unprocessedSlots.length - 1];
            console.log(roundSlot, matchingDelegate, lastSlot);
            all.additionalSlots.push((0, _slotFactory.basicSlot)(all.totalSlotCount, matchingDelegate, (0, _time.nextMsTimestamp)(lastSlot.timestamp)));
          }
        }

        return all;
      }, {
        additionalSlots: [],
        block: nextBlock,
        hasFoundProcessedSlot: false,
        totalSlotCount: this.completedSlots.length + this.upcomingSlots.length,
        unprocessedSlots: this.unprocessedSlots,
        upcomingSlots: []
      });
      this.unprocessedSlots.replace(blockSlots.unprocessedSlots);
      this.upcomingSlots.replace(blockSlots.upcomingSlots.concat(blockSlots.additionalSlots));
    }
  }, {
    key: "watchForUnprocessedSlot",
    value: function watchForUnprocessedSlot() {
      var _this4 = this;

      (0, _mobx.when)(function () {
        return _this4.isAwaitingSlot && _this4.hasUnprocessedSlots;
      }, function () {
        return _this4.processNextSlot();
      });
    }
  }, {
    key: "nextUnprocessedSlot",
    value: function nextUnprocessedSlot() {
      return this.unprocessedSlots.shift();
    }
  }, {
    key: "processNextSlot",
    value: function processNextSlot() {
      var _this5 = this;

      this.isAwaitingSlot = false;
      this.watchForUnprocessedSlot();
      var nextSlot = this.nextUnprocessedSlot();
      (0, _logger.log)('Processing next slot.', nextSlot);
      this.slotInProcess = {
        hasLeftUpcoming: false,
        shouldBeVisible: true,
        slot: nextSlot
      };
      setTimeout(function () {
        return _this5.slotInProcess.shouldBeVisible = false;
      }, 0);
    }
  }, {
    key: "slotJoinedCompleted",
    value: function slotJoinedCompleted() {
      this.isAwaitingSlot = true;
      this.completedSlots.unshift(this.slotInProcess.slot);
      this.slotInProcess = null;

      if (!this.hasUnprocessedSlots) {
        this.isAwaitingBlock = true;
      }
    }
  }, {
    key: "slotLeftUpcoming",
    value: function slotLeftUpcoming() {
      var _this6 = this;

      this.slotInProcess.hasLeftUpcoming = true;
      setTimeout(function () {
        return _this6.slotInProcess.shouldBeVisible = true;
      }, 0);
    }
  }, {
    key: "hasUnprocessedSlots",
    get: function get() {
      return this.unprocessedSlots.length > 0;
    }
  }, {
    key: "hasSlotInProcess",
    get: function get() {
      return this.slotInProcess !== null;
    }
  }]);

  return SlotStore;
}();

exports.default = SlotStore;
(0, _mobx.decorate)(SlotStore, {
  completedSlots: _mobx.observable,
  hasSlotInProcess: _mobx.computed,
  hasUnprocessedSlots: _mobx.computed,
  init: _mobxTask.task,
  isAwaitingBlock: _mobx.observable,
  isAwaitingSlot: _mobx.observable,
  nextUnprocessedSlot: _mobx.action,
  processReceivedBlock: _mobx.action,
  processNextSlot: _mobx.action,
  slotInProcess: _mobx.observable,
  slotJoinedCompleted: _mobx.action,
  slotLeftUpcoming: _mobx.action,
  upcomingSlots: _mobx.observable,
  unprocessedSlots: _mobx.observable
});

/***/ }),

/***/ "./src/shared/stores/slotFactory.js":
/*!******************************************!*\
  !*** ./src/shared/stores/slotFactory.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createSlotFromBlock = createSlotFromBlock;
exports.completedSlotFromDelegate = completedSlotFromDelegate;
exports.basicSlot = basicSlot;
exports.default = getSlotsFromInitialData;

var _format = __webpack_require__(/*! ../domain/util/format */ "./src/shared/domain/util/format.js");

var _sorters = __webpack_require__(/*! ../domain/util/sorters */ "./src/shared/domain/util/sorters.js");

var _time = __webpack_require__(/*! ../domain/util/time */ "./src/shared/domain/util/time.js");

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function createSlotFromBlock(slot, block) {
  console.log(slot, block);
  var hasMissedBlock = slot.publicKey !== block.generatorPublicKey;
  var blockProps = hasMissedBlock ? {} : {
    totalForged: (0, _format.fromApiString)(block.totalForged)
  };
  return _objectSpread({}, slot, {
    hasMissedBlock: hasMissedBlock
  }, blockProps);
}

function completedSlotFromDelegate(slot, delegate, timestamp) {
  var blockProps = slot.hasMissedBlock ? {} : {
    totalForged: (0, _format.fromApiString)(slot.totalForged)
  };
  return _objectSpread({}, basicSlot(slot.roundSlot, delegate, timestamp), {
    hasMissedBlock: slot.hasMissedBlock
  }, blockProps);
}

function basicSlot(number, delegate, timestamp) {
  return {
    name: delegate.username,
    number: number,
    publicKey: delegate.publicKey,
    rank: delegate.rate,
    slot: number,
    timestamp: timestamp,
    vote: (0, _format.fromApiString)(delegate.vote)
  };
}

function getSlotsFromInitialData(currentRound, delegates) {
  var result = {
    completed: [],
    lastTimestamp: (0, _time.currentMsTimestamp)(),
    upcoming: []
  };
  result = currentRound.delegateActivity.reduce(function (all, slot) {
    all.lastTimestamp = slot.hasMissedBlock ? (0, _time.nextMsTimestamp)(all.lastTimestamp) : (0, _time.fromApiToMs)(slot.timestamp);
    all.completed.push(completedSlotFromDelegate(slot, delegates.get(slot.publicKey), all.lastTimestamp));
    return all;
  }, result);
  result = currentRound.expectedForgers.reduce(function (all, slot) {
    all.lastTimestamp = (0, _time.nextMsTimestamp)(all.lastTimestamp);
    all.upcoming.push(basicSlot(slot.blockRoundSlot, delegates.get(slot.publicKey), all.lastTimestamp));
    return all;
  }, result);
  result.completed.sort((0, _sorters.byDescending)('slot'));
  return result;
}

/***/ }),

/***/ 0:
/*!****************************************************!*\
  !*** multi @babel/polyfill ./src/server/server.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! @babel/polyfill */"@babel/polyfill");
module.exports = __webpack_require__(/*! ./src/server/server.js */"./src/server/server.js");


/***/ }),

/***/ "@babel/polyfill":
/*!**********************************!*\
  !*** external "@babel/polyfill" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/polyfill");

/***/ }),

/***/ "@material-ui/core":
/*!************************************!*\
  !*** external "@material-ui/core" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core");

/***/ }),

/***/ "@material-ui/core/colors/green":
/*!*************************************************!*\
  !*** external "@material-ui/core/colors/green" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/colors/green");

/***/ }),

/***/ "@material-ui/core/colors/red":
/*!***********************************************!*\
  !*** external "@material-ui/core/colors/red" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/colors/red");

/***/ }),

/***/ "@material-ui/core/styles":
/*!*******************************************!*\
  !*** external "@material-ui/core/styles" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ "@material-ui/icons/Announcement":
/*!**************************************************!*\
  !*** external "@material-ui/icons/Announcement" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Announcement");

/***/ }),

/***/ "@material-ui/icons/CheckCircle":
/*!*************************************************!*\
  !*** external "@material-ui/icons/CheckCircle" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/CheckCircle");

/***/ }),

/***/ "@material-ui/icons/Update":
/*!********************************************!*\
  !*** external "@material-ui/icons/Update" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Update");

/***/ }),

/***/ "big-js":
/*!*************************!*\
  !*** external "big-js" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("big-js");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("cors");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),

/***/ "javascript-time-ago":
/*!**************************************!*\
  !*** external "javascript-time-ago" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("javascript-time-ago");

/***/ }),

/***/ "javascript-time-ago/locale/en":
/*!************************************************!*\
  !*** external "javascript-time-ago/locale/en" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("javascript-time-ago/locale/en");

/***/ }),

/***/ "mobx":
/*!***********************!*\
  !*** external "mobx" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("mobx");

/***/ }),

/***/ "mobx-react":
/*!*****************************!*\
  !*** external "mobx-react" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("mobx-react");

/***/ }),

/***/ "mobx-task":
/*!****************************!*\
  !*** external "mobx-task" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("mobx-task");

/***/ }),

/***/ "node-fetch":
/*!*****************************!*\
  !*** external "node-fetch" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("node-fetch");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),

/***/ "querystring":
/*!******************************!*\
  !*** external "querystring" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("querystring");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),

/***/ "react-jss/lib/JssProvider":
/*!********************************************!*\
  !*** external "react-jss/lib/JssProvider" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-jss/lib/JssProvider");

/***/ }),

/***/ "react-jss/lib/jss":
/*!************************************!*\
  !*** external "react-jss/lib/jss" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-jss/lib/jss");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ })

/******/ });
//# sourceMappingURL=server.js.map