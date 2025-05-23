"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = overlay;
exports.isAnimatedValue = void 0;
var _reactNative = require("react-native");
var _color = _interopRequireDefault(require("color"));
var _DarkTheme = require("./themes/v2/DarkTheme");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const isAnimatedValue = it => it instanceof _reactNative.Animated.Value;
exports.isAnimatedValue = isAnimatedValue;
function overlay(elevation, surfaceColor = (_MD2DarkTheme$colors => (_MD2DarkTheme$colors = _DarkTheme.MD2DarkTheme.colors) === null || _MD2DarkTheme$colors === void 0 ? void 0 : _MD2DarkTheme$colors.surface)()) {
  if (isAnimatedValue(elevation)) {
    const inputRange = [0, 1, 2, 3, 8, 24];

    // @ts-expect-error: TS doesn't seem to refine the type correctly
    return elevation.interpolate({
      inputRange,
      outputRange: inputRange.map(elevation => {
        return calculateColor(surfaceColor, elevation);
      })
    });
  }

  // @ts-expect-error: TS doesn't seem to refine the type correctly
  return calculateColor(surfaceColor, elevation);
}
function calculateColor(surfaceColor, elevation = 1) {
  let overlayTransparency;
  if (elevation >= 1 && elevation <= 24) {
    overlayTransparency = elevationOverlayTransparency[elevation];
  } else if (elevation > 24) {
    overlayTransparency = elevationOverlayTransparency[24];
  } else {
    overlayTransparency = elevationOverlayTransparency[1];
  }
  return (0, _color.default)(surfaceColor).mix((0, _color.default)('white'), overlayTransparency * 0.01).hex();
}
const elevationOverlayTransparency = {
  1: 5,
  2: 7,
  3: 8,
  4: 9,
  5: 10,
  6: 11,
  7: 11.5,
  8: 12,
  9: 12.5,
  10: 13,
  11: 13.5,
  12: 14,
  13: 14.25,
  14: 14.5,
  15: 14.75,
  16: 15,
  17: 15.12,
  18: 15.24,
  19: 15.36,
  20: 15.48,
  21: 15.6,
  22: 15.72,
  23: 15.84,
  24: 16
};
//# sourceMappingURL=overlay.js.map