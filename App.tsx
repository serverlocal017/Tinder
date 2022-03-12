import React from 'react';
import { StyleSheet, Text, View, Pressable, Image } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import TinderSwiper from './src/components/TinderSwiper';

export interface IMock {
  id: number;
  source: string;
}


const mock: IMock[] = [
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

const renderItem = ({ id, source }: IMock) => {
  return (
    <View style={{ borderWidth: 4, borderColor: '#fff'}}>
      <Image source={{uri: source}} style={{height: 300, width: 300}} resizeMode='contain' />
    </View>
  )
}

export default function App() {
  return (
    <GestureHandlerRootView style={s.container}>
      <TinderSwiper mock={mock} renderItem={(item) => renderItem(item)} />
    </GestureHandlerRootView>
  )
}

const s = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'deepskyblue'
  }
});