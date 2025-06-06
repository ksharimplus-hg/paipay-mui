"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var React = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
var _theming = require("../core/theming");
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const DURATION = 2400;

/**
 * Activity indicator is used to present progress of some activity in the app.
 * It can be used as a drop-in replacement for the ActivityIndicator shipped with React Native.
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { ActivityIndicator, MD2Colors } from 'react-native-paper';
 *
 * const MyComponent = () => (
 *   <ActivityIndicator animating={true} color={MD2Colors.red800} />
 * );
 *
 * export default MyComponent;
 * ```
 */
const ActivityIndicator = ({
  animating = true,
  color: indicatorColor,
  hidesWhenStopped = true,
  size: indicatorSize = 'small',
  style,
  theme: themeOverrides,
  ...rest
}) => {
  var _theme$colors;
  const theme = (0, _theming.useInternalTheme)(themeOverrides);
  const {
    current: timer
  } = React.useRef(new _reactNative.Animated.Value(0));
  const {
    current: fade
  } = React.useRef(new _reactNative.Animated.Value(!animating && hidesWhenStopped ? 0 : 1));
  const rotation = React.useRef(undefined);
  const {
    animation: {
      scale
    }
  } = theme;
  const startRotation = React.useCallback(() => {
    // Show indicator
    _reactNative.Animated.timing(fade, {
      duration: 200 * scale,
      toValue: 1,
      isInteraction: false,
      useNativeDriver: true
    }).start();

    // Circular animation in loop
    if (rotation.current) {
      timer.setValue(0);
      // $FlowFixMe
      _reactNative.Animated.loop(rotation.current).start();
    }
  }, [scale, fade, timer]);
  const stopRotation = () => {
    if (rotation.current) {
      rotation.current.stop();
    }
  };
  React.useEffect(() => {
    if (rotation.current === undefined) {
      // Circular animation in loop
      rotation.current = _reactNative.Animated.timing(timer, {
        duration: DURATION,
        easing: _reactNative.Easing.linear,
        // Animated.loop does not work if useNativeDriver is true on web
        useNativeDriver: _reactNative.Platform.OS !== 'web',
        toValue: 1,
        isInteraction: false
      });
    }
    if (animating) {
      startRotation();
    } else if (hidesWhenStopped) {
      // Hide indicator first and then stop rotation
      _reactNative.Animated.timing(fade, {
        duration: 200 * scale,
        toValue: 0,
        useNativeDriver: true,
        isInteraction: false
      }).start(stopRotation);
    } else {
      stopRotation();
    }
  }, [animating, fade, hidesWhenStopped, startRotation, scale, timer]);
  const color = indicatorColor || ((_theme$colors = theme.colors) === null || _theme$colors === void 0 ? void 0 : _theme$colors.primary);
  const size = typeof indicatorSize === 'string' ? indicatorSize === 'small' ? 24 : 48 : indicatorSize ? indicatorSize : 24;
  const frames = 60 * DURATION / 1000;
  const easing = _reactNative.Easing.bezier(0.4, 0.0, 0.7, 1.0);
  const containerStyle = {
    width: size,
    height: size / 2,
    overflow: 'hidden'
  };
  return /*#__PURE__*/React.createElement(_reactNative.View, _extends({
    style: [styles.container, style]
  }, rest, {
    accessible: true,
    accessibilityRole: "progressbar",
    accessibilityState: {
      busy: animating
    }
  }), /*#__PURE__*/React.createElement(_reactNative.Animated.View, {
    style: [{
      width: size,
      height: size,
      opacity: fade
    }],
    collapsable: false
  }, [0, 1].map(index => {
    // Thanks to https://github.com/n4kz/react-native-indicators for the great work
    const inputRange = Array.from(new Array(frames), (_, frameIndex) => frameIndex / (frames - 1));
    const outputRange = Array.from(new Array(frames), (_, frameIndex) => {
      let progress = 2 * frameIndex / (frames - 1);
      const rotation = index ? +(360 - 15) : -(180 - 15);
      if (progress > 1.0) {
        progress = 2.0 - progress;
      }
      const direction = index ? -1 : +1;
      return `${direction * (180 - 30) * easing(progress) + rotation}deg`;
    });
    const layerStyle = {
      width: size,
      height: size,
      transform: [{
        rotate: timer.interpolate({
          inputRange: [0, 1],
          outputRange: [`${0 + 30 + 15}deg`, `${2 * 360 + 30 + 15}deg`]
        })
      }]
    };
    const viewportStyle = {
      width: size,
      height: size,
      transform: [{
        translateY: index ? -size / 2 : 0
      }, {
        rotate: timer.interpolate({
          inputRange,
          outputRange
        })
      }]
    };
    const offsetStyle = index ? {
      top: size / 2
    } : null;
    const lineStyle = {
      width: size,
      height: size,
      borderColor: color,
      borderWidth: size / 10,
      borderRadius: size / 2
    };
    return /*#__PURE__*/React.createElement(_reactNative.Animated.View, {
      key: index,
      style: [styles.layer]
    }, /*#__PURE__*/React.createElement(_reactNative.Animated.View, {
      style: layerStyle
    }, /*#__PURE__*/React.createElement(_reactNative.Animated.View, {
      style: [containerStyle, offsetStyle],
      collapsable: false
    }, /*#__PURE__*/React.createElement(_reactNative.Animated.View, {
      style: viewportStyle
    }, /*#__PURE__*/React.createElement(_reactNative.Animated.View, {
      style: containerStyle,
      collapsable: false
    }, /*#__PURE__*/React.createElement(_reactNative.Animated.View, {
      style: lineStyle
    }))))));
  })));
};
const styles = _reactNative.StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  layer: {
    ..._reactNative.StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
var _default = exports.default = ActivityIndicator;
//# sourceMappingURL=ActivityIndicator.js.map