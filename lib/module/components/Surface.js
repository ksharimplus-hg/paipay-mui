function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from 'react';
import { Animated, Platform, StyleSheet } from 'react-native';
import { useInternalTheme } from '../core/theming';
import overlay, { isAnimatedValue } from '../styles/overlay';
import shadow from '../styles/shadow';
import { forwardRef } from '../utils/forwardRef';
import { splitStyles } from '../utils/splitStyles';
const MD2Surface = forwardRef(({
  style,
  theme: overrideTheme,
  ...rest
}, ref) => {
  const {
    elevation = 4
  } = StyleSheet.flatten(style) || {};
  const {
    dark: isDarkTheme,
    mode,
    colors
  } = useInternalTheme(overrideTheme);
  return /*#__PURE__*/React.createElement(Animated.View, _extends({
    ref: ref
  }, rest, {
    style: [{
      backgroundColor: isDarkTheme && mode === 'adaptive' ? overlay(elevation, colors === null || colors === void 0 ? void 0 : colors.surface) : colors === null || colors === void 0 ? void 0 : colors.surface
    }, elevation ? shadow(elevation) : null, style]
  }));
});
const outerLayerStyleProperties = ['position', 'alignSelf', 'top', 'right', 'bottom', 'left', 'start', 'end', 'flex', 'flexShrink', 'flexGrow', 'width', 'height', 'transform', 'opacity'];
const shadowColor = '#000';
const iOSShadowOutputRanges = [{
  shadowOpacity: 0.15,
  height: [0, 1, 2, 4, 6, 8],
  shadowRadius: [0, 3, 6, 8, 10, 12]
}, {
  shadowOpacity: 0.3,
  height: [0, 1, 1, 1, 2, 4],
  shadowRadius: [0, 1, 2, 3, 3, 4]
}];
const inputRange = [0, 1, 2, 3, 4, 5];
function getStyleForShadowLayer(elevation, layer) {
  if (isAnimatedValue(elevation)) {
    return {
      shadowColor,
      shadowOpacity: elevation.interpolate({
        inputRange: [0, 1],
        outputRange: [0, iOSShadowOutputRanges[layer].shadowOpacity],
        extrapolate: 'clamp'
      }),
      shadowOffset: {
        width: 0,
        height: elevation.interpolate({
          inputRange,
          outputRange: iOSShadowOutputRanges[layer].height
        })
      },
      shadowRadius: elevation.interpolate({
        inputRange,
        outputRange: iOSShadowOutputRanges[layer].shadowRadius
      })
    };
  }
  return {
    shadowColor,
    shadowOpacity: elevation ? iOSShadowOutputRanges[layer].shadowOpacity : 0,
    shadowOffset: {
      width: 0,
      height: iOSShadowOutputRanges[layer].height[elevation]
    },
    shadowRadius: iOSShadowOutputRanges[layer].shadowRadius[elevation]
  };
}
const SurfaceIOS = forwardRef(({
  elevation,
  style,
  backgroundColor,
  testID,
  children,
  mode = 'elevated',
  container,
  ...props
}, ref) => {
  const [outerLayerViewStyles, innerLayerViewStyles] = React.useMemo(() => {
    const flattenedStyles = StyleSheet.flatten(style) || {};
    const [filteredStyles, outerLayerStyles, borderRadiusStyles] = splitStyles(flattenedStyles, style => outerLayerStyleProperties.includes(style) || style.startsWith('margin'), style => style.startsWith('border') && style.endsWith('Radius'));
    if (process.env.NODE_ENV !== 'production' && filteredStyles.overflow === 'hidden' && elevation !== 0) {
      console.warn('When setting overflow to hidden on Surface the shadow will not be displayed correctly. Wrap the content of your component in a separate View with the overflow style.');
    }
    const bgColor = flattenedStyles.backgroundColor || backgroundColor;
    const isElevated = mode === 'elevated';
    const outerLayerViewStyles = {
      ...(isElevated && getStyleForShadowLayer(elevation, 0)),
      ...outerLayerStyles,
      ...borderRadiusStyles,
      backgroundColor: bgColor
    };
    const innerLayerViewStyles = {
      ...(isElevated && getStyleForShadowLayer(elevation, 1)),
      ...filteredStyles,
      ...borderRadiusStyles,
      flex: flattenedStyles.height || !container && flattenedStyles.flex ? 1 : undefined,
      backgroundColor: bgColor
    };
    return [outerLayerViewStyles, innerLayerViewStyles];
  }, [style, elevation, backgroundColor, mode, container]);
  return /*#__PURE__*/React.createElement(Animated.View, {
    ref: ref,
    style: outerLayerViewStyles,
    testID: `${testID}-outer-layer`
  }, /*#__PURE__*/React.createElement(Animated.View, _extends({}, props, {
    style: innerLayerViewStyles,
    testID: testID
  }), children));
});

