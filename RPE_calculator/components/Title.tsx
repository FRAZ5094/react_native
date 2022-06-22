import { View, Text, StyleSheet } from 'react-native';

const Title = () => {
  return (
      <Text style={styles.text}>RPE Calculator</Text>
  );
};

const styles = StyleSheet.create({
  text: {
    position: "absolute",
    width: 298,
    height: 57,
    left: 58,
    top: 273,
    fontFamily: 'SF Pro Display',
    fontWeight: "bold",
    fontSize: 48,
    color: "#FFFFFF",
  }
  
});
export default Title;
