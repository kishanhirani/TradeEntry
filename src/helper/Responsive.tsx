import { Dimensions, Platform } from 'react-native';
export const height = Dimensions.get('window').height;
export const width = Dimensions.get('window').width;

const aspectRatio = width / (Platform.OS === "ios" ? 480 : 450);

const getLayoutSize = (valueDimen: number) => {
  var newScale = ((aspectRatio * valueDimen) - valueDimen) * 0.5 + valueDimen
  return newScale
};

const getFontSize = (valueFontSize: number) => {
  var newScale = ((aspectRatio * valueFontSize) - valueFontSize) * 0.8 + valueFontSize
  return newScale
};

export {
  getLayoutSize,
  getFontSize
};
