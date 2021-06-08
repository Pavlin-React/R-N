
import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import Header from './components/header'
import TodoItem from './components/todoItem'
import AddTodo from './components/addTodo'

export default function App() {

  let [todos, setTodos] = useState( [
    { text: 'buy coffee', key: '1' },
    { text: 'create un app', key: '2' },
    { text: 'play on the twitch', key: '3' },
  ] )

  let submitHandler = ( text ) => {
    setTodos( (prev) => {
      return [
        { text, key: Math.random().toString() },
        ...prev
      ]
    })
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
