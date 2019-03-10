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

/***/ "./src/server/api.js":
/*!***************************!*\
  !*** ./src/server/api.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(__webpack_require__(/*! express */ "express"));

var _networkInfo = _interopRequireDefault(__webpack_require__(/*! ./background/networkInfo */ "./src/server/background/networkInfo.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var app = (0, _express.default)();
app.get('/networkStatus',
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(req, res, next) {
    var status;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return (0, _networkInfo.default)();

          case 3:
            status = _context.sent;
            res.json(status);
            _context.next = 10;
            break;

          case 7:
            _context.prev = 7;
            _context.t0 = _context["catch"](0);
            next(_context.t0);

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this, [[0, 7]]);
  }));

  return function (_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}());
var _default = app;
exports.default = _default;

/***/ }),

/***/ "./src/server/background/networkInfo.js":
/*!**********************************************!*\
  !*** ./src/server/background/networkInfo.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getNetworkStatus;

var _makeApiRequest = __webpack_require__(/*! ../../shared/domain/api/makeApiRequest */ "./src/shared/domain/api/makeApiRequest.js");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var networkStatus = null;
var seedNodes = ['http://s01.mc.blockpool.io:9030', 'http://s02.mc.blockpool.io:9030', 'http://s03.mc.blockpool.io:9030', 'http://s04.mc.blockpool.io:9030', 'http://s05.mc.blockpool.io:9030', 'http://s06.mc.blockpool.io:9030', 'http://s07.mc.blockpool.io:9030', 'http://s08.mc.blockpool.io:9030', 'http://s09.mc.blockpool.io:9030', 'http://s10.mc.blockpool.io:9030'];

function getNetworkStatus() {
  return new Promise(
  /*#__PURE__*/
  function () {
    var _ref = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee(resolve, reject) {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;

              if (!(networkStatus === null)) {
                _context.next = 5;
                break;
              }

              _context.next = 4;
              return loadNetworkStatus();

            case 4:
              networkStatus = _context.sent;

            case 5:
              resolve(networkStatus);
              _context.next = 11;
              break;

            case 8:
              _context.prev = 8;
              _context.t0 = _context["catch"](0);
              reject(_context.t0);

            case 11:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this, [[0, 8]]);
    }));

    return function (_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }());
}

function loadNetworkStatus() {
  return _loadNetworkStatus.apply(this, arguments);
}

function _loadNetworkStatus() {
  _loadNetworkStatus = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee3() {
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            return _context3.abrupt("return", new Promise(
            /*#__PURE__*/
            function () {
              var _ref2 = _asyncToGenerator(
              /*#__PURE__*/
              regeneratorRuntime.mark(function _callee2(resolve, reject) {
                var seedNodeStatus, i, server, status;
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                  while (1) {
                    switch (_context2.prev = _context2.next) {
                      case 0:
                        _context2.prev = 0;
                        seedNodeStatus = [];
                        i = 0;

                      case 3:
                        if (!(i < seedNodes.length)) {
                          _context2.next = 12;
                          break;
                        }

                        server = seedNodes[i];
                        _context2.next = 7;
                        return getSyncStatus(server);

                      case 7:
                        status = _context2.sent;
                        seedNodeStatus.push({
                          server: server,
                          height: status.height
                        });

                      case 9:
                        i += 1;
                        _context2.next = 3;
                        break;

                      case 12:
                        resolve({
                          seedNodes: seedNodeStatus
                        });
                        _context2.next = 18;
                        break;

                      case 15:
                        _context2.prev = 15;
                        _context2.t0 = _context2["catch"](0);
                        reject(_context2.t0);

                      case 18:
                      case "end":
                        return _context2.stop();
                    }
                  }
                }, _callee2, this, [[0, 15]]);
              }));

              return function (_x4, _x5) {
                return _ref2.apply(this, arguments);
              };
            }()));

          case 1:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, this);
  }));
  return _loadNetworkStatus.apply(this, arguments);
}

function getSyncStatus(_x3) {
  return _getSyncStatus.apply(this, arguments);
}

function _getSyncStatus() {
  _getSyncStatus = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee4(server) {
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            return _context4.abrupt("return", (0, _makeApiRequest.makeApiRequest)((0, _makeApiRequest.getUrl)(server, 'loader/status/sync')));

          case 1:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, this);
  }));
  return _getSyncStatus.apply(this, arguments);
}

function refreshNetworkStatus() {
  return _refreshNetworkStatus.apply(this, arguments);
}

function _refreshNetworkStatus() {
  _refreshNetworkStatus = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee5() {
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return loadNetworkStatus();

          case 2:
            networkStatus = _context5.sent;

          case 3:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, this);
  }));
  return _refreshNetworkStatus.apply(this, arguments);
}

refreshNetworkStatus();
setInterval(function () {
  return refreshNetworkStatus();
}, 30000);

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

var _grey = _interopRequireDefault(__webpack_require__(/*! @material-ui/core/colors/grey */ "@material-ui/core/colors/grey"));

var _red = _interopRequireDefault(__webpack_require__(/*! @material-ui/core/colors/red */ "@material-ui/core/colors/red"));

var _App = _interopRequireDefault(__webpack_require__(/*! ../../shared/App */ "./src/shared/App.js"));

var _DelegateStore = _interopRequireDefault(__webpack_require__(/*! ../../shared/stores/DelegateStore */ "./src/shared/stores/DelegateStore.js"));

var _NodeApi = _interopRequireDefault(__webpack_require__(/*! ../../shared/domain/api/NodeApi */ "./src/shared/domain/api/NodeApi.js"));

var _PriceStore = _interopRequireDefault(__webpack_require__(/*! ../../shared/stores/PriceStore */ "./src/shared/stores/PriceStore.js"));

var _RoundStore = _interopRequireDefault(__webpack_require__(/*! ../../shared/stores/RoundStore */ "./src/shared/stores/RoundStore.js"));

var _SlotStore = _interopRequireDefault(__webpack_require__(/*! ../../shared/stores/SlotStore */ "./src/shared/stores/SlotStore.js"));

var _NetworkStore = _interopRequireDefault(__webpack_require__(/*! ../../shared/stores/NetworkStore */ "./src/shared/stores/NetworkStore.js"));

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
      primary: _grey.default,
      accent: _red.default,
      type: 'light'
    }
  });
  var generateClassName = (0, _styles.createGenerateClassName)();
  var nodeApi = new _NodeApi.default();
  var priceStore = new _PriceStore.default();
  var delegateStore = new _DelegateStore.default(nodeApi);
  var networkStore = new _NetworkStore.default(nodeApi);
  var roundStore = new _RoundStore.default(nodeApi);
  var slotStore = new _SlotStore.default(nodeApi, roundStore);
  var stores = {
    delegateStore: delegateStore,
    networkStore: networkStore,
    priceStore: priceStore,
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

var _api = _interopRequireDefault(__webpack_require__(/*! ./api */ "./src/server/api.js"));

var _renderer = _interopRequireDefault(__webpack_require__(/*! ./middleware/renderer */ "./src/server/middleware/renderer.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express.default)();
app.use((0, _cors.default)());
app.use('/api', _api.default);
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

var _AppToolbar = _interopRequireDefault(__webpack_require__(/*! ./AppToolbar */ "./src/shared/AppToolbar.js"));

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
      return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_core.CssBaseline, null), _react.default.createElement(_AppToolbar.default, null), _react.default.createElement("div", {
        className: classes.content
      }, _react.default.createElement(_reactRouterDom.Switch, null, _react.default.createElement(_reactRouterDom.Route, {
        path: "/",
        exact: true,
        component: _RoundScreen.default
      }), _react.default.createElement(_reactRouterDom.Route, {
        path: "/delegate/:address",
        component: _DelegateScreen.default
      }))));
    }
  }]);

  return App;
}(_react.Component);

var _default = (0, _core.withStyles)(styles)(App);

exports.default = _default;

/***/ }),

/***/ "./src/shared/AppToolbar.js":
/*!**********************************!*\
  !*** ./src/shared/AppToolbar.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _mobxReact = __webpack_require__(/*! mobx-react */ "mobx-react");

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "react-router-dom");

var _core = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");

var _bplLogo = _interopRequireDefault(__webpack_require__(/*! ../../public/img/bpl-logo.png */ "./public/img/bpl-logo.png"));

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
    flex: {
      flex: 1
    },
    formControl: {
      margin: theme.spacing.unit,
      minWidth: 120
    },
    headerLink: {
      color: '#fff',
      textDecoration: 'none'
    }
  };
};

