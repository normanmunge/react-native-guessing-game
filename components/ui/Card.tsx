import { StyleSheet, View } from 'react-native';
import Colors from '../../constants/colors';
import _Dimensions from '../../constants/dimensions';

interface cardProps {}

const Card: React.FC<cardProps> = ({ children }) => {
  const { cardContainer } = styles;
  return <View style={cardContainer}>{children}</View>;
};

export default Card;

const { deviceWidth } = _Dimensions;

const styles = StyleSheet.create({
  cardContainer: {
    padding: 16,
    marginTop: deviceWidth < 380 ? 18 : 36,
    marginHorizontal: 24,
    backgroundColor: Colors.primary800,
    borderRadius: 8,
    alignItems: 'center',
  },
});
