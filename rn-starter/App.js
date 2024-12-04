import React, { useState } from "react";
import { StyleSheet, Text, TouchableHighlight, TouchableOpacity, View } from "react-native";



const App = () => {
const Skill=[
 { 
  id:1,
  name:'java',
 },
 {
 id:2,
 name:'php'
 },
 {
  id:3,
  name:'NodeJs'
 },
 {
  id:4,
  name:'angular'
 }

]
const[selectedradio,setselectedradio]=useState(1)

  return (
    <View style={styles.main}>
  
    {
      Skill.map((item)=><TouchableOpacity onPress={()=>setselectedradio(item.id)}>
      <View style={styles.radiowraper}>
      <View style={styles.circle}>
        
      {
        selectedradio==item.id?<View style={styles.circlebg}></View>:null
      }
      </View>
      <Text style={styles.radioText}>{item.name}</Text>
      </View>
    </TouchableOpacity>)
    }
    
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