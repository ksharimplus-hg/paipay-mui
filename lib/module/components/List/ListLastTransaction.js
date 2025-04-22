function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from 'react';
import { View, Text } from 'react-native';
import { withInternalTheme } from '../../core/theming';
import { vis } from '../../index';
import TouchableRipple from '../TouchableRipple/TouchableRipple';
const ListLastTransaction = _ref => {
  let {
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
    descriptionStyle,
    amountStyle,
    balanceStyle,
    dateStyle,
    timeStyle,
    contentStyle,
    ...rest
  } = _ref;
  return /*#__PURE__*/React.createElement(TouchableRipple, _extends({}, rest, {
    style: [vis.w100, vis.rowRl, vis.fc, vis.ac, vis.mb5],
    onPress: onPress
  }), /*#__PURE__*/React.createElement(View, {
    style: [vis.w90, vis.col, vis.sb, vis.ac, {
      borderBottomWidth: 0.2,
      borderBottomColor: 'gray'
    }]
  }, /*#__PURE__*/React.createElement(View, {
    style: [vis.w90, vis.rowRl, vis.sb, vis.ac, contentStyle]
  }, /*#__PURE__*/React.createElement(View, {
    style: [vis.w30, vis.col, vis.sb, vis.asRl]
  }, /*#__PURE__*/React.createElement(Text, {
    style: timeStyle
  }, balance), /*#__PURE__*/React.createElement(Text, {
    style: balanceStyle
  }, balanceTitle)), /*#__PURE__*/React.createElement(View, {
    style: [vis.w20, vis.col, vis.sb, vis.aeRl]
  }, /*#__PURE__*/React.createElement(Text, {
    style: timeStyle
  }, time), /*#__PURE__*/React.createElement(Text, {
    style: dateStyle
  }, date))), /*#__PURE__*/React.createElement(View, {
    style: [vis.w75, vis.col, vis.feRl, vis.ac, vis.pb2]
  }, /*#__PURE__*/React.createElement(Text, {
    style: [amountStyle, vis.fos4, vis.mb1]
  }, amount), /*#__PURE__*/React.createElement(Text, {
    style: descriptionStyle
  }, description))));
};
ListLastTransaction.displayName = 'List.LastTransaction';
export default withInternalTheme(ListLastTransaction);
//# sourceMappingURL=ListLastTransaction.js.map