var AppToolbar =
/*#__PURE__*/
function (_Component) {
  _inherits(AppToolbar, _Component);

  function AppToolbar() {
    _classCallCheck(this, AppToolbar);

    return _possibleConstructorReturn(this, _getPrototypeOf(AppToolbar).apply(this, arguments));
  }

  _createClass(AppToolbar, [{
    key: "handleServerChange",
    value: function handleServerChange(evt) {
      console.log(evt.target.value);
      this.props.networkStore.setApiServer(evt.target.value);
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      var _this$props = this.props,
          classes = _this$props.classes,
          networkStore = _this$props.networkStore;
      return _react.default.createElement(_core.AppBar, {
        position: "fixed"
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
        to: "/",
        className: classes.headerLink
      }, "BPL Delegate Explorer"))), _react.default.createElement("form", null, _react.default.createElement(_core.FormControl, {
        variant: "filled",
        className: classes.formControl
      }, _react.default.createElement(_core.InputLabel, {
        htmlFor: "server"
      }, "Server"), _react.default.createElement(_core.Select, {
        value: networkStore.apiServer.name,
        onChange: function onChange(evt) {
          return _this.handleServerChange(evt);
        },
        input: _react.default.createElement(_core.FilledInput, {
          name: "server",
          id: "server"
        })
      }, networkStore.apiServers.map(function (server) {
        return _react.default.createElement(_core.MenuItem, {
          key: server.name,
          value: server.name
        }, server.name);
      }))))));
    }
  }]);

  return AppToolbar;
}(_react.Component);

var _default = (0, _core.withStyles)(styles)((0, _mobxReact.inject)('networkStore')((0, _mobxReact.observer)(AppToolbar)));

exports.default = _default;

/***/ }),

/***/ "./src/shared/DelegateScreen/DelegateActivity.js":
/*!*******************************************************!*\
  !*** ./src/shared/DelegateScreen/DelegateActivity.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.DelegateActivity = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _mobxReact = __webpack_require__(/*! mobx-react */ "mobx-react");

var _core = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");

var _format = __webpack_require__(/*! ../domain/util/format */ "./src/shared/domain/util/format.js");

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

var DelegateActivity =
/*#__PURE__*/
function (_Component) {
  _inherits(DelegateActivity, _Component);

  function DelegateActivity() {
    _classCallCheck(this, DelegateActivity);

    return _possibleConstructorReturn(this, _getPrototypeOf(DelegateActivity).apply(this, arguments));
  }

  _createClass(DelegateActivity, [{
    key: "render",
    value: function render() {
      var delegateStore = this.props.delegateStore;
      return _react.default.createElement(_core.Grid, {
        container: true
      }, _react.default.createElement(_core.Grid, {
        item: true,
        xs: 12,
        sm: 6
      }, _react.default.createElement(_core.Table, null, _react.default.createElement(_core.TableHead, null, _react.default.createElement(_core.TableRow, null, _react.default.createElement(_core.TableCell, null, "Height"), _react.default.createElement(_core.TableCell, null, "Time"), _react.default.createElement(_core.TableCell, {
        numeric: true
      }, "Reward"), _react.default.createElement(_core.TableCell, {
        numeric: true
      }, "Fees"), _react.default.createElement(_core.TableCell, {
        numeric: true
      }, "Total"))), _react.default.createElement(_core.TableBody, null, delegateStore.activeDelegate.rewardBlockPagination.items.map(function (b) {
        return _react.default.createElement(_core.TableRow, {
          key: b.id
        }, _react.default.createElement(_core.TableCell, null, b.height), _react.default.createElement(_core.TableCell, null, b.timestamp), _react.default.createElement(_core.TableCell, {
          numeric: true
        }, (0, _format.toFixed)(b.reward, 8)), _react.default.createElement(_core.TableCell, {
          numeric: true
        }, (0, _format.toFixed)(b.totalFee, 8)), _react.default.createElement(_core.TableCell, {
          numeric: true
        }, (0, _format.toFixed)(b.totalForged, 8)));
      })), _react.default.createElement(_core.TableFooter, null, _react.default.createElement(_core.TableRow, null, _react.default.createElement(_core.TablePagination, {
        colSpan: 5,
        count: delegateStore.activeDelegate.rewardBlockPagination.totalCount,
        rowsPerPage: delegateStore.activeDelegate.rewardBlockPagination.pageSize,
        page: delegateStore.activeDelegate.rewardBlockPagination.pageNumber,
        onChangePage: function onChangePage(evt) {
          return console.log(evt);
        },
        onChangeRowsPerPage: function onChangeRowsPerPage(evt) {
          return console.log(evt);
        } // ActionsComponent={TablePaginationActionsWrapped}

      }))))));
    }
  }]);

  return DelegateActivity;
}(_react.Component);

exports.DelegateActivity = DelegateActivity;

var _default = (0, _mobxReact.inject)('delegateStore')((0, _mobxReact.observer)(DelegateActivity));
/*
<h5>
{formatWithoutDigits(fromApiString(delegateStore.activeDelegate.vote))}{' '}
BPL ({toCurrencyFormat(
  sds.delegateCurrencyValue,
  sds.price.currency
)})
</h5>
*/


exports.default = _default;

/***/ }),

/***/ "./src/shared/DelegateScreen/DelegateInfo.js":
/*!***************************************************!*\
  !*** ./src/shared/DelegateScreen/DelegateInfo.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.DelegateInfo = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _mobxReact = __webpack_require__(/*! mobx-react */ "mobx-react");

var _core = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");

var _format = __webpack_require__(/*! ../domain/util/format */ "./src/shared/domain/util/format.js");

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

var DelegateInfo =
/*#__PURE__*/
function (_Component) {
  _inherits(DelegateInfo, _Component);

  function DelegateInfo() {
    _classCallCheck(this, DelegateInfo);

    return _possibleConstructorReturn(this, _getPrototypeOf(DelegateInfo).apply(this, arguments));
  }

  _createClass(DelegateInfo, [{
    key: "render",
    value: function render() {
      var delegateStore = this.props.delegateStore;
      return _react.default.createElement(_core.Grid, {
        container: true
      }, _react.default.createElement(_core.Grid, {
        item: true,
        xs: 12,
        sm: 6
      }, _react.default.createElement("div", null, _react.default.createElement("h5", null, (0, _format.toFixedLocale)(delegateStore.activeDelegate.vote), " BPL"))), _react.default.createElement(_core.Grid, {
        item: true,
        xs: 12,
        sm: 6
      }, _react.default.createElement(_core.Table, null, _react.default.createElement(_core.TableHead, null, _react.default.createElement(_core.TableRow, null, _react.default.createElement(_core.TableCell, null, "Voter"), _react.default.createElement(_core.TableCell, {
        numeric: true
      }, "BPL"))), _react.default.createElement(_core.TableBody, null, delegateStore.activeDelegate.voters.map(function (v) {
        return _react.default.createElement(_core.TableRow, {
          key: v.address
        }, _react.default.createElement(_core.TableCell, null, v.username || v.address), _react.default.createElement(_core.TableCell, {
          numeric: true
        }, (0, _format.toFixedLocale)(v.balance)));
      })))));
    }
  }]);

  return DelegateInfo;
}(_react.Component);

exports.DelegateInfo = DelegateInfo;

var _default = (0, _mobxReact.inject)('delegateStore')((0, _mobxReact.observer)(DelegateInfo));
/*
<h5>
{formatWithoutDigits(fromApiString(delegateStore.activeDelegate.vote))}{' '}
BPL ({toCurrencyFormat(
  sds.delegateCurrencyValue,
  sds.price.currency
)})
</h5>
*/


exports.default = _default;

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
exports.default = exports.DelegateScreen = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _mobxReact = __webpack_require__(/*! mobx-react */ "mobx-react");

var _core = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");

var _DelegateActivity = _interopRequireDefault(__webpack_require__(/*! ./DelegateActivity */ "./src/shared/DelegateScreen/DelegateActivity.js"));

var _DelegateInfo = _interopRequireDefault(__webpack_require__(/*! ./DelegateInfo */ "./src/shared/DelegateScreen/DelegateInfo.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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
    key: "componentDidMount",
    value: function () {
      var _componentDidMount = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee() {
        var _this$props, delegateStore, match;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this$props = this.props, delegateStore = _this$props.delegateStore, match = _this$props.match;
                delegateStore.setActiveDelegate(match.params.address);

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function componentDidMount() {
        return _componentDidMount.apply(this, arguments);
      }

      return componentDidMount;
    }()
  }, {
    key: "render",
    value: function render() {
      var delegateStore = this.props.delegateStore;
      return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_core.Grid, {
        container: true
      }, delegateStore.setActiveDelegate.match({
        pending: function pending() {
          return _react.default.createElement("div", null, "Loading, please wait..");
        },
        rejected: function rejected(err) {
          return _react.default.createElement("div", null, "Error: ", err.message);
        },
        resolved: function resolved() {
          return _react.default.createElement(_core.Grid, {
            item: true
          }, _react.default.createElement(_core.Typography, {
            variant: "headline"
          }, "Delegate - ".concat(delegateStore.activeDelegate.username)), _react.default.createElement(_DelegateInfo.default, null), _react.default.createElement(_DelegateActivity.default, null));
        }
      })));
    }
  }]);

  return DelegateScreen;
}(_react.Component);

