
import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

export default function App() {

  let [todo, setTodo] = useState( [
    { text: 'buy coffee', key: '1' },
    { text: 'create un app', key: '2' },
    { text: 'play on the twitch', key: '3' },
  ] )

  return (
    <View style={styles.container}>
      {/* <Header/> */}
      <View style={ styles.content } >
        {/* <to form/> */}
        <View style={ styles.list } >
          <FlatList
            data={ todo }
            renderItem={ ( { item } ) => (
              <Text>
                { item.text }
              </Text>
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
