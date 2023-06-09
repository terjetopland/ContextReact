import {Button, Text, View} from "react-native";
import {GranChild} from "./GranChild";

export const Child = ({inputList, addInputField, removeInputField, inputHandler}) => {
    return (
        <View>
            <Text>I am Child</Text>
            {inputList.map((input) => (
                <GranChild
                    key={input.id}
                    id={input.id}
                    value={input.value}
                    handleInputChange={inputHandler}
                />
            ))}
            <Button title={'Add input field'} onPress={addInputField}/>
            <Button title={'Remove input field'} onPress={removeInputField}/>
        </View>
    )
}
