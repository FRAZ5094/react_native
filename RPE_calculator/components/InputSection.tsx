import {Picker} from '@react-native-picker/picker';
import {useState} from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Pressable, TouchableWithoutFeedback, Keyboard, TextInput } from 'react-native';
import Input from "./Input";

const InputSection = ({ weight, setWeight, reps, setReps, RPE, setRPE }) => {
  

  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Input placeholder={"Weight"} state={weight} setState={setWeight} />
      </View>
      <View style={styles.wrapper}>
        <Input placeholder={"Reps"} state={reps} setState={setReps}/>
      </View>
      <Input placeholder={"RPE"} state={RPE} setState={setRPE}/>
    </View>
  )

}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    width: 382,
    height: 230,
    left: 16,
    top: 346,
  },
  wrapper: {
    paddingBottom: 16,
  },
  picker: {
    width: 382,
    backgroundColor: "rgba(0, 0, 0, 0.2)",
    borderColor: "rgba(255, 255, 255, 0.6)",
    borderWidth: 3,
    borderRadius: 8,

  },
  RPEInput: {
    height: 66,
    fontSize: 20,
    fontFamily: "SF Pro Display",
    color: "rgba(255, 255, 255, 0.3)",
    border: 2,
    borderColor: "black",

  },
  pickerItem: {
    fontFamily: "SF Pro Display",
  }
  
});
export default InputSection;

const pickerItemProps={ fontFamily: "SF Pro Display", color: "#FFFFFF" };
