import { StatusBar } from 'expo-status-bar';
import {useState} from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Background from './assets/Background.svg';
import Title from "./components/Title.tsx";
import { useFonts } from 'expo-font';
import InputSection from './components/InputSection.tsx';
import useKeyboardHeight from 'react-native-use-keyboard-height';
import ResultsSection from './components/ResultsSection';


export default function App() {

  const keyboardHeight = useKeyboardHeight();
  let max=160;

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
          <ResultsSection max={max} />
          <StatusBar style="light" />
        </View>
      </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    width: "100%",
    height: "100%",
    top: 0,
    left: 0,
  },
  background: {
    position: 'absolute',
  },
});

