"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var React = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
var _Outline = require("./Addons/Outline");
var _enums = require("./Adornment/enums");
var _TextInputAdornment = _interopRequireWildcard(require("./Adornment/TextInputAdornment"));
var _constants = require("./constants");
var _helpers = require("./helpers");
var _InputLabel = _interopRequireDefault(require("./Label/InputLabel"));
var _LabelBackground = _interopRequireDefault(require("./Label/LabelBackground"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TextInputOutlined = ({
  disabled = false,
  editable = true,
  label,
  error = false,
  selectionColor: customSelectionColor,
  cursorColor,
  underlineColor: _underlineColor,
  outlineColor: customOutlineColor,
  activeOutlineColor,
  outlineStyle,
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
  onLayout,
  left,
  right,
  placeholderTextColor,
  testID = 'text-input-outlined',
  contentStyle,
  scaledLabel,
  ...rest
}) => {
  const adornmentConfig = (0, _TextInputAdornment.getAdornmentConfig)({
    left,
    right
  });
  const {
    colors,
    isV3,
    roundness
  } = theme;
  const font = isV3 ? theme.fonts.bodyLarge : theme.fonts.regular;
  const hasActiveOutline = parentState.focused || error;
  const {
    INPUT_PADDING_HORIZONTAL,
    MIN_HEIGHT,
    ADORNMENT_OFFSET,
    MIN_WIDTH
  } = (0, _helpers.getConstants)(isV3);
  const {
    fontSize: fontSizeStyle,
    fontWeight,
    lineHeight: lineHeightStyle,
    height,
    backgroundColor = colors === null || colors === void 0 ? void 0 : colors.background,
    textAlign,
    ...viewStyle
  } = _reactNative.StyleSheet.flatten(style) || {};
  const fontSize = fontSizeStyle || _constants.MAXIMIZED_LABEL_FONT_SIZE;
  const lineHeight = lineHeightStyle || (_reactNative.Platform.OS === 'web' ? fontSize * 1.2 : undefined);
  const {
    inputTextColor,
    activeColor,
    outlineColor,
    placeholderColor,
    errorColor,
    selectionColor
  } = (0, _helpers.getOutlinedInputColors)({
    activeOutlineColor,
    customOutlineColor,
    customSelectionColor,
    textColor,
    disabled,
    error,
    theme
  });
  const densePaddingTop = label ? _constants.LABEL_PADDING_TOP_DENSE : 0;
  const paddingTop = label ? _constants.LABEL_PADDING_TOP : 0;
  const yOffset = label ? _constants.OUTLINE_MINIMIZED_LABEL_Y_OFFSET : 0;
  const labelScale = _constants.MINIMIZED_LABEL_FONT_SIZE / fontSize;
  const fontScale = _constants.MAXIMIZED_LABEL_FONT_SIZE / fontSize;
  const labelWidth = parentState.labelLayout.width;
  const labelHeight = parentState.labelLayout.height;
  const labelHalfWidth = labelWidth / 2;
  const labelHalfHeight = labelHeight / 2;
  const baseLabelTranslateX = (_reactNative.I18nManager.getConstants().isRTL ? 1 : -1) * (labelHalfWidth - labelScale * labelWidth / 2 - (fontSize - _constants.MINIMIZED_LABEL_FONT_SIZE) * labelScale);
  let labelTranslationXOffset = 0;
  const isAdornmentLeftIcon = adornmentConfig.some(({
    side,
    type
  }) => side === _enums.AdornmentSide.Left && type === _enums.AdornmentType.Icon);
  const isAdornmentRightIcon = adornmentConfig.some(({
    side,
    type
  }) => side === _enums.AdornmentSide.Right && type === _enums.AdornmentType.Icon);
  if (isAdornmentLeftIcon) {
    labelTranslationXOffset = (_reactNative.I18nManager.getConstants().isRTL ? -1 : 1) * (_constants.ADORNMENT_SIZE + ADORNMENT_OFFSET - (isV3 ? 0 : 8));
  }
  const minInputHeight = (dense ? _constants.MIN_DENSE_HEIGHT_OUTLINED : MIN_HEIGHT) - paddingTop;
  const inputHeight = (0, _helpers.calculateInputHeight)(labelHeight, height, minInputHeight);
  const topPosition = (0, _helpers.calculateLabelTopPosition)(labelHeight, inputHeight, paddingTop);
  if (height && typeof height !== 'number') {
    // eslint-disable-next-line
    console.warn('Currently we support only numbers in height prop');
  }
  const paddingSettings = {
    height: height ? +height : null,
    labelHalfHeight,
    offset: paddingTop,
    multiline: multiline ? multiline : null,
    dense: dense ? dense : null,
    topPosition,
    fontSize,
    lineHeight,
    label,
    scale: fontScale,
    isAndroid: _reactNative.Platform.OS === 'android',
    styles: _reactNative.StyleSheet.flatten(dense ? styles.inputOutlinedDense : styles.inputOutlined)
  };
  const pad = (0, _helpers.calculatePadding)(paddingSettings);
  const paddingOut = (0, _helpers.adjustPaddingOut)({
    ...paddingSettings,
    pad
  });
  const baseLabelTranslateY = -labelHalfHeight - (topPosition + yOffset);
  const {
    current: placeholderOpacityAnims
  } = React.useRef([new _reactNative.Animated.Value(0), new _reactNative.Animated.Value(1)]);
  const placeholderOpacity = hasActiveOutline ? parentState.labeled : placeholderOpacityAnims[parentState.labelLayout.measured ? 1 : 0];
  const placeholderStyle = {
    position: 'absolute',
    left: 0,
    paddingHorizontal: INPUT_PADDING_HORIZONTAL
  };
  const placeholderTextColorBasedOnState = parentState.displayPlaceholder ? placeholderTextColor ?? placeholderColor : 'transparent';
  const labelBackgroundColor = backgroundColor === 'transparent' ? theme.colors.background : backgroundColor;
  const labelProps = {
    label,
    onLayoutAnimatedText,
    onLabelTextLayout,
    placeholderOpacity,
    labelError: error,
    placeholderStyle,
    baseLabelTranslateY,
    baseLabelTranslateX,
    font,
    fontSize,
    lineHeight,
    fontWeight,
    labelScale,
    wiggleOffsetX: _constants.LABEL_WIGGLE_X_OFFSET,
    topPosition,
    hasActiveOutline,
    activeColor,
    placeholderColor,
    backgroundColor: labelBackgroundColor,
    errorColor,
    labelTranslationXOffset,
    roundness,
    maxFontSizeMultiplier: rest.maxFontSizeMultiplier,
    testID,
    contentStyle,
    inputContainerLayout: {
      width: parentState.inputContainerLayout.width + (isAdornmentRightIcon || isAdornmentLeftIcon ? INPUT_PADDING_HORIZONTAL : 0)
    },
    opacity: parentState.value || parentState.focused ? parentState.labelLayout.measured ? 1 : 0 : 1,
    isV3
  };
  const onLayoutChange = React.useCallback(e => {
    onInputLayout(e);
    onLayout === null || onLayout === void 0 || onLayout(e);
  }, [onLayout, onInputLayout]);
  const minHeight = height || (dense ? _constants.MIN_DENSE_HEIGHT_OUTLINED : MIN_HEIGHT);
  const outlinedHeight = inputHeight + (dense ? densePaddingTop / 2 : paddingTop);
  const {
    leftLayout,
    rightLayout
  } = parentState;
  const leftAffixTopPosition = (0, _helpers.calculateOutlinedIconAndAffixTopPosition)({
    height: outlinedHeight,
    affixHeight: leftLayout.height || 0,
    labelYOffset: -yOffset
  });
  const rightAffixTopPosition = (0, _helpers.calculateOutlinedIconAndAffixTopPosition)({
    height: outlinedHeight,
    affixHeight: rightLayout.height || 0,
    labelYOffset: -yOffset
  });
  const iconTopPosition = (0, _helpers.calculateOutlinedIconAndAffixTopPosition)({
    height: outlinedHeight,
    affixHeight: _constants.ADORNMENT_SIZE,
    labelYOffset: -yOffset
  });
  const rightAffixWidth = right ? rightLayout.width || _constants.ADORNMENT_SIZE : _constants.ADORNMENT_SIZE;
  const leftAffixWidth = left ? leftLayout.width || _constants.ADORNMENT_SIZE : _constants.ADORNMENT_SIZE;
  const adornmentStyleAdjustmentForNativeInput = (0, _TextInputAdornment.getAdornmentStyleAdjustmentForNativeInput)({
    adornmentConfig,
    rightAffixWidth,
    leftAffixWidth,
    mode: 'outlined',
    isV3
  });
  const affixTopPosition = {
    [_enums.AdornmentSide.Left]: leftAffixTopPosition,
    [_enums.AdornmentSide.Right]: rightAffixTopPosition
  };
  const onAffixChange = {
    [_enums.AdornmentSide.Left]: onLeftAffixLayoutChange,
    [_enums.AdornmentSide.Right]: onRightAffixLayoutChange
  };
  let adornmentProps = {
    adornmentConfig,
    forceFocus,
    topPosition: {
      [_enums.AdornmentType.Icon]: iconTopPosition,
      [_enums.AdornmentType.Affix]: affixTopPosition
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
    style: viewStyle
  }, /*#__PURE__*/React.createElement(_Outline.Outline, {
    isV3: isV3,
    style: outlineStyle,
    label: label,
    roundness: roundness,
    hasActiveOutline: hasActiveOutline,
    focused: parentState.focused,
    activeColor: activeColor,
    outlineColor: outlineColor,
    backgroundColor: backgroundColor
  }), /*#__PURE__*/React.createElement(_reactNative.View, {
    style: [styles.labelContainer, {
      paddingTop,
      minHeight
    }]
  }, label ? /*#__PURE__*/React.createElement(_InputLabel.default, _extends({
    labeled: parentState.labeled,
    error: parentState.error,
    focused: parentState.focused,
    scaledLabel: scaledLabel,
    wiggle: Boolean(parentState.value && labelProps.labelError),
    labelLayoutMeasured: parentState.labelLayout.measured,
    labelLayoutWidth: parentState.labelLayout.width,
    labelLayoutHeight: parentState.labelLayout.height
  }, labelProps, {
    labelBackground: _LabelBackground.default,
    maxFontSizeMultiplier: rest.maxFontSizeMultiplier
  })) : null, render === null || render === void 0 ? void 0 : render({
    ...rest,
    ref: innerRef,
    onLayout: onLayoutChange,
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
    style: [styles.input, !multiline || multiline && height ? {
      height: inputHeight
    } : {}, paddingOut, {
      ...font,
      fontSize,
      lineHeight,
      fontWeight,
      color: inputTextColor,
      textAlignVertical: multiline ? 'top' : 'center',
      textAlign: textAlign ? textAlign : _reactNative.I18nManager.getConstants().isRTL ? 'right' : 'left',
      paddingHorizontal: INPUT_PADDING_HORIZONTAL,
      minWidth: Math.min(parentState.labelTextLayout.width + 2 * INPUT_PADDING_HORIZONTAL, MIN_WIDTH)
    }, _reactNative.Platform.OS === 'web' ? {
      outline: 'none'
    } : undefined, adornmentStyleAdjustmentForNativeInput, contentStyle],
    testID
  })), /*#__PURE__*/React.createElement(_TextInputAdornment.default, adornmentProps));
};
var _default = exports.default = TextInputOutlined;
const styles = _reactNative.StyleSheet.create({
  labelContainer: {
    paddingBottom: 0,
    flexGrow: 1
  },
  input: {
    margin: 0,
    flexGrow: 1
  },
  inputOutlined: {
    paddingTop: 8,
    paddingBottom: 8
  },
  inputOutlinedDense: {
    paddingTop: 4,
    paddingBottom: 4
  }
});
//# sourceMappingURL=TextInputOutlined.js.map