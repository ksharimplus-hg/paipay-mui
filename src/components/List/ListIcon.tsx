import * as React from 'react';
import { View, ViewStyle, StyleSheet, StyleProp } from 'react-native';

import { withInternalTheme } from '../../core/theming';
import type { InternalTheme } from '../../types';
import Icon, { IconSource } from '../Icon';

export type Props = {
	icon: IconSource;
	color?: string;
	style?: StyleProp<ViewStyle>;
	size: number;
	theme: InternalTheme;
};

const ListIcon = ({ icon, color: iconColor, style, size, theme }: Props) => (
	<View
		style={[theme.isV3 ? styles.itemV3 : styles.item, style]}
		pointerEvents="box-none"
	>
		<Icon source={icon} size={size || 12} color={iconColor} />
	</View>
);

const styles = StyleSheet.create({
	item: {
		margin: 8,
		height: 40,
		width: 40,
		alignItems: 'center',
		justifyContent: 'center',
	},
	itemV3: {
		alignItems: 'center',
		justifyContent: 'center',
	},
});

ListIcon.displayName = 'List.Icon';

export default withInternalTheme(ListIcon);
