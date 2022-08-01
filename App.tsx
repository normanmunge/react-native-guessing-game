import { StyleSheet, View } from 'react-native';
import StartGame from './screens/StartGame';

export default function App() {
  const { rootScreen } = styles;
  return (
    <View style={rootScreen}>
      <StartGame />
    </View>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
    backgroundColor: '#ddb52f',
  },
});
