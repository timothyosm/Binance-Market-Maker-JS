"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WithdrawStatus = exports.DepositStatus = exports.CandleChartInterval = exports.ErrorCodes = exports.default = void 0;

var _httpClient = _interopRequireDefault(require("./http-client"));

var _websocket = _interopRequireDefault(require("./websocket"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _default = function _default() {
  var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return _objectSpread({}, (0, _httpClient.default)(opts), {
    ws: (0, _websocket.default)(opts)
  });
};

exports.default = _default;
var ErrorCodes = {
  UNKNOWN: -1000,
  DISCONNECTED: -1001,
  UNAUTHORIZED: -1002,
  TOO_MANY_REQUESTS: -1003,
  UNEXPECTED_RESP: -1006,
  TIMEOUT: -1007,
  INVALID_MESSAGE: -1013,
  UNKNOWN_ORDER_COMPOSITION: -1014,
  TOO_MANY_ORDERS: -1015,
  SERVICE_SHUTTING_DOWN: -1016,
  UNSUPPORTED_OPERATION: -1020,
  INVALID_TIMESTAMP: -1021,
  INVALID_SIGNATURE: -1022,
  ILLEGAL_CHARS: -1100,
  TOO_MANY_PARAMETERS: -1101,
  MANDATORY_PARAM_EMPTY_OR_MALFORMED: -1102,
  // eslint-disable-line id-length
  UNKNOWN_PARAM: -1103,
  UNREAD_PARAMETERS: -1104,
  PARAM_EMPTY: -1105,
  PARAM_NOT_REQUIRED: -1106,
  NO_DEPTH: -1112,
  TIF_NOT_REQUIRED: -1114,
  INVALID_TIF: -1115,
  INVALID_ORDER_TYPE: -1116,
  INVALID_SIDE: -1117,
  EMPTY_NEW_CL_ORD_ID: -1118,
  EMPTY_ORG_CL_ORD_ID: -1119,
  BAD_INTERVAL: -1120,
  BAD_SYMBOL: -1121,
  INVALID_LISTEN_KEY: -1125,
  MORE_THAN_XX_HOURS: -1127,
  OPTIONAL_PARAMS_BAD_COMBO: -1128,
  INVALID_PARAMETER: -1130,
  BAD_API_ID: -2008,
  DUPLICATE_API_KEY_DESC: -2009,
  INSUFFICIENT_BALANCE: -2010,
  CANCEL_ALL_FAIL: -2012,
  NO_SUCH_ORDER: -2013,
  BAD_API_KEY_FMT: -2014,
  REJECTED_MBX_KEY: -2015
};
exports.ErrorCodes = ErrorCodes;
var CandleChartInterval = {
  ONE_MINUTE: '1m',
  THREE_MINUTES: '3m',
  FIVE_MINUTES: '5m',
  FIFTEEN_MINUTES: '15m',
  THIRTY_MINUTES: '30m',
  ONE_HOUR: '1h',
  TWO_HOURS: '2h',
  FOUR_HOURS: '4h',
  SIX_HOURS: '6h',
  EIGHT_HOURS: '8h',
  TWELVE_HOURS: '12h',
  ONE_DAY: '1d',
  THREE_DAYS: '3d',
  ONE_WEEK: '1w',
  ONE_MONTH: '1M'
};
exports.CandleChartInterval = CandleChartInterval;
var DepositStatus = {
  PENDING: 0,
  SUCCESS: 1
};
exports.DepositStatus = DepositStatus;
var WithdrawStatus = {
  EMAIL_SENT: 0,
  CANCELLED: 1,
  AWAITING_APPROVAL: 2,
  REJECTED: 3,
  PROCESSING: 4,
  FAILURE: 5,
  COMPLETED: 6
};
exports.WithdrawStatus = WithdrawStatus;