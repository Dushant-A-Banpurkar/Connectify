import React from 'react';
import { IconHome, IconBell, IconUser, IconSearch, IconMessageCircle, IconBookmark, IconCompass, IconPhoto } from '@tabler/icons-react';

const Sidebar: React.FC = () => {
  return (
    <div className="flex flex-col items-center bg-white p-4 h-full shadow-md">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Connectify</h1>
      </div>
      <nav className="space-y-6 mb-8 w-full">
        <a href="#" className="flex items-center space-x-2 hover:bg-gray-100 p-2 rounded">
          <IconHome className="w-6 h-6" />
          <span>Home</span>
        </a>
        <a href="#" className="flex items-center space-x-2 hover:bg-gray-100 p-2 rounded">
          <IconSearch className="w-6 h-6" />
          <span>Search</span>
        </a>
        <a href="#" className="flex items-center space-x-2 hover:bg-gray-100 p-2 rounded">
          <IconBell className="w-6 h-6" />
          <span>Notifications</span>
        </a>
        <a href="#" className="flex items-center space-x-2 hover:bg-gray-100 p-2 rounded">
          <IconCompass className="w-6 h-6" />
          <span>Explore</span>
        </a>
        <a href="#" className="flex items-center space-x-2 hover:bg-gray-100 p-2 rounded">
          <IconMessageCircle className="w-6 h-6" />
          <span>Messages</span>
        </a>
        <a href="#" className="flex items-center space-x-2 hover:bg-gray-100 p-2 rounded">
          <IconPhoto className="w-6 h-6" />
          <span>Post</span>
        </a>
        <a href="#" className="flex items-center space-x-2 hover:bg-gray-100 p-2 rounded">
          <IconBookmark className="w-6 h-6" />
          <span>Bookmarks</span>
        </a>
        <a href="#" className="flex items-center space-x-2 hover:bg-gray-100 p-2 rounded">
          <IconUser className="w-6 h-6" />
          <span>Profile</span>
        </a>
      </nav>
    </div>
  );
};

export default Sidebar;
