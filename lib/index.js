'use strict';

require('regenerator-runtime/runtime.js');
require('core-js/modules/es.object.assign.js');
require('core-js/modules/es.date.now.js');
require('core-js/modules/es.date.to-string.js');
require('core-js/modules/es.object.to-string.js');
require('core-js/modules/es.promise.js');
require('core-js/modules/es.array.splice.js');
require('core-js/modules/es.promise.finally.js');
require('core-js/modules/es.array.find-index.js');

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _createForOfIteratorHelperLoose(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (it) return (it = it.call(o)).next.bind(it);

  if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
    if (it) o = it;
    var i = 0;
    return function () {
      if (i >= o.length) return {
        done: true
      };
      return {
        done: false,
        value: o[i++]
      };
    };
  }

  throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

var axios = require('axios');

var getRandomStr = require('js-cool/lib/getRandomStr');

var AxiosQueue = {
  queue: {},
  $axios: null,
  create: function create(options, config) {
    var _this = this;

    if (options === void 0) {
      options = {};
    }

    if (config === void 0) {
      config = {};
    }

    var _config$options = Object.assign({}, config, options);
        _config$options.retry;
        _config$options.interval;
        _config$options.maxConnections;
        var _config$options$uniqu = _config$options.unique,
        unique = _config$options$uniqu === void 0 ? false : _config$options$uniqu,
        setHeaders = _config$options.setHeaders,
        onRequest = _config$options.onRequest,
        onRequestError = _config$options.onRequestError,
        onResponse = _config$options.onResponse,
        onResponseError = _config$options.onResponseError,
        onError = _config$options.onError,
        onCancel = _config$options.onCancel;

    var promiseKey = getRandomStr(6) + '_' + Date.now();
    var source = axios.CancelToken.source();
    options.cancelToken = source.token;
    var promise = new Promise( /*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(resolve, reject) {
        var instance, processing, _iterator, _step, request, len;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                instance = axios.create();
                processing = []; // 设置请求头

                setHeaders && setHeaders(instance); // 添加一个请求拦截器

                onRequest && instance.interceptors.request.use(onRequest, function (err) {
                  onRequestError && onRequestError(err);
                  onError && onError(err);
                  return Promise.reject(err);
                }); // 添加一个响应拦截器

                onResponse && instance.interceptors.response.use(onResponse, function (err) {
                  onResponseError && onResponseError(err);
                  onError && onError(err);
                  return Promise.reject(err);
                }); // 需要等待的队列

                for (_iterator = _createForOfIteratorHelperLoose(_this.queue[options.url] || []); !(_step = _iterator()).done;) {
                  request = _step.value;

                  if (unique) {
                    request.source.cancel('request canceled');
                  } else {
                    processing.push(request.promise);
                  }
                }

                if (!(processing.length > 0)) {
                  _context.next = 20;
                  break;
                }

                len = processing.length;

              case 8:
                if (!(len > 0)) {
                  _context.next = 20;
                  break;
                }

                _context.prev = 9;
                _context.next = 12;
                return processing[len];

              case 12:
                _context.next = 17;
                break;

              case 14:
                _context.prev = 14;
                _context.t0 = _context["catch"](9);
                processing.splice(len, 1);

              case 17:
                len--;
                _context.next = 8;
                break;

              case 20:
                // 执行
                instance(options).then(function (res) {
                  // 成功回调
                  resolve(res);
                })["catch"](function (err) {
                  if (axios.isCancel(err)) {
                    // 请求取消
                    onCancel && onCancel(err);
                  } else {
                    // 失败回调
                    reject(err);
                  }
                })["finally"](function (res) {
                  var index = _this.queue[options.url].findIndex(function (el) {
                    return el.promiseKey === promiseKey;
                  });

                  index > -1 && _this.queue[options.url].splice(index, 1);
                });

              case 21:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[9, 14]]);
      }));

      return function (_x, _x2) {
        return _ref.apply(this, arguments);
      };
    }());
    if (!this.queue[options.url]) this.queue[options.url] = [];
    this.queue[options.url].push({
      promiseKey: promiseKey,
      promise: promise,
      source: source
    });
    return promise;
  }
};
module.exports = AxiosQueue;
