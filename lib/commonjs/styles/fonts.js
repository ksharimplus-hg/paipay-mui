"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = configureFonts;
exports.fontConfig = void 0;
var _reactNative = require("react-native");
var _tokens = require("./themes/v3/tokens");
const fontConfig = exports.fontConfig = {
  web: {
    regular: {
      fontFamily: 'Roboto, "Helvetica Neue", Helvetica, Arial, sans-serif',
      fontWeight: '400'
    },
    medium: {
      fontFamily: 'Roboto, "Helvetica Neue", Helvetica, Arial, sans-serif',
      fontWeight: '500'
    },
    light: {
      fontFamily: 'Roboto, "Helvetica Neue", Helvetica, Arial, sans-serif',
      fontWeight: '300'
    },
    thin: {
      fontFamily: 'Roboto, "Helvetica Neue", Helvetica, Arial, sans-serif',
      fontWeight: '100'
    }
  },
  ios: {
    regular: {
      fontFamily: 'System',
      fontWeight: '400'
    },
    medium: {
      fontFamily: 'System',
      fontWeight: '500'
    },
    light: {
      fontFamily: 'System',
      fontWeight: '300'
    },
    thin: {
      fontFamily: 'System',
      fontWeight: '100'
    }
  },
  default: {
    regular: {
      fontFamily: 'sans-serif',
      fontWeight: 'normal'
    },
    medium: {
      fontFamily: 'sans-serif-medium',
      fontWeight: 'normal'
    },
    light: {
      fontFamily: 'sans-serif-light',
      fontWeight: 'normal'
    },
    thin: {
      fontFamily: 'sans-serif-thin',
      fontWeight: 'normal'
    }
  }
};
function configureV2Fonts(config) {
  const fonts = _reactNative.Platform.select({
    ...fontConfig,
    ...config
  });
  return fonts;
}
function configureV3Fonts(config) {
  if (!config) {
    return _tokens.typescale;
  }
  const isFlatConfig = Object.keys(config).every(key => typeof config[key] !== 'object');
  if (isFlatConfig) {
    return Object.fromEntries(Object.entries(_tokens.typescale).map(([variantName, variantProperties]) => [variantName, {
      ...variantProperties,
      ...config
    }]));
  }
  return Object.assign({}, _tokens.typescale, ...Object.entries(config).map(([variantName, variantProperties]) => ({
    [variantName]: {
      ..._tokens.typescale[variantName],
      ...variantProperties
    }
  })));
}

// eslint-disable-next-line no-redeclare

// eslint-disable-next-line no-redeclare

// eslint-disable-next-line no-redeclare

// eslint-disable-next-line no-redeclare

// eslint-disable-next-line no-redeclare

// eslint-disable-next-line no-redeclare
function configureFonts(params) {
  const {
    isV3 = true,
    config
  } = params || {};
  if (isV3) {
    return configureV3Fonts(config);
  }
  return configureV2Fonts(config);
}
//# sourceMappingURL=fonts.js.map