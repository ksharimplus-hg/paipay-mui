"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var React = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
var _TextInputAffix = _interopRequireDefault(require("./Adornment/TextInputAffix"));
var _TextInputIcon = _interopRequireDefault(require("./Adornment/TextInputIcon"));
var _TextInputFlat = _interopRequireDefault(require("./TextInputFlat"));
var _TextInputOutlined = _interopRequireDefault(require("./TextInputOutlined"));
var _theming = require("../../core/theming");
var _forwardRef = require("../../utils/forwardRef");
var _roundLayoutSize = require("../../utils/roundLayoutSize");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const BLUR_ANIMATION_DURATION = 180;
const FOCUS_ANIMATION_DURATION = 150;
const DefaultRenderer = props => /*#__PURE__*/React.createElement(_reactNative.TextInput, props);

/**
 * A component to allow users to input text.
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { TextInput } from 'react-native-paper';
 *
 * const MyComponent = () => {
 *   const [text, setText] = React.useState("");
 *
 *   return (
 *     <TextInput
 *       label="Email"
 *       value={text}
 *       onChangeText={text => setText(text)}
 *     />
 *   );
 * };
 *
 * export default MyComponent;
 * ```
 *
 * @extends TextInput props https://reactnative.dev/docs/textinput#props
 */
