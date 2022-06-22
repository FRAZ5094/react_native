import {Picker} from '@react-native-picker/picker';
import {useState} from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Pressable, TouchableWithoutFeedback, Keyboard, TextInput } from 'react-native';
import Input from "./Input.tsx";

const InputSection = () => {
  
  const [ RPEPickerOpen, setRPEPickerOpen ] = useState(false);  

  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Input text={"Weight"}/>
      </View>
      <View style={styles.wrapper}>
        <Input text={"Reps"}/>
      </View>
      <Input onPress={() => {setRPEPickerOpen(!RPEPickerOpen)}} text={"RPE"}/>
      { RPEPickerOpen && <Picker>
          <Picker.Item {...pickerItemProps} label="RPE6" value="6" />
          <Picker.Item {...pickerItemProps} label="RPE6.5" value="6.5" />
          <Picker.Item {...pickerItemProps} label="RPE7" value="7" />
          <Picker.Item {...pickerItemProps} label="RPE7.5" value="7.5" />
          <Picker.Item {...pickerItemProps} label="RPE8" value="8" />
          <Picker.Item {...pickerItemProps} label="RPE8.5" value="8.5" />
          <Picker.Item {...pickerItemProps} label="RPE9" value="9" />
          <Picker.Item {...pickerItemProps} label="RPE 9.5" value="9.5" />
          <Picker.Item {...pickerItemProps} label="RPE 10" value="10" />
        </Picker>}
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
