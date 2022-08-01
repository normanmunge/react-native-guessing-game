import { StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import StartGame from './screens/StartGame';

export default function App() {
  const { rootScreen } = styles;
  return (
    <LinearGradient colors={['#4e0329', '#ddb52f']} style={rootScreen}>
      <StartGame />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
});
