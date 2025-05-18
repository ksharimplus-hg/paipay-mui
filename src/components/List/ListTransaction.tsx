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

import Attachment from '../../assets/attachment.png';
import { withInternalTheme } from '../../core/theming';
import { vis } from '../../index';
import type {
	$RemoveChildren,
	EllipsizeProp,
	InternalTheme,
} from '../../types';
import Chip from '../Chip/Chip';
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
	attachStyle?: StyleProp<TextStyle>;
	balanceTitle: string;
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
	amountNumberOfLines?: number;
	descriptionNumberOfLines?: number;
	amountEllipsizeMode?: EllipsizeProp;
	descriptionEllipsizeMode?: EllipsizeProp;
	receiptAttached?: any;
	receiptOnClick?: any;
	attachmentTitle?: any;
};

const ListTransaction = ({
	key,
	date,
	time,
	direction,
	right,
	amount,
	balance,
	balanceTitle,
	description,
	onPress,
	theme,
	style,
	amountNumberOfLines = 1,
	descriptionNumberOfLines = 2,
	amountEllipsizeMode,
	descriptionEllipsizeMode,
	receiptAttached,
	receiptOnClick,
	attachmentTitle,
	descriptionStyle,
	amountStyle,
	balanceStyle,
	dateStyle,
	timeStyle,
	attachStyle,
	...rest
}: Props) => {
	return (
		<TouchableRipple
			key={key}
			{...rest}
			style={[vis.w100, vis.rowRl, vis.fc, vis.ac, vis.mb2]}
			onPress={onPress}
		>
			<View
				style={[
					vis.w90,
					vis.col,
					vis.sb,
					vis.ac,
					{ borderBottomWidth: 0.2, borderBottomColor: 'gray' },
				]}
			>
				<View style={[vis.w90, vis.rowRl, vis.sb, vis.ac]}>
					<View style={[vis.w30, vis.col, vis.sb, vis.asRl]}>
						<Text style={timeStyle}>{balance}</Text>
						<Text style={balanceStyle}>{balanceTitle}</Text>
					</View>

					<View style={[vis.w30, vis.col, vis.sb, vis.aeRl]}>
						<Text style={timeStyle}>{time}</Text>
						<Text style={dateStyle}>{date}</Text>
					</View>
				</View>
				<View
					style={[
						vis.w75,
						vis.col,
						vis.feRl,
						vis.ac,
						!receiptAttached && vis.pb2,
					]}
				>
					<Text style={[amountStyle, vis.fos4, vis.mb1]}>
						{amount}
					</Text>
					<Text style={descriptionStyle}>{description}</Text>
				</View>
				{receiptAttached && (
					<View
						style={[
							vis.w75,
							vis.col,
							vis.feRl,
							vis.fc,
							vis.ac,
							vis.mt2,
							vis.mb2,
						]}
					>
						<Chip
							icon={Attachment}
							onPress={receiptOnClick}
							style={[{ height: 40 }]}
							mode={'outlined'}
						>
							{attachmentTitle}
						</Chip>
					</View>
				)}
			</View>
		</TouchableRipple>
	);
};

ListTransaction.displayName = 'List.Transaction';

export default withInternalTheme(ListTransaction);