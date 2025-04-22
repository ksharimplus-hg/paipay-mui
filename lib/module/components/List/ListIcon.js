import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { withInternalTheme } from '../../core/theming';
import Icon from '../Icon';
const ListIcon = _ref => {
  let {
    icon,
    color: iconColor,
    style,
    size,
    theme
  } = _ref;
  return /*#__PURE__*/React.createElement(View, {
    style: [theme.isV3 ? styles.itemV3 : styles.item, style],
    pointerEvents: "box-none"
  }, /*#__PURE__*/React.createElement(Icon, {
    source: icon,
    size: size || 12,
    color: iconColor
  }));
};
const styles = StyleSheet.create({
  item: {
    margin: 8,
    height: 40,
    width: 40,
    alignItems: 'center',
    justifyContent: 'center'
  },
  itemV3: {
    alignItems: 'center',
    justifyContent: 'center'
  }
});
ListIcon.displayName = 'List.Icon';
export default withInternalTheme(ListIcon);
//# sourceMappingURL=ListIcon.js.map