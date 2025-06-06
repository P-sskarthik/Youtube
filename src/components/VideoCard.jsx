import React from "react";

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info || {};
  const { channelTitle, title, thumbnails } = snippet || {};

  return (
    <div className="mt-2 w-full cursor-pointer hover:scale-[1.02] transition-transform duration-200">
      <img className="rounded-xl w-full" alt="thumbnail" src={thumbnails?.medium?.url} />
      <div className="mt-3 text-white">
        <h3 className="font-semibold text-sm line-clamp-2">{title}</h3>
        <p className="text-xs text-neutral-400">{channelTitle}</p>
        {statistics?.viewCount && (
          <p className="text-xs text-neutral-500">{statistics.viewCount} views</p>
        )}
      </div>
    </div>
  );
};

export default VideoCard;
