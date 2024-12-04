import React from "react";
import { StyleSheet, Text, TouchableHighlight, View } from "react-native";



const App = () => {



  return (
    <View style={styles.main}>
  
    <TouchableHighlight>
      <Text style={styles.button}>Button</Text>
    </TouchableHighlight>
    <TouchableHighlight>
      <Text style={[styles.button,styles.success]}>Success</Text>
    </TouchableHighlight>
    <TouchableHighlight>
      <Text style={[styles.button,styles.error]}>Error</Text>
    </TouchableHighlight>
    <TouchableHighlight>
      <Text style={[styles.button,styles.warn]}>Warning</Text>
    </TouchableHighlight>
    </View>
    
  )
}

const styles=StyleSheet.create({
  main:{
    flex:1
  },
  button:{
    backgroundColor:'gray',
    color:'black',
    fontSize:26,
    borderColor:'red',
    borderRadius:10,
    padding:10,
    margin:20,
    textAlign:'center',
    shadowColor:'red',
    elevation:10,
   shadowOpacity:10,
  },
  success:{backgroundColor:'green',},
  error:{backgroundColor:'red',},
  warn:{backgroundColor:'yellow',},
})

export default App;