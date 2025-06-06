"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getSegmentedButtonDensityPadding = exports.getSegmentedButtonColors = exports.getSegmentedButtonBorderRadius = exports.getDisabledSegmentedButtonStyle = void 0;
var _reactNative = require("react-native");
var _color = _interopRequireDefault(require("color"));
var _colors = require("../../styles/themes/v2/colors");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const DEFAULT_PADDING = 9;
const getSegmentedButtonDensityPadding = ({
  density
}) => {
  let padding = DEFAULT_PADDING;
  switch (density) {
    case 'small':
      return padding - 2;
    case 'medium':
      return padding - 4;
    case 'high':
      return padding - 8;
    default:
      return padding;
  }
};
exports.getSegmentedButtonDensityPadding = getSegmentedButtonDensityPadding;
const getDisabledSegmentedButtonStyle = ({
  theme,
  index,
  buttons
}) => {
  var _buttons$index, _buttons;
  const width = getSegmentedButtonBorderWidth({
    theme
  });
  const isDisabled = (_buttons$index = buttons[index]) === null || _buttons$index === void 0 ? void 0 : _buttons$index.disabled;
  const isNextDisabled = (_buttons = buttons[index + 1]) === null || _buttons === void 0 ? void 0 : _buttons.disabled;
  if (!isDisabled && isNextDisabled) {
    return {
      borderRightWidth: width
    };
  }
  return {};
};
exports.getDisabledSegmentedButtonStyle = getDisabledSegmentedButtonStyle;
const getSegmentedButtonBorderRadius = ({
  segment,
  theme
}) => {
  if (segment === 'first') {
    return {
      borderTopRightRadius: 0,
      borderBottomRightRadius: 0,
      ...(theme.isV3 && {
        borderEndWidth: 0
      })
    };
  } else if (segment === 'last') {
    return {
      borderTopLeftRadius: 0,
      borderBottomLeftRadius: 0
    };
  } else {
    return {
      borderRadius: 0,
      ...(theme.isV3 && {
        borderEndWidth: 0
      })
    };
  }
};
exports.getSegmentedButtonBorderRadius = getSegmentedButtonBorderRadius;
const getSegmentedButtonBackgroundColor = ({
  checked,
  theme
}) => {
  if (checked) {
    if (theme.isV3) {
      return theme.colors.secondaryContainer;
    } else {
      return (0, _color.default)(theme.colors.primary).alpha(0.12).rgb().string();
    }
  }
  return 'transparent';
};
const getSegmentedButtonBorderColor = ({
  theme,
  disabled,
  checked
}) => {
  if (theme.isV3) {
    if (disabled) {
      return theme.colors.surfaceDisabled;
    }
    return theme.colors.outline;
  }
  if (checked) {
    return theme.colors.primary;
  }
  return (0, _color.default)(theme.dark ? _colors.white : _colors.black).alpha(0.29).rgb().string();
};
const getSegmentedButtonBorderWidth = ({
  theme
}) => {
  if (theme.isV3) {
    return 1;
  }
  return _reactNative.StyleSheet.hairlineWidth;
};
const getSegmentedButtonTextColor = ({
  theme,
  disabled,
  checked,
  checkedColor,
  uncheckedColor
}) => {
  if (theme.isV3) {
    if (disabled) {
      return theme.colors.onSurfaceDisabled;
    }
    if (checked) {
      return checkedColor ?? theme.colors.onSecondaryContainer;
    }
    return uncheckedColor ?? theme.colors.onSurface;
  }
  if (disabled) {
    return theme.colors.disabled;
  }
  // Primary color is used for checked state too.
  return theme.colors.primary;
};
const getSegmentedButtonColors = ({
  theme,
  disabled,
  checked,
  checkedColor,
  uncheckedColor
}) => {
  const backgroundColor = getSegmentedButtonBackgroundColor({
    theme,
    checked
  });
  const borderColor = getSegmentedButtonBorderColor({
    theme,
    disabled,
    checked
  });
  const textColor = getSegmentedButtonTextColor({
    theme,
    disabled,
    checked,
    checkedColor,
    uncheckedColor
  });
  const borderWidth = getSegmentedButtonBorderWidth({
    theme
  });
  return {
    backgroundColor,
    borderColor,
    textColor,
    borderWidth
  };
};
exports.getSegmentedButtonColors = getSegmentedButtonColors;
//# sourceMappingURL=utils.js.map