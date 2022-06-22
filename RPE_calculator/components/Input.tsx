import { View, Text, StyleSheet , TextInput } from 'react-native';

const Input = ({ text }) => {


  return (
    <View style={styles.container}>
      <TextInput keyboardType="number-pad" placeholderTextColor="rgba(255, 255, 255, 0.3)" style={styles.input} placeholder={text} />
    </View>
  )

}

const styles = StyleSheet.create({
  input: {
    width: 382,
    height: 66,
    backgroundColor: "rgba(0, 0, 0, 0.2)",
    borderColor: "rgba(255, 255, 255, 0.6)",
    borderWidth: 3,
    borderRadius: 8,


    textAlign: "center",
    fontSize: 20,
    fontFamily: "SF Pro Display",
    color: "#FFFFFF",
  },
  container: {
    paddingBottom: 16,
  }
  
});
export default Input;
