import * as React from 'react';
import {
	FlexAlignType,
	GestureResponderEvent,
	StyleProp,
	TextStyle,
	View,
	Text,
	ViewStyle,
} from 'react-native';

import { withInternalTheme } from '../../core/theming';
import { vis } from '../../index';
import type {
	$RemoveChildren,
	EllipsizeProp,
	InternalTheme,
} from '../../types';
import TouchableRipple from '../TouchableRipple/TouchableRipple';

interface Style {
	marginLeft?: number;
	marginRight?: number;
	marginVertical?: number;
	alignSelf?: FlexAlignType;
}

export type Props = $RemoveChildren<typeof TouchableRipple> & {
	amount: string;
	date: Array<string>;
	time: Array<string>;
	dateStyle?: StyleProp<TextStyle>;
	timeStyle?: StyleProp<TextStyle>;
	onPress?: (e: GestureResponderEvent) => void;
	right?: (props: { color: string; style?: Style }) => React.ReactNode;
	direction?: any;
	balance?: any;
	description?: any;
	theme: InternalTheme;
	style?: StyleProp<ViewStyle>;
	balanceStyle?: StyleProp<ViewStyle>;
	amountStyle?: StyleProp<TextStyle>;
	descriptionStyle?: StyleProp<TextStyle>;
	contentStyle?: StyleProp<TextStyle>;
	amountNumberOfLines?: number;
	descriptionNumberOfLines?: number;
	amountEllipsizeMode?: EllipsizeProp;
	descriptionEllipsizeMode?: EllipsizeProp;
	transactions?: any;
};

const ListPaymentTransaction = ({ transactions, ...rest }: Props) => {
	return (
		<TouchableRipple
			{...rest}
			style={[vis.w100, vis.rowRl, vis.fc, vis.ac, vis.mb5]}
			onPress={() => console.log('')}
		>
			<View style={[vis.w75, vis.col, vis.sb, vis.ac]}>
				{transactions.length &&
					transactions.map((tran: any) => (
						<View
							key={String(tran.amount)}
							style={[vis.w75, vis.rowRl, vis.sb, vis.ac]}
						>
							<View
								style={[
									vis.w30,
									vis.col,
									vis.h40p,
									vis.sb,
									vis.asRl,
								]}
							>
								<Text>{tran.amount}</Text>
							</View>
							<View
								style={[
									vis.w45,
									vis.col,
									vis.h40p,
									vis.sb,
									vis.aeRl,
								]}
							>
								<Text>{tran.product}</Text>
							</View>
						</View>
					))}
			</View>
		</TouchableRipple>
	);
};

ListPaymentTransaction.displayName = 'List.LastTransaction';
export default withInternalTheme(ListPaymentTransaction);
