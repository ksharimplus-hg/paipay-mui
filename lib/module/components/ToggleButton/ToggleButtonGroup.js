import * as React from 'react';
export const ToggleButtonGroupContext =
/*#__PURE__*/
//@ts-expect-error: TS can't ensure the type from Group to children
React.createContext(null);

/**
 * Toggle group allows to control a group of toggle buttons.</br>
 * It doesn't change the appearance of the toggle buttons. If you want to group them in a row, check out [ToggleButton.Row](ToggleButtonRow).
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { ToggleButton } from 'react-native-paper';
 *
 * const MyComponent = () => {
 *   const [value, setValue] = React.useState('left');
 *
 *   return (
 *     <ToggleButton.Group
 *       onValueChange={value => setValue(value)}
 *       value={value}>
 *       <ToggleButton icon="format-align-left" value="left" />
 *       <ToggleButton icon="format-align-right" value="right" />
 *     </ToggleButton.Group>
 *   );
 * };
 *
 * export default MyComponent;
 *```
 */
const ToggleButtonGroup = ({
  value,
  onValueChange,
  children
}) => /*#__PURE__*/React.createElement(ToggleButtonGroupContext.Provider, {
  value: {
    value,
    onValueChange
  }
}, children);
ToggleButtonGroup.displayName = 'ToggleButton.Group';
export default ToggleButtonGroup;

// @component-docs ignore-next-line
export { ToggleButtonGroup };
//# sourceMappingURL=ToggleButtonGroup.js.map