import { View, Text, StyleSheet } from 'react-native';

const ResultsSection = ({ max }) => {


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Predicted Max</Text>
      {
        max===undefined ?  
          (<Text style={styles.errortext}>Invalid numbers</Text>)
        :
          (<Text style={styles.maxtext}>{max} kg</Text>)
      }
    </View>
  )

}

const styles = StyleSheet.create({
  title : {
    color: "#FFFFFF",
    fontFamily: "SF Pro Display",
    fontSize: 32,
    position: "absolute",
    top: 189,
  },
  maxtext: {
    color: "#FFFFFF",
    fontFamily: "SF Pro Display",
    fontSize: 96,
    position: "absolute",
    top: 219,
  },
  errortext: {
    color: "#FF3B30",
    fontFamily: "SF Pro Display",
    fontSize: 48,
    position: "absolute",
    top: 248,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

});
export default ResultsSection;
