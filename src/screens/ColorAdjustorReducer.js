import React, { useReducer } from "react";
import { Text, View, Button, StyleSheet } from 'react-native';
import ColorCounter from "../components/ColorCounter";

const COLOR_INCREMENT = 16

const reducer = (state, action) => {
    switch(action.color) {
        case 'red':
            return state.red + action.amount > 255 || state.red + action.amount < 0 ? state :{ ...state, red: state.red + action.amount };
        case 'green':
            return state.green + action.amount > 255 || state.green + action.amount < 0 ? state :{ ...state, green: state.green + action.amount };
        case 'blue':
            return state.blue + action.amount > 255 || state.blue + action.amount < 0 ? state :{ ...state, blue: state.blue + action.amount };
        default:
            return state;
    }
}

const ColorAdjustorReducer = () => {
    const [state, dispatch] = useReducer(reducer, {red:0, green:0, blue:0});
    const { red, green, blue } = state;
    // console.log(state);

    return <View>
        <ColorCounter onIncrease={() => dispatch({ color: 'red', amount: COLOR_INCREMENT })} onDecrease={() => dispatch({ color: 'red', amount: -1 * COLOR_INCREMENT }) } color='Red' />
        <ColorCounter onIncrease={() => dispatch({ color: 'green', amount: COLOR_INCREMENT }) } onDecrease={() => dispatch({ color: 'green', amount: -1 * COLOR_INCREMENT }) } color='Green' />
        <ColorCounter onIncrease={() => dispatch({ color: 'blue', amount: COLOR_INCREMENT }) } onDecrease={() => dispatch({ color: 'blue', amount: -1 * COLOR_INCREMENT }) } color='Blue' />
        <View style={{backgroundColor: `rgb(${red}, ${green}, ${blue})`, height: 100, width: 100}}/>
    </View>;
}

const styles = StyleSheet.create({});

export default ColorAdjustorReducer;