"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getSwitchColor = void 0;
var _reactNative = require("react-native");
var _color = _interopRequireDefault(require("color"));
var _colors = require("../../styles/themes/v2/colors");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const getCheckedColor = ({
  theme,
  color
}) => {
  if (color) {
    return color;
  }
  if (theme.isV3) {
    return theme.colors.primary;
  }
  return theme.colors.accent;
};
const getThumbTintColor = ({
  theme,
  disabled,
  value,
  checkedColor
}) => {
  const isIOS = _reactNative.Platform.OS === 'ios';
  if (isIOS) {
    return undefined;
  }
  if (disabled) {
    if (theme.dark) {
      return _colors.grey800;
    }
    return _colors.grey400;
  }
  if (value) {
    return checkedColor;
  }
  if (theme.dark) {
    return _colors.grey400;
  }
  return _colors.grey50;
};
const getOnTintColor = ({
  theme,
  disabled,
  value,
  checkedColor
}) => {
  const isIOS = _reactNative.Platform.OS === 'ios';
  if (isIOS) {
    return checkedColor;
  }
  if (disabled) {
    if (theme.dark) {
      if (theme.isV3) {
        return (0, _color.default)(_colors.white).alpha(0.06).rgb().string();
      }
      return (0, _color.default)(_colors.white).alpha(0.1).rgb().string();
    }
    return (0, _color.default)(_colors.black).alpha(0.12).rgb().string();
  }
  if (value) {
    return (0, _color.default)(checkedColor).alpha(0.5).rgb().string();
  }
  if (theme.dark) {
    return _colors.grey700;
  }
  return 'rgb(178, 175, 177)';
};
const getSwitchColor = ({
  theme,
  disabled,
  value,
  color
}) => {
  const checkedColor = getCheckedColor({
    theme,
    color
  });
  return {
    onTintColor: getOnTintColor({
      theme,
      disabled,
      value,
      checkedColor
    }),
    thumbTintColor: getThumbTintColor({
      theme,
      disabled,
      value,
      checkedColor
    }),
    checkedColor
  };
};
exports.getSwitchColor = getSwitchColor;
//# sourceMappingURL=utils.js.map