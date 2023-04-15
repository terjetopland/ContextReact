import {Text, View, TextInput, StyleSheet} from "react-native";

export const GranChild = ({id, value, handleInputChange}) => {
    const onChange = (text) => {
        handleInputChange(id, text);
    }
    return (
        <View>
            <Text>I am GrandChild</Text>
            <TextInput
                style={styles.input}
                keyboardType={'numeric'}
                onChangeText={onChange}
                value={value}
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
