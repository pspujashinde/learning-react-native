import {  Text, View,ScrollView } from 'react-native';
import { useEffect, useState } from 'react';

const App = () => {
  const [data, setdata] = useState(undefined);

  const getapicall = async () => {
    // API Call
    const url = "https://jsonplaceholder.typicode.com/comments?postId=1";
    const result = await fetch(url);
    const data = await result.json();
    setdata(data);
  };

  useEffect(() => {
    getapicall();
  }, []);

  return (
    <View>
      <Text>map funtion and List with API Call  </Text>
    
   <ScrollView>
            {
              data.length ?

              data.map((item)=>
                      <View>
                        <Text>{item.id}</Text>
                        <Text>{item.name}</Text>
                        <Text>{item.email}</Text>
                        <Text>{item.body}</Text>
                      </View>
              
                      )

              :null

            }

   </ScrollView>
   </View>
  );
};

export default App;
