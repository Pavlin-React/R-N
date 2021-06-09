
import React, { useState } from 'react';
import { Alert, FlatList, StyleSheet, View } from 'react-native';
import Header from './components/header'
import TodoItem from './components/todoItem'
import AddTodo from './components/addTodo'
import Sandbox from './components/sandbox';

export default function App() {

  let [todos, setTodos] = useState( [
    { text: 'buy coffee', key: '1' },
    { text: 'create un app', key: '2' },
    { text: 'play on the twitch', key: '3' },
  ] )

  let submitHandler = ( text ) => {
    if ( text.length > 3 ) {
      setTodos( (prev) => {
        return [
          { text: text, key: Math.random().toString() },
          ...prev
        ]
      })
    } else {
      Alert.alert( 'OOOPS', 'todos must be at least 3 chars long', [
        { text: 'Understood', onPress: () => console.log('ok') }
      ] )
    }
  }

  let clickHandler = ( key ) => {
    setTodos( ( prev ) => {
      return prev.filter( todo => todo.key != key )
    } )
  }

  return (
    <View style={styles.container}>
      <Header/>
      <View style={ styles.content } >
        <AddTodo submitHandler={ submitHandler } />
        <View style={ styles.list } >
          <FlatList
            data={ todos }
            renderItem={ ( { item } ) => (
              <TodoItem item = { item } clickHandler={ clickHandler } />
            ) }
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 40,
  },
  list: {
    marginTop: 20,
  }
});
