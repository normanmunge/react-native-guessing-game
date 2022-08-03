import { TextInput, View, StyleSheet, Alert } from 'react-native';
import PrimaryButton from '../components/buttons/primary-button';
import NumberInput from '../components/forms/number-input';
import { useState } from 'react';

function StartGame() {
  const { inputContainer, buttonsContainer, buttonContainer } = styles;

  const [enteredValue, setEnteredValue] = useState('');

  const enteredValueHandler = (event: any) => {
    setEnteredValue(event.nativeEvent.text);
  };

  const resetInputHandler = () => {
    setEnteredValue('');
  };

  const confirmInputHandler = () => {
    const chosenNumber = parseInt(enteredValue);

    console.log(
      'THE CHOSEN NUMBER',
      chosenNumber,
      'AND ENTERED VALUE',
      enteredValue
    );
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      //show alert...
      Alert.alert('Invalid Input!', 'Value has to between 0 and 99', [
        { text: 'Okay', style: 'destructive', onPress: resetInputHandler },
      ]);
      return;
    }

    console.log('Valid number', enteredValue);
  };

  return (
    <View style={inputContainer}>
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
    </View>
  );
}

export default StartGame;

const styles = StyleSheet.create({
  inputContainer: {
    padding: 16,
    marginTop: 100,
    marginHorizontal: 24,
    backgroundColor: '#3b021f',
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonsContainer: {
    flexDirection: 'row',
  },
  buttonContainer: {
    flex: 1,
  },
});
