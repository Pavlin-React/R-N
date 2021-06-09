import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function todoItem ( { item, clickHandler } ) {
  return(
    <TouchableOpacity onPress={ () => clickHandler( item.key ) } >
      <View style={ styles.item } >
        <MaterialCommunityIcons name="delete" size={22} color="black" />
        <Text>{ item.text }</Text>
      </View>
      
    </TouchableOpacity>
  )
}

let styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    marginTop: 16,
    borderColor: '#bbb',
    borderWidth: 1,
    borderStyle: 'dashed',
    borderRadius: 10,
  },
})