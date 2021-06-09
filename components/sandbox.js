import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Sandbox = () => {
  return (
    <View style={ styles.container } >
      <Text  >Sandbox</Text>
    </View>
  );
}
 
export default Sandbox;

let styles = StyleSheet.create({
  container: {
    paddingTop: 100,
    backgroundColor: '#333'
  },
})