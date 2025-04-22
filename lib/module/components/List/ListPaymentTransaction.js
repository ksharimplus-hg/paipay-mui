function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from 'react';
import { View, Text } from 'react-native';
import { withInternalTheme } from '../../core/theming';
import { vis } from '../../index';
import TouchableRipple from '../TouchableRipple/TouchableRipple';
const ListPaymentTransaction = _ref => {
  let {
    transactions,
    ...rest
  } = _ref;
  return /*#__PURE__*/React.createElement(TouchableRipple, _extends({}, rest, {
    style: [vis.w100, vis.rowRl, vis.fc, vis.ac, vis.mb5],
    onPress: () => console.log('')
  }), /*#__PURE__*/React.createElement(View, {
    style: [vis.w75, vis.col, vis.sb, vis.ac]
  }, transactions.length && transactions.map(tran => /*#__PURE__*/React.createElement(View, {
    key: String(tran.amount),
    style: [vis.w75, vis.rowRl, vis.sb, vis.ac]
  }, /*#__PURE__*/React.createElement(View, {
    style: [vis.w30, vis.col, vis.h40p, vis.sb, vis.asRl]
  }, /*#__PURE__*/React.createElement(Text, null, tran.amount)), /*#__PURE__*/React.createElement(View, {
    style: [vis.w45, vis.col, vis.h40p, vis.sb, vis.aeRl]
  }, /*#__PURE__*/React.createElement(Text, null, tran.product))))));
};
ListPaymentTransaction.displayName = 'List.LastTransaction';
export default withInternalTheme(ListPaymentTransaction);
//# sourceMappingURL=ListPaymentTransaction.js.map