import {Button, Text, View} from "react-native";
import {Child} from "./Child";
import {useContext} from "react";
import MyContext from "../context/MyContext";

export const Parent = () => {

    // Get the data set in grandchild
    const {area, addInputField, inputList, handleInputChange, removeInputField } = useContext(MyContext);



    return (
        <View>
            <Text>I am Parent, and I am displaying this value {area}.</Text>
            <Text>This is set in the GrandChild through context.</Text>
            <Child inputList={inputList} addInputField={addInputField} inputHandler={handleInputChange} removeInputField={removeInputField}/>
            {inputList.map((inputField) => (
                        <Text>{inputField.value} belongs to input field nr: {inputField.id + 1}</Text>
                ))}


        </View>
    )
}
