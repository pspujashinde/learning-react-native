import React, { useEffect, useState } from "react";
import { Text,Button, View } from "react-native";

const App=()=>{
const[show,setshow]=useState(true)


return(
<View>
<Text style={{fontSize:30}}>useEffect with unmount life cycle</Text>
<Button title="Toggle"style={{fontSize:20}} onPress={()=>setshow(!show)}/>

{
  show ?<Student/> :null
}

</View>

  )
}


const Student=()=>{

  let timer=setInterval(()=>
  {},2000);

  useEffect(()=>{

    return()=>clearInterval(timer);
  })

  return(
    <Text style={{fontSize:30}}>Student's Data</Text>
  )
}
export default App;