import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import RecommendedVideos from './RecommendedVideos';
import CommentsSection from './CommentsSection';

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get('v');
  const [showComments, setShowComments] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setShowComments(false); 
  }, [videoId]);

  return (
    <div className="bg-black text-white min-h-screen pt-1 px-2 sm:px-4">
     
      <div className="aspect-video w-full">
        <iframe
          className="w-full h-full rounded-xl"
          src={`https://www.youtube.com/embed/${videoId}`}
          title="YouTube video player"
          allowFullScreen
        />
      </div>

     
      <div className="mt-4 lg:flex lg:gap-6">
       
        <div className="w-full lg:flex-[1.2]">
          <h2 className="text-lg font-semibold mb-2 px-2">Similar Songs</h2>
          <RecommendedVideos />
        </div>

       
        <div className="w-full lg:flex-[3] mt-4 lg:mt-0">
          <button
            className="bg-neutral-800 hover:bg-neutral-700 px-4 py-2 rounded-lg text-sm mb-3 lg:hidden"
            onClick={() => setShowComments((prev) => !prev)}
          >
            {showComments ? 'Hide Comments' : 'Show Comments'}
          </button>

        
          {(showComments || window.innerWidth >= 1024) && (
            <CommentsSection />
          )}
        </div>
      </div>
    </div>
  );
};

export default WatchPage;
