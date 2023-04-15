import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {Parent} from "./components/Parent";

// Import the context provider to access all that is defined here
import {MyContextProvider} from "./context/MyContext";
export default function App() {
    return (
        <MyContextProvider>
            <View style={styles.container}>
                <Text>Test using context</Text>
                <Parent/>
                <StatusBar style="auto" />
            </View>
        </MyContextProvider>
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
