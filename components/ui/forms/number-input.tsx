import { View, TextInput, StyleSheet } from 'react-native';
import Colors from '../../../constants/colors';
// import { useState } from 'react';

interface Input {
  [key: string]: any; // allows dynamic keys and value when you might not know the names and types of all object properties in advance
  valueInput: string;
  handler?: any;
}

const NumberInput: React.FC<Input> = (props) => {
  const { valueInput, handler } = props;

  const { numberInput } = styles;
  return (
    <View>
      <TextInput
        style={numberInput}
        maxLength={2}
        keyboardType='number-pad'
        value={valueInput}
        onChange={handler}
      />
    </View>
  );
};

export default NumberInput;

const styles = StyleSheet.create({
  numberInput: {
    fontFamily: 'open-sans-bold',
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: Colors.accent500,
    borderBottomWidth: 2,
    color: Colors.accent500,
    marginVertical: 8,
    textAlign: 'center',
  },
});