exports.DelegateScreen = DelegateScreen;

var _default = (0, _mobxReact.inject)('delegateStore')((0, _mobxReact.observer)(DelegateScreen));
/*
        <Grid container>
          <ItemGrid xs={12} sm={8}>
            <RegularCard
              cardTitle={title}
              cardSubtitle=""
              content={
                selectedDelegateStore.hasSelectedDelegate ? (
                  <DelegateInfo />
                ) : (
                  <div>No delegate</div>
                )
              }
            />
          </ItemGrid>

          <ItemGrid xs={12} sm={4}>
            <BplPrice />
            <EstimatedReward />
          </ItemGrid>
        </Grid>
        <DelegateActivity />
*/


exports.default = _default;

/***/ }),

/***/ "./src/shared/RoundScreen/NetworkStatus.js":
/*!*************************************************!*\
  !*** ./src/shared/RoundScreen/NetworkStatus.js ***!
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

var NetworkStatus =
/*#__PURE__*/
function (_Component) {
  _inherits(NetworkStatus, _Component);

  function NetworkStatus() {
    _classCallCheck(this, NetworkStatus);

    return _possibleConstructorReturn(this, _getPrototypeOf(NetworkStatus).apply(this, arguments));
  }

  _createClass(NetworkStatus, [{
    key: "render",
    value: function render() {
      var networkStore = this.props.networkStore;
      return _react.default.createElement(_core.Card, null, _react.default.createElement(_core.CardContent, null, _react.default.createElement(_core.Grid, {
        container: true,
        direction: "column",
        spacing: 8
      }, _react.default.createElement(_core.Grid, {
        item: true
      }, _react.default.createElement(_core.Typography, {
        variant: "subtitle1"
      }, "Network Height: ", networkStore.networkHeight)), _react.default.createElement(_core.Grid, {
        item: true
      }, _react.default.createElement(_core.Typography, {
        variant: "subtitle1"
      }, "Seed Status: ", "".concat(networkStore.seedStatus.ok, " / ").concat(networkStore.seedStatus.total)), _react.default.createElement("ul", null, networkStore.seedNodes.map(function (n) {
        return _react.default.createElement("li", {
          key: n.server
        }, "".concat(n.server, " - ").concat(n.height));
      }))))));
    }
  }]);

  return NetworkStatus;
}(_react.Component);

var _default = (0, _mobxReact.inject)('networkStore')((0, _mobxReact.observer)(NetworkStatus));

exports.default = _default;

/***/ }),

/***/ "./src/shared/RoundScreen/RoundProgress.js":
/*!*************************************************!*\
  !*** ./src/shared/RoundScreen/RoundProgress.js ***!
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

var RoundProgress =
/*#__PURE__*/
function (_Component) {
  _inherits(RoundProgress, _Component);

  function RoundProgress() {
    _classCallCheck(this, RoundProgress);

    return _possibleConstructorReturn(this, _getPrototypeOf(RoundProgress).apply(this, arguments));
  }

  _createClass(RoundProgress, [{
    key: "render",
    value: function render() {
      var slotStore = this.props.slotStore;
      return _react.default.createElement(_core.Card, null, _react.default.createElement(_core.CardContent, null, slotStore.init.match({
        pending: function pending() {
          return _react.default.createElement("div", null, "Loading, please wait..");
        },
        rejected: function rejected(err) {
          return _react.default.createElement("div", null, "Error: ", err.message);
        },
        resolved: function resolved() {
          return _react.default.createElement(_core.Grid, {
            container: true,
            direction: "column",
            spacing: 8
          }, _react.default.createElement(_core.Grid, {
            item: true
          }, _react.default.createElement(_core.Typography, {
            variant: "subtitle1"
          }, "Remaining Slots: ", slotStore.remainingSlotCount)), _react.default.createElement(_core.Grid, {
            item: true
          }, _react.default.createElement(_core.Typography, {
            variant: "subtitle1"
          }, "Successful Forges: ", slotStore.successfulForgeCount)), _react.default.createElement(_core.Grid, {
            item: true
          }, _react.default.createElement(_core.Typography, {
            variant: "subtitle1"
          }, "Missed Blocks: ", slotStore.missedBlockCount)));
        }
      })));
    }
  }]);

  return RoundProgress;
}(_react.Component);

var _default = (0, _mobxReact.inject)('slotStore')((0, _mobxReact.observer)(RoundProgress));

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

var _NetworkStatus = _interopRequireDefault(__webpack_require__(/*! ./NetworkStatus */ "./src/shared/RoundScreen/NetworkStatus.js"));

var _RoundProgress = _interopRequireDefault(__webpack_require__(/*! ./RoundProgress */ "./src/shared/RoundScreen/RoundProgress.js"));

var _RoundSlots = _interopRequireDefault(__webpack_require__(/*! ./RoundSlots */ "./src/shared/RoundScreen/RoundSlots.js"));

var _RoundStatus = _interopRequireDefault(__webpack_require__(/*! ./RoundStatus */ "./src/shared/RoundScreen/RoundStatus.js"));

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
        container: true,
        direction: "column",
        spacing: 24
      }, _react.default.createElement(_core.Grid, {
        item: true,
        xs: 12
      }, _react.default.createElement(_core.Typography, {
        variant: "headline"
      }, "Current Forging Round")), _react.default.createElement(_core.Grid, {
        item: true,
        xs: 12
      }, _react.default.createElement(_core.Grid, {
        container: true,
        spacing: 24
      }, _react.default.createElement(_core.Grid, {
        item: true,
        xs: 3
      }, _react.default.createElement(_NetworkStatus.default, null)), _react.default.createElement(_core.Grid, {
        item: true,
        xs: 3
      }, _react.default.createElement(_RoundStatus.default, null)), _react.default.createElement(_core.Grid, {
        item: true,
        xs: 3
      }, _react.default.createElement(_RoundProgress.default, null)), _react.default.createElement(_core.Grid, {
        item: true,
        xs: 3
      }, _react.default.createElement(_core.Typography, {
        variant: "h5"
      }, "Rewards")))), _react.default.createElement(_core.Grid, {
        item: true,
        xs: 12
      }, _react.default.createElement(_RoundSlots.default, null)));
    }
  }]);

  return RoundScreen;
}(_react.Component);

exports.default = RoundScreen;

/***/ }),

/***/ "./src/shared/RoundScreen/RoundSlots.js":
/*!**********************************************!*\
  !*** ./src/shared/RoundScreen/RoundSlots.js ***!
  \**********************************************/
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

var _green = _interopRequireDefault(__webpack_require__(/*! @material-ui/core/colors/green */ "@material-ui/core/colors/green"));

var _Announcement = _interopRequireDefault(__webpack_require__(/*! @material-ui/icons/Announcement */ "@material-ui/icons/Announcement"));

var _CheckCircle = _interopRequireDefault(__webpack_require__(/*! @material-ui/icons/CheckCircle */ "@material-ui/icons/CheckCircle"));

var _Update = _interopRequireDefault(__webpack_require__(/*! @material-ui/icons/Update */ "@material-ui/icons/Update"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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
      backgroundColor: _green.default[500]
    }
  };
};

var Slot = (0, _core.withStyles)(styles)(function (_ref) {
  var key = _ref.key,
      hasBeenCompleted = _ref.hasBeenCompleted,
      hasMissedBlock = _ref.hasMissedBlock,
      rest = _objectWithoutProperties(_ref, ["key", "hasBeenCompleted", "hasMissedBlock"]);

  var diff = hasBeenCompleted ? hasMissedBlock ? {
    className: rest.classes.missedBlockAvatar,
    component: _Announcement.default,
    Forged: function Forged() {
      return _react.default.createElement(_core.TableCell, {
        align: "center"
      }, 'missed');
    }
  } : {
    className: rest.classes.successfulBlockAvatar,
    component: _CheckCircle.default,
    Forged: function Forged() {
      return _react.default.createElement(_core.TableCell, {
        align: "right"
      }, rest.totalForged.toFixed(4));
    }
  } : {
    className: '',
    component: _Update.default,
    Forged: function Forged() {
      return _react.default.createElement(_core.TableCell, {
        align: "center"
      }, '--');
    }
  };
  return _react.default.createElement(_core.TableRow, {
    key: key
  }, _react.default.createElement(_core.TableCell, null, _react.default.createElement(_core.Avatar, {
    className: diff.className
  }, _react.default.createElement(diff.component, null))), _react.default.createElement(_core.TableCell, {
    align: "right"
  }, rest.slot), _react.default.createElement(_core.TableCell, null, rest.name), _react.default.createElement(_core.TableCell, {
    align: "right"
  }, rest.rank), _react.default.createElement(_core.TableCell, {
    align: "right"
  }, Number(rest.vote.toFixed(0)).toLocaleString()), _react.default.createElement(diff.Forged, null), _react.default.createElement(_core.TableCell, {
    align: "right"
  }, new Date(rest.timestamp).toLocaleString()));
});

