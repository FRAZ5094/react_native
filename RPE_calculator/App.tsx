import { StatusBar } from 'expo-status-bar';
import {useState, useEffect} from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback, Keyboard, TextInput } from 'react-native';
import Background from './assets/Background.svg';
import Title from "./components/Title.tsx";
import { useFonts } from 'expo-font';
import InputSection from './components/InputSection.tsx';
import useKeyboardHeight from 'react-native-use-keyboard-height';
import ResultsSection from './components/ResultsSection';


export default function App() {

  const calculateMax = () => {
      console.log("Calculating max");
    // @ts-ignore: Object is possibly 'null'.
      let newMax=parseInt(weight) + parseInt(reps) + parseInt(RPE);
      setMax(newMax);
  }

  const keyboardHeight = useKeyboardHeight();
  let [ weight, setWeight ] = useState();
  let [ reps, setReps ] = useState();
  let [ RPE, setRPE ] = useState();
  let [ max, setMax ] = useState();

  let InputProps = { weight, setWeight, reps, setReps, RPE, setRPE };

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

