import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions, ImageBackground, Image } from 'react-native';
import Background from './assets/Background.svg';
import Title from "./components/Title.tsx";

export default function App() {
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  return (
    <View style={styles.container}>
      <Background style={styles.background} />
      <Title />
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
