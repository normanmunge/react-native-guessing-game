import React from 'react';
import { Text, StyleSheet } from 'react-native';

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
    color: '#ddb52f',
    textAlign: 'center',
    borderWidth: 2,
    borderColor: '#ddb52f',
    padding: 12,
  },
});
