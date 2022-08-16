import { StyleSheet, Text } from 'react-native';
import Colors from '../../../constants/colors';

interface instructionsProps {
  children?: string;
  _style?: object;
}

const Instructions: React.FC<instructionsProps> = ({ children, _style }) => {
  const { text } = styles;
  return <Text style={[text, _style]}>{children}</Text>;
};

export default Instructions;

const styles = StyleSheet.create({
  text: {
    fontFamily: 'open-sans',
    color: Colors.accent500,
    fontSize: 24,
  },
});
