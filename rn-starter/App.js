import { View, Text,StyleSheet,TextInput, Button,Alert} from 'react-native';
import React ,{useState}from 'react';


const App = () =>{


  const[name,setname]=useState('');
 

return(
  <View>
    
    <TextInput
    style={{fontSize:30,borderColor:'blue',borderWidth:2,margin:40}}
    placeholder='Enter your name'
    value={name}
    onChangeText={(text)=>setname(text)}
    />
    <Text style={{fontSize:30}}>Your Name is :{name}
    
    </Text>
  
  </View>
);
};

export default App;