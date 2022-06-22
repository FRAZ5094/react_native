import { View, Text, StyleSheet, Modal, TouchableOpacity, Pressable, TouchableWithoutFeedback, Keyboard } from 'react-native';
import {Picker} from '@react-native-picker/picker';
import React, { useState } from 'react';

const RpePicker = ({ modalOpen, setModalOpen }) => {

  const [selectedLanguage, setSelectedLanguage] = useState(); 	


  return (
    <Modal transparent={true} visible={modalOpen} animationType="slide">
      <TouchableWithoutFeedback onPress={()=> {setModalOpen(false)}}><View style={styles.toucharea}></View></TouchableWithoutFeedback>
        <View style={styles.container}>

          <View style={styles.topbar}>

            <Pressable onPress={() => {setModalOpen(!modalOpen)}}><Text style={styles.topbartext}>Done</Text></Pressable>

          </View>

          <Picker
            style={styles.picker}
            selectedValue={selectedLanguage}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedLanguage(itemValue)
            }>
            <Picker.Item {...pickerProps}  label="6" value="6" />
            <Picker.Item {...pickerProps}  label="6.5" value="6.5" />
            <Picker.Item {...pickerProps}  label="7" value="7" />
            <Picker.Item {...pickerProps}  label="7.5" value="7.5" />
            <Picker.Item {...pickerProps}  label="8" value="8" />
            <Picker.Item {...pickerProps}  label="8.5" value="8.5" />
            <Picker.Item {...pickerProps}  label="9" value="9" />
            <Picker.Item {...pickerProps}  label="9.5" value="9.5" />
            <Picker.Item {...pickerProps}  label="10" value="10" />
          </Picker>

        </View>
    </Modal>
  )

}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: 346,
    backgroundColor: "rgba(0, 0, 0, 0.6)",
  },
  picker: {
  },
  topbar: {
    backgroundColor: "rgba(0, 0, 0, 0.2)",
    height: 50,
    justifyContent: "center",
    justifyItems: "right"
  },
  topbartext: {
    textAlign: "right",
    paddingRight: 8,
    fontFamily: "SF Pro Display",
    color: "#FFFFFF",
    fontSize: 20,
  },
  toucharea :{
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
  },
});

const pickerProps={ fontFamily: "SF Pro Display", color: "#FFFFFF" };
export default RpePicker;
