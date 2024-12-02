import React from "react";
import { StyleSheet, Text, View } from "react-native";



const App = () => {



  return (
    <View style={styles.main}>
    <View style={styles.box1}></View>
    <View style={styles.box2}></View>
    <View style={styles.box3}></View>
    <View style={styles.box4}></View>
    </View>
  )
}

const styles=StyleSheet.create({
  main:{
    backgroundColor: 'yellow',flex: 1
  },
  box1:
  {
    backgroundColor: 'red',flex: 1
  },
  box2:{
    backgroundColor: 'blue',flex: 1
  },
  box3:{
    backgroundColor: 'green',flex: 1
  },
  box4:{
    backgroundColor: 'grey',flex: 1
  }
})

export default App;