const TextInput = (0, _forwardRef.forwardRef)(({
  mode = 'flat',
  dense = false,
  disabled = false,
  error: errorProp = false,
  multiline = false,
  editable = true,
  contentStyle,
  render = DefaultRenderer,
  theme: themeOverrides,
  ...rest
}, ref) => {
  const theme = (0, _theming.useInternalTheme)(themeOverrides);
  const isControlled = rest.value !== undefined;
  const validInputValue = isControlled ? rest.value : rest.defaultValue;
  const {
    current: labeled
  } = React.useRef(new _reactNative.Animated.Value(validInputValue ? 0 : 1));
  const {
    current: error
  } = React.useRef(new _reactNative.Animated.Value(errorProp ? 1 : 0));
  const [focused, setFocused] = React.useState(false);
  const [displayPlaceholder, setDisplayPlaceholder] = React.useState(false);
  const [uncontrolledValue, setUncontrolledValue] = React.useState(validInputValue);
  // Use value from props instead of local state when input is controlled
  const value = isControlled ? rest.value : uncontrolledValue;
  const [labelTextLayout, setLabelTextLayout] = React.useState({
    width: 33
  });
  const [inputContainerLayout, setInputContainerLayout] = React.useState({
    width: 65
  });
  const [labelLayout, setLabelLayout] = React.useState({
    measured: false,
    width: 0,
    height: 0
  });
  const [leftLayout, setLeftLayout] = React.useState({
    width: null,
    height: null
  });
  const [rightLayout, setRightLayout] = React.useState({
    width: null,
    height: null
  });
  const timer = React.useRef(undefined);
  const root = React.useRef(null);
  const {
    scale
  } = theme.animation;
  React.useImperativeHandle(ref, () => ({
    focus: () => {
      var _root$current;
      return (_root$current = root.current) === null || _root$current === void 0 ? void 0 : _root$current.focus();
    },
    clear: () => {
      var _root$current2;
      return (_root$current2 = root.current) === null || _root$current2 === void 0 ? void 0 : _root$current2.clear();
    },
    setNativeProps: args => {
      var _root$current3;
      return (_root$current3 = root.current) === null || _root$current3 === void 0 ? void 0 : _root$current3.setNativeProps(args);
    },
    isFocused: () => {
      var _root$current4;
      return ((_root$current4 = root.current) === null || _root$current4 === void 0 ? void 0 : _root$current4.isFocused()) || false;
    },
    blur: () => {
      var _root$current5;
      return (_root$current5 = root.current) === null || _root$current5 === void 0 ? void 0 : _root$current5.blur();
    },
    forceFocus: () => {
      var _root$current6;
      return (_root$current6 = root.current) === null || _root$current6 === void 0 ? void 0 : _root$current6.focus();
    },
    setSelection: (start, end) => {
      var _root$current7;
      return (_root$current7 = root.current) === null || _root$current7 === void 0 ? void 0 : _root$current7.setSelection(start, end);
    }
  }));
  React.useEffect(() => {
    // When the input has an error, we wiggle the label and apply error styles
    if (errorProp) {
      // show error
      _reactNative.Animated.timing(error, {
        toValue: 1,
        duration: FOCUS_ANIMATION_DURATION * scale,
        // To prevent this - https://github.com/callstack/react-native-paper/issues/941
        useNativeDriver: true
      }).start();
    } else {
      // hide error
      {
        _reactNative.Animated.timing(error, {
          toValue: 0,
          duration: BLUR_ANIMATION_DURATION * scale,
          // To prevent this - https://github.com/callstack/react-native-paper/issues/941
          useNativeDriver: true
        }).start();
      }
    }
  }, [errorProp, scale, error]);
  React.useEffect(() => {
    // Show placeholder text only if the input is focused, or there's no label
    // We don't show placeholder if there's a label because the label acts as placeholder
    // When focused, the label moves up, so we can show a placeholder
    if (focused || !rest.label) {
      // If the user wants to use the contextMenu, when changing the placeholder, the contextMenu is closed
      // This is a workaround to mitigate this behavior in scenarios where the placeholder is not specified.
      if (rest.placeholder) {
        // Display placeholder in a delay to offset the label animation
        // If we show it immediately, they'll overlap and look ugly
        timer.current = setTimeout(() => setDisplayPlaceholder(true), 50);
      }
    } else {
      // hidePlaceholder
      setDisplayPlaceholder(false);
    }
    return () => {
      if (timer.current) {
        clearTimeout(timer.current);
      }
    };
  }, [focused, rest.label, rest.placeholder]);
  React.useEffect(() => {
    labeled.stopAnimation();
    // The label should be minimized if the text input is focused, or has text
    // In minimized mode, the label moves up and becomes small
    // workaround for animated regression for react native > 0.61
    // https://github.com/callstack/react-native-paper/pull/1440
    if (value || focused) {
      // minimize label
      _reactNative.Animated.timing(labeled, {
        toValue: 0,
        duration: BLUR_ANIMATION_DURATION * scale,
        // To prevent this - https://github.com/callstack/react-native-paper/issues/941
        useNativeDriver: true
      }).start();
    } else {
      // restore label
      _reactNative.Animated.timing(labeled, {
        toValue: 1,
        duration: FOCUS_ANIMATION_DURATION * scale,
        // To prevent this - https://github.com/callstack/react-native-paper/issues/941
        useNativeDriver: true
      }).start();
    }
  }, [focused, value, labeled, scale]);
  const onLeftAffixLayoutChange = React.useCallback(event => {
    const height = (0, _roundLayoutSize.roundLayoutSize)(event.nativeEvent.layout.height);
    const width = (0, _roundLayoutSize.roundLayoutSize)(event.nativeEvent.layout.width);
    if (width !== leftLayout.width || height !== leftLayout.height) {
      setLeftLayout({
        width,
        height
      });
    }
  }, [leftLayout.height, leftLayout.width]);
  const onRightAffixLayoutChange = React.useCallback(event => {
    const width = (0, _roundLayoutSize.roundLayoutSize)(event.nativeEvent.layout.width);
    const height = (0, _roundLayoutSize.roundLayoutSize)(event.nativeEvent.layout.height);
    if (width !== rightLayout.width || height !== rightLayout.height) {
      setRightLayout({
        width,
        height
      });
    }
  }, [rightLayout.height, rightLayout.width]);
  const handleFocus = args => {
    var _rest$onFocus;
    if (disabled || !editable) {
      return;
    }
    setFocused(true);
    (_rest$onFocus = rest.onFocus) === null || _rest$onFocus === void 0 || _rest$onFocus.call(rest, args);
  };
  const handleBlur = args => {
    var _rest$onBlur;
    if (!editable) {
      return;
    }
    setFocused(false);
    (_rest$onBlur = rest.onBlur) === null || _rest$onBlur === void 0 || _rest$onBlur.call(rest, args);
  };
  const handleChangeText = value => {
    var _rest$onChangeText;
    if (!editable || disabled) {
      return;
    }
    if (!isControlled) {
      // Keep track of value in local state when input is not controlled
      setUncontrolledValue(value);
    }
    (_rest$onChangeText = rest.onChangeText) === null || _rest$onChangeText === void 0 || _rest$onChangeText.call(rest, value);
  };
  const handleLayoutAnimatedText = React.useCallback(e => {
    const width = (0, _roundLayoutSize.roundLayoutSize)(e.nativeEvent.layout.width);
    const height = (0, _roundLayoutSize.roundLayoutSize)(e.nativeEvent.layout.height);
    if (width !== labelLayout.width || height !== labelLayout.height) {
      setLabelLayout({
        width,
        height,
        measured: true
      });
    }
  }, [labelLayout.height, labelLayout.width]);
  const handleLabelTextLayout = React.useCallback(({
    nativeEvent
  }) => {
    setLabelTextLayout({
      width: nativeEvent.lines.reduce((acc, line) => acc + Math.ceil(line.width), 0)
    });
  }, []);
  const handleInputContainerLayout = React.useCallback(({
    nativeEvent: {
      layout
    }
  }) => {
    setInputContainerLayout({
      width: layout.width
    });
  }, []);
  const forceFocus = React.useCallback(() => {
    var _root$current8;
    return (_root$current8 = root.current) === null || _root$current8 === void 0 ? void 0 : _root$current8.focus();
  }, []);
  const {
    maxFontSizeMultiplier = 1.5
  } = rest;
  const scaledLabel = !!(value || focused);
  if (mode === 'outlined') {
    return /*#__PURE__*/React.createElement(_TextInputOutlined.default, _extends({
      dense: dense,
      disabled: disabled,
      error: errorProp,
      multiline: multiline,
      editable: editable,
      render: render
    }, rest, {
      theme: theme,
      value: value,
      parentState: {
        labeled,
        error,
        focused,
        displayPlaceholder,
        value,
        labelTextLayout,
        labelLayout,
        leftLayout,
        rightLayout,
        inputContainerLayout
      },
      innerRef: ref => {
        root.current = ref;
      },
      onFocus: handleFocus,
      forceFocus: forceFocus,
      onBlur: handleBlur,
      onChangeText: handleChangeText,
      onLayoutAnimatedText: handleLayoutAnimatedText,
      onInputLayout: handleInputContainerLayout,
      onLabelTextLayout: handleLabelTextLayout,
      onLeftAffixLayoutChange: onLeftAffixLayoutChange,
      onRightAffixLayoutChange: onRightAffixLayoutChange,
      maxFontSizeMultiplier: maxFontSizeMultiplier,
      contentStyle: contentStyle,
      scaledLabel: scaledLabel
    }));
  }
  return /*#__PURE__*/React.createElement(_TextInputFlat.default, _extends({
    dense: dense,
    disabled: disabled,
    error: errorProp,
    multiline: multiline,
    editable: editable,
    render: render
  }, rest, {
    theme: theme,
    value: value,
    parentState: {
      labeled,
      error,
      focused,
      displayPlaceholder,
      value,
      labelTextLayout,
      labelLayout,
      leftLayout,
      rightLayout,
      inputContainerLayout
    },
    innerRef: ref => {
      root.current = ref;
    },
    onFocus: handleFocus,
    forceFocus: forceFocus,
    onBlur: handleBlur,
    onInputLayout: handleInputContainerLayout,
    onChangeText: handleChangeText,
    onLayoutAnimatedText: handleLayoutAnimatedText,
    onLabelTextLayout: handleLabelTextLayout,
    onLeftAffixLayoutChange: onLeftAffixLayoutChange,
    onRightAffixLayoutChange: onRightAffixLayoutChange,
    maxFontSizeMultiplier: maxFontSizeMultiplier,
    contentStyle: contentStyle,
    scaledLabel: scaledLabel
  }));
});
// @component ./Adornment/TextInputIcon.tsx
TextInput.Icon = _TextInputIcon.default;

// @component ./Adornment/TextInputAffix.tsx
// @ts-ignore Types of property 'theme' are incompatible.
TextInput.Affix = _TextInputAffix.default;
var _default = exports.default = TextInput;
//# sourceMappingURL=TextInput.js.map