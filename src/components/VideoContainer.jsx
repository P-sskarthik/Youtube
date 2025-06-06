import React from 'react';
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';

const VideoContainer = ({ videos }) => {
  return (
    <div className="px-6 bg-black text-white min-h-screen">
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
        {videos.map((video) => (
          <Link key={video.id} to={`/watch?v=${video.id}`}>
            <VideoCard info={video} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default VideoContainer;
