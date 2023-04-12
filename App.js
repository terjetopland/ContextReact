import { StatusBar } from 'expo-status-bar';
import {Button, StyleSheet, Text, View, TextInput} from 'react-native';
import {useEffect, useState} from "react";



export const Child = ({dataFromGrandChildToParent}) => {
    const [messageFromChild, setMessageFromChild] = useState(0.0)

    return (
      <View>
        <TextInput
            placeholder={`Please enter the value`}
            onChangeText={(txt) => setMessageFromChild(txt)}
        />
        <Button onPress={() => dataFromGrandChildToParent(messageFromChild)}>Test me</Button>
      </View>
    )
}
export const Parent = () => {
    const [dataFromGrandChild, setDataFromGrandChild] = useState(0.0)
    const dataFromGrandChildToParent = (messageFromChild) => {
        console.log(`The message from the child is: ${messageFromChild}`)
        setDataFromGrandChild(messageFromChild)
    }

    return (
      <Child dataFromGrandChildToParent={dataFromGrandChildToParent}/>
    )
}


export default function App() {
    const [dataFromChild, setDataFromChild] = useState(0.0)

    const SendButtonAndGetData = () => {

    }

  return (
    <View style={styles.container}>
      <Text>Test send function from parent to child</Text>
      <Parent/>
      <StatusBar style="auto" />
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

// Parent component
