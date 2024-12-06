import * as React from 'react';
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

const Home = () => {
  return (
    <View>
      <Text>Home Screen</Text>
    </View>
  );
};

const Login = ({ navigation }) => {
  return (
    <View>
      <Text>Login Screen</Text>
      <Button title="Go to Home page" onPress={() => navigation.navigate('Home')} />
    </View>
  );
};

export default App;
