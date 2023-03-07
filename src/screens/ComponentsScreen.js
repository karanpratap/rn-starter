import React from "react";
import { Text, StyleSheet, View } from "react-native";

const ComponentsScreen = () => {
    const greeting = <Text>Buona notte Giovanni!</Text>;
    const name = 'Ezio Auditore da Firenze'
    return (
      <View>
        <Text style={styles.textStyle}>Maria!</Text>
        {greeting}
        <Text style={styles.nameStyle}>Our son shall be named {name}</Text>
      </View>
    );
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 45
    },
    nameStyle: {
        fontSize:20
    }
})

export default ComponentsScreen;