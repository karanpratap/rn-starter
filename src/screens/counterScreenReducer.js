import React, { useReducer } from "react";
import { View, Text, StyleSheet, Button } from 'react-native';

const reducer = (state, action) => {
    switch(action.type) {
        case 'increment':
            return { ...state, counter: state.counter + action.amount };
        case 'decrement':
            return state.counter - action.amount < 0 ? state : { ...state, counter: state.counter - action.amount };
        default:
            return state;
    }
}

const CounterScreenReducer = () => {
    const [ state, dispatch ] = useReducer(reducer, {counter:0});
    const { counter } = state;
    return <View style={styles.TextStyle}>
        <Button title="Kill" onPress={() => {
            dispatch({type:'increment', amount: 1})
        }}/>
        <Button title="Revive" onPress={() => {
            dispatch({type:'decrement', amount: 1})
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

export default CounterScreenReducer;