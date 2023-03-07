import React, { useState } from "react";
import { View, Text, StyleSheet, Button } from 'react-native';

const CounterScreen = () => {
    const [ counter, setCounter ] = useState(0);
    return <View style={styles.TextStyle}>
        <Button title="Kill" onPress={() => {
            setCounter(counter + 1);
        }}/>
        <Button title="Revive" onPress={() => {
            setCounter(counter - 1);
        }}/>
        <Text style={styles.TextStyle}>Current kill count: {counter}</Text>
    </View>
};

const styles = StyleSheet.create({
    TextStyle: {
        fontSize: 80,
        alignContent: "center"
    }
});

export default CounterScreen;