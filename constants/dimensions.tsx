import { Dimensions } from 'react-native';

const _Dimensions = {
  deviceWidth: Dimensions.get('window').width, //screen, window - ios no difference, in android = screen is available width & height including status bar, window = excludes status bar
  deviceHeight: Dimensions.get('window').height,
};

export default _Dimensions;
