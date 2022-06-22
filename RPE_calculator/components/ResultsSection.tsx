import { View, Text, StyleSheet } from 'react-native';

const ResultsSection = ({ max }) => {

  

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Predicted Max</Text>
      <Text style={styles.maxtext}>{max}kg</Text>
    </View>
  )

}

const styles = StyleSheet.create({
  title : {
    color: "#FFFFFF",
    fontFamily: "SF Pro Display",
    fontSize: 32,
    position: "absolute",
    top: 625,
  },
  maxtext: {
    color: "#FFFFFF",
    fontFamily: "SF Pro Display",
    fontSize: 96,
    position: "absolute",
    justifyItems: "center",
    top: 663,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

});
export default ResultsSection;
