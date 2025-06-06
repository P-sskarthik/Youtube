import React, { useEffect, useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import VideoCard from './VideoCard';

const SearchResultsPage = () => {
  const [videos, setVideos] = useState([]);
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get('search_query');

  useEffect(() => {
    fetchSearchResults();
  }, [searchQuery]);

  const fetchSearchResults = async () => {
    const data = await fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=30&q=${searchQuery}&key=AIzaSyBO0T_jvLkKgnF1dvR3kAOeJKAbC4izOMg`
    );
    const json = await data.json();
    setVideos(json.items);
  };

  return (
    <div className="px-6 pt-[104px] bg-black min-h-screen text-white">
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {videos.map((video) => (
          <Link key={video.id.videoId} to={`/watch?v=${video.id.videoId}`}>
            <VideoCard info={{ ...video, id: video.id.videoId }} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SearchResultsPage;
