import {Dimensions, PixelRatio} from 'react-native';

const {width, height} = Dimensions.get('window');
const pixelRatio = PixelRatio.get();

const DimensionsConfig = {
  screenWidth: width,
  screenHeight: height,
  pixelRatio: pixelRatio,
  fontSize: {
    small: 16,
    medium: 18,
    large: 24,
  },
  margin: {
    xxSmall: 4,
    xSmall: 6,
    small: 8,
    medium: 16,
    large: 24,
  },
  padding: {
    small: 8,
    medium: 16,
    large: 24,
  },
  buttonBorderRadius: 20,
  inputTextBorderRadius: 10,
  inputTextHeight: 50,
  borderWidth: 1,
};

 export const buttonLargeWidth = DimensionsConfig.screenWidth * 0.9; // 80% of screen width
 export const buttonMediumWidth = DimensionsConfig.screenWidth * 0.6; // 80% of screen width
 export const buttonSmallWidth = DimensionsConfig.screenWidth * 0.3; // 80% of screen width
 export const buttonHeight = DimensionsConfig.screenHeight * 0.1; // 10% of screen height

 export const buttonHeightInPixels = PixelRatio.getPixelSizeForLayoutSize(40);

export default DimensionsConfig;
