import { View, Text, StyleSheet, Alert } from 'react-native';
import Title from '../components/ui/texts/title';
import React, { useState } from 'react';
import NumberContainer from '../components/game/NumberContainer';
import PrimaryButton from '../components/ui/buttons/primary-button';

const generateRandomNumber = (min: number, max: number, exclude: number) => {
  const randomNum = Math.floor(Math.random() * (max - min)) + min;

  if (randomNum === exclude) {
    generateRandomNumber(min, max, exclude);
  } else {
    return randomNum;
  }
};

let minBoundary: number = 1;
let maxBoundary: number = 100;
interface gameScreenProps {
  userNumber: number;
}

const GameScreen: React.FC<gameScreenProps> = ({ userNumber }) => {
  const initialGuess: any = generateRandomNumber(
    minBoundary,
    maxBoundary,
    userNumber
  );

  const [currentGuess, setCurrentGuess] = useState<number>(initialGuess);
  const { screen } = styles;

  const nextGuessHandler = (direction: string) => {
    // direction => 'lower' or 'higher'
    if (
      (direction === 'lower' && currentGuess < userNumber) ||
      (direction === 'higher' && currentGuess > userNumber)
    ) {
      Alert.alert("Don't lie!", 'You know this is wrong...', [
        {
          text: 'Sorry!',
          style: 'cancel',
        },
      ]);
      return;
    }
    if (direction === 'lower') {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }
    console.log(maxBoundary, minBoundary);
    const newRandomNumber: any = generateRandomNumber(
      minBoundary,
      maxBoundary,
      currentGuess
    );

    setCurrentGuess(newRandomNumber);
  };
  return (
    <View style={screen}>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <View>
        <Text>higher or lower?</Text>
        <View>
          <PrimaryButton onPressHandler={nextGuessHandler.bind(this, 'lower')}>
            -
          </PrimaryButton>
          <PrimaryButton onPressHandler={nextGuessHandler.bind(this, 'higher')}>
            +
          </PrimaryButton>
        </View>
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
