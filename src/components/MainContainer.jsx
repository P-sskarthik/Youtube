import React, { useState, useEffect } from 'react';
import ButtonList from './ButtonList';
import VideoContainer from './VideoContainer';
import { YOUTUBE_VIDEO_API } from '../utils/constants';

const MainContainer = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchVideos();
  }, [selectedCategory]);

  const fetchVideos = async () => {
    let url = YOUTUBE_VIDEO_API;
    if (selectedCategory !== 'All') {
      url += `&videoCategoryId=${getCategoryId(selectedCategory)}`;
    }
    const data = await fetch(url);
    const json = await data.json();
    setVideos(json.items || []);
  };

  const getCategoryId = (category) => {
    const categoryMap = {
      'Music': 10,
      'Action films': 24,
      'Telugu cinema': 24,
      'Computer Science': 28,
      'Tourism': 19,
      // Extend as needed
    };
    return categoryMap[category] || '';
  };

  return (
    <div>
      <ButtonList
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <VideoContainer videos={videos} />
    </div>
  );
};

export default MainContainer;
