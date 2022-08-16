import { View, Text, StyleSheet, Alert } from 'react-native';
import Title from '../components/ui/texts/title';
import React, { useState, useEffect, useMemo } from 'react';
import NumberContainer from '../components/game/NumberContainer';
import PrimaryButton from '../components/ui/buttons/primary-button';
import Card from '../components/ui/Card';
import Instructions from '../components/ui/texts/instructions';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../constants/colors';

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
  onGameOver?: any;
}

const GameScreen: React.FC<gameScreenProps> = ({ userNumber, onGameOver }) => {
  // const initialGuess: any = useMemo(
  //   //returns a memoized value. The hook is used to keep expensive, resource intensive functions from needlessly running
  //   () => generateRandomNumber(minBoundary, maxBoundary, userNumber),
  //   [minBoundary, maxBoundary, userNumber]
  // );
  const initialGuess: any = generateRandomNumber(1, 100, userNumber);

  const [currentGuess, setCurrentGuess] = useState<number>(initialGuess);
  const { screen, buttonContainer, buttonsContainer, instructionsText } =
    styles;

  useEffect(() => {
    //enables perfoming sideEffects. It lets react know that the component needs to do sthn after rendering
    if (currentGuess === userNumber) {
      onGameOver();
    }
  }, [currentGuess, userNumber, onGameOver]);

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
      <Card>
        <Instructions _style={instructionsText}>Higher or Lower?</Instructions>
        <View style={buttonsContainer}>
          <View style={buttonContainer}>
            <PrimaryButton
              onPressHandler={nextGuessHandler.bind(this, 'lower')}
            >
              <Ionicons name='md-remove' size={24} color={Colors.white} />
            </PrimaryButton>
          </View>
          <View style={buttonContainer}>
            <PrimaryButton
              onPressHandler={nextGuessHandler.bind(this, 'higher')}
            >
              <Ionicons name='md-add' size={24} color={Colors.white} />
            </PrimaryButton>
          </View>
        </View>
      </Card>
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
  instructionsText: {
    marginBottom: 12,
  },
  buttonsContainer: {
    flexDirection: 'row',
  },
  buttonContainer: {
    flex: 1,
  },
});
