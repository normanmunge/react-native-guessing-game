import React from 'react';
import { View, StyleSheet, TextInput } from 'react-native';

interface textInputProps {
  _placeholder: string;
  _placeholderTextColor: string;
}
const _TextInput: React.FC<textInputProps> = ({
  _placeholder,
  _placeholderTextColor,
}) => {
  const {} = styles;
  return (
    <View>
      <TextInput
        autoCapitalize='none'
        autoCorrect={false}
        placeholder={_placeholder}
        placeholderTextColor={_placeholderTextColor}
      />
    </View>
  );
};

export default _TextInput;

const styles = StyleSheet.create({});
