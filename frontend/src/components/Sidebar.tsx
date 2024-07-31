import React from 'react';
import { IconHome, IconSearch, IconBell, IconMessage, IconBookmark, IconCalendar, IconPlus, IconUser } from '@tabler/icons-react';
import ThemeSwitcher from './ThemeSwithcer';

const Sidebar: React.FC = () => {
  return (
    <div className="w-full lg:w-64 ml-2">
      <h1 className="text-2xl font-bold mb-8">Connectify</h1>
      <nav className="flex flex-col items-start gap-4">
        <a href="#" className="flex items-center gap-2 p-2 rounded hover:bg-gray-200 w-full">
          <IconHome /> Home
        </a>
        <a href="#" className="flex items-center gap-2 p-2 rounded hover:bg-gray-200 w-full">
          <IconSearch /> Explore
        </a>
        <a href="#" className="flex items-center gap-2 p-2 rounded hover:bg-gray-200 w-full">
          <IconBell /> Notifications
        </a>
        <a href="#" className="flex items-center gap-2 p-2 rounded hover:bg-gray-200 w-full">
          <IconMessage /> Messages
        </a>
        <a href="#" className="flex items-center gap-2 p-2 rounded hover:bg-gray-200 w-full">
          <IconBookmark /> Bookmarks
        </a>
        <a href="#" className="flex items-center gap-2 p-2 rounded hover:bg-gray-200 w-full">
          <IconCalendar /> Event
        </a>
        <a href="#" className="flex items-center gap-2 p-2 rounded hover:bg-gray-200 w-full">
          <IconPlus /> Post
        </a>
        <a href="#" className="flex items-center gap-2 p-2 rounded hover:bg-gray-200 w-full">
          <IconUser /> Profile
        </a>
      </nav>
      
    </div>
  );
};

export default Sidebar;
