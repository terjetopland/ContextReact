import {Text, View} from "react-native";
import {GranChild} from "./GranChild";

export const Child = () => {
    return (
        <View>
            <Text>I am Child</Text>
            <GranChild/>
            <GranChild/>
        </View>
    )
}