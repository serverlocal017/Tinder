import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Animated from 'react-native-reanimated'
import { IMock } from '../../App'
import { Gesture, GestureDetector } from 'react-native-gesture-handler'

interface ITinder<T> {
  mock: T[],
  renderItem: (item: T) => React.ReactNode;
}

const TinderSwiper = ({ mock, renderItem }: ITinder<IMock>) => {
  return (
    <Animated.View style={StyleSheet.absoluteFill}>
      <View style={{...StyleSheet.absoluteFillObject, justifyContent: 'center', alignItems: 'center'}}>
          {
            mock.map((el, i) => (
              <View key={i} style={s.imageContainer}>
                <GestureDetector>
                  {renderItem(el)}
                </GestureDetector>
              </View>
            ))
          }
        </View>
    </Animated.View>
  )
}

export default TinderSwiper

const s = StyleSheet.create({
  imageContainer: {
    position: 'absolute',
  }
})