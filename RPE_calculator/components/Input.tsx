import { View, Text, StyleSheet , TextInput } from 'react-native';

const Input = ({ placeholder, text, onChange }) => {


  return (
      <TextInput keyboardType="decimal-pad" keyboardAppearance="dark" clearTextOnFocus={true} placeholderTextColor="rgba(255, 255, 255, 0.3)" style={styles.input} placeholder={placeholder} text={text} onChange={onChange} />
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
  
});
export default Input;
