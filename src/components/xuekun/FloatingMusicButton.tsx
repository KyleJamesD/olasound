import React, { useRef } from 'react';
import { View, Animated, PanResponder, StyleSheet, Image, Dimensions ,TouchableOpacity} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useMusic } from './MusicContext';

const { width: screenWidth } = Dimensions.get('window');

const FloatingMusicButton = () => {
  const pan = useRef(new Animated.ValueXY({ x: 10, y: 300 })).current;
  const navigation = useNavigation<any>();
  const route = useRoute();
  const { hasMusic, currentMusic } = useMusic();

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (e, gestureState) => {
        pan.setValue({
          x: gestureState.moveX - 30,
          y: gestureState.moveY - 30,
        });
      },
      onPanResponderRelease: (e, gestureState) => {
        const isLeft = gestureState.moveX < screenWidth / 2;
        Animated.spring(pan, {
          toValue: {
            x: isLeft ? 10 : screenWidth - 70,
            y: gestureState.moveY - 30,
          },
          useNativeDriver: false,
        }).start();
      },
    })
  ).current;

  const navigateToMusicPlayer = () => {
      console.log("current route: " + route.name);
      console.log("curentMusic : " + JSON.stringify(currentMusic));
      if (route.name !== 'PlayPage') {
      navigation.navigate('PlayPage', currentMusic);
    }
  };


  if (!hasMusic || route.name === 'PlayPage') {
    return null;
  }

  return (
    <Animated.View
      {...panResponder.panHandlers}
      style={[styles.floatingButton, pan.getLayout()]}
    >
      <TouchableOpacity onPress={navigateToMusicPlayer}>
        <Image
          source={ {uri: currentMusic.albumnCover}} 
          style={styles.icon}
        />
      </TouchableOpacity>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  floatingButton: {
    position: 'absolute',
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  icon: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
});

export default FloatingMusicButton;
