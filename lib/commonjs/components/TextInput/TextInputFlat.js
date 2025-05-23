"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var React = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
var _Underline = require("./Addons/Underline");
var _enums = require("./Adornment/enums");
var _TextInputAdornment = _interopRequireWildcard(require("./Adornment/TextInputAdornment"));
var _constants = require("./constants");
var _helpers = require("./helpers");
var _InputLabel = _interopRequireDefault(require("./Label/InputLabel"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TextInputFlat = ({
  disabled = false,
  editable = true,
  label,
  error = false,
  selectionColor: customSelectionColor,
  cursorColor,
  underlineColor,
  underlineStyle,
  activeUnderlineColor,
  textColor,
  dense,
  style,
  theme,
  render = props => /*#__PURE__*/React.createElement(_reactNative.TextInput, props),
  multiline = false,
  parentState,
  innerRef,
  onFocus,
  forceFocus,
  onBlur,
  onChangeText,
  onLayoutAnimatedText,
  onLabelTextLayout,
  onLeftAffixLayoutChange,
  onRightAffixLayoutChange,
  onInputLayout,
  left,
  right,
  placeholderTextColor,
  testID = 'text-input-flat',
  contentStyle,
  scaledLabel,
  ...rest
}) => {
  const isAndroid = _reactNative.Platform.OS === 'android';
  const {
    colors,
    isV3,
    roundness
  } = theme;
  const font = isV3 ? theme.fonts.bodyLarge : theme.fonts.regular;
  const hasActiveOutline = parentState.focused || error;
  const {
    LABEL_PADDING_TOP,
    FLAT_INPUT_OFFSET,
    MIN_HEIGHT,
    MIN_WIDTH
  } = (0, _helpers.getConstants)(isV3);
  const {
    fontSize: fontSizeStyle,
    lineHeight: lineHeightStyle,
    fontWeight,
    height,
    paddingHorizontal,
    textAlign,
    ...viewStyle
  } = _reactNative.StyleSheet.flatten(style) || {};
  const fontSize = fontSizeStyle || _constants.MAXIMIZED_LABEL_FONT_SIZE;
  const lineHeight = lineHeightStyle || (_reactNative.Platform.OS === 'web' ? fontSize * 1.2 : undefined);
  const isPaddingHorizontalPassed = paddingHorizontal !== undefined && typeof paddingHorizontal === 'number';
  const adornmentConfig = (0, _TextInputAdornment.getAdornmentConfig)({
    left,
    right
  });
  let {
    paddingLeft,
    paddingRight
  } = (0, _helpers.calculateFlatInputHorizontalPadding)({
    adornmentConfig,
    isV3
  });
  if (isPaddingHorizontalPassed) {
    paddingLeft = paddingHorizontal;
    paddingRight = paddingHorizontal;
  }
  const {
    leftLayout,
    rightLayout
  } = parentState;
  const rightAffixWidth = right ? rightLayout.width || _constants.ADORNMENT_SIZE : _constants.ADORNMENT_SIZE;
  const leftAffixWidth = left ? leftLayout.width || _constants.ADORNMENT_SIZE : _constants.ADORNMENT_SIZE;
  const adornmentStyleAdjustmentForNativeInput = (0, _TextInputAdornment.getAdornmentStyleAdjustmentForNativeInput)({
    adornmentConfig,
    rightAffixWidth,
    leftAffixWidth,
    paddingHorizontal,
    inputOffset: FLAT_INPUT_OFFSET,
    mode: _enums.InputMode.Flat,
    isV3
  });
  const {
    inputTextColor,
    activeColor,
    underlineColorCustom,
    placeholderColor,
    errorColor,
    backgroundColor,
    selectionColor
  } = (0, _helpers.getFlatInputColors)({
    underlineColor,
    activeUnderlineColor,
    customSelectionColor,
    textColor,
    disabled,
    error,
    theme
  });
  const containerStyle = {
    backgroundColor,
    borderTopLeftRadius: theme.roundness,
    borderTopRightRadius: theme.roundness
  };
  const labelScale = _constants.MINIMIZED_LABEL_FONT_SIZE / fontSize;
  const fontScale = _constants.MAXIMIZED_LABEL_FONT_SIZE / fontSize;
  const labelWidth = parentState.labelLayout.width;
  const labelHeight = parentState.labelLayout.height;
  const labelHalfWidth = labelWidth / 2;
  const labelHalfHeight = labelHeight / 2;
  const baseLabelTranslateX = (_reactNative.I18nManager.getConstants().isRTL ? 1 : -1) * (labelHalfWidth - labelScale * labelWidth / 2) + (1 - labelScale) * (_reactNative.I18nManager.getConstants().isRTL ? -1 : 1) * paddingLeft;
  const minInputHeight = dense ? (label ? _constants.MIN_DENSE_HEIGHT_WL : _constants.MIN_DENSE_HEIGHT) - _constants.LABEL_PADDING_TOP_DENSE : MIN_HEIGHT - LABEL_PADDING_TOP;
  const inputHeight = (0, _helpers.calculateInputHeight)(labelHeight, height, minInputHeight);
  const topPosition = (0, _helpers.calculateLabelTopPosition)(labelHeight, inputHeight, multiline && height ? 0 : !height ? minInputHeight / 2 : 0);
  if (height && typeof height !== 'number') {
    // eslint-disable-next-line
    console.warn('Currently we support only numbers in height prop');
  }
  const paddingSettings = {
    height: height ? +height : null,
    labelHalfHeight,
    offset: FLAT_INPUT_OFFSET,
    multiline: multiline ? multiline : null,
    dense: dense ? dense : null,
    topPosition,
    fontSize,
    lineHeight,
    label,
    scale: fontScale,
    isAndroid,
    styles: _reactNative.StyleSheet.flatten(dense ? styles.inputFlatDense : styles.inputFlat)
  };
  const pad = (0, _helpers.calculatePadding)(paddingSettings);
  const paddingFlat = (0, _helpers.adjustPaddingFlat)({
    ...paddingSettings,
    pad
  });
  const baseLabelTranslateY = -labelHalfHeight - (topPosition + _constants.MINIMIZED_LABEL_Y_OFFSET);
  const {
    current: placeholderOpacityAnims
  } = React.useRef([new _reactNative.Animated.Value(0), new _reactNative.Animated.Value(1)]);
  const placeholderOpacity = hasActiveOutline ? parentState.labeled : placeholderOpacityAnims[parentState.labelLayout.measured ? 1 : 0];

  // We don't want to show placeholder if label is displayed, because they overlap.
  // Before it was done by setting placeholder's value to " ", but inputs have the same props
  // what causes broken styles due to: https://github.com/facebook/react-native/issues/48249
  const placeholderTextColorBasedOnState = parentState.displayPlaceholder ? placeholderTextColor ?? placeholderColor : 'transparent';
  const minHeight = height || (dense ? label ? _constants.MIN_DENSE_HEIGHT_WL : _constants.MIN_DENSE_HEIGHT : MIN_HEIGHT);
  const flatHeight = inputHeight + (!height ? dense ? _constants.LABEL_PADDING_TOP_DENSE : LABEL_PADDING_TOP : 0);
  const iconTopPosition = (flatHeight - _constants.ADORNMENT_SIZE) / 2;
  const leftAffixTopPosition = leftLayout.height ? (0, _helpers.calculateFlatAffixTopPosition)({
    height: flatHeight,
    ...paddingFlat,
    affixHeight: leftLayout.height
  }) : null;
  const rightAffixTopPosition = rightLayout.height ? (0, _helpers.calculateFlatAffixTopPosition)({
    height: flatHeight,
    ...paddingFlat,
    affixHeight: rightLayout.height
  }) : null;
  const labelProps = {
    label,
    onLayoutAnimatedText,
    onLabelTextLayout,
    placeholderOpacity,
    labelError: error,
    placeholderStyle: styles.placeholder,
    baseLabelTranslateY,
    baseLabelTranslateX,
    font,
    fontSize,
    lineHeight,
    fontWeight,
    labelScale,
    wiggleOffsetX: _constants.LABEL_WIGGLE_X_OFFSET,
    topPosition,
    paddingLeft: isAndroid ? _reactNative.I18nManager.isRTL ? paddingRight : paddingLeft : paddingLeft,
    paddingRight: isAndroid ? _reactNative.I18nManager.isRTL ? paddingLeft : paddingRight : paddingRight,
    hasActiveOutline,
    activeColor,
    placeholderColor,
    errorColor,
    roundness,
    maxFontSizeMultiplier: rest.maxFontSizeMultiplier,
    testID,
    contentStyle,
    inputContainerLayout: parentState.inputContainerLayout,
    labelTextLayout: parentState.labelTextLayout,
    opacity: parentState.value || parentState.focused ? parentState.labelLayout.measured ? 1 : 0 : 1,
    isV3
  };
  const affixTopPosition = {
    [_enums.AdornmentSide.Left]: leftAffixTopPosition,
    [_enums.AdornmentSide.Right]: rightAffixTopPosition
  };
  const onAffixChange = {
    [_enums.AdornmentSide.Left]: onLeftAffixLayoutChange,
    [_enums.AdornmentSide.Right]: onRightAffixLayoutChange
  };
  let adornmentProps = {
    paddingHorizontal,
    adornmentConfig,
    forceFocus,
    topPosition: {
      [_enums.AdornmentType.Affix]: affixTopPosition,
      [_enums.AdornmentType.Icon]: iconTopPosition
    },
    onAffixChange,
    isTextInputFocused: parentState.focused,
    maxFontSizeMultiplier: rest.maxFontSizeMultiplier,
    disabled
  };
  if (adornmentConfig.length) {
    adornmentProps = {
      ...adornmentProps,
      left,
      right,
      textStyle: {
        ...font,
        fontSize,
        lineHeight,
        fontWeight
      },
      visible: parentState.labeled
    };
  }
  return /*#__PURE__*/React.createElement(_reactNative.View, {
    style: [containerStyle, viewStyle]
  }, /*#__PURE__*/React.createElement(_Underline.Underline, {
    style: underlineStyle,
    hasActiveOutline: hasActiveOutline,
    parentState: parentState,
    underlineColorCustom: underlineColorCustom,
    error: error,
    colors: colors,
    activeColor: activeColor,
    theme: theme
  }), /*#__PURE__*/React.createElement(_reactNative.View, {
    onLayout: onInputLayout,
    style: [styles.labelContainer, {
      minHeight
    }]
  }, !isAndroid && multiline && !!label && !disabled &&
  /*#__PURE__*/
  // Workaround for: https://github.com/callstack/react-native-paper/issues/2799
  // Patch for a multiline TextInput with fixed height, which allow to avoid covering input label with its value.
  React.createElement(_reactNative.View, {
    testID: "patch-container",
    pointerEvents: "none",
    style: [_reactNative.StyleSheet.absoluteFill, dense ? styles.densePatchContainer : styles.patchContainer, {
      backgroundColor: viewStyle.backgroundColor || containerStyle.backgroundColor,
      left: paddingLeft,
      right: paddingRight
    }]
  }), label ? /*#__PURE__*/React.createElement(_InputLabel.default, _extends({
    labeled: parentState.labeled,
    error: parentState.error,
    focused: parentState.focused,
    scaledLabel: scaledLabel,
    wiggle: Boolean(parentState.value && labelProps.labelError),
    labelLayoutMeasured: parentState.labelLayout.measured,
    labelLayoutWidth: parentState.labelLayout.width,
    labelLayoutHeight: parentState.labelLayout.height
  }, labelProps)) : null, render === null || render === void 0 ? void 0 : render({
    ...rest,
    ref: innerRef,
    onChangeText,
    placeholder: rest.placeholder,
    editable: !disabled && editable,
    selectionColor,
    cursorColor: typeof cursorColor === 'undefined' ? activeColor : cursorColor,
    placeholderTextColor: placeholderTextColorBasedOnState,
    onFocus,
    onBlur,
    underlineColorAndroid: 'transparent',
    multiline,
    style: [styles.input, multiline && height ? {
      height: flatHeight
    } : {}, paddingFlat, {
      paddingLeft,
      paddingRight,
      ...font,
      fontSize,
      lineHeight,
      fontWeight,
      color: inputTextColor,
      textAlignVertical: multiline ? 'top' : 'center',
      textAlign: textAlign ? textAlign : _reactNative.I18nManager.getConstants().isRTL ? 'right' : 'left',
      minWidth: Math.min(parentState.labelTextLayout.width + 2 * FLAT_INPUT_OFFSET, MIN_WIDTH)
    }, _reactNative.Platform.OS === 'web' ? {
      outline: 'none'
    } : undefined, adornmentStyleAdjustmentForNativeInput, contentStyle],
    testID
  })), /*#__PURE__*/React.createElement(_TextInputAdornment.default, adornmentProps));
};
var _default = exports.default = TextInputFlat;
const styles = _reactNative.StyleSheet.create({
  placeholder: {
    position: 'absolute',
    left: 0
  },
  labelContainer: {
    paddingTop: 0,
    paddingBottom: 0,
    flexGrow: 1
  },
  input: {
    margin: 0,
    flexGrow: 1
  },
  inputFlat: {
    paddingTop: 24,
    paddingBottom: 4
  },
  inputFlatDense: {
    paddingTop: 22,
    paddingBottom: 2
  },
  patchContainer: {
    height: 24,
    zIndex: 2
  },
  densePatchContainer: {
    height: 22,
    zIndex: 2
  }
});
//# sourceMappingURL=TextInputFlat.js.map