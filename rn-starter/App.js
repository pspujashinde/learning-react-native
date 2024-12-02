import React, { useState } from "react";
import { Text,Button, View } from "react-native";

const App=()=>{
const[show,setshow]=useState(true)


return(
<View>
<Text style={{fontSize:40}}>Toggle component</Text>
<Button title="Toggle"style={{fontSize:20}} onPress={()=>setshow(!show)}/>

{
  show ?<Student/> :null
}

</View>

  )
}


const Student=()=>
{
  return(
    <Text style={{fontSize:30}}>Student's Data</Text>
  )
}
export default App;