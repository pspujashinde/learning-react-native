import {  Text, View } from 'react-native';
import { useEffect, useState } from 'react';

const App = () => {
  const [data, setdata] = useState(undefined);

  const getapicall = async () => {
    // API Call
    const url = "https://jsonplaceholder.typicode.com/posts/1";
    const result = await fetch(url);
    const data = await result.json(); // Declare 'Final' here
    setdata(data);
  };

  useEffect(() => {
    getapicall();
  }, []);

  return (
    <View>
      <Text>API CALL</Text>
      {data ? (
        <View>
          <Text>{data.userId}</Text>
          <Text>{data.id}</Text>
          <Text>{data.title}</Text>
          <Text>{data.body}</Text>
        </View>
      ) : null}
    </View>
  );
};

export default App;
