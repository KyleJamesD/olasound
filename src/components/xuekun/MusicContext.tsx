import React, { createContext, useContext, useState } from 'react';

type songdetails  = {
    songid : number,
    song : string;
    artist : string;
    albumn : string;
    albumnCover : string;
    preview : string,
    navigateToPlayPage? : ( 
        songid : number,
        song : string,
        artist : string,
        albumn : string,
        albumnCover : string,
        preview : string) => void;

}
const MusicContext = createContext<{
  hasMusic: boolean;
  setHasMusic: React.Dispatch<React.SetStateAction<boolean>>;
  currentMusic: songdetails;
  setCurrentMusic: React.Dispatch<React.SetStateAction<any>>;
}>({
  hasMusic: false,
  setHasMusic: () => {},
  currentMusic: {
      songid: 0,
      song: '',
      artist: '',
      albumn: '',
      albumnCover: '',
      preview: ''
  },
  setCurrentMusic: () => {}
});

import { ReactNode } from 'react';

export const MusicProvider = ({ children }: { children: ReactNode }) => {
  const [hasMusic, setHasMusic] = useState(false); 
  const [currentMusic, setCurrentMusic] = useState<songdetails>({
    songid: 0,
    song: '',
    artist: '',
    albumn: '',
    albumnCover: '',
    preview: ''
  });

  return (
    <MusicContext.Provider value={{ hasMusic, setHasMusic, currentMusic, setCurrentMusic }}>
      {children}
    </MusicContext.Provider>
  );
};

export const useMusic = () => useContext(MusicContext);
