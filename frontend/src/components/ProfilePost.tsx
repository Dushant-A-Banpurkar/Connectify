import React, { useState } from 'react';
import { IconThumbUp, IconShare, IconMessageCircle, IconDots, IconBookmark } from '@tabler/icons-react';

const ProfilePosts: React.FC = () => {
  const [savedPosts, setSavedPosts] = useState<number[]>([]);
  const [openOptions, setOpenOptions] = useState<number | null>(null); // Track which post has the options open
  const [visiblePosts, setVisiblePosts] = useState<number>(6); // Initially show 6 posts

  const toggleSavePost = (postId: number) => {
    setSavedPosts(prev =>
      prev.includes(postId) ? prev.filter(id => id !== postId) : [...prev, postId]
    );
  };

  const toggleOptions = (postId: number) => {
    setOpenOptions(prev => (prev === postId ? null : postId)); // Toggle options for the clicked post
  };

  const posts = [
    {
      id: 1,
      title: "Post Title 1",
      content: "This is an example post content for post 1. It can include text, images, or links.",
      imageUrl: "https://via.placeholder.com/150"
    },
    {
      id: 2,
      title: "Post Title 2",
      content: "This is an example post content for post 2. It can include text, images, or links.",
      imageUrl: "https://via.placeholder.com/150"
    },
    {
      id: 3,
      title: "Post Title 3",
      content: "This is an example post content for post 3. It can include text, images, or links.",
      imageUrl: "https://via.placeholder.com/150"
    },
    {
      id: 4,
      title: "Post Title 4",
      content: "This is an example post content for post 4. It can include text, images, or links.",
      imageUrl: "https://via.placeholder.com/150"
    },
    {
      id: 5,
      title: "Post Title 5",
      content: "This is an example post content for post 5. It can include text, images, or links.",
      imageUrl: "https://via.placeholder.com/150"
    },
    {
      id: 6,
      title: "Post Title 6",
      content: "This is an example post content for post 6. It can include text, images, or links.",
      imageUrl: "https://via.placeholder.com/150"
    },
    {
      id: 7,
      title: "Post Title 7",
      content: "This is an example post content for post 7. It can include text, images, or links.",
      imageUrl: "https://via.placeholder.com/150"
    },
    {
      id: 8,
      title: "Post Title 8",
      content: "This is an example post content for post 8. It can include text, images, or links.",
      imageUrl: "https://via.placeholder.com/150"
    },
    {
      id: 9,
      title: "Post Title 9",
      content: "This is an example post content for post 9. It can include text, images, or links.",
      imageUrl: "https://via.placeholder.com/150"
    }
  ];

  // Function to load more posts
  const loadMorePosts = () => {
    setVisiblePosts(prevVisiblePosts => prevVisiblePosts + 3); // Load 3 more posts when clicked
  };

  return (
    <div className="profile-posts mt-4 bg-white shadow-md rounded-lg p-4">
      <h2 className="text-xl font-bold mb-4">Posts</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {posts.slice(0, visiblePosts).map(post => ( // Show limited number of posts based on visiblePosts state
          <div key={post.id} className="post bg-white shadow-md rounded-lg p-4 border relative">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
              onClick={() => toggleOptions(post.id)}
            >
              <IconDots className="w-6 h-6" />
            </button>

            {/* Conditional rendering of the options menu */}
            {openOptions === post.id && (
              <div className="absolute top-8 right-2 bg-white shadow-lg rounded-md w-40 z-10">
                <ul className="text-sm text-gray-700">
                  <li
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => toggleSavePost(post.id)}
                  >
                    {savedPosts.includes(post.id) ? 'Unsave' : 'Save'}
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Edit</li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Share to...</li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Copy link</li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Delete</li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer" onClick={() => setOpenOptions(null)}>
                    Cancel
                  </li>
                </ul>
              </div>
            )}

            <h3 className="text-lg font-semibold">{post.title}</h3>
            <p className="text-gray-700 mt-2">{post.content}</p>
            <div className="mt-2">
              <img
                src={post.imageUrl}
                alt={post.title}
                className="w-full h-auto mt-2 rounded-lg"
              />
            </div>
            <div className="flex items-center justify-start mt-2">
              <button className="text-blue-500 hover:text-blue-700 flex items-center">
                <IconThumbUp className="w-6 h-6 mr-6" />
              </button>
              <button className="text-blue-500 hover:text-blue-700 flex items-center">
                <IconShare className="w-6 h-6 mr-6" />
              </button>
              <button className="text-blue-500 hover:text-blue-700 flex items-center">
                <IconMessageCircle className="w-6 h-6 mr-6" />
              </button>
              <button
                className={`ml-32 text-blue-500 hover:text-blue-700 flex items-center ${savedPosts.includes(post.id) ? 'text-green-500' : ''}`}
                onClick={() => toggleSavePost(post.id)}
              >
                <IconBookmark className="w-6 h-6 mr-2" />
                {savedPosts.includes(post.id)}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Show More Button */}
      {visiblePosts < posts.length && (
        <div className="flex justify-center mt-4">
          <button
            onClick={loadMorePosts}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
          >
            Show More
          </button>
        </div>
      )}
    </div>
  );
};

export default ProfilePosts;
