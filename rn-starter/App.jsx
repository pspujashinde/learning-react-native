import { View, Text,StyleSheet, Button,Alert} from 'react-native';
import React from 'react';

const App = () => {
const handlePress = () => {

  Alert.alert('thank you');

};
  return (
    <View style ={styles.container}>
    <Text style = {styles.text}>First App Development</Text>
    <Button
      title="Press Me"
      onPress={handlePress}        // Event handler
      type="button"                // Type of button (button, submit, reset)
      disabled={false}             // Disable the button
      style={{ backgroundColor: 'blue', color: 'white' }} // Inline styles
      className="my-button-class"  // CSS class name
      aria-label="My button"       // Accessibility label
    >
    </Button>
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
