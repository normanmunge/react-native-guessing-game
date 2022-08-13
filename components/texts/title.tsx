import React from 'react';
import { Text, StyleSheet } from 'react-native';
import Colors from '../../constants/colors';

interface TitleProps {
  children?: string;
}
const Title: React.FC<TitleProps> = ({ children }) => {
  const { title } = styles;
  return <Text style={title}>{children}</Text>;
};

export default Title;

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.accent600,
    textAlign: 'center',
    borderWidth: 2,
    borderColor: Colors.accent600,
    padding: 12,
  },
});
