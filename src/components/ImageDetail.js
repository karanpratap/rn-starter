import React from "react";
import { View, Text, StyleSheet, Image } from 'react-native';

const ImageDetail = ({title, image, odds}) => {
    return <View>
        <Image source={image} style={styles.ImageStyle} />
        <Text>{title}</Text>
        <Text>Success Odds: {odds}</Text>
    </View>;
};

const styles = StyleSheet.create({
    ImageStyle: {
        height:100,
        width:100
    }
});

export default ImageDetail;