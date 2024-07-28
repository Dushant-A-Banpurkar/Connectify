import React from 'react';
import { IconHeart, IconMessageCircle, IconShare } from '@tabler/icons-react';

const posts = [
  {
    id: 1,
    user: 'John Doe',
    username: '@johndoe',
    content: 'This is a beautiful sunrise!',
    image: 'https://via.placeholder.com/400x400',
    anonymous: false,
  },
  {
    id: 2,
    user: 'Anonymous',
    username: '',
    content: 'Loving this new coffee place ☕️',
    image: 'https://via.placeholder.com/400x400',
    anonymous: true,
  },
];

const Feed: React.FC = () => {
  return (
    <div className="space-y-06 w-full">
      {posts.map(post => (
        <div key={post.id} className="bg-white border border-gray-300 rounded-md p-6 shadow-md w-full max-w-xl">
          <div className="flex items-center mb-4">
            <div className="w-10 h-10 rounded-full bg-gray-300 mr-3"></div>
            <div>
              <div className="font-bold">{post.anonymous ? 'Anonymous' : post.user}</div>
              <div className="text-sm text-gray-500">{post.anonymous ? '' : post.username}</div>
            </div>
          </div>
          <div className="w-full aspect-w-1 aspect-h-1 bg-gray-300 mb-4">
            <img src={post.image} alt="Post" className="w-full h-full object-cover rounded-md" />
          </div>
          <div>
            <div className="font-bold mb-2">{post.content}</div>
          </div>
          <div className="flex space-x-4 mt-4 text-gray-500">
            <button className="flex items-center space-x-1 hover:text-blue-500 transition-colors duration-300">
              <IconHeart className="w-6 h-6" />
              <span>Like</span>
            </button>
            <button className="flex items-center space-x-1 hover:text-blue-500 transition-colors duration-300"> 
              <IconMessageCircle className="w-6 h-6" />
              <span>Comment</span>
            </button>
            <button className="flex items-center space-x-1 hover:text-blue-500 transition-colors duration-300">
              <IconShare className="w-6 h-6" />
              <span>Share</span>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Feed;
