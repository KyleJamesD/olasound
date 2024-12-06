import React from 'react';
import {FlatList, View, Text, Image, StyleSheet, Pressable} from 'react-native';
import { useMusic } from './MusicContext';
import { useNavigation } from '@react-navigation/native';

interface Item {
  songid : number,
  song : string;
  artist : string;
  albumn : string;
  albumnCover : string;
  preview : string,
}



const HorizontalFlatList: React.FC = () => {
  const { setCurrentMusic,historyMusic} = useMusic();
  const navigation = useNavigation<any>();

  const renderItem = ({item}: {item: Item}) => (
    <View style={styles.item}>
      <Pressable onPress={ () => {
        setCurrentMusic(item);
        navigation.navigate('PlayPage', { ... item})}}>
        <Image source={{uri: item.albumnCover}} style={styles.image} />
        <Text style={styles.text} numberOfLines={1}>{item.song}</Text>
      </Pressable>
    </View>
  );

  return (
    <FlatList
      data={historyMusic || []}
      renderItem={renderItem}
      keyExtractor={item => item.songid.toString()}
      ListEmptyComponent={<Text style={styles.emptyText}>No Data</Text>}
      horizontal
      showsHorizontalScrollIndicator={false}
    />
  );
};

const styles = StyleSheet.create({
  item: {
    flex:1,
    width: 150,
    height: 150,
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  text: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 10,
  },
  emptyText: {
    fontSize: 16,
    color: '#888',
    textAlign: 'center',
    alignSelf: 'center',
  },
});

export default HorizontalFlatList;
