import { View, Text,StyleSheet} from 'react-native';
import React from 'react';

const App = () => {
  return (
    <View style ={styles.container}>
    <Text style = {styles.text}>First App Development</Text>
    </View>
  );
};

const styles = StyleSheet.create(
  {
    container : {

      justifyContent : 'center',
      alignItems : 'center',
      flex : 1,
      backgroundColor : 'ffff'
    },
    text : {
      fontSize : 24,
      fontStyle: 'italic',
    }
  });

export default App;
