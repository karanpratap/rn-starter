import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({navigation}) => {
  return (
    <View>
      <Text style={styles.text}>Republica Florentia</Text>
      <Button 
        title="Assassinate" 
        onPress={() => navigation.navigate('Components')}
      />
      <TouchableOpacity onPress={() => navigation.navigate('List')}>
        <Text>Assassination Targets</Text>
      </TouchableOpacity>
      <Button 
        title="Assassination Targets' Images" 
        onPress={() => navigation.navigate('Image')}
      />
      <TouchableOpacity onPress={() => navigation.navigate('Counter')}>
        <Text>Kill bad folks now!</Text>
      </TouchableOpacity>
      <Button 
        title="Assassination Colors" 
        onPress={() => navigation.navigate('Color')}
      />
      <TouchableOpacity onPress={() => navigation.navigate('Adjustor')}>
        <Text>Make True Colors</Text>
      </TouchableOpacity>
      <Button 
        title="Make Entirely True Colors" 
        onPress={() => navigation.navigate('AdjustorReducer')}
      />
      <TouchableOpacity onPress={() => navigation.navigate('CounterReducer')}>
        <Text>Kill Really Bad Folks NOW!</Text>
      </TouchableOpacity>
      <Button 
        title="Make new targets" 
        onPress={() => navigation.navigate('Text')}
      />
      <TouchableOpacity onPress={() => navigation.navigate('Box')}>
        <Text>Box villains</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;