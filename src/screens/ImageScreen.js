import React from "react";
import { View, Text, StyleSheet } from 'react-native';
import ImageDetail from "../components/ImageDetail";

const ImageScreen = () => {
    return <View>
        <ImageDetail title='Lucerezia' image={require('../../assets/lucrezia.jpg')} odds='9' />
        <ImageDetail title='Rodrigo Borgia' image={require('../../assets/rodrigo.jpg')} odds='7' />
        <ImageDetail title='Cesare Borgia' image={require('../../assets/cesare.jpg')} odds='5' />
        <ImageDetail title='Kassandra' image={require('../../assets/kassandra.jpg')} odds='2' />
    </View>
};

const styles = StyleSheet.create({});

export default ImageScreen;