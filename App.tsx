import React, { useCallback, useEffect, useState } from 'react';
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
    source: 'https://placeimg.com/240/280/any'
  },
  {
    id: 2, 
    source: 'https://placeimg.com/220/280/any'
  },
  {
    id: 3,
    source: 'https://placeimg.com/280/280/any'
  },
  {
    id: 4,
    source: 'https://placeimg.com/260/280/any'
  },
  {
    id: 5,
    source: 'https://placeimg.com/240/290/any'
  },
];

const data = [
  {
    id: 9, 
    source: 'https://placeimg.com/280/340/any'
  },
  {
    id: 10,
    source: 'https://placeimg.com/290/350/any'
  },
  {
    id: 11,
    source: 'https://placeimg.com/300/360/any'
  }
]

const renderItem = ({ id, source }: IMock) => {
  return (
    <View style={{ borderWidth: 4, borderColor: '#fff', borderRadius: 4}}>
      <Image source={{uri: source}} style={{height: 300, width: 300}} />
    </View>
  )
}

export default function App() {
  
  const [mockData, setMockData] = useState<IMock[]>(mock);

  const removeItem = useCallback((id: number) => {
    const findObjectFromIndex = mockData.find((el, i) => i === id);
     mockData.length === 1 ? setMockData((curData) => curData.filter((el => el.id !== findObjectFromIndex?.id)).concat(data))  : setMockData((curData) => curData.filter((el => el.id !== findObjectFromIndex?.id)))
  }, [mockData]);
/* 
  useEffect(() => {
    mockData.length > 1 && setMockData((cur) => cur.concat(mock));
  }, [mockData]);
 */

//  console.log(mockData);
  
  return (
    <GestureHandlerRootView style={s.container}>
      <TinderSwiper mock={mockData} renderItem={(item) => renderItem(item)} swipedLeft={(id) => removeItem(id)} />
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