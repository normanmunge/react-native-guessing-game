import { StyleSheet, Text } from 'react-native';
import Colors from '../../../constants/colors';

interface instructionsProps {
  children?: string;
}

const Instructions: React.FC<instructionsProps> = ({ children }) => {
  const { text } = styles;
  return <Text style={text}>{children}</Text>;
};

export default Instructions;

const styles = StyleSheet.create({
  text: {
    color: Colors.accent500,
    fontSize: 24,
  },
});
