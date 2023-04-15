import {Text, View, TextInput, StyleSheet} from "react-native";
import {useContext, useState} from "react";
import MyContext from "../context/MyContext";



export const GranChild = () => {
    // set the area through the context. It is now available for everyone in the App.
    const {setArea} = useContext(MyContext);


    return (
        <View>
            <Text>I am GrandChild</Text>
            <TextInput
                style={styles.input}
                onChangeText={(text) => setArea(text) }
            />
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        backgroundColor: 'gainsboro',
    },
});