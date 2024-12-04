import React, { useState } from "react";
import { StyleSheet, Text, TouchableHighlight, TouchableOpacity, View ,ActivityIndicator, Button} from "react-native";



const App = () => {

const[show,setshow]=useState(false)

const DisplayIndicator=()=>{
  setshow(true);



setTimeout=(()=>{
    setshow(false);
  },5000);
}


  return (
    <View style={styles.main}>
<ActivityIndicator size="large"color="red" animating={show}/>
<Button title="submit" onPress={DisplayIndicator}/>
    </View>

    
  )
}

const styles=StyleSheet.create({
  main:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',

  }
  
  
})

export default App;