import { View, Text,StyleSheet, Button,Alert} from 'react-native';
import React from 'react';


const JSX = () =>{

const GetName = (name) =>{


  console.warn(name);


  };

return(
  <View>
    <Text style={ { fontSize : 50 } }>onpress</Text>
    <Button title ="PRESS" onPress={()=> GetName('Hello Pooja Sathe')}/>
    </View>
);
};
export default JSX;