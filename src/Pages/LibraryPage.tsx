import React, { useEffect } from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';

import MainPageBanner from '../components/kyle/MainPageBanner';
import HorizontalFlatList from '../components/xuekun/HorizontalSongList';
import { useMusic } from '../components/xuekun/MusicContext';

function LibraryPage({
  navigation,
  route,
}: {
  navigation: any;
  route: any;
}): React.JSX.Element {

  
  const {historyMusic} = useMusic();


  console.log("Library history: " + historyMusic.length);

  return (
    <View style={styles.container}>
      <MainPageBanner
        title="Music Library"
        msg="Discover your musical universe"></MainPageBanner>

      {/* recently played */}
      <View style={styles.card}>
        <Text style={styles.text}>Recently Played</Text>
        <HorizontalFlatList />
      </View>
      {/* Your playlists  */}
      <View style={styles.card}>
        <Text style={styles.text}>Your Playlists</Text>
        
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 815.28, // Takes up full height of the screen - the bottomtabNavigator
  },
  card: {
    backgroundColor: '#F5F5F5',
    elevation: 10,
    width: '90%',
    alignSelf: 'center',
    marginVertical: 10,
    borderRadius: 10,
  },

  text: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    margin: 10,
  },
});

export default LibraryPage;
