import { View, Text, StyleSheet } from 'react-native';
import Title from '../components/ui/texts/title';
import React, { useState } from 'react';
import NumberContainer from '../components/game/NumberContainer';


const generateRandomNumber = (min:number,max:number,exclude:number) => {
  const randomNum = Math.floor(Math.random() * (max - min)) + min;

  if(randomNum === exclude) {
    generateRandomNumber(min, max, exclude)
  } else {
    return randomNum;
  }
}

interface gameScreenProps {
  userNumber: number
}

const GameScreen: React.FC<gameScreenProps> = ({userNumber}) => {
  const initialGuess = generateRandomNumber(1, 100, userNumber)
  const [currentGuess, setCurrentGuess] = useState(initialGuess)
  const { screen } = styles;
  return (
    <View style={screen}>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
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
