import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import RecommendedVideos from './RecommendedVideos';
import CommentsSection from './CommentsSection';

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get('v');
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [videoId]);

  return (
    <div className="flex bg-black text-white min-h-screen pt-5 px-4 gap-6">
      {/* Main video and comments */}
      <div className="flex-[3]">
        <div className="aspect-video w-full">
          <iframe
            className="w-full h-full rounded-xl"
            src={`https://www.youtube.com/embed/${videoId}`}
            title="YouTube video player"
            allowFullScreen
          />
        </div>

        <CommentsSection />
      </div>

      {/* Right-side recommended videos */}
      <div className="flex-[1.2] max-w-xs">
        <RecommendedVideos />
      </div>
    </div>
  );
};

export default WatchPage;
