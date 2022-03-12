import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Animated, { Extrapolate, interpolate, runOnJS, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated'
import { IMock } from '../../App'
import { Gesture, GestureDetector } from 'react-native-gesture-handler'

interface ITinder<T> {
  mock: T[],
  renderItem: (item: T) => React.ReactNode;
  swipedLeft: (id: number) => void;
}

const { width } = Dimensions.get('window');

const TinderSwiper = ({ mock, renderItem, swipedLeft }: ITinder<IMock>) => {

  const translateX = useSharedValue(0);

  useEffect(() => {
    translateX.value = 0;
  }, [mock]);

  const panGestureEvent = Gesture.Pan()
    .onUpdate((e) => {
      translateX.value = e.translationX;
    })
    .onEnd(() => {
      if(translateX.value <= -width / 2) {
        translateX.value = -width * 2;
        runOnJS(swipedLeft)(mock.length - 1)
      } else {
        translateX.value = withTiming(0);
      }
 
    })

    const rCard = useAnimatedStyle(() => {
      const rotateZ = interpolate(translateX.value, [0, -width / 2], [0, -15]);
      return {
        transform: [{ translateX: translateX.value }, { rotateZ: `${rotateZ}deg` }]
      }
    });

    const rScale = useAnimatedStyle(() => {
      const scale = interpolate(translateX.value, [-width / 2, 0, width / 2], [1, 0, 1], Extrapolate.CLAMP);
      const opacity = interpolate(translateX.value, [-width * 2, 0, width * 2], [1, 0.4, 1]);
      return {
        opacity,
        transform: [{ scale }]
      }
    });
    

  return (
    <Animated.View style={StyleSheet.absoluteFill}>
      <View style={{...StyleSheet.absoluteFillObject, justifyContent: 'center', alignItems: 'center'}}>
          {
            mock.map((el, i) => {
              
            
              if(i == mock.length - 1) {
                return (
                <Animated.View key={i} style={[s.imageContainer, rCard, { zIndex: 200 }]}>
                  <GestureDetector gesture={panGestureEvent}>
                    {renderItem(el)}
                  </GestureDetector>
                </Animated.View>
                )
              } else if(i === mock.length -2) {
                return (
                  <Animated.View key={i} style={[s.imageContainer, rScale]}>
                
                    {renderItem(el)}
            
                </Animated.View>
                    )
              } else {
                <Animated.View key={i} style={[s.imageContainer, { opacity: 0 }]}>
                
                {renderItem(el)}
        
            </Animated.View>
              }
            })
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