var RoundSlots =
/*#__PURE__*/
function (_Component) {
  _inherits(RoundSlots, _Component);

  function RoundSlots() {
    _classCallCheck(this, RoundSlots);

    return _possibleConstructorReturn(this, _getPrototypeOf(RoundSlots).apply(this, arguments));
  }

  _createClass(RoundSlots, [{
    key: "render",
    value: function render() {
      var slotStore = this.props.slotStore;
      return _react.default.createElement(_core.Card, null, _react.default.createElement(_core.CardContent, null, slotStore.init.match({
        pending: function pending() {
          return _react.default.createElement("div", null, "Loading, please wait..");
        },
        rejected: function rejected(err) {
          return _react.default.createElement("div", null, "Error: ", err.message);
        },
        resolved: function resolved() {
          return _react.default.createElement(_core.Table, null, _react.default.createElement(_core.TableHead, null, _react.default.createElement(_core.TableRow, null, _react.default.createElement(_core.TableCell, null, "\xA0"), _react.default.createElement(_core.TableCell, {
            align: "right"
          }, "Slot"), _react.default.createElement(_core.TableCell, null, "Delegate"), _react.default.createElement(_core.TableCell, {
            align: "right"
          }, "Rank"), _react.default.createElement(_core.TableCell, {
            align: "right"
          }, "Vote"), _react.default.createElement(_core.TableCell, {
            align: "right"
          }, "Forged (BPL)"), _react.default.createElement(_core.TableCell, {
            align: "right"
          }, "Date"))), _react.default.createElement(_core.TableBody, null, slotStore.slots.map(function (forger) {
            return _react.default.createElement(Slot, _extends({
              key: forger.slot
            }, forger));
          })));
        }
      })));
    }
  }]);

  return RoundSlots;
}(_react.Component);

var _default = (0, _mobxReact.inject)('slotStore')((0, _mobxReact.observer)(RoundSlots));

exports.default = _default;

/***/ }),

/***/ "./src/shared/RoundScreen/RoundStatus.js":
/*!***********************************************!*\
  !*** ./src/shared/RoundScreen/RoundStatus.js ***!
  \***********************************************/
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

var RoundProgress =
/*#__PURE__*/
function (_Component) {
  _inherits(RoundProgress, _Component);

  function RoundProgress() {
    _classCallCheck(this, RoundProgress);

    return _possibleConstructorReturn(this, _getPrototypeOf(RoundProgress).apply(this, arguments));
  }

  _createClass(RoundProgress, [{
    key: "render",
    value: function render() {
      var roundStore = this.props.roundStore;
      return _react.default.createElement(_core.Card, null, _react.default.createElement(_core.CardContent, null, roundStore.init.match({
        pending: function pending() {
          return _react.default.createElement("div", null, "Loading, please wait..");
        },
        rejected: function rejected(err) {
          return _react.default.createElement("div", null, "Error: ", err.message);
        },
        resolved: function resolved() {
          return _react.default.createElement(_core.Grid, {
            container: true,
            direction: "column",
            spacing: 8
          }, _react.default.createElement(_core.Grid, {
            item: true
          }, _react.default.createElement(_core.Typography, {
            variant: "subtitle1"
          }, "Round Status: In Progress")), _react.default.createElement(_core.Grid, {
            item: true
          }, _react.default.createElement(_core.Typography, {
            variant: "subtitle1"
          }, "Current Height: ", roundStore.currentHeight)), _react.default.createElement(_core.Grid, {
            item: true
          }, _react.default.createElement(_core.Typography, {
            variant: "subtitle1"
          }, "Start Height: ", roundStore.startHeight)), _react.default.createElement(_core.Grid, {
            item: true
          }, _react.default.createElement(_core.Typography, {
            variant: "subtitle1"
          }, "End Height: ", roundStore.endHeight)));
        }
      })));
    }
  }]);

  return RoundProgress;
}(_react.Component);

var _default = (0, _mobxReact.inject)('roundStore')((0, _mobxReact.observer)(RoundProgress));

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

var _makeApiRequest = __webpack_require__(/*! ./makeApiRequest */ "./src/shared/domain/api/makeApiRequest.js");

var _rounds = __webpack_require__(/*! ../util/rounds */ "./src/shared/domain/util/rounds.js");

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var NodeApi =
/*#__PURE__*/
function () {
  function NodeApi() {
    _classCallCheck(this, NodeApi);

    this.apiServer = 'https://api.bplforge.com';
  }

  _createClass(NodeApi, [{
    key: "getActiveDelegates",
    // apiServer = 'https://explorer.dated.fun/node'
    value: function () {
      var _getActiveDelegates = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                return _context.abrupt("return", (0, _makeApiRequest.makeApiRequest)(this.getUrl('delegates'), 0, 201));

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getActiveDelegates() {
        return _getActiveDelegates.apply(this, arguments);
      }

      return getActiveDelegates;
    }()
  }, {
    key: "getBlocks",
    value: function () {
      var _getBlocks = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee3() {
        var _this = this;

        var offset,
            limit,
            params,
            _args3 = arguments;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                offset = _args3.length > 0 && _args3[0] !== undefined ? _args3[0] : 0;
                limit = _args3.length > 1 && _args3[1] !== undefined ? _args3[1] : 100;
                params = _args3.length > 2 ? _args3[2] : undefined;
                return _context3.abrupt("return", new Promise(
                /*#__PURE__*/
                function () {
                  var _ref = _asyncToGenerator(
                  /*#__PURE__*/
                  regeneratorRuntime.mark(function _callee2(resolve, reject) {
                    var blockResponse;
                    return regeneratorRuntime.wrap(function _callee2$(_context2) {
                      while (1) {
                        switch (_context2.prev = _context2.next) {
                          case 0:
                            _context2.prev = 0;
                            _context2.next = 3;
                            return (0, _makeApiRequest.makeApiRequest)(_this.getUrl('blocks'), _objectSpread({
                              limit: limit,
                              offset: offset
                            }, params));

                          case 3:
                            blockResponse = _context2.sent;
                            resolve(blockResponse.blocks);
                            _context2.next = 10;
                            break;

                          case 7:
                            _context2.prev = 7;
                            _context2.t0 = _context2["catch"](0);
                            reject(_context2.t0);

                          case 10:
                          case "end":
                            return _context2.stop();
                        }
                      }
                    }, _callee2, this, [[0, 7]]);
                  }));

                  return function (_x, _x2) {
                    return _ref.apply(this, arguments);
                  };
                }()));

              case 4:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function getBlocks() {
        return _getBlocks.apply(this, arguments);
      }

      return getBlocks;
    }()
  }, {
    key: "getCurrentRound",
    value: function () {
      var _getCurrentRound = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee4() {
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                return _context4.abrupt("return", (0, _makeApiRequest.makeApiRequest)(this.getUrl('rounds')));

              case 1:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function getCurrentRound() {
        return _getCurrentRound.apply(this, arguments);
      }

      return getCurrentRound;
    }()
  }, {
    key: "getLastBlockOfRound",
    value: function () {
      var _getLastBlockOfRound = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee6(round) {
        var _this2 = this;

        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                return _context6.abrupt("return", new Promise(
                /*#__PURE__*/
                function () {
                  var _ref2 = _asyncToGenerator(
                  /*#__PURE__*/
                  regeneratorRuntime.mark(function _callee5(resolve, reject) {
                    var lastBlockResponse;
                    return regeneratorRuntime.wrap(function _callee5$(_context5) {
                      while (1) {
                        switch (_context5.prev = _context5.next) {
                          case 0:
                            _context5.prev = 0;
                            _context5.next = 3;
                            return _this2.getBlocks(0, 1, {
                              height: (0, _rounds.getLastBlockHeightOfRound)(round)
                            });

                          case 3:
                            lastBlockResponse = _context5.sent;
                            resolve(lastBlockResponse[0]);
                            _context5.next = 10;
                            break;

                          case 7:
                            _context5.prev = 7;
                            _context5.t0 = _context5["catch"](0);
                            reject(_context5.t0);

                          case 10:
                          case "end":
                            return _context5.stop();
                        }
                      }
                    }, _callee5, this, [[0, 7]]);
                  }));

                  return function (_x4, _x5) {
                    return _ref2.apply(this, arguments);
                  };
                }()));

              case 1:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function getLastBlockOfRound(_x3) {
        return _getLastBlockOfRound.apply(this, arguments);
      }

      return getLastBlockOfRound;
    }()
  }, {
    key: "getRoundForgerData",
    value: function () {
      var _getRoundForgerData = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee7() {
        return regeneratorRuntime.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                return _context7.abrupt("return", (0, _makeApiRequest.makeApiRequest)(this.getUrl('delegates/getNextForgers'), {
                  limit: 201
                }));

              case 1:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      function getRoundForgerData() {
        return _getRoundForgerData.apply(this, arguments);
      }

      return getRoundForgerData;
    }()
  }, {
    key: "getRewardBlocks",
    value: function () {
      var _getRewardBlocks = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee8(generatorPublicKey) {
        return regeneratorRuntime.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                return _context8.abrupt("return", (0, _makeApiRequest.makeApiRequest)(this.getUrl('blocks'), {
                  generatorPublicKey: generatorPublicKey
                }));

              case 1:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, this);
      }));

      function getRewardBlocks(_x6) {
        return _getRewardBlocks.apply(this, arguments);
      }

      return getRewardBlocks;
    }()
  }, {
    key: "getTransactions",
    value: function () {
      var _getTransactions = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee9(address) {
        return regeneratorRuntime.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                return _context9.abrupt("return", (0, _makeApiRequest.makeApiRequest)(this.getUrl('transactions'), {
                  senderId: address,
                  recipientId: address
                }));

              case 1:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9, this);
      }));

      function getTransactions(_x7) {
        return _getTransactions.apply(this, arguments);
      }

      return getTransactions;
    }()
  }, {
    key: "getUrl",
    value: function getUrl(path) {
      return (0, _makeApiRequest.getUrl)(this.apiServer, path);
    }
  }, {
    key: "getVoters",
    value: function () {
      var _getVoters = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee10(publicKey) {
        return regeneratorRuntime.wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                return _context10.abrupt("return", (0, _makeApiRequest.makeApiRequest)(this.getUrl('delegates/voters'), {
                  publicKey: publicKey
                }));

              case 1:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10, this);
      }));

      function getVoters(_x8) {
        return _getVoters.apply(this, arguments);
      }

      return getVoters;
    }()
  }, {
    key: "setApiServer",
    value: function setApiServer(server) {
      this.apiServer = server;
    }
  }]);

  return NodeApi;
}();

