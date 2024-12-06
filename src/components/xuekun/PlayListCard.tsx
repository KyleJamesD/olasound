
import React from 'react';
import { View, Text, Image, Pressable, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

interface Item {
    id: number,
    title : string;
    creator: string;
    albumnCover : string;
    songNUmber : number,
    }   

export default function PlayListCard({playlist}: {playlist: Item}) {
    const navigation = useNavigation<any>();

  return (
    <Pressable onPress={() => {

      navigation.navigate('PlayListDetailPage', {id: playlist.id});
    }}>
      <View style={styles.container}>
        <Image source={{uri: playlist.albumnCover}} style={styles.image} />
        <View>
        <Text style={styles.text}>{playlist.title}</Text>
        <Text style={styles.text} numberOfLines={1} >{`Created by ${playlist.creator}`}</Text>
        <Text style={styles.text}>{`${playlist.songNUmber} songs`}</Text>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  image: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  text: {
    fontSize: 16,
  },
});
