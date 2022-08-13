import { View, StyleSheet, Alert } from 'react-native';
import PrimaryButton from '../components/ui/buttons/primary-button';
import NumberInput from '../components/ui/forms/number-input';
import React, { useState } from 'react';
import Instructions from '../components/ui/texts/instructions';
import Title from '../components/ui/texts/title';
import Card from '../components/ui/Card';

function StartGame({ onPickedNumber }: any) {
  const { screenContainer, buttonsContainer, buttonContainer } = styles;

  const [enteredValue, setEnteredValue] = useState('');

  const enteredValueHandler = (event: any) => {
    setEnteredValue(event.nativeEvent.text);
  };

  const resetInputHandler = () => {
    setEnteredValue('');
  };

  const confirmInputHandler = () => {
    const chosenNumber = parseInt(enteredValue);

    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      //show alert...
      Alert.alert('Invalid Input!', 'Value has to between 0 and 99', [
        { text: 'Okay', style: 'destructive', onPress: resetInputHandler },
      ]);
      return;
    }

    onPickedNumber(chosenNumber);
  };

  return (
    <View style={screenContainer}>
      <Title>Guess My Number</Title>
      <Card>
        <Instructions>Enter a Number</Instructions>
        <NumberInput valueInput={enteredValue} handler={enteredValueHandler} />
        <View style={buttonsContainer}>
          <View style={buttonContainer}>
            <PrimaryButton onPressHandler={resetInputHandler}>
              Reset
            </PrimaryButton>
          </View>
          <View style={buttonContainer}>
            <PrimaryButton onPressHandler={confirmInputHandler}>
              Confirm
            </PrimaryButton>
          </View>
        </View>
      </Card>
    </View>
  );
}

export default StartGame;

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    marginTop: 100,
    alignItems: 'center',
  },
  buttonsContainer: {
    flexDirection: 'row',
  },
  buttonContainer: {
    flex: 1,
  },
});
