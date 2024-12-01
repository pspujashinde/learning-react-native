import React, { useEffect, useState } from "react";
import { Text,Button, View } from "react-native";

const App=()=>{
const [count,setcount]=useState(0); 
useEffect(()=>{

  console.warn("Hello");
},[])


return(
<View>
<Text style={{fontSize:30}}>Lifecycle with UseEffect count:{count}</Text>
<Button title="UpdateCount" onPress={()=>{setcount(count+1)}}/>

</View>

  )
}

export default App;