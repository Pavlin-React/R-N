import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
export default function todoItem ( { item, clickHandler } ) {
  return(
    <TouchableOpacity onPress={ () => clickHandler( item.key ) } >
      <Text style={ styles.item } >{ item.text }</Text>
    </TouchableOpacity>
  )
}

let styles = StyleSheet.create({
  item: {
    padding: 16,
    marginTop: 16,
    borderColor: '#bbb',
    borderWidth: 1,
    borderStyle: 'dashed',
    borderRadius: 10,
  },
})