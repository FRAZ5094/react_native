import {useState} from 'react';
import { View, Text, StyleSheet, Pressable, TouchableWithoutFeedback, Keyboard } from 'react-native';
import RpePicker from './RpePicker';

const RpeSelectorButton = () => {

  let [ modalOpen, setModalOpen ] = useState(false);

  return (
    <View>

      <Pressable style={styles.button} onPress={() =>{setModalOpen(true)}}>

      <Text style={styles.text}>RPE</Text>

    </Pressable>

    <RpePicker modalOpen={modalOpen} setModalOpen={setModalOpen} />

    </View>
  )

}

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 382,
    height: 66,
    backgroundColor: "rgba(0, 0, 0, 0.2)",
    borderColor: "rgba(255, 255, 255, 0.6)",
    borderWidth: 3,
    borderRadius: 8,
  },
  text: {
    fontSize: 20,
    fontFamily: "SF Pro Display",
    color: "rgba(255, 255, 255, 0.3)",
  }
});
export default RpeSelectorButton;
