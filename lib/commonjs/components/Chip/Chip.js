"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var React = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
var _useLatestCallback = _interopRequireDefault(require("use-latest-callback"));
var _helpers = require("./helpers");
var _theming = require("../../core/theming");
var _colors = require("../../styles/themes/v2/colors");
var _hasTouchHandler = _interopRequireDefault(require("../../utils/hasTouchHandler"));
var _Icon = _interopRequireDefault(require("../Icon"));
var _MaterialCommunityIcon = _interopRequireDefault(require("../MaterialCommunityIcon"));
var _Surface = _interopRequireDefault(require("../Surface"));
var _TouchableRipple = _interopRequireDefault(require("../TouchableRipple/TouchableRipple"));
var _Text = _interopRequireDefault(require("../Typography/Text"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Chips are compact elements that can represent inputs, attributes, or actions.
 * They can have an icon or avatar on the left, and a close button icon on the right.
 * They are typically used to:
 * <ul>
 *  <li>Present multiple options </li>
 *  <li>Represent attributes active or chosen </li>
 *  <li>Present filter options </li>
 *  <li>Trigger actions related to primary content </li>
 * </ul>
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { Chip } from 'react-native-paper';
 *
 * const MyComponent = () => (
 *   <Chip icon="information" onPress={() => console.log('Pressed')}>Example Chip</Chip>
 * );
 *
 * export default MyComponent;
 * ```
 */
const Chip = ({
  mode = 'flat',
  children,
  icon,
  avatar,
  selected = false,
  disabled = false,
  background,
  accessibilityLabel,
  accessibilityRole = 'button',
  closeIconAccessibilityLabel = 'Close',
  onPress,
  onLongPress,
  onPressOut,
  onPressIn,
  delayLongPress,
  onClose,
  closeIcon,
  textStyle,
  style,
  theme: themeOverrides,
  testID = 'chip',
  selectedColor,
  rippleColor: customRippleColor,
  showSelectedOverlay = false,
  showSelectedCheck = true,
  ellipsizeMode,
  compact,
  elevated = false,
  maxFontSizeMultiplier,
  hitSlop,
  ...rest
}) => {
  const theme = (0, _theming.useInternalTheme)(themeOverrides);
  const {
    isV3,
    roundness
  } = theme;
  const isWeb = _reactNative.Platform.OS === 'web';
  const {
    current: elevation
  } = React.useRef(new _reactNative.Animated.Value(isV3 && elevated ? 1 : 0));
  const hasPassedTouchHandler = (0, _hasTouchHandler.default)({
    onPress,
    onLongPress,
    onPressIn,
    onPressOut
  });
  const isOutlined = mode === 'outlined';
  const handlePressIn = (0, _useLatestCallback.default)(e => {
    const {
      scale
    } = theme.animation;
    onPressIn === null || onPressIn === void 0 || onPressIn(e);
    _reactNative.Animated.timing(elevation, {
      toValue: isV3 ? elevated ? 2 : 0 : 4,
      duration: 200 * scale,
      useNativeDriver: isWeb || _reactNative.Platform.constants.reactNativeVersion.minor <= 72
    }).start();
  });
  const handlePressOut = (0, _useLatestCallback.default)(e => {
    const {
      scale
    } = theme.animation;
    onPressOut === null || onPressOut === void 0 || onPressOut(e);
    _reactNative.Animated.timing(elevation, {
      toValue: isV3 && elevated ? 1 : 0,
      duration: 150 * scale,
      useNativeDriver: isWeb || _reactNative.Platform.constants.reactNativeVersion.minor <= 72
    }).start();
  });
  const opacity = isV3 ? 0.38 : 0.26;
  const defaultBorderRadius = roundness * (isV3 ? 2 : 4);
  const iconSize = isV3 ? 18 : 16;
  const {
    backgroundColor: customBackgroundColor,
    borderRadius = defaultBorderRadius
  } = _reactNative.StyleSheet.flatten(style) || {};
  const {
    borderColor,
    textColor,
    iconColor,
    rippleColor,
    selectedBackgroundColor,
    backgroundColor
  } = (0, _helpers.getChipColors)({
    isOutlined,
    theme,
    selectedColor,
    showSelectedOverlay,
    customBackgroundColor,
    disabled,
    customRippleColor
  });
  const accessibilityState = {
    selected,
    disabled
  };
  const elevationStyle = isV3 || _reactNative.Platform.OS === 'android' ? elevation : 0;
  const multiplier = isV3 ? compact ? 1.5 : 2 : 1;
  const labelSpacings = {
    marginRight: onClose ? 0 : 8 * multiplier,
    marginLeft: avatar || icon || selected && showSelectedCheck ? 4 * multiplier : 8 * multiplier
  };
  const contentSpacings = {
    paddingRight: isV3 ? onClose ? 34 : 0 : onClose ? 32 : 4
  };
  const labelTextStyle = {
    color: textColor,
    ...(isV3 ? theme.fonts.labelLarge : theme.fonts.regular)
  };
  return /*#__PURE__*/React.createElement(_Surface.default, _extends({
    style: [styles.container, isV3 && styles.md3Container, !theme.isV3 && {
      elevation: elevationStyle
    }, {
      backgroundColor: selected ? selectedBackgroundColor : backgroundColor,
      borderColor,
      borderRadius
    }, style]
  }, theme.isV3 && {
    elevation: elevationStyle
  }, rest, {
    testID: `${testID}-container`,
    theme: theme,
    container: true
  }), /*#__PURE__*/React.createElement(_TouchableRipple.default, {
    borderless: true,
    background: background,
    style: [{
      borderRadius
    }, styles.touchable],
    onPress: onPress,
    onLongPress: onLongPress,
    onPressIn: hasPassedTouchHandler ? handlePressIn : undefined,
    onPressOut: hasPassedTouchHandler ? handlePressOut : undefined,
    delayLongPress: delayLongPress,
    rippleColor: rippleColor,
    disabled: disabled,
    accessibilityLabel: accessibilityLabel,
    accessibilityRole: accessibilityRole,
    accessibilityState: accessibilityState,
    testID: testID,
    theme: theme,
    hitSlop: hitSlop
  }, /*#__PURE__*/React.createElement(_reactNative.View, {
    style: [styles.content, isV3 && styles.md3Content, contentSpacings]
  }, avatar && !icon ? /*#__PURE__*/React.createElement(_reactNative.View, {
    style: [styles.avatarWrapper, isV3 && styles.md3AvatarWrapper, disabled && {
      opacity
    }]
  }, /*#__PURE__*/React.isValidElement(avatar) ? /*#__PURE__*/React.cloneElement(avatar, {
    style: [styles.avatar, avatar.props.style]
  }) : avatar) : null, icon || selected && showSelectedCheck ? /*#__PURE__*/React.createElement(_reactNative.View, {
    style: [styles.icon, isV3 && styles.md3Icon, avatar ? [styles.avatar, styles.avatarSelected, isV3 && selected && styles.md3SelectedIcon] : null]
  }, icon ? /*#__PURE__*/React.createElement(_Icon.default, {
    source: icon,
    color: avatar ? _colors.white : !disabled && theme.isV3 ? theme.colors.primary : iconColor,
    size: 18,
    theme: theme
  }) : /*#__PURE__*/React.createElement(_MaterialCommunityIcon.default, {
    name: "check",
    color: avatar ? _colors.white : iconColor,
    size: 18,
    direction: "ltr"
  })) : null, /*#__PURE__*/React.createElement(_Text.default, {
    variant: "labelLarge",
    selectable: false,
    numberOfLines: 1,
    style: [isV3 ? styles.md3LabelText : styles.labelText, labelTextStyle, labelSpacings, textStyle],
    ellipsizeMode: ellipsizeMode,
    maxFontSizeMultiplier: maxFontSizeMultiplier
  }, children))), onClose ? /*#__PURE__*/React.createElement(_reactNative.View, {
    style: styles.closeButtonStyle
  }, /*#__PURE__*/React.createElement(_reactNative.Pressable, {
    onPress: onClose,
    disabled: disabled,
    accessibilityRole: "button",
    accessibilityLabel: closeIconAccessibilityLabel
  }, /*#__PURE__*/React.createElement(_reactNative.View, {
    style: [styles.icon, styles.closeIcon, isV3 && styles.md3CloseIcon]
  }, closeIcon ? /*#__PURE__*/React.createElement(_Icon.default, {
    source: closeIcon,
    color: iconColor,
    size: iconSize
  }) : /*#__PURE__*/React.createElement(_MaterialCommunityIcon.default, {
    name: isV3 ? 'close' : 'close-circle',
    size: iconSize,
    color: iconColor,
    direction: "ltr"
  })))) : null);
};
const styles = _reactNative.StyleSheet.create({
  container: {
    borderWidth: _reactNative.StyleSheet.hairlineWidth,
    borderStyle: 'solid',
    flexDirection: _reactNative.Platform.select({
      default: 'column',
      web: 'row'
    })
  },
  md3Container: {
    borderWidth: 1
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 4,
    position: 'relative'
  },
  md3Content: {
    paddingLeft: 0
  },
  icon: {
    padding: 4,
    alignSelf: 'center'
  },
  md3Icon: {
    paddingLeft: 8,
    paddingRight: 0
  },
  closeIcon: {
    marginRight: 4
  },
  md3CloseIcon: {
    marginRight: 8,
    padding: 0
  },
  labelText: {
    minHeight: 24,
    lineHeight: 24,
    textAlignVertical: 'center',
    marginVertical: 4
  },
  md3LabelText: {
    textAlignVertical: 'center',
    marginVertical: 6
  },
  avatar: {
    width: 24,
    height: 24,
    borderRadius: 12
  },
  avatarWrapper: {
    marginRight: 4
  },
  md3AvatarWrapper: {
    marginLeft: 4,
    marginRight: 0
  },
  md3SelectedIcon: {
    paddingLeft: 4
  },
  // eslint-disable-next-line react-native/no-color-literals
  avatarSelected: {
    position: 'absolute',
    top: 4,
    left: 4,
    backgroundColor: 'rgba(0, 0, 0, .29)'
  },
  closeButtonStyle: {
    position: 'absolute',
    right: 0,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  touchable: {
    width: '100%'
  }
});
var _default = exports.default = Chip;
//# sourceMappingURL=Chip.js.map