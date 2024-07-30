import React, {  } from 'react';
import { IconHome, IconBell, IconUser, IconSearch, IconMessageCircle, IconBookmark, IconUsers } from '@tabler/icons-react';
import { Link } from 'react-router-dom';

const Sidebar: React.FC = () => {
 
  return (
    <div className="fixed flex flex-col items-center bg-gray p-6 h-full shadow-lg mr-32">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Connectify</h1>
      </div>
      <nav className="space-y-6 mb-8 w-full">
        <Link to="/" className="flex items-center space-x-2 hover:bg-gray-100 p-2 rounded">
          <IconHome className="w-6 h-6" />
          <span>Home</span>
        </Link>
        <Link to="#" className="flex items-center space-x-2 hover:bg-gray-100 p-2 rounded">
          <IconSearch className="w-6 h-6" />
          <span>Explore</span>
        </Link>
        <Link to="/notifications" className="flex items-center space-x-2 hover:bg-gray-100 p-2 rounded">
          <IconBell className="w-6 h-6" />
          <span>Notifications</span>
        </Link>
        <Link to="#" className="flex items-center space-x-2 hover:bg-gray-100 p-2 rounded">
          <IconMessageCircle className="w-6 h-6" />
          <span>Messages</span>
        </Link>
        <Link to="#" className="flex items-center space-x-2 hover:bg-gray-100 p-2 rounded">
          <IconBookmark className="w-6 h-6" />
          <span>Bookmarks</span>
        </Link>
        <Link to="/group" className="flex items-center space-x-2 hover:bg-gray-100 p-2 rounded">
          <IconUsers className="w-6 h-6" />
          <span>GroupPage</span>
        </Link>
        <Link to="/profile" className="flex items-center space-x-2 hover:bg-gray-100 p-2 rounded">
          <IconUser className="w-6 h-6" />
          <span>Profile</span>
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;
