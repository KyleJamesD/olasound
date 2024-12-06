import React from "react";
import {
      ScrollView,
      StyleSheet,
      View,
    } from 'react-native';
    import { useState } from "react";
    import { useEffect } from "react";
    import { Keyboard,TouchableWithoutFeedback } from 'react-native';


    import MainPageBanner from "../components/kyle/MainPageBanner";
    import SearchBar from "../components/kyle/SearchBar";
    import Song from "../components/kyle/Song";
    import { useMusic } from "../components/xuekun/MusicContext";



function SearchPage({ navigation, route }: {navigation: any, route: any }) : React.JSX.Element {


    let {inputText} = route.params || "";
    const [inputTextNew, setInputTextNew] = useState("");
    const [data, setData] = useState<any>([]);
    console.log(inputTextNew)
    const {setHasMusic, setCurrentMusic,historyMusic, setHistoryMusic } = useMusic();


    

    // must use route.params and not inputText as the dependancy otherwise routing from homepage with the same search will not update
    // on the second load, only the first load, this is because inputText does not change however it could be different from inputtextnew. useing route.params
    // as the dependancy forces useeffect to run each time we navigate to the page and the setInputTextNew(inputText); to run allowing us to update the inputText  
    //of the Searchbar evertyime even if we are navigating to the page with the same data. 
    useEffect(() => {
        console.log('SearchPage:' + inputText);
        setInputTextNew(inputText);
        if ( inputText != null) {getData(inputText)}
        
      }, [route.params]); 


      //*********************************Prop drilling Navigation************************************************/
    
      function navigateToPlayPage (songid:number, song:string, artist:string, albumn:string, albumnCover:string, preview:string) {
        // setHasMusic(true);
        // setCurrentMusic({songid, song, artist, albumn, albumnCover, preview});
        // const index = historyMusic.findIndex((item) => item.songid === songid);
        // if (index > -1) {
        //   historyMusic.splice(index, 1);
        // }

        // const nextHistory = [{songid, song, artist, albumn, albumnCover, preview}, ...historyMusic];
        // if (nextHistory.length > 5) {
        //   nextHistory.pop();
        // }
        // setHistoryMusic([...nextHistory]);
        // console.log("nextHistory: " + JSON.stringify(nextHistory));
        // console.log("nextHistory length: " + nextHistory.length);
        // console.log("route: " + route.name);
        navigation.navigate('PlayPage',{ songid, song, artist, albumn, albumnCover, preview });
      }



      //Call the API and display the results in a mapped list on button press.
    function SearchIconPress () {
        console.log (inputTextNew);
        getData(inputTextNew)
    }

    //********************************************API FUNCTIONS**************************************************** */
        async function getData(item: string) {
          try {
            const response = await fetch(`https://api.deezer.com/search?q=${item}`);
            const responseData = await response.json();
            setData(responseData.data || []);
            console.log("Fetched data:", responseData.data);
          } catch (error) {
            console.error("Error:", error);
          }
        }


  

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View style={styles.container}>
            <MainPageBanner title="Search" ></MainPageBanner>

            <View style={styles.SearchBar}>
            <SearchBar SearchIconPress={SearchIconPress} placeHolderText={inputTextNew} inputText={inputTextNew} setInputText={setInputTextNew}></SearchBar>
            </View>
            <View>
              
                {data.length === 0 ? (<View></View>) : 
                (
                  <ScrollView>
                    {data.map((item : any) => (
                      <View key={item.id}>
                      {/* Check for null or undefined values before accessing properties */}
                      {/**the way we are handling albumn cover is extremely wrong, essentially if we dont pass it a string it will default to a local image, because source cannot seem to handle both a string local path
                       * or a string URL dynamically, local paths must be wrapped in require which returns a number for some dumb reason.
                        */}
                          <Song
                            songid={item.id || 1234}
                            song={item.title || 'Unknown Title'}
                            artist={item.artist?.name || 'Unknown Artist'}
                            albumn={item.album?.title || 'Unknown Album'}
                            preview={item.preview || 'No Preview'}
                            albumnCover={item.album?.cover_medium || 3213213}
                            navigateToPlayPage={navigateToPlayPage}
                          />
                      </View>
                    ))}
                  </ScrollView>
                ) }
              
            </View>
        </View>
        </TouchableWithoutFeedback>

    )

}

  
const styles = StyleSheet.create({
    container: {
      height: 815.28, // Takes up full height of the screen - the bottomtabNavigator
    },
    SearchBar: {
        alignItems:'center',
        marginTop:'8%',
        marginBottom:'8%',
  
      },
})

export default SearchPage;
