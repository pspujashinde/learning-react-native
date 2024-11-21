import { View, Text,StyleSheet,TextInput, Button,Alert} from 'react-native';
import React ,{useState}from 'react';


const App = () =>{


  const[name,setname]=useState('');
  const[email,setemail]=useState('');
  const[password,setpassword]=useState('');
  

  const handleSubmit = () => {
   
    if (!name || !email || !password) {
      Alert.alert('Error', 'Please fill in all fields!');
      
    }
  else{
  
  Alert.alert('Success', 'Form Submitted!');
 
  }
  };

  const AllClear = () =>
  {
  //setdisplay(false);
  setname('');
  setemail('');
  setpassword('');
  }
return(
  <View>
    <Text style={{fontSize:20,margin:30}}>Please fill the below form</Text>
    <TextInput
    style={{fontSize:30,borderColor:'blue',borderWidth:2,margin:40}}
    placeholder='Enter  full  name'
    value={name}
    onChangeText={(text)=>setname(text)}
    />

<TextInput
    style={{fontSize:30,borderColor:'blue',borderWidth:2,margin:40}}
    placeholder='Enter your Email'
    value={email}
    onChangeText={(text)=>setemail(text)}
    />

<TextInput
    style={{fontSize:30,borderColor:'blue',borderWidth:2,margin:40}}
    placeholder='Enter your Password'
    value={password}
    secureTextEntry={true}
    onChangeText={(text)=>setpassword(text)}
    />

    
  <Button title='Submit'onPress={handleSubmit}/>
  {/* Conditionally Render Display Information */}
  
  <Button title='Clear'onPress={AllClear}/>



  </View>
  
);


};

export default App;