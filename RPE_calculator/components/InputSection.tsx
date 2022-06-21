import { View, Text, StyleSheet } from 'react-native';
import Input from "./Input.tsx";

const InputSection = () => {
  


  return (
    <View style={styles.container}>
      <Input text={"Weight"}/>
      <Input text={"Reps"}/>
    </View>
  )

}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    width: 382,
    height: 222,
    left: 16,
    top: 324,
  }
  
});
export default InputSection;
