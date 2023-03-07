import React from "react";
import { Text, StyleSheet, View } from "react-native";

const BoxScreen = () => {
    return <View style={styles.viewStyle}>
        <Text style={styles.text1Style}>Villain #1</Text>
        <Text style={styles.text2Style}>Villain #2</Text>
        <Text style={styles.text3Style}>Villain #3</Text>
    </View>
};

const styles = StyleSheet.create({
    viewStyle: {
        borderWidth: 3,
        borderColor: 'black',
        flexDirection: 'column',
        height: 200,
        // justifyContent: 'space-between',
        alignItems: "flex-start"
    },
    text1Style: {
        borderWidth: 3,
        borderColor: 'pink',
        // flex: 1,
        backgroundColor: 'red',
        height: 30,
        alignSelf: 'flex-end'
    },
    text2Style: {
        borderWidth: 3,
        borderColor: 'pink',
        // flex: 1,
        backgroundColor: 'green',
        height: 30,
        // left: 10
        position: 'absolute',
        // top: 0,
        // bottom: 0,
        // left: 0,
        // right: 0,
        // ...StyleSheet.absoluteFillObject
    },
    text3Style: {
        // flex: 1,
        borderWidth: 3,
        borderColor: 'pink',
        backgroundColor: 'blue',
        height: 30,
        alignSelf: 'center'
    }
});

export default BoxScreen;