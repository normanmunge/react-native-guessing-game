import { StyleSheet, View } from 'react-native';
import Colors from '../../constants/colors';

interface cardProps {}

const Card: React.FC<cardProps> = ({ children }) => {
  const { cardContainer } = styles;
  return <View style={cardContainer}>{children}</View>;
};

export default Card;

const styles = StyleSheet.create({
  cardContainer: {
    padding: 16,
    marginTop: 36,
    marginHorizontal: 24,
    backgroundColor: Colors.primary800,
    borderRadius: 8,
    alignItems: 'center',
  },
});
