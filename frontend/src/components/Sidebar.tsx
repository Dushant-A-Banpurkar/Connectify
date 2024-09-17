import React from 'react';
import { IconHome, IconBell, IconUser, IconSearch, IconMessageCircle, IconBookmark, IconUsers, IconSettings2 } from '@tabler/icons-react';
import { Link } from 'react-router-dom';

const Sidebar: React.FC = () => {
  return (
    <div className="fixed top-0 left-0 w-full md:w-1/4 lg:w-1/5 h-full bg-blue-950 p-4 md:p-6 flex flex-col items-center md:items-start shadow-lg">
      <div className="mb-8 hidden md:block">
        <h1 className="text-3xl font-bold text-white">Connectify</h1>
      </div>
      <nav className="space-y-0 w-full">
        <Link to="/" className="flex items-center justify-center md:justify-start space-x-2 text-white hover:bg-gray-700 p-4 rounded border-t border-gray-700">
          <IconHome className="w-6 h-6" />
          <span className="hidden md:block">Home</span>
        </Link>
        <Link to="#" className="flex items-center justify-center md:justify-start space-x-2 text-white hover:bg-gray-700 p-4 rounded border-t border-gray-700">
          <IconSearch className="w-6 h-6" />
          <span className="hidden md:block">Explore</span>
        </Link>
        <Link to="/notifications" className="flex items-center justify-center md:justify-start space-x-2 text-white hover:bg-gray-700 p-4 rounded border-t border-gray-700">
          <IconBell className="w-6 h-6" />
          <span className="hidden md:block">Notifications</span>
        </Link>
        <Link to="#" className="flex items-center justify-center md:justify-start space-x-2 text-white hover:bg-gray-700 p-4 rounded border-t border-gray-700">
          <IconMessageCircle className="w-6 h-6" />
          <span className="hidden md:block">Messages</span>
        </Link>
        <Link to="#" className="flex items-center justify-center md:justify-start space-x-2 text-white hover:bg-gray-700 p-4 rounded border-t border-gray-700">
          <IconBookmark className="w-6 h-6" />
          <span className="hidden md:block">Bookmarks</span>
        </Link>
        <Link to="/group" className="flex items-center justify-center md:justify-start space-x-2 text-white hover:bg-gray-700 p-4 rounded border-t border-gray-700">
          <IconUsers className="w-6 h-6" />
          <span className="hidden md:block">GroupPage</span>
        </Link>
        <Link to="/profile" className="flex items-center justify-center md:justify-start space-x-2 text-white hover:bg-gray-700 p-4 rounded border-t border-gray-700">
          <IconUser className="w-6 h-6" />
          <span className="hidden md:block">Profile</span>
        </Link>
        <Link to="/setting" className="flex items-center justify-center md:justify-start space-x-2 text-white hover:bg-gray-700 p-4 rounded border-t border-gray-700">
          <IconSettings2 className="w-6 h-6" />
          <span className="hidden md:block">Settings</span>
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;
