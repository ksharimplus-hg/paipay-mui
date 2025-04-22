"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var React = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
var _theming = require("../../core/theming");
var _index = require("../../index");
var _TouchableRipple = _interopRequireDefault(require("../TouchableRipple/TouchableRipple"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
const ListPaymentTransaction = _ref => {
  let {
    transactions,
    ...rest
  } = _ref;
  return /*#__PURE__*/React.createElement(_TouchableRipple.default, _extends({}, rest, {
    style: [_index.vis.w100, _index.vis.rowRl, _index.vis.fc, _index.vis.ac, _index.vis.mb5],
    onPress: () => console.log('')
  }), /*#__PURE__*/React.createElement(_reactNative.View, {
    style: [_index.vis.w75, _index.vis.col, _index.vis.sb, _index.vis.ac]
  }, transactions.length && transactions.map(tran => /*#__PURE__*/React.createElement(_reactNative.View, {
    key: String(tran.amount),
    style: [_index.vis.w75, _index.vis.rowRl, _index.vis.sb, _index.vis.ac]
  }, /*#__PURE__*/React.createElement(_reactNative.View, {
    style: [_index.vis.w30, _index.vis.col, _index.vis.h40p, _index.vis.sb, _index.vis.asRl]
  }, /*#__PURE__*/React.createElement(_reactNative.Text, null, tran.amount)), /*#__PURE__*/React.createElement(_reactNative.View, {
    style: [_index.vis.w45, _index.vis.col, _index.vis.h40p, _index.vis.sb, _index.vis.aeRl]
  }, /*#__PURE__*/React.createElement(_reactNative.Text, null, tran.product))))));
};
ListPaymentTransaction.displayName = 'List.LastTransaction';
var _default = (0, _theming.withInternalTheme)(ListPaymentTransaction);
exports.default = _default;
//# sourceMappingURL=ListPaymentTransaction.js.map