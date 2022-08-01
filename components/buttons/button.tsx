import { View, Text, Pressable, StyleSheet } from 'react-native';

type ButtonProps = {
  //text: string;
  //rest of the props
};
const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  const { btnInnerContainer, btnOuterContainer, btnText, btnPressed } = styles;
  const onPressHandler = () => {
    console.log('PRESSED!');
  };
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

export default Button;

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
