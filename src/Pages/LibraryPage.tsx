import React, { useEffect, useState } from 'react';
import {StyleSheet, Text, View, FlatList,SafeAreaView} from 'react-native';

import MainPageBanner from '../components/kyle/MainPageBanner';
import HorizontalFlatList from '../components/xuekun/HorizontalSongList';
import { useMusic } from '../components/xuekun/MusicContext';
import PlayListCard from '../components/xuekun/PlayListCard';


function LibraryPage({
  navigation,
  route,
}: {
  navigation: any;
  route: any;
}): React.JSX.Element {

  
  const {historyMusic} = useMusic();
  const [playlists, setPlaylists] = useState([]);


  console.log("Library history: " + historyMusic.length);

  const getPlayList = async () => {
    const response = await fetch('https://api.deezer.com/search/playlist?q=love');
    const responseBody = await response.json();
    return responseBody.data;
  }

  const getFirstFivePlayList = async () => {
    const data = await getPlayList();
    return data.slice(0, 10);
  }

  useEffect(() => {
    const fetchPlaylists = async () => {
      const data = await getFirstFivePlayList();
      setPlaylists(data);
    };
    fetchPlaylists();
  }, []);


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
      <View style={[styles.card, {marginBottom: 400}]}>
        <Text style={styles.text}>Your Playlists</Text>

        <FlatList
          data={playlists}
          renderItem={({item}: {item: any}) => (
            <PlayListCard playlist= {{id:item.id, title: item.title, 
              creator:item.user.name, albumnCover: item.picture_medium, songNUmber: item.nb_tracks} }/>
          )}
          keyExtractor={(item: any) => item.id.toString()}
    
          showsHorizontalScrollIndicator={false}/>

        
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
    marginTop: 10,
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
