import React, { useRef, useState } from 'react';
import { View, Animated, PanResponder, StyleSheet, Image, Dimensions ,TouchableOpacity} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useMusic } from './MusicContext';


const FloatingMusicButton = () => {
  const screenWidth = Dimensions.get('window').width;
  const screenHeight = Dimensions.get('window').height;
   // Animated values for position
   const position = useRef(new Animated.ValueXY({ x: 10, y: screenHeight / 3 })).current; // Default position
   const [isDragging, setIsDragging] = useState(false);

  const navigation = useNavigation<any>();
  const route = useRoute();
  const { hasMusic, currentMusic } = useMusic();

    // PanResponder to handle dragging
    const panResponder = useRef(
      PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        onPanResponderMove: Animated.event([null, { dx: position.x, dy: position.y }], {
          useNativeDriver: false,
        }),
        onPanResponderRelease: (_, gestureState) => {
          
          const finalX = gestureState.moveX > screenWidth / 2 ? screenWidth - 70 : 10;
          const finalY = Math.min(
            Math.max(gestureState.moveY, 10), 
            screenHeight - 70 
          );
  
          Animated.spring(position, {
            toValue: { x: finalX, y: finalY },
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
      style={[styles.floatingButton, 
        {
          transform:[{ translateX: position.x }, { translateY: position.y }],
        },
      ]}
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
    backgroundColor: 'gray',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  icon: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
    borderRadius: 25,
  },
});

export default FloatingMusicButton;
