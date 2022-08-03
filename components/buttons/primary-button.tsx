import { View, Text, Pressable, StyleSheet } from 'react-native';

interface ButtonProps {
  //text: string;
  //rest of the props
  onPressHandler?: (params: any) => any;
}
const PrimaryButton: React.FC<ButtonProps> = ({ children, onPressHandler }) => {
  const { btnInnerContainer, btnOuterContainer, btnText, btnPressed } = styles;

  return (
    <View style={btnOuterContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed ? [btnInnerContainer, btnPressed] : btnInnerContainer
        }
        onPress={onPressHandler}
        android_ripple={{ color: '#640233' }}
      >
        <Text style={btnText}>{children}</Text>
      </Pressable>
    </View>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  btnOuterContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: 'hidden',
  },
  btnInnerContainer: {
    backgroundColor: '#72063c',
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
  },
  btnText: {
    color: '#fff',
    textAlign: 'center',
  },
  btnPressed: {
    opacity: 0.75,
  },
});
