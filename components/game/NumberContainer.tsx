import { View, Text, StyleSheet } from 'react-native';
import Colors from '../../constants/colors';
import _Dimensions from '../../constants/dimensions';

const NumberContainer = ({ children }: any) => {
  const { container, numberText } = styles;
  return (
    <View style={container}>
      <Text style={numberText}>{children}</Text>
    </View>
  );
};

export default NumberContainer;

const { deviceWidth } = _Dimensions;

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: Colors.accent500,
    padding: deviceWidth < 380 ? 12 : 24,
    margin: deviceWidth < 380 ? 12 : 24,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  numberText: {
    color: Colors.accent500,
    fontSize: deviceWidth < 380 ? 28 : 36,
    fontWeight: 'bold',
  },
});
