import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button, LogBox } from 'react-native';

export default function AddTodo( { submitHandler } ) {

  let [text, setText] = useState( '' )
  
  let changeHandler = ( val ) => {
    setText( val )
  }

  return(
    <View>
      <TextInput
        style={ styles.input }
        placeholder='new todo...'
        onChangeText={ changeHandler }
      />
      <Button onPress={ () => submitHandler( text ) } title='add todo' color='coral' />
  </View>
  )
}

let styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  }
})