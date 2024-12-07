import * as React from 'react';
import { useState } from 'react';
import { Button, Text, TextInput, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerStyle: {
            backgroundColor: 'skyblue',
          },
          headerTintColor: 'Black',
          headerTitleStyle: {
            fontSize: 20,
          },
        }}
      >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Addnew" component={Addnew} />
        <Stack.Screen
          name="Home"
          component={Home}
          options={({ navigation }) => ({
            headerTitle: () => <Text>MyCouponBag</Text>,
            headerRight: () => (
              <Button title="Add New" onPress={() => navigation.navigate('Addnew')} />
            ),
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const Addnew = () => {
  return (
    <View>
      <TextInput placeholder="Enter your coupon details" />
    </View>
  );
};

const Home = (props) => {
const{user,password}=props.route.params;
  return (
    <View>
      <Text>Home Screen</Text>
      <View >
      <Text>Welcome to MyCouponBag {user} !</Text>
      
      </View>

    </View>
  );
};

const Login = ({ navigation }) => {
  const[user,setuser]=useState("");
  const[password,setpassword]=useState("");
  const age=29
  return (
    <View>
      <Text>Login Screen</Text>
      <TextInput placeholder='Enter your user id' onChangeText={(text)=>setuser(text)}/>
      <TextInput placeholder='Enter your password' secureTextEntry={true} onChangeText={(text)=>setpassword(text)}/> 
    
      <Button title="Sign In" onPress={() => navigation.navigate('Home',{user,password}) }/>
    </View>
  );
};

export default App;
