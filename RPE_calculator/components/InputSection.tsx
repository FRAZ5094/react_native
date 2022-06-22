import { View, Text, StyleSheet, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Input from "./Input.tsx";
import RpePicker from './RpePicker.tsx';
import RpeSelectorButton from './RpeSelectorButton';

const InputSection = () => {
  


  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Input text={"Weight"}/>
      </View>
      <View style={styles.wrapper}>
        <Input text={"Reps"}/>
      </View>
      <Input text={"RPE"}/>
    </View>
  )

}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    width: 382,
    height: 230,
    left: 16,
    bottom: 317,
  },
  wrapper: {
    paddingBottom: 16,
  },
  
});
export default InputSection;
