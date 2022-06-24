import { View, Text, StyleSheet , TextInput } from 'react-native';

const Input = ({ placeholder, state, setState, unit, errorFunction, keyboardType }) => {


  return (
    <TextInput 
    keyboardType={keyboardType}
    keyboardAppearance="dark" 
    placeholderTextColor="rgba(255, 255, 255, 0.3)" 
    style={ errorFunction && errorFunction(state) ? styles.inputerror : styles.input } 
    placeholder={placeholder} 
    onChangeText={ text => setState({ value: text, isFilled: false })}
    value={ state.isFilled ? state.value + " " + unit : state.value }
    onFocus={() => setState({ ...state, isFilled: false })} 
    onEndEditing={() => {
      if (state.value =="") {
        setState({ ...state, isFilled: false });
      } else {
        setState({...state, isFilled: true });
      }
    }}
    />
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
  inputerror: {
    width: 382,
    height: 66,
    backgroundColor: "rgba(0, 0, 0, 0.2)",
    borderColor: "rgba(255, 59, 48, 0.6)",
    borderWidth: 3,
    borderRadius: 8,


    textAlign: "center",
    fontSize: 20,
    fontFamily: "SF Pro Display",
    color: "#FFFFFF",
  },
  
});
export default Input;
