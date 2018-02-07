require('source-map-support/register')
module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 20);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(19);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mongoose__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config_json__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__config_json__);




__WEBPACK_IMPORTED_MODULE_0_mongoose___default.a.Promise = global.Promise;

exports.mongoose = __WEBPACK_IMPORTED_MODULE_0_mongoose___default.a;

// 数据库
exports.connect = function () {
  // 连接数据库
  __WEBPACK_IMPORTED_MODULE_0_mongoose___default.a.connect(__WEBPACK_IMPORTED_MODULE_1__config_json___default.a.db);

  // 连接错误
  __WEBPACK_IMPORTED_MODULE_0_mongoose___default.a.connection.on('error', function (error) {
    console.log('数据库连接失败!', error);
  });
  // 连接成功
  __WEBPACK_IMPORTED_MODULE_0_mongoose___default.a.connection.once('open', function () {
    console.log('数据库连接成功!');
  });

  return __WEBPACK_IMPORTED_MODULE_0_mongoose___default.a;
};

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'starter',
    meta: [{ charset: 'utf-8' }, { name: 'viewport', content: 'width=device-width, initial-scale=1' }, { hid: 'description', name: 'description', content: 'Nuxt.js project' }],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
  ** Global CSS
  */
  css: ['~assets/css/main.scss', 'element-ui/lib/theme-chalk/index.css'],
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#3B8070' },
  /*
   ** Build configuration
   */
  vendor: ['element-ui'],
  router: {
    middleware: 'auth'
  },
  build: {
    // babel: {
    //   // plugins: [['component', [{
    //   //   libraryName: 'element-ui',
    //   //   styleLibraryName: 'theme-chalk'
    //   // },
    //   //   'transform-async-to-generator',
    //   //   'transform-runtime'
    //   // ]]]
    // },
    /*
     ** Run ESLINT on save
     */
    postcss: [__webpack_require__(17)(), __webpack_require__(18)(), __webpack_require__(16)()],
    extend: function extend(config, ctx) {
      if (ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        });
      }
      var vueLoader = config.module.rules.find(function (loader) {
        return loader.loader === 'vue-loader';
      });
      vueLoader.options.loaders.sass = 'vue-style-loader!css-loader!sass-loader';
    }
  },
  plugins: [{ src: '~plugins/element-ui' }]
};

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_sunyangyang_Documents_project_tools_node_modules_babel_runtime_regenerator__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_sunyangyang_Documents_project_tools_node_modules_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Users_sunyangyang_Documents_project_tools_node_modules_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_koa_bodyparser__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_koa_bodyparser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_koa_bodyparser__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_koa_mount__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_koa_mount___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_koa_mount__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_koa_session__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_koa_session___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_koa_session__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__router__ = __webpack_require__(9);


var _this = this;

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

// import serve from 'koa-static'




// 假设文件sessionStore.js 文件保存在 core的根目录

