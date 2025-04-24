"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var React = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
var _attachment = _interopRequireDefault(require("../../assets/attachment.png"));
var _theming = require("../../core/theming");
var _index = require("../../index");
var _Chip = _interopRequireDefault(require("../Chip/Chip"));
var _TouchableRipple = _interopRequireDefault(require("../TouchableRipple/TouchableRipple"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
const ListTransaction = _ref => {
  let {
    key,
    date,
    time,
    direction,
    right,
    amount,
    balance,
    balanceTitle,
    description,
    onPress,
    theme,
    style,
    amountNumberOfLines = 1,
    descriptionNumberOfLines = 2,
    amountEllipsizeMode,
    descriptionEllipsizeMode,
    receiptAttached,
    receiptOnClick,
    attachmentTitle,
    descriptionStyle,
    amountStyle,
    balanceStyle,
    dateStyle,
    timeStyle,
    attachStyle,
    fullStyle = [],
    ...rest
  } = _ref;
  return /*#__PURE__*/React.createElement(_TouchableRipple.default, _extends({
    key: key
  }, rest, {
    style: [_index.vis.w100, _index.vis.rowRl, _index.vis.fc, _index.vis.ac, _index.vis.mb2, ...fullStyle],
    onPress: onPress
  }), /*#__PURE__*/React.createElement(_reactNative.View, {
    style: [_index.vis.w90, _index.vis.col, _index.vis.sb, _index.vis.ac, {
      borderBottomWidth: 0.2,
      borderBottomColor: 'gray'
    }]
  }, /*#__PURE__*/React.createElement(_reactNative.View, {
    style: [_index.vis.w90, _index.vis.rowRl, _index.vis.sb, _index.vis.ac]
  }, /*#__PURE__*/React.createElement(_reactNative.View, {
    style: [_index.vis.w30, _index.vis.col, _index.vis.sb, _index.vis.asRl]
  }, /*#__PURE__*/React.createElement(_reactNative.Text, {
    style: timeStyle
  }, balance), /*#__PURE__*/React.createElement(_reactNative.Text, {
    style: balanceStyle
  }, balanceTitle)), /*#__PURE__*/React.createElement(_reactNative.View, {
    style: [_index.vis.w30, _index.vis.col, _index.vis.sb, _index.vis.aeRl]
  }, /*#__PURE__*/React.createElement(_reactNative.Text, {
    style: timeStyle
  }, time), /*#__PURE__*/React.createElement(_reactNative.Text, {
    style: dateStyle
  }, date))), /*#__PURE__*/React.createElement(_reactNative.View, {
    style: [_index.vis.w75, _index.vis.col, _index.vis.feRl, _index.vis.ac, !receiptAttached && _index.vis.pb2]
  }, /*#__PURE__*/React.createElement(_reactNative.Text, {
    style: [amountStyle, _index.vis.fos4, _index.vis.mb1]
  }, amount), /*#__PURE__*/React.createElement(_reactNative.Text, {
    style: descriptionStyle
  }, description)), receiptAttached && /*#__PURE__*/React.createElement(_reactNative.View, {
    style: [_index.vis.w75, _index.vis.col, _index.vis.feRl, _index.vis.fc, _index.vis.ac, _index.vis.mt2, _index.vis.mb2]
  }, /*#__PURE__*/React.createElement(_Chip.default, {
    icon: _attachment.default,
    onPress: receiptOnClick,
    style: [{
      height: 40
    }],
    mode: 'outlined'
  }, attachmentTitle))));
};
ListTransaction.displayName = 'List.Transaction';
var _default = (0, _theming.withInternalTheme)(ListTransaction);
exports.default = _default;
//# sourceMappingURL=ListTransaction.js.map