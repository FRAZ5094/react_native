import { StatusBar } from 'expo-status-bar';
import {useState} from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Background from './assets/Background.svg';
import Title from "./components/Title.tsx";
import { useFonts } from 'expo-font';
import InputSection from './components/InputSection.tsx';
import useKeyboardHeight from 'react-native-use-keyboard-height';


export default function App() {

  const keyboardHeight = useKeyboardHeight();

  const [loaded] = useFonts({"SF Pro Display": require("./assets/fonts/SFProDisplay-Regular.ttf")});
  if (!loaded) {
    return null;
  }

  return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <Background style={styles.background} />
          <Title />
          <InputSection />
          <StatusBar style="light" />
        </View>
      </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  background: {
    position: 'absolute',
  },
});

