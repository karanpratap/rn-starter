import React, { useState } from "react";
import { Text, StyleSheet, View, TextInput } from "react-native";

const TextScreen = () => {
    const [ name, setName ] = useState('')
    return <View>
        <Text>Enter new target name:</Text>
        <TextInput style={styles.input} autoCapitalize="none" autoCorrect={false} value={name} onChangeText={(newValue) => setName(newValue)} />
        <Text>The new target is {name}.</Text>
        { name.length < 5 ? <Text style={{color: 'red'}}>Target name should be at least 5 characters</Text> : null }
    </View>
};

const styles = StyleSheet.create({
    input: {
        margin: 15,
        borderColor: 'black',
        borderWidth: 1
    }
});

export default TextScreen;