/* harmony default export */ exports["a"] = function (app) {
  app.keys = ['some secret hurr'];
  // session 配置信息
  var CONFIG = {
    key: 'koa:sess',
    maxAge: 100000,
    overwrite: true,
    httpOnly: true,
    signed: true,
    rolling: false

    // 以中间件的方式使用session
  };app.use(__WEBPACK_IMPORTED_MODULE_3_koa_session___default()(CONFIG, app));
  // Catch and format the error in the upstream.
  // https://github.com/koajs/koa/wiki/Error-Handling
  app.use(function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_sunyangyang_Documents_project_tools_node_modules_babel_runtime_regenerator___default.a.mark(function _callee(ctx, next) {
      return __WEBPACK_IMPORTED_MODULE_0__Users_sunyangyang_Documents_project_tools_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return next();

            case 3:

              // Handle 404 - throw it as an error.
              if (ctx.status === 404 && ctx.res.headersSent === false) {
                ctx.throw(404);
              }
              // Use this when you want to format the 200 res further.
              // e.g. {"status":200,"data":{"message":"Hello home sample!"}}
              // else, you get, e.g. {"message":"Hello home sample!"}
              if (ctx.status === 200 && ctx.res.headersSent === false) {
                // const session = ctx.session
                // 给session赋值
                // session.userInfo = {
                //   name: 'anziguoer',
                //   email: 'anziguoer@163.com',
                //   age: 28
                // }
                // console.log(12345)
                // console.log(ctx.session)
                console.log('midddleware');
                // if (!ctx.session && !ctx.session.authUser) {
                //   ctx.redirect('/')
                //   console.log(555)
                // } else {
                //   ctx.body = {
                //     status: 200,
                //     data: ctx.body
                //   }
                // }
              }
              _context.next = 13;
              break;

            case 7:
              _context.prev = 7;
              _context.t0 = _context['catch'](0);

              ctx.status = _context.t0.status || 500;

              ctx.type = 'json';
              ctx.body = {
                status: ctx.status,
                message: _context.t0.message
              };

              ctx.app.emit('error', _context.t0, ctx);

            case 13:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this, [[0, 7]]);
    }));

    return function (_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }());

  // app.use(ctx => {
  //   // ignore favicon
  //   if (ctx.path === '/favicon.ico') return

  //   let n = ctx.session.views || 0
  //   ctx.session.views = ++n
  //   ctx.body = n + ' views'
  // })
  // Static files are files that clients download as they are from the server.
  // Create a new directory, public. Koa, by default doesn't allow you to
  // serve static files.
  // https://github.com/koajs/static
  // https://www.tutorialspoint.com/koajs/koajs_static_files.htm
  //   app.use(serve(config.static_dir.root))

  // The parsed body will store in ctx.request.body
  // If nothing was parsed, body will be an empty object {}
  // https://github.com/koajs/bodyparser
  // https://github.com/koajs/koa/issues/719
  app.use(__WEBPACK_IMPORTED_MODULE_1_koa_bodyparser___default()());

  // Add routes by group.
  // const mount = require('koa-mount')
  app.use(__WEBPACK_IMPORTED_MODULE_2_koa_mount___default()('/api', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__router__["a" /* default */])(app)));
};

