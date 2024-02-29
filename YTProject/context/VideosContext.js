import React, { createContext, useState, useContext } from 'react';

const VideosContext = createContext();

export const useVideos = () => useContext(VideosContext);

export const VideosProvider = ({ children }) => {
  const [videosList, setVideosList] = useState([]);
  const [favVids, setFavVids] = useState([]);

  return (
    <VideosContext.Provider value={{ videosList, setVideosList, favVids, setFavVids }}>
      {children}
    </VideosContext.Provider>
  );
};
