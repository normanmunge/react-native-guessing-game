import { TextInput, View } from 'react-native';
import Button from '../components/buttons/button';

function StartGame() {
  return (
    <View>
      <TextInput />
      <Button>Reset</Button>
      <Button>Confirm</Button>
    </View>
  );
}

export default StartGame;
