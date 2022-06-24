import {Picker} from '@react-native-picker/picker';
import {useState} from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Pressable, TouchableWithoutFeedback, Keyboard, TextInput } from 'react-native';
import Input from "./Input";
import { repsError, RPEError } from "../RPE_calulation";

const InputSection = ({ weight, setWeight, reps, setReps, RPE, setRPE }) => {
  



  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Input placeholder={"Weight"} unit={"kg"} state={weight} setState={setWeight} keyboardType={"decimal-pad"} />
      </View>
      <View style={styles.wrapper}>
        <Input placeholder={"Reps"} unit={"reps"} state={reps} setState={setReps} errorFunction={repsError} keyboardType={"number-pad"}/>
      </View>
      <Input placeholder={"RPE"} unit={"RPE"} state={RPE} setState={setRPE} errorFunction={RPEError} keyboardType={"decimal-pad"}/>
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
