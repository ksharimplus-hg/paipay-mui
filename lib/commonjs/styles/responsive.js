"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.widthPercentageToDP = exports.heightPercentageToDP = void 0;
var _reactNative = require("react-native");
let screenWidth = _reactNative.Dimensions.get('window').width;
let screenHeight = _reactNative.Dimensions.get('window').height;
const widthPercentageToDP = widthPercent => {
  const elemWidth = typeof widthPercent === 'number' ? widthPercent : parseFloat(widthPercent);
  return _reactNative.PixelRatio.roundToNearestPixel(screenWidth * elemWidth / 100);
};
exports.widthPercentageToDP = widthPercentageToDP;
const heightPercentageToDP = heightPercent => {
  const elemHeight = typeof heightPercent === 'number' ? heightPercent : parseFloat(heightPercent);
  return _reactNative.PixelRatio.roundToNearestPixel(screenHeight * elemHeight / 100);
};
exports.heightPercentageToDP = heightPercentageToDP;
//# sourceMappingURL=responsive.js.map