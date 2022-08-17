import { StyleSheet, View, Text } from 'react-native';
import Colors from '../../constants/colors';

interface props {
  roundNumber?: number;
  guessNumber?: number;
}

const GuessLogItem: React.FC<props> = ({ roundNumber, guessNumber }) => {
  const { listItem, itemText } = styles;

  return (
    <View style={listItem}>
      <Text style={itemText}>#{roundNumber}</Text>
      <Text style={itemText}>Opponent's Guess Number {guessNumber}</Text>
    </View>
  );
};

export default GuessLogItem;

const styles = StyleSheet.create({
  listItem: {
    borderColor: Colors.primary800,
    borderWidth: 1,
    borderRadius: 40,
    padding: 12,
    marginVertical: 8,
    backgroundColor: Colors.accent500,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    elevation: 4,
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowRadius: 3,
  },
  itemText: {
    fontFamily: 'open-sans',
  },
});
