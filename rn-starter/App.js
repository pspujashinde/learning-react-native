import React, { useState } from "react";
import { StyleSheet, Text, TouchableHighlight, TouchableOpacity, View } from "react-native";



const App = () => {

const[selectedradio,setselectedradio]=useState(1)

  return (
    <View style={styles.main}>
  
    <TouchableOpacity onPress={()=>setselectedradio(1)}>
      <View style={styles.radiowraper}>
      <View style={styles.circle}>
        
      {
        selectedradio==1?<View style={styles.circlebg}></View>:null
      }
      </View>
      <Text style={styles.radioText}>Radio 1</Text>
      </View>
    </TouchableOpacity>
    <TouchableOpacity onPress={()=>setselectedradio(2)}>
      <View style={styles.radiowraper}>
      <View style={styles.circle}>
        
      {
        selectedradio==2?<View style={styles.circlebg}></View>:null
      }
      </View>
      <Text style={styles.radioText}>Radio 2</Text>
      </View>
    </TouchableOpacity>
    </View>

    
  )
}

const styles=StyleSheet.create({
  main:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',

  },
  circle:{
    
    height:40,
    width:40,
    borderRadius:20,
    borderWidth:2,
    borderColor:'black',
    margin:10,
    
    
  },
  circlebg:{
    backgroundColor:'black',
    height:28,
    width:28,
    borderRadius:20,
    margin:4,
  

  },
  radioText:{
    
    color:'black',
    fontSize:26,
    padding:10,
    margin:20,
    textAlign:'center',
    
    
  },
  radiowraper:{
    flexDirection:'row',
    alignItems:'center',
  },
  
})

export default App;