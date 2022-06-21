import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions, ImageBackground, Image } from 'react-native';
import Background from './assets/Background.svg';
import Title from "./components/Title.tsx";
import { useFonts } from 'expo-font';
import InputSection from './components/InputSection.tsx';

export default function App() {

  const [loaded] = useFonts({

    "SF Pro Display": require("./assets/fonts/SFProDisplay-Regular.ttf"),

  });

  if (!loaded) {

    return null;

  }
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  return (
    <View style={styles.container}>
      <Background style={styles.background} />
      <Title />
      <InputSection />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    color: "#fff",
  },
  background: {
    position: 'absolute',
  },
});
