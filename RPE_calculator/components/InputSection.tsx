import { View, Text, StyleSheet } from 'react-native';
import Input from "./Input.tsx";
import RpePicker from './RpePicker.tsx';
import RpeSelectorButton from './RpeSelectorButton';

const InputSection = () => {
  


  return (
    <View style={styles.container}>
      <Input text={"Weight"}/>
      <Input text={"Reps"}/>
      <RpeSelectorButton />
    </View>)

}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    width: 382,
    height: 222,
    left: 16,
    top: 305,
  }
  
});
export default InputSection;
