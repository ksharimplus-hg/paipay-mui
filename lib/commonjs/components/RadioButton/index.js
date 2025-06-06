"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _RadioButton = _interopRequireDefault(require("./RadioButton"));
var _RadioButtonAndroid = _interopRequireDefault(require("./RadioButtonAndroid"));
var _RadioButtonGroup = _interopRequireDefault(require("./RadioButtonGroup"));
var _RadioButtonIOS = _interopRequireDefault(require("./RadioButtonIOS"));
var _RadioButtonItem = _interopRequireDefault(require("./RadioButtonItem"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const RadioButton = Object.assign(
// @component ./RadioButton.tsx
_RadioButton.default, {
  // @component ./RadioButtonGroup.tsx
  Group: _RadioButtonGroup.default,
  // @component ./RadioButtonAndroid.tsx
  Android: _RadioButtonAndroid.default,
  // @component ./RadioButtonIOS.tsx
  IOS: _RadioButtonIOS.default,
  // @component ./RadioButtonItem.tsx
  Item: _RadioButtonItem.default
});
var _default = exports.default = RadioButton;
//# sourceMappingURL=index.js.map