/***/ },
/* 4 */
/***/ function(module, exports) {

module.exports = require("koa");

/***/ },
/* 5 */
/***/ function(module, exports) {

module.exports = require("nuxt");

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__user_controller__ = __webpack_require__(7);

/* harmony default export */ exports["a"] = { user: __WEBPACK_IMPORTED_MODULE_0__user_controller__["a" /* default */] };

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_sunyangyang_Documents_project_tools_node_modules_babel_runtime_regenerator__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_sunyangyang_Documents_project_tools_node_modules_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Users_sunyangyang_Documents_project_tools_node_modules_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model_user_model__ = __webpack_require__(8);


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var UserController = function () {
  function UserController() {
    _classCallCheck(this, UserController);
  }

  _createClass(UserController, null, [{
    key: 'login',

    // 登录
    value: function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_sunyangyang_Documents_project_tools_node_modules_babel_runtime_regenerator___default.a.mark(function _callee(ctx) {
        var _ctx$request$body, username, password, user;

        return __WEBPACK_IMPORTED_MODULE_0__Users_sunyangyang_Documents_project_tools_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _ctx$request$body = ctx.request.body, username = _ctx$request$body.username, password = _ctx$request$body.password;
                _context.next = 3;
                return __WEBPACK_IMPORTED_MODULE_1__model_user_model__["a" /* default */].findOne({ 'username': username, 'password': password }, function (err, doc) {
                  if (err) {
                    console.log('错误');
                  }
                });

              case 3:
                user = _context.sent;

                if (user) {
                  // 数据库存在用户名密码，设置session，返回用户名
                  ctx.session.authUser = { username: user.username };
                  ctx.body = {
                    username: user.username,
                    login: true
                  };
                } else {
                  ctx.body = {
                    message: '用户名密码错误',
                    login: false
                  };
                }

              case 5:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function login(_x) {
        return _ref.apply(this, arguments);
      }

      return login;
    }()
    // 登出

  }, {
    key: 'logout',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_sunyangyang_Documents_project_tools_node_modules_babel_runtime_regenerator___default.a.mark(function _callee2(ctx) {
        return __WEBPACK_IMPORTED_MODULE_0__Users_sunyangyang_Documents_project_tools_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                delete ctx.session.authUser;
                ctx.body = {
                  login: false
                };

              case 2:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function logout(_x2) {
        return _ref2.apply(this, arguments);
      }

      return logout;
    }()
  }]);

  return UserController;
}();

/* harmony default export */ exports["a"] = UserController;

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mongodb__ = __webpack_require__(1);


var userSchema = new __WEBPACK_IMPORTED_MODULE_0__mongodb__["mongoose"].Schema({

  // 名字
  username: { type: String, default: '' },

  // 密码
  password: {
    type: String,
    default: ''
    //  crypto.createHash('md5').update(config.AUTH.defaultPassword).digest('hex')
  }
});

var User = __WEBPACK_IMPORTED_MODULE_0__mongodb__["mongoose"].model('user', userSchema, 'user');
/* harmony default export */ exports["a"] = User;

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_sunyangyang_Documents_project_tools_node_modules_babel_runtime_regenerator__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_sunyangyang_Documents_project_tools_node_modules_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Users_sunyangyang_Documents_project_tools_node_modules_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_koa_router__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_koa_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_koa_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__controller__ = __webpack_require__(6);


var _this = this;

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }



var router = new __WEBPACK_IMPORTED_MODULE_1_koa_router___default.a();
var middleware3 = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_sunyangyang_Documents_project_tools_node_modules_babel_runtime_regenerator___default.a.mark(function _callee(ctx, next) {
    return __WEBPACK_IMPORTED_MODULE_0__Users_sunyangyang_Documents_project_tools_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            console.log('Time: ', Date.now());
            _context.next = 3;
            return next();

          case 3:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, _this);
  }));

  return function middleware3(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

var middleware1 = function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_sunyangyang_Documents_project_tools_node_modules_babel_runtime_regenerator___default.a.mark(function _callee2(ctx, next) {
    return __WEBPACK_IMPORTED_MODULE_0__Users_sunyangyang_Documents_project_tools_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            console.log("I'll be logged first. ");
            _context2.next = 3;
            return next();

          case 3:
            console.log("I'll be logged last. ");

          case 4:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, _this);
  }));

  return function middleware1(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

var middleware2 = function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_sunyangyang_Documents_project_tools_node_modules_babel_runtime_regenerator___default.a.mark(function _callee3(ctx, next) {
    return __WEBPACK_IMPORTED_MODULE_0__Users_sunyangyang_Documents_project_tools_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            console.log("I'll be logged second. ");
            _context3.next = 3;
            return next();

          case 3:
            console.log("I'll be logged third. ");

          case 4:
          case 'end':
            return _context3.stop();
        }
      }
    }, _callee3, _this);
  }));

  return function middleware2(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

// Dummy users.
var users = [{ name: 'Alexandre' }, { name: 'Pooya' }, { name: 'Sébastien' }];

/* harmony default export */ exports["a"] = function (app) {
  // Home page.
  router.get('/', middleware1, middleware2, middleware3, function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_sunyangyang_Documents_project_tools_node_modules_babel_runtime_regenerator___default.a.mark(function _callee4(ctx, next) {
      return __WEBPACK_IMPORTED_MODULE_0__Users_sunyangyang_Documents_project_tools_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              ctx.type = 'json';
              ctx.body = {
                message: 'Hello World!'
              };

            case 2:
            case 'end':
              return _context4.stop();
          }
        }
      }, _callee4, _this);
    }));

    return function (_x7, _x8) {
      return _ref4.apply(this, arguments);
    };
  }());

  // Get all users.
  router.get('/users', function () {
    var _ref5 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_sunyangyang_Documents_project_tools_node_modules_babel_runtime_regenerator___default.a.mark(function _callee5(ctx, next) {
      return __WEBPACK_IMPORTED_MODULE_0__Users_sunyangyang_Documents_project_tools_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              ctx.type = 'json';
              ctx.body = users;

            case 2:
            case 'end':
              return _context5.stop();
          }
        }
      }, _callee5, _this);
    }));

    return function (_x9, _x10) {
      return _ref5.apply(this, arguments);
    };
  }());

  // Get the user by id.
  router.get('/users/:id', function () {
    var _ref6 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_sunyangyang_Documents_project_tools_node_modules_babel_runtime_regenerator___default.a.mark(function _callee6(ctx, next) {
      var id;
      return __WEBPACK_IMPORTED_MODULE_0__Users_sunyangyang_Documents_project_tools_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              id = parseInt(ctx.params.id);

              console.log(users[id]);
              if (id >= 0 && id < users.length) {
                ctx.body = users[id];
              } else {
                ctx.throw(404);
              }

            case 3:
            case 'end':
              return _context6.stop();
          }
        }
      }, _callee6, _this);
    }));

    return function (_x11, _x12) {
      return _ref6.apply(this, arguments);
    };
  }());

  router.post('/logout', __WEBPACK_IMPORTED_MODULE_2__controller__["a" /* default */].user.logout);
  router.post('/login', __WEBPACK_IMPORTED_MODULE_2__controller__["a" /* default */].user.login);

  return router.middleware();
};

