import * as React from 'react';
import { StyleProp, TextStyle, View, ViewStyle } from 'react-native';
import type { InternalTheme } from '../../types';
export declare type Props = React.ComponentPropsWithRef<typeof View> & {
    /**
     * Title text for the section.
     */
    title?: string;
    /**
     * Content of the section.
     */
    children: React.ReactNode;
    /**
     * @optional
     */
    theme: InternalTheme;
    /**
     * Style that is passed to Title element.
     */
    titleStyle?: StyleProp<TextStyle>;
    style?: StyleProp<ViewStyle>;
};
declare const _default: React.ComponentType<Pick<import("react-native").ViewProps & React.RefAttributes<View> & {
    /**
     * Title text for the section.
     */
    title?: string | undefined;
    /**
     * Content of the section.
     */
    children: React.ReactNode;
    /**
     * @optional
     */
    theme: InternalTheme;
    /**
     * Style that is passed to Title element.
     */
    titleStyle?: StyleProp<TextStyle>;
    style?: StyleProp<ViewStyle>;
}, "title" | keyof import("react-native").ViewProps | keyof React.RefAttributes<View> | "titleStyle"> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<unknown> | undefined; /**
     * A component used to group list items.
     *
     * <div class="screenshots">
     *   <img src="screenshots/list-section.png" />
     * </div>
     *
     * ## Usage
     * ```js
     * import * as React from 'react';
     * import { List, MD3Colors } from 'react-native-paper';
     *
     * const MyComponent = () => (
     *   <List.Section>
     *     <List.Subheader>Some title</List.Subheader>
     *     <List.Item title="First Item" left={() => <List.Icon icon="folder" />} />
     *     <List.Item
     *       title="Second Item"
     *       left={() => <List.Icon color={MD3Colors.tertiary70} icon="folder" />}
     *     />
     *   </List.Section>
     * );
     *
     * export default MyComponent;
     * ```
     */
}> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<React.ComponentType<import("react-native").ViewProps & React.RefAttributes<View> & {
    /**
     * Title text for the section.
     */
    title?: string | undefined;
    /**
     * Content of the section.
     */
    children: React.ReactNode;
    /**
     * @optional
     */
    theme: InternalTheme;
    /**
     * Style that is passed to Title element.
     */
    titleStyle?: StyleProp<TextStyle>;
    style?: StyleProp<ViewStyle>;
}> & {
    ({ children, title, titleStyle, style, ...rest }: Props): JSX.Element;
    displayName: string;
}, {}>;
export default _default;
