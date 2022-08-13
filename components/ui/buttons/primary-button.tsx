import { View, Text, Pressable, StyleSheet } from 'react-native';
import Colors from '../../../constants/colors';

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
        android_ripple={{ color: Colors.primary600 }}
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
    backgroundColor: Colors.primary500,
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
  },
  btnText: {
    color: Colors.white,
    textAlign: 'center',
  },
  btnPressed: {
    opacity: 0.75,
  },
});
