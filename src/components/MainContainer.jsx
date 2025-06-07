import React, { useState, useEffect } from 'react';
import VideoContainer from './VideoContainer';
import { YOUTUBE_VIDEO_API } from '../utils/constants';

const MainContainer = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchVideos();
  }, []);

  const fetchVideos = async () => {
    try {
      const data = await fetch(YOUTUBE_VIDEO_API);
      const json = await data.json();
      setVideos(json.items || []);
    } catch (error) {
      console.error("Error fetching videos:", error);
    }
  };

  return (
    <div>
      <VideoContainer videos={videos} />
    </div>
  );
};

export default MainContainer;
