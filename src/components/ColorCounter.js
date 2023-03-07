import React from "react";
import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native';

const ColorCounter = ({color, onIncrease, onDecrease}) => {
    return <View>
        <Text>{color}</Text>
        <TouchableOpacity onPress={() => onIncrease()}>
            <Text style={styles.TextStyle}>Increase {color}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => onDecrease()}>
            <Text style={styles.TextStyle} >Decrease {color}</Text>
        </TouchableOpacity>
    </View>;
};

const styles = StyleSheet.create({
    TextStyle: {
        fontSize: 30
    }
});

export default ColorCounter;