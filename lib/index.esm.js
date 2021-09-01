import 'regenerator-runtime/runtime.js';
import 'core-js/modules/es.object.assign.js';
import 'core-js/modules/es.date.now.js';
import 'core-js/modules/es.date.to-string.js';
import 'core-js/modules/es.object.to-string.js';
import 'core-js/modules/es.promise.js';
import 'core-js/modules/es.array.splice.js';
import 'core-js/modules/es.promise.finally.js';
import 'core-js/modules/es.array.find-index.js';
import axios from 'axios';
import getRandomStr from 'js-cool/lib/getRandomStr';

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

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

/**
 * axios封装
 *
 * @return {*}
 */

function AxiosQueue() {
  return {
    queue: {},
    $axios: null,
    create: function create(options, config) {
      var _this = this;

      if (options === void 0) {
        options = {
          url: ''
        };
      }

      if (config === void 0) {
        config = {};
      }

      var _Object$assign = Object.assign(Object.assign({}, config), options),
          _Object$assign$unique = _Object$assign.unique,
          unique = _Object$assign$unique === void 0 ? false : _Object$assign$unique,
          setHeaders = _Object$assign.setHeaders,
          onRequest = _Object$assign.onRequest,
          onRequestError = _Object$assign.onRequestError,
          onResponse = _Object$assign.onResponse,
          onResponseError = _Object$assign.onResponseError,
          onError = _Object$assign.onError,
          onCancel = _Object$assign.onCancel;

      var promiseKey = getRandomStr(6) + '_' + Date.now();
      var source = axios.CancelToken.source();
      options.cancelToken = source.token;
      var promise = new Promise(function (resolve, reject) {
        return __awaiter(_this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
          var _this2 = this;

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

                  for (_iterator = _createForOfIteratorHelperLoose(this.queue[options.url] || []); !(_step = _iterator()).done;) {
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
                  })["finally"](function () {
                    var index = _this2.queue[options.url].findIndex(function (el) {
                      return el.promiseKey === promiseKey;
                    });

                    index > -1 && _this2.queue[options.url].splice(index, 1);
                  });

                case 21:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, this, [[9, 14]]);
        }));
      });
      if (!this.queue[options.url]) this.queue[options.url] = [];
      this.queue[options.url].push({
        promiseKey: promiseKey,
        promise: promise,
        source: source
      });
      return promise;
    }
  };
}

var index = AxiosQueue();

export { index as default };