exports.default = NodeApi;

/***/ }),

/***/ "./src/shared/domain/api/makeApiRequest.js":
/*!*************************************************!*\
  !*** ./src/shared/domain/api/makeApiRequest.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getUrl = getUrl;
exports.makeApiRequest = makeApiRequest;

var _nodeFetch = _interopRequireDefault(__webpack_require__(/*! node-fetch */ "node-fetch"));

var _querystring = _interopRequireDefault(__webpack_require__(/*! querystring */ "querystring"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function getUrl(host, path) {
  return "".concat(host, "/api/").concat(path);
}

function makeApiRequest(_x, _x2) {
  return _makeApiRequest.apply(this, arguments);
}

function _makeApiRequest() {
  _makeApiRequest = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2(url, params) {
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            return _context2.abrupt("return", new Promise(
            /*#__PURE__*/
            function () {
              var _ref = _asyncToGenerator(
              /*#__PURE__*/
              regeneratorRuntime.mark(function _callee(resolve, reject) {
                var query, requestUrl, rawResponse, response;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        _context.prev = 0;
                        query = params ? "?".concat(_querystring.default.stringify(params)) : '';
                        requestUrl = "".concat(url).concat(query);
                        _context.next = 5;
                        return (0, _nodeFetch.default)(requestUrl, {
                          method: 'GET'
                        });

                      case 5:
                        rawResponse = _context.sent;
                        _context.next = 8;
                        return rawResponse.json();

                      case 8:
                        response = _context.sent;

                        if (!response.hasOwnProperty('success') || response.success) {
                          resolve(response);
                        } else {
                          console.log(response);
                          reject(new Error("Request did not complete successfully."));
                        }

                        _context.next = 16;
                        break;

                      case 12:
                        _context.prev = 12;
                        _context.t0 = _context["catch"](0);
                        console.log("Error from ".concat(url));
                        reject(_context.t0);

                      case 16:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee, this, [[0, 12]]);
              }));

              return function (_x3, _x4) {
                return _ref.apply(this, arguments);
              };
            }()));

          case 1:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));
  return _makeApiRequest.apply(this, arguments);
}

/***/ }),

/***/ "./src/shared/domain/util/delegates.js":
/*!*********************************************!*\
  !*** ./src/shared/domain/util/delegates.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.delegateCount = void 0;
var delegateCount = 201;
exports.delegateCount = delegateCount;

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
exports.toFixed = toFixed;
exports.toFixedLocale = toFixedLocale;
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

function toFixed(big) {
  var digits = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  return big.toFixed(digits);
}

function toFixedLocale(big) {
  var digits = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  return Number(big.toFixed(digits)).toLocaleString();
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

/***/ "./src/shared/domain/util/rounds.js":
/*!******************************************!*\
  !*** ./src/shared/domain/util/rounds.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getRoundNumberFromHeight = exports.getLastBlockHeightOfRound = exports.getFirstBlockHeightOfRound = void 0;
var delegateCount = 201;

var getFirstBlockHeightOfRound = function getFirstBlockHeightOfRound(roundNumber) {
  return getLastBlockHeightOfRound(roundNumber - 1) + 1;
};

exports.getFirstBlockHeightOfRound = getFirstBlockHeightOfRound;

var getLastBlockHeightOfRound = function getLastBlockHeightOfRound(roundNumber) {
  return roundNumber * delegateCount;
};

exports.getLastBlockHeightOfRound = getLastBlockHeightOfRound;

var getRoundNumberFromHeight = function getRoundNumberFromHeight(height) {
  return Math.floor((height - 1) / delegateCount) + 1;
};

exports.getRoundNumberFromHeight = getRoundNumberFromHeight;

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
    return a[prop] > b[prop] ? -1 : b[prop] > a[prop] ? 1 : 0;
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
exports.nextMsTimestamp = exports.fromApiToMs = exports.currentMsTimestamp = exports.blockIntervalInMs = exports.blockInterval = void 0;
var blockInterval = 15;
exports.blockInterval = blockInterval;
var blockIntervalInMs = blockInterval * 1000;
exports.blockIntervalInMs = blockIntervalInMs;
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
  return msTimestamp + blockIntervalInMs;
};

exports.nextMsTimestamp = nextMsTimestamp;

function getTimestamp(apiTimestamp) {
  return (apiTimestamp + epochSeconds) * 1000;
}

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

var _mobxTask = __webpack_require__(/*! mobx-task */ "mobx-task");

var _format = __webpack_require__(/*! ../domain/util/format */ "./src/shared/domain/util/format.js");

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Paginator =
/*#__PURE__*/
function () {
  function Paginator(items) {
    var totalCount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

    _classCallCheck(this, Paginator);

    this.allItems = [];
    this.pageNumber = 0;
    this.pageSize = 25;
    this.totalCount = 0;

    if (items) {
      this.allItems.replace(items);
    }

    this.totalCount = totalCount === null ? items.length : totalCount;
  }

  _createClass(Paginator, [{
    key: "items",
    get: function get() {
      var pageStartIndex = this.pageNumber * this.pageSize;
      var pageEndIndex = pageStartIndex + this.pageSize - 1;
      return this.allItems.slice(pageStartIndex, pageEndIndex);
    }
  }]);

  return Paginator;
}();

(0, _mobx.decorate)(Paginator, {
  allItems: _mobx.observable,
  items: _mobx.computed,
  pageNumber: _mobx.observable,
  pageSize: _mobx.observable,
  totalCount: _mobx.observable
});

