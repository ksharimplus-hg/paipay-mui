"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getButtonTouchableRippleStyle = exports.getButtonColors = void 0;
var _reactNative = require("react-native");
var _color = _interopRequireDefault(require("color"));
var _colors = require("../../styles/themes/v2/colors");
var _splitStyles = require("../../utils/splitStyles");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const isDark = ({
  dark,
  backgroundColor
}) => {
  if (typeof dark === 'boolean') {
    return dark;
  }
  if (backgroundColor === 'transparent') {
    return false;
  }
  if (backgroundColor !== 'transparent') {
    return !(0, _color.default)(backgroundColor).isLight();
  }
  return false;
};
const getButtonBackgroundColor = ({
  isMode,
  theme,
  disabled,
  customButtonColor
}) => {
  if (customButtonColor && !disabled) {
    return customButtonColor;
  }
  if (theme.isV3) {
    if (disabled) {
      if (isMode('outlined') || isMode('text')) {
        return 'transparent';
      }
      return theme.colors.surfaceDisabled;
    }
    if (isMode('elevated')) {
      return theme.colors.elevation.level1;
    }
    if (isMode('contained')) {
      return theme.colors.primary;
    }
    if (isMode('contained-tonal')) {
      return theme.colors.secondaryContainer;
    }
  }
  if (isMode('contained')) {
    if (disabled) {
      return (0, _color.default)(theme.dark ? _colors.white : _colors.black).alpha(0.12).rgb().string();
    }
    return theme.colors.primary;
  }
  return 'transparent';
};
const getButtonTextColor = ({
  isMode,
  theme,
  disabled,
  customTextColor,
  backgroundColor,
  dark
}) => {
  if (customTextColor && !disabled) {
    return customTextColor;
  }
  if (theme.isV3) {
    if (disabled) {
      return theme.colors.onSurfaceDisabled;
    }
    if (typeof dark === 'boolean') {
      if (isMode('contained') || isMode('contained-tonal') || isMode('elevated')) {
        return isDark({
          dark,
          backgroundColor
        }) ? _colors.white : _colors.black;
      }
    }
    if (isMode('outlined') || isMode('text') || isMode('elevated')) {
      return theme.colors.primary;
    }
    if (isMode('contained')) {
      return theme.colors.onPrimary;
    }
    if (isMode('contained-tonal')) {
      return theme.colors.onSecondaryContainer;
    }
  }
  if (disabled) {
    return (0, _color.default)(theme.dark ? _colors.white : _colors.black).alpha(0.32).rgb().string();
  }
  if (isMode('contained')) {
    return isDark({
      dark,
      backgroundColor
    }) ? _colors.white : _colors.black;
  }
  return theme.colors.primary;
};
const getButtonBorderColor = ({
  isMode,
  disabled,
  theme
}) => {
  if (theme.isV3) {
    if (disabled && isMode('outlined')) {
      return theme.colors.surfaceDisabled;
    }
    if (isMode('outlined')) {
      return theme.colors.outline;
    }
  }
  if (isMode('outlined')) {
    return (0, _color.default)(theme.dark ? _colors.white : _colors.black).alpha(0.29).rgb().string();
  }
  return 'transparent';
};
const getButtonBorderWidth = ({
  isMode,
  theme
}) => {
  if (theme.isV3) {
    if (isMode('outlined')) {
      return 1;
    }
  }
  if (isMode('outlined')) {
    return _reactNative.StyleSheet.hairlineWidth;
  }
  return 0;
};
const getButtonColors = ({
  theme,
  mode,
  customButtonColor,
  customTextColor,
  disabled,
  dark
}) => {
  const isMode = modeToCompare => {
    return mode === modeToCompare;
  };
  const backgroundColor = getButtonBackgroundColor({
    isMode,
    theme,
    disabled,
    customButtonColor
  });
  const textColor = getButtonTextColor({
    isMode,
    theme,
    disabled,
    customTextColor,
    backgroundColor,
    dark
  });
  const borderColor = getButtonBorderColor({
    isMode,
    theme,
    disabled
  });
  const borderWidth = getButtonBorderWidth({
    isMode,
    theme
  });
  return {
    backgroundColor,
    borderColor,
    textColor,
    borderWidth
  };
};
exports.getButtonColors = getButtonColors;
const getButtonTouchableRippleStyle = (style, borderWidth = 0) => {
  if (!style) return {};
  const touchableRippleStyle = {};
  const [, borderRadiusStyles] = (0, _splitStyles.splitStyles)(style, style => style.startsWith('border') && style.endsWith('Radius'));
  Object.keys(borderRadiusStyles).forEach(key => {
    const value = style[key];
    if (typeof value === 'number') {
      // Only subtract borderWidth if value is greater than 0
      const radius = value > 0 ? value - borderWidth : 0;
      touchableRippleStyle[key] = radius;
    }
  });
  return touchableRippleStyle;
};
exports.getButtonTouchableRippleStyle = getButtonTouchableRippleStyle;
//# sourceMappingURL=utils.js.map