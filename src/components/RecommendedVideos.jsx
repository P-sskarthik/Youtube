import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { YOUTUBE_VIDEO_API } from '../utils/constants';

const RecommendedVideos = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchRecommended();
  }, []);

  const fetchRecommended = async () => {
    const data = await fetch(YOUTUBE_VIDEO_API);
    const json = await data.json();
    setVideos(json.items || []);
  };

  return (
    <div className="space-y-4">
      {videos.map((video) => (
        <Link
          key={video.id}
          to={`/watch?v=${video.id}`}
          className="flex gap-2 items-start hover:bg-neutral-800 p-2 rounded-lg transition"
        >
          <img
            className="w-32 h-20 rounded-lg object-cover"
            src={video.snippet.thumbnails.medium.url}
            alt="thumbnail"
          />
          <div className="text-sm text-white">
            <p className="font-semibold line-clamp-2">{video.snippet.title}</p>
            <p className="text-xs text-neutral-400">{video.snippet.channelTitle}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default RecommendedVideos;
