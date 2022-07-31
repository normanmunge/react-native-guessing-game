import { View, TextInput, StyleSheet } from 'react-native';

const NumberInput = ({}) => {
  const { numberInput } = styles;
  return (
    <View>
      <TextInput style={numberInput} maxLength={2} keyboardType='number-pad' />
    </View>
  );
};

export default NumberInput;

const styles = StyleSheet.create({
  numberInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    fontWeight: 'bold',
    borderBottomColor: '#ddb52f',
    borderBottomWidth: 2,
    color: '#ddb52f',
    marginVertical: 8,
    textAlign: 'center',
  },
});