var DelegateStore =
/*#__PURE__*/
function () {
  function DelegateStore(nodeApi) {
    _classCallCheck(this, DelegateStore);

    this.activeDelegate = null;
    this.addressToPublicKey = new Map();
    this.delegates = new Map();
    this.isInitialized = false;
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
                console.log('Initializing Delegate Store.');
                _context.next = 3;
                return this.nodeApi.getActiveDelegates();

              case 3:
                delegates = _context.sent;
                delegates.delegates.forEach(function (d) {
                  _this.delegates.set(d.publicKey, d);

                  _this.addressToPublicKey.set(d.address, d.publicKey);
                });
                this.isInitialized = true;

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function init() {
        return _init.apply(this, arguments);
      }

      return init;
    }()
  }, {
    key: "get",
    value: function get(publicKey) {
      return this.delegates.get(publicKey);
    }
  }, {
    key: "setActiveDelegate",
    value: function () {
      var _setActiveDelegate = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2(address) {
        var _this2 = this;

        var publicKey, delegate, rewardBlocks, voters, transformedBlocks;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return (0, _mobx.when)(function () {
                  return _this2.isInitialized;
                });

              case 2:
                console.log("Setting active delegate: ".concat(address));
                publicKey = this.addressToPublicKey.get(address);
                delegate = this.delegates.get(publicKey);
                _context2.next = 7;
                return this.nodeApi.getRewardBlocks(publicKey);

              case 7:
                rewardBlocks = _context2.sent;
                _context2.next = 10;
                return this.nodeApi.getVoters(publicKey);

              case 10:
                voters = _context2.sent;
                console.log(rewardBlocks);
                transformedBlocks = rewardBlocks.blocks.map(function (b) {
                  return _objectSpread({}, b, {
                    reward: (0, _format.fromApiString)(b.reward),
                    totalAmount: (0, _format.fromApiString)(b.totalAmount),
                    totalFee: (0, _format.fromApiString)(b.totalFee),
                    totalForged: (0, _format.fromApiString)(b.totalForged)
                  });
                });
                this.activeDelegate = _objectSpread({}, delegate, {
                  rewardBlockPagination: new Paginator(transformedBlocks, rewardBlocks.count),
                  vote: (0, _format.fromApiString)(delegate.vote),
                  voters: voters.accounts.map(function (v) {
                    return _objectSpread({}, v, {
                      balance: (0, _format.fromApiString)(v.balance)
                    });
                  })
                });

              case 14:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function setActiveDelegate(_x) {
        return _setActiveDelegate.apply(this, arguments);
      }

      return setActiveDelegate;
    }()
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
  activeDelegate: _mobx.observable,
  delegates: _mobx.observable,
  hasLoadedDelegates: _mobx.computed,
  isInitialized: _mobx.observable,
  setActiveDelegate: _mobxTask.task
});

/***/ }),

/***/ "./src/shared/stores/NetworkStore.js":
/*!*******************************************!*\
  !*** ./src/shared/stores/NetworkStore.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mobx = __webpack_require__(/*! mobx */ "mobx");

var _mobxTask = __webpack_require__(/*! mobx-task */ "mobx-task");

var _makeApiRequest = __webpack_require__(/*! ../domain/api/makeApiRequest */ "./src/shared/domain/api/makeApiRequest.js");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var NetworkStore =
/*#__PURE__*/
function () {
  function NetworkStore(nodeApi) {
    _classCallCheck(this, NetworkStore);

    this.apiServers = [{
      name: 'https://api.bplforge.com',
      url: 'https://api.bplforge.com'
    }, {
      name: 'https://explorer.dated.fun',
      url: 'https://explorer.dated.fun/node'
    }, {
      name: 'https://api.blockpool.io',
      url: 'https://api.blockpool.io'
    }];
    this.apiServer = this.apiServers[0];
    this.hasChangedServer = false;
    this.seedNodes = [];
    this.nodeApi = nodeApi;
  }

  _createClass(NetworkStore, [{
    key: "init",
    value: function () {
      var _init = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee() {
        var _this = this;

        var networkStatus;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _makeApiRequest.makeApiRequest)('/api/networkStatus');

              case 2:
                networkStatus = _context.sent;
                (0, _mobx.runInAction)(function () {
                  _this.seedNodes.replace(networkStatus.seedNodes);
                });

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function init() {
        return _init.apply(this, arguments);
      }

      return init;
    }()
  }, {
    key: "setApiServer",
    value: function setApiServer(serverName) {
      var selectedServer = this.apiServers.filter(function (s) {
        return s.name === serverName;
      })[0];
      this.apiServer = selectedServer;
      this.nodeApi.setApiServer(selectedServer.url);
      this.hasChangedServer = true;
    }
  }, {
    key: "networkHeight",
    get: function get() {
      return this.seedNodes.reduce(function (maxHeight, node) {
        return node.height > maxHeight ? node.height : maxHeight;
      }, 0);
    }
  }, {
    key: "seedStatus",
    get: function get() {
      var height = this.networkHeight;
      return this.seedNodes.reduce(function (status, node) {
        status.total += 1;

        if (height - node.height <= 1) {
          status.ok += 1;
        }

        return status;
      }, {
        ok: 0,
        total: 0
      });
    }
  }]);

  return NetworkStore;
}();

exports.default = NetworkStore;
(0, _mobx.decorate)(NetworkStore, {
  apiServer: _mobx.observable,
  apiServers: _mobx.observable,
  hasChangedServer: _mobx.observable,
  init: _mobxTask.task,
  networkHeight: _mobx.computed,
  seedNodes: _mobx.observable,
  seedStatus: _mobx.computed,
  setApiServer: _mobx.action
});

/***/ }),

/***/ "./src/shared/stores/PriceStore.js":
/*!*****************************************!*\
  !*** ./src/shared/stores/PriceStore.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _nodeFetch = _interopRequireDefault(__webpack_require__(/*! node-fetch */ "node-fetch"));

var _logger = __webpack_require__(/*! ../domain/util/logger */ "./src/shared/domain/util/logger.js");

var _mobx = __webpack_require__(/*! mobx */ "mobx");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var priceInterval = 5 * 60 * 1000;
var priceUrl = 'https://min-api.cryptocompare.com/data/price?fsym=BPL&tsyms=BTC,USD,GBP,EUR,CNY,AUD';

var PriceStore =
/*#__PURE__*/
function () {
  function PriceStore() {
    var _this = this;

    _classCallCheck(this, PriceStore);

    this.currency = 'USD';
    this.listener = void 0;
    this.prices = {
      USD: '',
      EUR: ''
    };

    this.resume = function () {
      (0, _logger.log)('Resuming price listener');
      _this.listener = setInterval(function () {
        return _this.fetchPrice();
      }, priceInterval);
    };

    this.suspend = function () {
      (0, _logger.log)('Suspening price listener');
      clearInterval(_this.listener);
    };

    (0, _mobx.onBecomeObserved)(this, 'price', this.resume);
    (0, _mobx.onBecomeUnobserved)(this, 'price', this.suspend);
  }

  _createClass(PriceStore, [{
    key: "fetchPrice",
    value: function () {
      var _fetchPrice = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee() {
        var priceResponse, priceResult;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _nodeFetch.default)(priceUrl);

              case 2:
                priceResponse = _context.sent;
                _context.next = 5;
                return priceResponse.json();

              case 5:
                priceResult = _context.sent;
                this.prices = priceResult;
                (0, _logger.log)(this.currency, priceResult);

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function fetchPrice() {
        return _fetchPrice.apply(this, arguments);
      }

      return fetchPrice;
    }()
  }, {
    key: "setCurrency",
    value: function setCurrency(currency) {
      this.currency = currency;
    }
  }, {
    key: "price",
    get: function get() {
      return this.prices[this.currency];
    }
  }]);

  return PriceStore;
}();

