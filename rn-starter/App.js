import * as React from 'react';
import { Button, Text,View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator}from '@react-navigation/stack';

const Stack = createStackNavigator();

const  App=()=> {
  return (
    <NavigationContainer>
     <Stack.Navigator initialRouteName="Login"
     screenOptions={{
  
      headerStyle:{
        backgroundColor:'skyblue',
        },
        headerTintColor:'Black',
        headerTitleStyle:{
        fontSize:20,
      }}}>
        <Stack.Screen name="Login" component={Login} 
        />


        <Stack.Screen name="Home" component={Home}/>
        </Stack.Navigator>
    </NavigationContainer>
  );
}

const Home=()=>{

  return(
    
      <View>
        <Text>Home Screen</Text>
      </View>
  )
}
const Login=(props)=>{

  return(
    
      <View>
        <Text>Login Screen</Text>
        <Button title='Go to Home page' onPress={()=>props.navigation.navigate("Home")}/>
      </View>
  )
}

export default App;
