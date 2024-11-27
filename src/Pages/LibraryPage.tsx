import React from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';

import MainPageBanner from '../components/kyle/MainPageBanner';
import HorizontalFlatList from '../components/xuekun/HorizontalSongList';

function LibraryPage({
  navigation,
  route,
}: {
  navigation: any;
  route: any;
}): React.JSX.Element {
  const recentlyPlayed = [
    {
      id: 116348632,
      title: 'Hey Jude',
      img: 'https://cdn-images.dzcdn.net/images/cover/c65b3bd84e81056e060be144381c06c8/250x250-000000-80-0-0.jpg',
    },
    {
      id: 100325278,
      title: 'Hit the Road Jack',
      img: 'https://cdn-images.dzcdn.net/images/cover/44c077f57a29e7958bced910d4300a50/250x250-000000-80-0-0.jpg',
    },
    {
      id: 3413187,
      title: 'La bohème',
      img: 'https://cdn-images.dzcdn.net/images/cover/4a745ed02e6678ab0e1f85ad45f3d701/250x250-000000-80-0-0.jpg',
    },
  ];

  return (
    <View style={styles.container}>
      <MainPageBanner
        title="Music Library"
        msg="Discover your musical universe"></MainPageBanner>

      {/* recently played */}
      <View style={styles.card}>
        <Text style={styles.text}>Recently Played</Text>
        <HorizontalFlatList data={recentlyPlayed} />
      </View>
      {/* Your playlists  */}
      <View style={styles.card}>
        <Text style={styles.text}>Recently Played</Text>
        
      </View>

      {/* your artists  */}
      <Text>Library Page</Text>
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
