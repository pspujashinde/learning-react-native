import React, { useState } from "react";
import { StyleSheet, Text, Modal, Button,View} from "react-native";



const App = () => {

const[showmodal,setshowmodal]=useState(false)


  return (
<View style={styles.main}>
  <Modal 
   transparent={true}
   visible={showmodal}
   animationType={"slide"}
   >
    <View style={styles.centerView}>
      <View style={styles.modelView}>
        <Text style={{fontSize:20,marginBottom:20}}>Hello this is dialog box</Text>
        <Button title="close" onPress={()=>setshowmodal(false)}/>
      </View>
    </View>
  </Modal>
<View style={styles.buttonView}>
<Button title="Open modal" onPress={()=>setshowmodal(true)}/>
</View>
    
    </View>

    
  )
}

const styles=StyleSheet.create({
  main:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',

  },
  buttonView:
  {
    flex:1,
    justifyContent:'flex-end',

  },
  centerView:
  {
flex:1,
justifyContent:'center',
alignItems:'center',
  },
  modelView:{
    backgroundColor:'skyblue',
    padding:30,
    borderRadius:20,
    elevation:5,
    shadowOpacity:5,
  }
  
})

export default App;