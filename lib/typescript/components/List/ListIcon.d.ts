import * as React from 'react';
import { ViewStyle, StyleProp } from 'react-native';
import type { InternalTheme } from '../../types';
import { IconSource } from '../Icon';
export declare type Props = {
    icon: IconSource;
    color?: string;
    style?: StyleProp<ViewStyle>;
    size: number;
    theme: InternalTheme;
};
declare const _default: React.ComponentType<Pick<Props, "style" | "color" | "size" | "icon"> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<unknown> | undefined;
}> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<React.ComponentType<Props> & {
    ({ icon, color: iconColor, style, size, theme }: Props): JSX.Element;
    displayName: string;
}, {}>;
export default _default;
