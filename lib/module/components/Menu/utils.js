import color from 'color';
import { black, white } from '../../styles/themes/v2/colors';
export const MIN_WIDTH = 112;
export const MAX_WIDTH = 280;
const getDisabledColor = theme => {
  if (theme.isV3) {
    return theme.colors.onSurfaceDisabled;
  }
  return color(theme.dark ? white : black).alpha(0.32).rgb().string();
};
const getTitleColor = ({
  theme,
  disabled
}) => {
  if (disabled) {
    return getDisabledColor(theme);
  }
  if (theme.isV3) {
    return theme.colors.onSurface;
  }
  return color(theme.colors.text).alpha(0.87).rgb().string();
};
const getIconColor = ({
  theme,
  disabled
}) => {
  if (disabled) {
    return getDisabledColor(theme);
  }
  if (theme.isV3) {
    return theme.colors.onSurfaceVariant;
  }
  return color(theme.colors.text).alpha(0.54).rgb().string();
};
const getRippleColor = ({
  theme,
  customRippleColor
}) => {
  if (customRippleColor) {
    return customRippleColor;
  }
  if (theme.isV3) {
    return color(theme.colors.onSurfaceVariant).alpha(0.12).rgb().string();
  }
  return undefined;
};
export const getMenuItemColor = ({
  theme,
  disabled,
  customRippleColor
}) => {
  return {
    titleColor: getTitleColor({
      theme,
      disabled
    }),
    iconColor: getIconColor({
      theme,
      disabled
    }),
    rippleColor: getRippleColor({
      theme,
      customRippleColor
    })
  };
};
export const getContentMaxWidth = ({
  isV3,
  iconWidth,
  leadingIcon,
  trailingIcon
}) => {
  if (isV3) {
    if (leadingIcon && trailingIcon) {
      return MAX_WIDTH - (2 * iconWidth + 24);
    }
    if (leadingIcon || trailingIcon) {
      return MAX_WIDTH - (iconWidth + 24);
    }
    return MAX_WIDTH - 12;
  }
  if (leadingIcon) {
    return MAX_WIDTH - (iconWidth + 48);
  }
  return MAX_WIDTH - 16;
};
//# sourceMappingURL=utils.js.map