exports.default = PriceStore;
(0, _mobx.decorate)(PriceStore, {
  currency: _mobx.observable,
  fetchPrice: _mobx.action,
  price: _mobx.computed,
  prices: _mobx.observable
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

var _mobxTask = __webpack_require__(/*! mobx-task */ "mobx-task");

var _logger = __webpack_require__(/*! ../domain/util/logger */ "./src/shared/domain/util/logger.js");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _awaitAsyncGenerator(value) { return new _AwaitValue(value); }

function _wrapAsyncGenerator(fn) { return function () { return new _AsyncGenerator(fn.apply(this, arguments)); }; }

function _AsyncGenerator(gen) { var front, back; function send(key, arg) { return new Promise(function (resolve, reject) { var request = { key: key, arg: arg, resolve: resolve, reject: reject, next: null }; if (back) { back = back.next = request; } else { front = back = request; resume(key, arg); } }); } function resume(key, arg) { try { var result = gen[key](arg); var value = result.value; var wrappedAwait = value instanceof _AwaitValue; Promise.resolve(wrappedAwait ? value.wrapped : value).then(function (arg) { if (wrappedAwait) { resume("next", arg); return; } settle(result.done ? "return" : "normal", arg); }, function (err) { resume("throw", err); }); } catch (err) { settle("throw", err); } } function settle(type, value) { switch (type) { case "return": front.resolve({ value: value, done: true }); break; case "throw": front.reject(value); break; default: front.resolve({ value: value, done: false }); break; } front = front.next; if (front) { resume(front.key, front.arg); } else { back = null; } } this._invoke = send; if (typeof gen.return !== "function") { this.return = undefined; } }

if (typeof Symbol === "function" && Symbol.asyncIterator) { _AsyncGenerator.prototype[Symbol.asyncIterator] = function () { return this; }; }

_AsyncGenerator.prototype.next = function (arg) { return this._invoke("next", arg); };

_AsyncGenerator.prototype.throw = function (arg) { return this._invoke("throw", arg); };

_AsyncGenerator.prototype.return = function (arg) { return this._invoke("return", arg); };

function _AwaitValue(value) { this.wrapped = value; }

var RoundStore =
/*#__PURE__*/
function () {
  function RoundStore(nodeApi) {
    _classCallCheck(this, RoundStore);

    this.activeDelegates = new Map();
    this.addressToKeys = new Map();
    this.endHeight = void 0;
    this.isReady = false;
    this.round = void 0;
    this.roundBlocks = [];
    this.startHeight = void 0;
    this.nodeApi = nodeApi;
  }

  _createClass(RoundStore, [{
    key: "init",
    value: function () {
      var _init = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee() {
        var _this2 = this;

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
                currentRound.activeDelegates.forEach(function (delegate) {
                  _this2.activeDelegates.set(delegate.publicKey, delegate);

                  _this2.addressToKeys.set(delegate.address, delegate.publicKey);
                });
                this.endHeight = currentRound.endHeight;
                this.round = currentRound.round;
                this.roundBlocks = currentRound.blocks;
                this.startHeight = currentRound.startHeight;
                this.isReady = true;

              case 11:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function init() {
        return _init.apply(this, arguments);
      }

      return init;
    }()
  }, {
    key: "blocks",
    value: function blocks(fromBlockHeight) {
      var _this = this;

      return _wrapAsyncGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2() {
        var _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, block, lastBlock, offset, blocks, newBlocks, _iteratorNormalCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, newBlock;

        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _iteratorNormalCompletion = true;
                _didIteratorError = false;
                _iteratorError = undefined;
                _context2.prev = 3;
                _iterator = _this.roundBlocks.filter(function (b) {
                  return b.height >= fromBlockHeight;
                })[Symbol.iterator]();

              case 5:
                if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
                  _context2.next = 12;
                  break;
                }

                block = _step.value;
                _context2.next = 9;
                return block;

              case 9:
                _iteratorNormalCompletion = true;
                _context2.next = 5;
                break;

              case 12:
                _context2.next = 18;
                break;

              case 14:
                _context2.prev = 14;
                _context2.t0 = _context2["catch"](3);
                _didIteratorError = true;
                _iteratorError = _context2.t0;

              case 18:
                _context2.prev = 18;
                _context2.prev = 19;

                if (!_iteratorNormalCompletion && _iterator.return != null) {
                  _iterator.return();
                }

              case 21:
                _context2.prev = 21;

                if (!_didIteratorError) {
                  _context2.next = 24;
                  break;
                }

                throw _iteratorError;

              case 24:
                return _context2.finish(21);

              case 25:
                return _context2.finish(18);

              case 26:
                lastBlock = _this.roundBlocks[_this.roundBlocks.length - 1];
                offset = 0;

              case 28:
                if (!(lastBlock.height <= _this.endHeight)) {
                  _context2.next = 66;
                  break;
                }

                _context2.next = 31;
                return _awaitAsyncGenerator(_this.nodeApi.getBlocks(offset, 10));

              case 31:
                blocks = _context2.sent;
                newBlocks = blocks.filter(function (b) {
                  return b.height > lastBlock.height;
                });
                newBlocks.reverse();
                _iteratorNormalCompletion2 = true;
                _didIteratorError2 = false;
                _iteratorError2 = undefined;
                _context2.prev = 37;
                _iterator2 = newBlocks[Symbol.iterator]();

              case 39:
                if (_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done) {
                  _context2.next = 48;
                  break;
                }

                newBlock = _step2.value;
                lastBlock = newBlock;

                _this.roundBlocks.push(newBlock);

                _context2.next = 45;
                return newBlock;

              case 45:
                _iteratorNormalCompletion2 = true;
                _context2.next = 39;
                break;

              case 48:
                _context2.next = 54;
                break;

              case 50:
                _context2.prev = 50;
                _context2.t1 = _context2["catch"](37);
                _didIteratorError2 = true;
                _iteratorError2 = _context2.t1;

              case 54:
                _context2.prev = 54;
                _context2.prev = 55;

                if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
                  _iterator2.return();
                }

              case 57:
                _context2.prev = 57;

                if (!_didIteratorError2) {
                  _context2.next = 60;
                  break;
                }

                throw _iteratorError2;

              case 60:
                return _context2.finish(57);

              case 61:
                return _context2.finish(54);

              case 62:
                _context2.next = 64;
                return _awaitAsyncGenerator(sleep(15000));

              case 64:
                _context2.next = 28;
                break;

              case 66:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[3, 14, 18, 26], [19,, 21, 25], [37, 50, 54, 62], [55,, 57, 61]]);
      }))();
    }
  }, {
    key: "currentHeight",
    get: function get() {
      return this.roundBlocks[this.roundBlocks.length - 1].height;
    }
  }]);

  return RoundStore;
}();

exports.default = RoundStore;

function sleep(duration) {
  return new Promise(function (resolve) {
    return setTimeout(function () {
      return resolve(0);
    }, duration);
  });
}

