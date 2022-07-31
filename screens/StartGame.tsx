import { TextInput, View, StyleSheet } from 'react-native';
import Button from '../components/buttons/button';
import NumberInput from '../components/forms/number-input';

function StartGame() {
  const { inputContainer } = styles;
  return (
    <View style={inputContainer}>
      <NumberInput />
      <Button>Reset</Button>
      <Button>Confirm</Button>
    </View>
  );
}

export default StartGame;

const styles = StyleSheet.create({
  inputContainer: {
    padding: 16,
    marginTop: 100,
    marginHorizontal: 24,
    backgroundColor: '#72063c',
    borderRadius: 8,
  },
});
