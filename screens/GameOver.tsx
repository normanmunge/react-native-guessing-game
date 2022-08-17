import { Text, View, Image, StyleSheet } from 'react-native';
import PrimaryButton from '../components/ui/buttons/primary-button';
import Title from '../components/ui/texts/title';
import Colors from '../constants/colors';

interface gameOverProps {
  rounds?: number;
  userNumber?: number;
  onStartNumber?: (params: any) => any;
}

const GameOver: React.FC<gameOverProps> = ({
  rounds = 0,
  userNumber = 0,
  onStartNumber,
}) => {
  const { imageContainer, image, screenContainer, summaryText, highlight } =
    styles;
  return (
    <View style={screenContainer}>
      <Title>GAME OVER!</Title>
      <View style={imageContainer}>
        <Image style={image} source={require('../assets/images/success.png')} />
      </View>
      <Text style={summaryText}>
        You're phone needed <Text style={highlight}>{rounds}</Text> rounds to
        guess the number <Text style={highlight}>{userNumber}</Text>.
      </Text>
      <PrimaryButton onPressHandler={onStartNumber}>
        Start New Game
      </PrimaryButton>
    </View>
  );
};

export default GameOver;

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    borderRadius: 150,
    width: 300,
    height: 300,
    borderWidth: 3,
    borderColor: Colors.primary800,
    overflow: 'hidden',
    margin: 36,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  summaryText: {
    fontFamily: 'open-sans',
    fontSize: 23,
    textAlign: 'center',
    marginBottom: 24,
  },
  highlight: {
    fontFamily: 'open-sans-bold',
    color: Colors.primary500,
  },
});
