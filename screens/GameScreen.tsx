import { View, Text, StyleSheet } from 'react-native';
import Title from '../components/texts/title';

const GameScreen = () => {
  const { screen } = styles;
  return (
    <View style={screen}>
      <Title>Opponent's Guess</Title>
      {/* GUESS */}
      <View>
        <Text>higher or lower?</Text>
        {/* + - */}
      </View>
      <View>
        <Text>LOG ROUNDS</Text>
      </View>
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
  },
});
