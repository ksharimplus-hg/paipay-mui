"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.TextInputAffix = exports.AffixAdornment = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
var _enums = require("./enums");
var _utils = require("./utils");
var _theming = require("../../../core/theming");
var _helpers = require("../helpers");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const AffixContext = /*#__PURE__*/_react.default.createContext({
  textStyle: {
    fontFamily: '',
    color: ''
  },
  topPosition: null,
  side: _enums.AdornmentSide.Left
});
const AffixAdornment = ({
  affix,
  side,
  textStyle,
  topPosition,
  onLayout,
  visible,
  paddingHorizontal,
  maxFontSizeMultiplier,
  testID,
  disabled
}) => {
  return /*#__PURE__*/_react.default.createElement(AffixContext.Provider, {
    value: {
      side,
      textStyle,
      topPosition,
      onLayout,
      visible,
      paddingHorizontal,
      maxFontSizeMultiplier,
      testID,
      disabled
    }
  }, affix);
};

/**
 * A component to render a leading / trailing text in the TextInput
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { TextInput } from 'react-native-paper';
 *
 * const MyComponent = () => {
 *   const [text, setText] = React.useState('');
 *
 *   return (
 *     <TextInput
 *       mode="outlined"
 *       label="Outlined input"
 *       placeholder="Type something"
 *       right={<TextInput.Affix text="/100" />}
 *     />
 *   );
 * };
 *
 * export default MyComponent;
 * ```
 */
exports.AffixAdornment = AffixAdornment;
const TextInputAffix = ({
  text,
  textStyle: labelStyle,
  theme: themeOverrides,
  onLayout: onTextLayout,
  onPress,
  accessibilityLabel = text
}) => {
  const theme = (0, _theming.useInternalTheme)(themeOverrides);
  const {
    AFFIX_OFFSET
  } = (0, _helpers.getConstants)(theme.isV3);
  const {
    textStyle,
    onLayout,
    topPosition,
    side,
    visible,
    paddingHorizontal,
    maxFontSizeMultiplier,
    testID,
    disabled
  } = _react.default.useContext(AffixContext);
  const offset = typeof paddingHorizontal === 'number' ? paddingHorizontal : AFFIX_OFFSET;
  const style = {
    top: topPosition,
    [side]: offset
  };
  const textColor = (0, _utils.getTextColor)({
    theme,
    disabled
  });
  const content = /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    maxFontSizeMultiplier: maxFontSizeMultiplier,
    style: [{
      color: textColor
    }, textStyle, labelStyle],
    onLayout: onTextLayout,
    testID: `${testID}-text`
  }, text);
  return /*#__PURE__*/_react.default.createElement(_reactNative.Animated.View, {
    style: [styles.container, style, {
      opacity: (visible === null || visible === void 0 ? void 0 : visible.interpolate({
        inputRange: [0, 1],
        outputRange: [1, 0]
      })) || 1
    }],
    onLayout: onLayout,
    testID: testID
  }, onPress ? /*#__PURE__*/_react.default.createElement(_reactNative.Pressable, {
    onPress: onPress,
    accessibilityRole: "button",
    accessibilityLabel: accessibilityLabel
  }, content) : content);
};
exports.TextInputAffix = TextInputAffix;
TextInputAffix.displayName = 'TextInput.Affix';
const styles = _reactNative.StyleSheet.create({
  container: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center'
  }
});
var _default = exports.default = TextInputAffix; // @component-docs ignore-next-line
//# sourceMappingURL=TextInputAffix.js.map