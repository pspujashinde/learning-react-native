import React, { useEffect, useState } from "react";
import { Text,Button, View } from "react-native";

const App=()=>{
const [count,setcount]=useState(0); 
const [data,setdata]=useState(100); 
useEffect(()=>{

  console.warn({count});
},[count])


return(
<View>
<Text style={{fontSize:30}}>use UseEffect with specific state only</Text>
<Text style={{fontSize:30}}>{data}</Text>
<Text style={{fontSize:30}}>{count}</Text>
<Button title="UpdateCount" onPress={()=>{setcount(count+1)}}/>
<Button title="UpdateData" onPress={()=>{setdata(data+1)}}/>

</View>

  )
}

export default App;