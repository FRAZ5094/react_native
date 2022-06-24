import { StatusBar } from 'expo-status-bar';
import {useState, useEffect} from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback, Keyboard, TextInput } from 'react-native';
import Background from './assets/Background.svg';
import Title from "./components/Title.tsx";
import { useFonts } from 'expo-font';
import InputSection from './components/InputSection.tsx';
import useKeyboardHeight from 'react-native-use-keyboard-height';
import ResultsSection from './components/ResultsSection';
import { CalculateMax } from "./RPE_calulation";


export default function App() {


  const keyboardHeight = useKeyboardHeight();
  let [ weight, setWeight ] = useState({ value: "", isFilled: false});
  let [ reps, setReps ] = useState({ value: "", isFilled: false});
  let [ RPE, setRPE ] = useState({ value: "", isFilled: false});
  let [ max, setMax ] = useState("");

  let InputProps = { weight, setWeight, reps, setReps, RPE, setRPE };

  useEffect(() => {
    console.log("App.tsx rerender");
    let newMax=CalculateMax(weight.value, reps.value, RPE.value);
    setMax(newMax);

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
          <InputSection {...InputProps} />
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