(0, _mobx.decorate)(RoundStore, {
  activeDelegates: _mobx.observable,
  currentHeight: _mobx.computed,
  endHeight: _mobx.observable,
  init: _mobxTask.task,
  isReady: _mobx.observable,
  round: _mobx.observable,
  startHeight: _mobx.observable
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

var _bigJs = _interopRequireDefault(__webpack_require__(/*! big-js */ "big-js"));

var _mobx = __webpack_require__(/*! mobx */ "mobx");

var _mobxTask = __webpack_require__(/*! mobx-task */ "mobx-task");

var _delegates = __webpack_require__(/*! ../domain/util/delegates */ "./src/shared/domain/util/delegates.js");

var _logger = __webpack_require__(/*! ../domain/util/logger */ "./src/shared/domain/util/logger.js");

var _slotFactory = __webpack_require__(/*! ./slotFactory */ "./src/shared/stores/slotFactory.js");

var _time = __webpack_require__(/*! ../domain/util/time */ "./src/shared/domain/util/time.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _asyncIterator(iterable) { var method; if (typeof Symbol === "function") { if (Symbol.asyncIterator) { method = iterable[Symbol.asyncIterator]; if (method != null) return method.call(iterable); } if (Symbol.iterator) { method = iterable[Symbol.iterator]; if (method != null) return method.call(iterable); } } throw new TypeError("Object is not async iterable"); }

var SlotStore =
/*#__PURE__*/
function () {
  function SlotStore(nodeApi, roundStore) {
    var _this = this;

    _classCallCheck(this, SlotStore);

    this.completedSlots = [];
    this.roundSlots = new Map();
    this.upcomingSlots = [];
    this.nodeApi = nodeApi;
    this.roundStore = roundStore;
    (0, _mobx.when)(function () {
      return _this.roundStore.isReady;
    }, function () {
      return _this.init();
    });
  }

  _createClass(SlotStore, [{
    key: "init",
    value: function () {
      var _init = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee() {
        var _this2 = this;

        var lastBlockOfLastRound, lastProcessedTimestamp, slots, processedSlots;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                (0, _logger.log)('Initializing Slot Store.');
                _context.next = 3;
                return this.nodeApi.getLastBlockOfRound(this.roundStore.round - 1);

              case 3:
                lastBlockOfLastRound = _context.sent;
                (0, _logger.log)('Generating forging list');
                console.log('last block of last round', lastBlockOfLastRound);
                lastProcessedTimestamp = (0, _time.fromApiToMs)(lastBlockOfLastRound.timestamp);
                slots = (0, _slotFactory.getSlotsFromActiveDelegates)(this.roundStore.activeDelegates, lastProcessedTimestamp);
                slots.forEach(function (s) {
                  return _this2.roundSlots.set(s.slot, {
                    slotNumber: s.slot,
                    publicKey: s.publicKey
                  });
                });
                processedSlots = this.roundStore.roundBlocks.reduce(function (all, block) {
                  var _this2$processReceive = _this2.processReceivedBlock(all.completed, all.upcoming, block),
                      completed = _this2$processReceive.completed,
                      upcoming = _this2$processReceive.upcoming;

                  all.completed = completed;
                  all.lastProcessedHeight = block.height;
                  all.upcoming = upcoming;
                  return all;
                }, {
                  completed: [],
                  lastProcessedHeight: lastBlockOfLastRound.height,
                  upcoming: slots
                });
                (0, _mobx.runInAction)(function () {
                  _this2.completedSlots.replace(processedSlots.completed);

                  _this2.upcomingSlots.replace(processedSlots.upcoming);

                  _this2.processNextBlocks(processedSlots.lastProcessedHeight);
                });

              case 11:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function init() {
        return _init.apply(this, arguments);
      }

      return init;
    }()
  }, {
    key: "getSlotNumber",
    value: function getSlotNumber(blockTimestamp) {
      return Math.floor(blockTimestamp / _time.blockInterval);
    }
  }, {
    key: "getRoundSlot",
    value: function getRoundSlot(totalSlot) {
      // From BPL-node code
      return this.roundSlots.get(totalSlot % _delegates.delegateCount);
    }
  }, {
    key: "processNextBlocks",
    value: function () {
      var _processNextBlocks = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2(lastProcessedHeight) {
        var _this3 = this;

        var _iteratorNormalCompletion, _didIteratorError, _iteratorError, _loop, _iterator, _step, _value;

        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _iteratorNormalCompletion = true;
                _didIteratorError = false;
                _context2.prev = 2;

                _loop = function _loop() {
                  var block = _value;

                  var _this3$processReceive = _this3.processReceivedBlock(_this3.completedSlots, _this3.upcomingSlots, block),
                      completed = _this3$processReceive.completed,
                      upcoming = _this3$processReceive.upcoming;

                  (0, _mobx.runInAction)(function () {
                    _this3.completedSlots.replace(completed);

                    _this3.upcomingSlots.replace(upcoming);
                  });
                };

                _iterator = _asyncIterator(this.roundStore.blocks(lastProcessedHeight + 1));

              case 5:
                _context2.next = 7;
                return _iterator.next();

              case 7:
                _step = _context2.sent;
                _iteratorNormalCompletion = _step.done;
                _context2.next = 11;
                return _step.value;

              case 11:
                _value = _context2.sent;

                if (_iteratorNormalCompletion) {
                  _context2.next = 17;
                  break;
                }

                _loop();

              case 14:
                _iteratorNormalCompletion = true;
                _context2.next = 5;
                break;

              case 17:
                _context2.next = 23;
                break;

              case 19:
                _context2.prev = 19;
                _context2.t0 = _context2["catch"](2);
                _didIteratorError = true;
                _iteratorError = _context2.t0;

              case 23:
                _context2.prev = 23;
                _context2.prev = 24;

                if (!(!_iteratorNormalCompletion && _iterator.return != null)) {
                  _context2.next = 28;
                  break;
                }

                _context2.next = 28;
                return _iterator.return();

              case 28:
                _context2.prev = 28;

                if (!_didIteratorError) {
                  _context2.next = 31;
                  break;
                }

                throw _iteratorError;

              case 31:
                return _context2.finish(28);

              case 32:
                return _context2.finish(23);

              case 33:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[2, 19, 23, 33], [24,, 28, 32]]);
      }));

      function processNextBlocks(_x) {
        return _processNextBlocks.apply(this, arguments);
      }

      return processNextBlocks;
    }()
  }, {
    key: "processReceivedBlock",
    value: function processReceivedBlock(completedSlots, upcomingSlots, block) {
      var completed = completedSlots.slice(0);
      var upcoming = upcomingSlots.slice(0);
      var hasFoundForger = false;

      while (!hasFoundForger) {
        var slot = upcoming.shift();
        var completedSlot = (0, _slotFactory.createSlotFromBlock)(slot, block);
        completed.push(completedSlot);

        if (completedSlot.hasMissedBlock) {
          var totalSlotCount = upcoming.length + completed.length + 1;
          var roundSlot = this.getRoundSlot(totalSlotCount);
          var matchingDelegate = this.roundStore.activeDelegates.get(roundSlot.publicKey);
          var lastSlot = upcoming[upcoming.length - 1] || slot;
          upcoming.push((0, _slotFactory.basicSlot)(totalSlotCount, matchingDelegate, (0, _time.nextMsTimestamp)(lastSlot.timestamp)));
        } else {
          hasFoundForger = true;
        }
      }

      return {
        completed: completed,
        upcoming: upcoming
      };
    }
  }, {
    key: "missedBlockCount",
    get: function get() {
      return this.completedSlots.filter(function (s) {
        return s.hasMissedBlock;
      }).length;
    }
  }, {
    key: "remainingSlotCount",
    get: function get() {
      return this.upcomingSlots.length;
    }
  }, {
    key: "slots",
    get: function get() {
      return this.completedSlots.concat(this.upcomingSlots);
    }
  }, {
    key: "successfulForgeCount",
    get: function get() {
      return this.completedSlots.filter(function (s) {
        return !s.hasMissedBlock;
      }).length;
    }
  }, {
    key: "totalForgedAmount",
    get: function get() {
      return this.completedSlots.filter(function (s) {
        return !s.hasMissedBlock;
      }).reduce(function (sum, slot) {
        return sum.plus(slot.totalForged);
      }, (0, _bigJs.default)(0));
    }
  }]);

  return SlotStore;
}();

exports.default = SlotStore;
(0, _mobx.decorate)(SlotStore, {
  completedSlots: _mobx.observable,
  init: _mobxTask.task,
  missedBlockCount: _mobx.computed,
  processReceivedBlock: _mobx.action,
  remainingSlotCount: _mobx.computed,
  slots: _mobx.computed,
  successfulForgeCount: _mobx.computed,
  totalForgedAmount: _mobx.computed,
  upcomingSlots: _mobx.observable
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
exports.getSlotsFromActiveDelegates = getSlotsFromActiveDelegates;
exports.default = getSlotsFromInitialData;

var _format = __webpack_require__(/*! ../domain/util/format */ "./src/shared/domain/util/format.js");

var _sorters = __webpack_require__(/*! ../domain/util/sorters */ "./src/shared/domain/util/sorters.js");

var _time = __webpack_require__(/*! ../domain/util/time */ "./src/shared/domain/util/time.js");

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var delegateCount = 201;

function createSlotFromBlock(slot, block) {
  var hasMissedBlock = !block || slot.publicKey !== block.generatorPublicKey;
  var blockProps = hasMissedBlock ? {} : {
    totalForged: (0, _format.fromApiString)(block.totalForged)
  };
  return _objectSpread({}, slot, {
    hasMissedBlock: hasMissedBlock
  }, blockProps, {
    hasBeenCompleted: true
  });
}

function completedSlotFromDelegate(slot, delegate, timestamp) {
  var blockProps = slot.hasMissedBlock ? {} : {
    totalForged: (0, _format.fromApiString)(slot.totalForged)
  };
  return _objectSpread({}, basicSlot(slot.roundSlot, delegate, timestamp), {
    hasBeenCompleted: true,
    hasMissedBlock: slot.hasMissedBlock
  }, blockProps);
}

function basicSlot(number, delegate, timestamp) {
  return {
    address: delegate.address,
    hasBeenCompleted: false,
    name: delegate.username,
    number: number,
    publicKey: delegate.publicKey,
    rank: delegate.rate,
    slot: number,
    timestamp: timestamp,
    vote: (0, _format.fromApiString)(delegate.vote)
  };
}

function getSlotsFromActiveDelegates(activeDelegates, lastProcessedTimestamp) {
  var timestamp = (0, _time.nextMsTimestamp)(lastProcessedTimestamp);
  var slotNumber = 1;
  var upcomingSlots = [];
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = activeDelegates.values()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var delegate = _step.value;
      upcomingSlots.push(basicSlot(slotNumber, delegate, timestamp));
      timestamp = (0, _time.nextMsTimestamp)(timestamp);
      slotNumber += 1;
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

  return upcomingSlots;
}

function getSlotsFromInitialData(forgingInfo, blockInfo, delegates) {
  var blocksToProcess = blockInfo.blocks.concat([]);
  var result = {
    blocksToProcess: blocksToProcess,
    hasProcessedAllSlots: false,
    lastProcessedRoundSlot: 0,
    lastProcessedGlobalSlot: forgingInfo.firstSlot - 1,
    lastTimestamp: (0, _time.nextMsTimestamp)((0, _time.fromApiToMs)(blockInfo.endOfLastRoundTimestamp)),
    remainingBlockCount: delegateCount - blocksToProcess.length,
    slots: []
  };

  while (!result.hasProcessedAllSlots || result.remainingBlockCount > 0) {
    result = forgingInfo.forgers.reduce(function (all, forger) {
      var globalSlot = all.lastProcessedGlobalSlot + 1;
      all.hasProcessedAllSlots = globalSlot >= forgingInfo.currentSlot;
      if (all.hasProcessedAllSlots && all.remainingBlockCount === 0) return all;
      var roundSlot = all.lastProcessedRoundSlot + 1;
      var slotTimestamp = (0, _time.nextMsTimestamp)(all.lastTimestamp);
      var slot = basicSlot(roundSlot, delegates.get(forger), slotTimestamp);

      if (!all.hasProcessedAllSlots) {
        var block = all.blocksToProcess[0];
        slot = createSlotFromBlock(slot, block);

        if (!slot.hasMissedBlock) {
          all.blocksToProcess.shift();
        }
      } else {
        all.remainingBlockCount -= 1;
      }

      all.lastProcessedRoundSlot = roundSlot;
      all.lastProcessedGlobalSlot = globalSlot;
      all.lastTimestamp = slotTimestamp;
      all.slots.push(slot);
      return all;
    }, result);
  }

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

/***/ "@material-ui/core/colors/grey":
/*!************************************************!*\
  !*** external "@material-ui/core/colors/grey" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/colors/grey");

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