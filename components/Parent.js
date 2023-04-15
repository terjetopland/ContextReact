import {Button, Text, View} from "react-native";
import {Child} from "./Child";
import {useContext} from "react";
import MyContext from "../context/MyContext";

export const Parent = () => {

    // Get the data set in grandchild
    const {area, setIsCalculating} = useContext(MyContext);



    return (
        <View>
            <Text>I am Parent, and I am displaying this value {area}.</Text>
            <Text>This is set in the GrandChild through context.</Text>
            <Child/>
            <Button>Calculate and set the the total area of all grandChildren</Button>
        </View>
    )
}