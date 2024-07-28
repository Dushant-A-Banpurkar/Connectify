import React from 'react';

const Post: React.FC = () => {
  return (
    <div className="border border-gray-300 bg-white rounded-md mb-4">
      <div className="flex items-center p-4">
        <div className="w-10 h-10 rounded-full bg-gray-300 mr-3"></div>
        <div className="font-bold">username</div>
      </div>
      <img src="https://via.placeholder.com/600x400" alt="Post" className="w-full" />
      <div className="p-4">
        <div>Like, Comment, Share</div>
        <div><strong>username</strong> caption...</div>
      </div>
    </div>
  );
};

export default Post;
