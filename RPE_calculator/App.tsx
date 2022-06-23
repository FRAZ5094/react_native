import { StatusBar } from 'expo-status-bar';
import {useState, useEffect} from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Background from './assets/Background.svg';
import Title from "./components/Title.tsx";
import { useFonts } from 'expo-font';
import InputSection from './components/InputSection.tsx';
import useKeyboardHeight from 'react-native-use-keyboard-height';
import ResultsSection from './components/ResultsSection';


export default function App() {

  const calculateMax = () => {
    console.log("Calculating max");
    max=weight+reps+RPE;
  }

  const keyboardHeight = useKeyboardHeight();
  const [ weight, setWeight ] = useState(0);
  const [ reps, setReps ] = useState(0);
  const [ RPE, setRPE ] = useState(0);
  let max=200;

  useEffect(() => {
    console.log("App.tsx rerender");
    calculateMax();

  },[weight,reps,RPE]);

  const [loaded] = useFonts({"SF Pro Display": require("./assets/fonts/SFProDisplay-Regular.ttf")});
  if (!loaded) {
    return null;
  }

  return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <Background style={styles.background} />
          <Title />
          <ResultsSection max={max} />
          <InputSection />
          <StatusBar style="light" />
        </View>
      </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    position: 'absolute',
  },
});

