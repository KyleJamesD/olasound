import React from 'react';
import {View, Text, SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import PlayListCard from '../components/xuekun/PlayListCard';
import {useNavigation, useRoute} from '@react-navigation/native';
import Song from '../components/kyle/Song';

const getPlayList = async (id: number) => {
  const response = await fetch(`https://api.deezer.com/playlist/${id}`);
  const responseBody = await response.json();
  return responseBody;
};

export default function PlayListDetailPage() {
  const route = useRoute<{key: string; name: string; params: {id: number}}>();
  const navigation = useNavigation<any>();
  const {id} = route.params;

  const [playlist, setPlaylist] = React.useState<{
    tracks: any;
    id: number;
    title: string;
    creator: {name: string};
    picture_medium: string;
    nb_tracks: number;
  } | null>(null);
  React.useEffect(() => {
    const fetchPlayList = async () => {
      const data = await getPlayList(id);
      setPlaylist(data);
    };
    fetchPlayList();
  }, [id]);

  return (
    <SafeAreaView>
      <View>
        {playlist && (
          <PlayListCard
            playlist={{
              id: playlist.id,
              title: playlist.title,
              creator: playlist.creator.name,
              albumnCover: playlist.picture_medium,
              songNUmber: playlist.nb_tracks,
            }}
          />
        )}
      </View>
      <View style={styles.container}>
        <ScrollView>
          {playlist &&
            playlist.tracks.data.map(
              (track: {
                id: number;
                title: string;
                artist: {name: string};
                album: {
                    cover_medium: string;title: string
};
                preview: string;
              }) => (
                <Song
                        key={track.id}
                        songid={track.id}
                        song={track.title}
                        artist={track.artist.name}
                        albumn={track.album.title}
                        preview={track.preview} 
                        albumnCover={track.album.cover_medium}  
                        navigateToPlayPage={() =>  navigation.navigate('PlayPage', { 
                          songid: track.id, 
                          song: track.title, 
                          artist: track.artist.name, 
                          albumn: track.album.title, 
                          albumnCover: track.album.cover_medium, 
                          preview: track.preview 
                        })}/>
              ),
            )}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        marginBottom: 170,
    },
    });
