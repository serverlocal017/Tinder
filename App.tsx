import React from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';

const mock = [
  {
    id: 1,
    source: 'https://placeimg.com/240/240/any'
  },
  {
    id: 2,
    source: 'https://placeimg.com/240/240/any'
  },
  {
    id: 3,
    source: 'https://placeimg.com/240/240/any'
  },
  {
    id: 4,
    source: 'https://placeimg.com/240/240/any'
  }
];

export default function App() {
  return (
    <View style={s.container}>
      <Text>Hello</Text>
    </View>
  )
}

const s = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});