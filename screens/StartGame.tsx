import { TextInput, View, StyleSheet } from 'react-native';
import Button from '../components/buttons/button';
import NumberInput from '../components/forms/number-input';

function StartGame() {
  const { inputContainer, buttonsContainer, buttonContainer } = styles;
  return (
    <View style={inputContainer}>
      <NumberInput />
      <View style={buttonsContainer}>
        <View style={buttonContainer}>
          <Button>Reset</Button>
        </View>
        <View style={buttonContainer}>
          <Button>Confirm</Button>
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
    backgroundColor: '#4e0329',
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
