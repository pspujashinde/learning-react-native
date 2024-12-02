import React, { useState } from "react";
import { Text,Button, View } from "react-native";

const App=()=>{
const[show,setshow]=useState(true)


return(
<View>
<Text style={{fontSize:40}}>Show/Hide component</Text>
<Button title="show"style={{fontSize:20}} onPress={()=>setshow(true)}/>
<Button title="hide"style={{fontSize:20}} onPress={()=>setshow(false)} />
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