/***/ },
/* 10 */
/***/ function(module, exports) {

module.exports = {"db":"mongodb://47.100.161.144:27017/des"}

/***/ },
/* 11 */
/***/ function(module, exports) {

module.exports = require("koa-bodyparser");

/***/ },
/* 12 */
/***/ function(module, exports) {

module.exports = require("koa-mount");

/***/ },
/* 13 */
/***/ function(module, exports) {

module.exports = require("koa-router");

/***/ },
/* 14 */
/***/ function(module, exports) {

module.exports = require("koa-session");

/***/ },
/* 15 */
/***/ function(module, exports) {

module.exports = require("mongoose");

/***/ },
/* 16 */
/***/ function(module, exports) {

module.exports = require("postcss-hexrgba");

/***/ },
/* 17 */
/***/ function(module, exports) {

module.exports = require("postcss-nested");

/***/ },
/* 18 */
/***/ function(module, exports) {

module.exports = require("postcss-responsive-type");

/***/ },
/* 19 */
/***/ function(module, exports) {

module.exports = require("regenerator-runtime");

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_sunyangyang_Documents_project_tools_node_modules_babel_runtime_regenerator__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_sunyangyang_Documents_project_tools_node_modules_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Users_sunyangyang_Documents_project_tools_node_modules_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_koa__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_koa___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_koa__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_nuxt__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_nuxt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_nuxt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__middlewares__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mongodb__ = __webpack_require__(1);


var start = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_sunyangyang_Documents_project_tools_node_modules_babel_runtime_regenerator___default.a.mark(function _callee2() {
    var _this = this;

    var app, host, port, config, nuxt, builder;
    return __WEBPACK_IMPORTED_MODULE_0__Users_sunyangyang_Documents_project_tools_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            app = new __WEBPACK_IMPORTED_MODULE_1_koa___default.a();
            host = process.env.HOST || '127.0.0.1';
            port = process.env.PORT || 3000;

            // Import and Set Nuxt.js options

            config = __webpack_require__(2);

            config.dev = !(app.env === 'production');

            // Instantiate nuxt.js
            nuxt = new __WEBPACK_IMPORTED_MODULE_2_nuxt__["Nuxt"](config);
            // Build in development

            if (!config.dev) {
              _context2.next = 10;
              break;
            }

            builder = new __WEBPACK_IMPORTED_MODULE_2_nuxt__["Builder"](nuxt);
            _context2.next = 10;
            return builder.build();

          case 10:
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__middlewares__["a" /* default */])(app);
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__mongodb__["connect"])();
            app.use(function () {
              var _ref2 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_sunyangyang_Documents_project_tools_node_modules_babel_runtime_regenerator___default.a.mark(function _callee(ctx, next) {
                return __WEBPACK_IMPORTED_MODULE_0__Users_sunyangyang_Documents_project_tools_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        _context.next = 2;
                        return next();

                      case 2:
                        ctx.status = 200; // koa defaults to 404 when it sees that status is unset
                        ctx.req.session = ctx.session;
                        return _context.abrupt('return', new Promise(function (resolve, reject) {
                          ctx.res.on('close', resolve);
                          ctx.res.on('finish', resolve);
                          nuxt.render(ctx.req, ctx.res, function (promise) {
                            // nuxt.render passes a rejected promise into callback on error.
                            promise.then(resolve).catch(reject);
                          });
                        }));

                      case 5:
                      case 'end':
                        return _context.stop();
                    }
                  }
                }, _callee, _this);
              }));

              return function (_x, _x2) {
                return _ref2.apply(this, arguments);
              };
            }());

            app.listen(port, host);
            console.log('Server listening on ' + host + ':' + port); // eslint-disable-line no-console

          case 15:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));

  return function start() {
    return _ref.apply(this, arguments);
  };
}();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }






start();

/***/ }
/******/ ]);
//# sourceMappingURL=main.map