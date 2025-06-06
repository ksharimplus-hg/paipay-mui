"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var React = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
var _theming = require("../../core/theming");
var _Badge = _interopRequireDefault(require("../Badge"));
var _Icon = _interopRequireDefault(require("../Icon"));
var _Text = _interopRequireDefault(require("../Typography/Text"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
const badgeSize = 8;
const iconSize = 24;
const itemSize = 56;
const outlineHeight = 32;

/**
 * Note: Available in v5.x with theme version 3
 *
 * Collapsed component used to show an action item with an icon and optionally label in a navigation drawer.
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { Drawer } from 'react-native-paper';
 *
 * const MyComponent = () => (
 *    <Drawer.CollapsedItem
 *      focusedIcon="inbox"
 *      unfocusedIcon="inbox-outline"
 *      label="Inbox"
 *    />
 * );
 *
 * export default MyComponent;
 * ```
 */
const DrawerCollapsedItem = ({
  focusedIcon,
  unfocusedIcon,
  label,
  active,
  theme: themeOverrides,
  style,
  onPress,
  disabled,
  accessibilityLabel,
  badge = false,
  testID = 'drawer-collapsed-item',
  labelMaxFontSizeMultiplier,
  ...rest
}) => {
  const theme = (0, _theming.useInternalTheme)(themeOverrides);
  const {
    isV3
  } = theme;
  const {
    scale
  } = theme.animation;
  const [numOfLines, setNumOfLines] = React.useState(1);
  const {
    current: animScale
  } = React.useRef(new _reactNative.Animated.Value(active ? 1 : 0.5));
  React.useEffect(() => {
    if (!active) {
      animScale.setValue(0.5);
    }
  }, [animScale, active]);
  if (!isV3) {
    return null;
  }
  const handlePressOut = () => {
    _reactNative.Animated.timing(animScale, {
      toValue: 1,
      duration: 150 * scale,
      useNativeDriver: true
    }).start();
  };
  const iconPadding = ((!label ? itemSize : outlineHeight) - iconSize) / 2;
  const backgroundColor = active ? theme.colors.secondaryContainer : 'transparent';
  const labelColor = active ? theme.colors.onSurface : theme.colors.onSurfaceVariant;
  const iconColor = active ? theme.colors.onSecondaryContainer : theme.colors.onSurfaceVariant;
  const onTextLayout = ({
    nativeEvent
  }) => {
    setNumOfLines(nativeEvent.lines.length);
  };

  // Label is cut off on Android, when centered "labelMedium" text
  // has more than 4 lines, so there is a need to decrease the letter spacing.
  const androidLetterSpacingStyle = _reactNative.Platform.OS === 'android' && numOfLines > 4 && styles.letterSpacing;
  const labelTextStyle = {
    color: labelColor,
    ...(isV3 ? theme.fonts.labelMedium : {})
  };
  const icon = !active && unfocusedIcon !== undefined ? unfocusedIcon : focusedIcon;
  return /*#__PURE__*/React.createElement(_reactNative.View, rest, /*#__PURE__*/React.createElement(_reactNative.Pressable, {
    onPress: onPress,
    onPressOut: onPress ? handlePressOut : undefined,
    disabled: disabled
    // @ts-expect-error We keep old a11y props for backwards compat with old RN versions
    ,
    accessibilityTraits: active ? ['button', 'selected'] : 'button',
    accessibilityComponentType: "button",
    accessibilityRole: "button",
    accessibilityState: {
      selected: active
    },
    accessibilityLabel: accessibilityLabel,
    testID: testID
  }, /*#__PURE__*/React.createElement(_reactNative.View, {
    style: styles.wrapper
  }, /*#__PURE__*/React.createElement(_reactNative.Animated.View, {
    style: [styles.outline, !label && styles.roundedOutline, {
      transform: [label ? {
        scaleX: animScale
      } : {
        scale: animScale
      }],
      backgroundColor
    }, style],
    testID: `${testID}-outline`
  }), /*#__PURE__*/React.createElement(_reactNative.View, {
    style: [styles.icon, {
      top: iconPadding
    }],
    testID: `${testID}-container`
  }, badge !== false && /*#__PURE__*/React.createElement(_reactNative.View, {
    style: styles.badgeContainer
  }, typeof badge === 'boolean' ? /*#__PURE__*/React.createElement(_Badge.default, {
    visible: badge,
    size: badgeSize
  }) : /*#__PURE__*/React.createElement(_Badge.default, {
    visible: badge != null,
    size: 2 * badgeSize
  }, badge)), /*#__PURE__*/React.createElement(_Icon.default, {
    source: icon,
    size: iconSize,
    color: iconColor
  })), label ? /*#__PURE__*/React.createElement(_Text.default, {
    variant: "labelMedium",
    selectable: false,
    numberOfLines: 2,
    onTextLayout: onTextLayout,
    style: [styles.label, androidLetterSpacingStyle, labelTextStyle],
    maxFontSizeMultiplier: labelMaxFontSizeMultiplier
  }, label) : null)));
};
DrawerCollapsedItem.displayName = 'Drawer.CollapsedItem';
const styles = _reactNative.StyleSheet.create({
  wrapper: {
    width: 80,
    marginBottom: 12,
    minHeight: itemSize,
    alignItems: 'center'
  },
  outline: {
    width: itemSize,
    height: outlineHeight,
    borderRadius: itemSize / 2,
    alignItems: 'center',
    justifyContent: 'center'
  },
  roundedOutline: {
    height: itemSize
  },
  icon: {
    position: 'absolute'
  },
  letterSpacing: {
    letterSpacing: 0.3,
    alignSelf: 'stretch'
  },
  label: {
    marginHorizontal: 12,
    marginTop: 4,
    textAlign: 'center'
  },
  badgeContainer: {
    position: 'absolute',
    left: 20,
    bottom: 20,
    zIndex: 2
  }
});
var _default = exports.default = DrawerCollapsedItem;
//# sourceMappingURL=DrawerCollapsedItem.js.map