/**
 * Surface is a basic container that can give depth to an element with elevation shadow.
 * On dark theme with `adaptive` mode, surface is constructed by also placing a semi-transparent white overlay over a component surface.
 * See [Dark Theme](https://callstack.github.io/react-native-paper/docs/guides/theming#dark-theme) for more information.
 * Overlay and shadow can be applied by specifying the `elevation` property both on Android and iOS.
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { Surface, Text } from 'react-native-paper';
 * import { StyleSheet } from 'react-native';
 *
 * const MyComponent = () => (
 *   <Surface style={styles.surface} elevation={4}>
 *      <Text>Surface</Text>
 *   </Surface>
 * );
 *
 * export default MyComponent;
 *
 * const styles = StyleSheet.create({
 *   surface: {
 *     padding: 8,
 *     height: 80,
 *     width: 80,
 *     alignItems: 'center',
 *     justifyContent: 'center',
 *   },
 * });
 * ```
 */
const Surface = forwardRef(({
  elevation = 1,
  children,
  theme: overridenTheme,
  style,
  testID = 'surface',
  mode = 'elevated',
  ...props
}, ref) => {
  const theme = useInternalTheme(overridenTheme);
  if (!theme.isV3) return /*#__PURE__*/React.createElement(MD2Surface, _extends({}, props, {
    theme: theme,
    style: style,
    ref: ref
  }), children);
  const {
    colors
  } = theme;
  const inputRange = [0, 1, 2, 3, 4, 5];
  const backgroundColor = (_colors$elevation2 => {
    if (isAnimatedValue(elevation)) {
      return elevation.interpolate({
        inputRange,
        outputRange: inputRange.map(elevation => {
          var _colors$elevation;
          return (_colors$elevation = colors.elevation) === null || _colors$elevation === void 0 ? void 0 : _colors$elevation[`level${elevation}`];
        })
      });
    }
    return (_colors$elevation2 = colors.elevation) === null || _colors$elevation2 === void 0 ? void 0 : _colors$elevation2[`level${elevation}`];
  })();
  const isElevated = mode === 'elevated';
  if (Platform.OS === 'web') {
    const {
      pointerEvents = 'auto'
    } = props;
    return /*#__PURE__*/React.createElement(Animated.View, _extends({}, props, {
      pointerEvents: pointerEvents,
      ref: ref,
      testID: testID,
      style: [{
        backgroundColor
      }, elevation && isElevated ? shadow(elevation, theme.isV3) : null, style]
    }), children);
  }
  if (Platform.OS === 'android') {
    const elevationLevel = [0, 3, 6, 9, 12, 15];
    const getElevationAndroid = () => {
      if (isAnimatedValue(elevation)) {
        return elevation.interpolate({
          inputRange,
          outputRange: elevationLevel
        });
      }
      return elevationLevel[elevation];
    };
    const {
      margin,
      padding,
      transform,
      borderRadius
    } = StyleSheet.flatten(style) || {};
    const outerLayerStyles = {
      margin,
      padding,
      transform,
      borderRadius
    };
    const sharedStyle = [{
      backgroundColor
    }, style];
    return /*#__PURE__*/React.createElement(Animated.View, _extends({}, props, {
      testID: testID,
      ref: ref,
      style: [{
        backgroundColor,
        transform
      }, outerLayerStyles, sharedStyle, isElevated && {
        elevation: getElevationAndroid()
      }]
    }), children);
  }
  return /*#__PURE__*/React.createElement(SurfaceIOS, _extends({}, props, {
    ref: ref,
    elevation: elevation,
    backgroundColor: backgroundColor,
    style: style,
    testID: testID,
    mode: mode
  }), children);
});
export default Surface;
//# sourceMappingURL=Surface.js.map