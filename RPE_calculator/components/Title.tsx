import { View, Text, StyleSheet } from 'react-native';

const Title = (props) => {

  return (
      <Text style={styles.text}>RPE Calculator</Text>
  )

}

const styles = StyleSheet.create({
  text: {
    position: "absolute",
    left: 58,
    top: 224,
    fontFamily: 'SF Pro Display', /* make font work */
    fontWeight: "bold",
    fontSize: 48,

    color: "#FFFFFF",
  }
  
});
export default Title;
