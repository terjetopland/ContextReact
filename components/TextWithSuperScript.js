
import React from "react";
import {Text, View, StyleSheet} from "react-native";

export const TextWithSuperScript = ({text, superScript, textSize}) => {
    let thisTextSize = textSize;
    let thisText = text;
    let thisSuperScript = superScript;

    if (!Number(textSize) || !textSize) {
        thisTextSize = 20;
        console.log('The text size is set to 20 by default')
    }
    if (!text ) {
        thisText = 'Enter a text in the component';
    }
    if (!superScript) {
        thisSuperScript = 'enter superscript in the component';
    }

    return (
            <View style={styles(thisTextSize).row}>
                <Text style={styles(thisTextSize).normalText}>
                    {thisText}
                </Text>
                <Text style={ styles(thisTextSize).superScript}>
                    {thisSuperScript}
                </Text>
            </View>
    )
}

const styles = (sizeText) => StyleSheet.create({
    row: {
        flexDirection: 'row',
        alignItems: 'flex-start',
    },
    normalText: {
        fontSize: sizeText,
        lineHeight: sizeText + (sizeText * 0.5),
    },
    superScript: {
        fontSize: (sizeText * 0.66),
        lineHeight: sizeText
    },
});