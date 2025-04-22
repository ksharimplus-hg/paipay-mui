import { Dimensions, PixelRatio } from 'react-native';

let screenWidth = Dimensions.get('window').width;
let screenHeight = Dimensions.get('window').height;

const widthPercentageToDP = (widthPercent: number | string) => {
	const elemWidth =
		typeof widthPercent === 'number'
			? widthPercent
			: parseFloat(widthPercent);
	return PixelRatio.roundToNearestPixel((screenWidth * elemWidth) / 100);
};

const heightPercentageToDP = (heightPercent: number | string) => {
	const elemHeight =
		typeof heightPercent === 'number'
			? heightPercent
			: parseFloat(heightPercent);
	return PixelRatio.roundToNearestPixel((screenHeight * elemHeight) / 100);
};

export { widthPercentageToDP, heightPercentageToDP };
