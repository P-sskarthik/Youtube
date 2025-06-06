import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const usernames = [
  "cyberanax", "vikas9090", "jayaprakashr2720", "mmzgsjhejekekekkek", "lavin_sh",
  "techbyte", "vid_guru", "moviebuff_123", "coder_dude", "edit_king", "reel_master",
  "silentstorm", "creative_pixel", "user_omega", "wildfirex", "snapnova", "sonicsync",
  "mr_audio", "sky_flick", "visionist", "nxt_gen_vidz", "primecutz", "noirfx", "just_watchin"
];

const commentTexts = [
  "Great video! Really enjoyed it. 👏", "Deserved a national award. ❤️", "Editing is 🔥🔥🔥",
  "Very helpful, thanks 🙏", "Subscribed after this 🔔", "Sync is amazing 👌",
  "The background music tho 😍", "Underrated content!", "Perfect pacing and transitions!",
  "Nice storytelling 👏", "Who’s here in 2025? 😎", "The voice-over is solid!",
  "Amazon Prime link worked 👌", "Totally recommend this 🎯", "Learned a lot from this video.",
  "Color grading is 💯", "Direction on point 🎬", "Audio mixing felt so clean 👂",
  "Keep up the great work 💪", "Itaanda edit uff 💥💥💥", "This gave me chills 😱",
  "Replay button abused 🔁", "🔥🔥🔥🔥🔥🔥", "Make more like this!", "This creator deserves more subs."
];

const getRandomComments = (count = 50) => {
  const comments = [];
  for (let i = 0; i < count; i++) {
    const user = usernames[Math.floor(Math.random() * usernames.length)];
    const text = commentTexts[Math.floor(Math.random() * commentTexts.length)];
    const avatar = `https://i.pravatar.cc/150?img=${Math.floor(Math.random() * 70) + 1}`;
    const timeAgo = `${Math.floor(Math.random() * 12 + 1)} ${Math.random() > 0.5 ? 'months' : 'years'} ago`;
    const likes = Math.floor(Math.random() * 500);
    comments.push({
      id: i,
      user,
      avatar,
      text,
      timeAgo,
      likes
    });
  }
  return comments;
};

const CommentsSection = () => {
  const [comments, setComments] = useState([]);
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get('v');

  useEffect(() => {
    setComments(getRandomComments(60)); // Generate 60 comments
  }, [videoId]);

  return (
    <div className="mt-6">
      <h2 className="text-xl font-bold text-white mb-4">{comments.length} Comments</h2>
      <div className="space-y-6">
        {comments.map((c) => (
          <div key={c.id} className="flex gap-3">
            <img src={c.avatar} alt={c.user} className="w-10 h-10 rounded-full" />
            <div>
              <p className="text-sm text-white font-semibold">@{c.user} <span className="text-xs text-gray-400 ml-2">{c.timeAgo}</span></p>
              <p className="text-sm text-white mt-1">{c.text}</p>
              <div className="flex items-center text-sm text-gray-400 mt-2 gap-4">
                <div className="flex items-center gap-1">👍 <span>{c.likes}</span></div>
                <div className="flex items-center gap-1">👎</div>
                <span className="cursor-pointer hover:underline">Reply</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommentsSection;
