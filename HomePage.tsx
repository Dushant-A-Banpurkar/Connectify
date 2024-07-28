import React from 'react';
import Stories from './Stories';
import Profile from './Profile';
import PeopleSuggestion from './PeopleSuggestion';
import Feed from './Feed';
import Sidebar from './Sidebar';

const HomePage: React.FC = () => {
  return (
    <div className="flex justify-center">
      <div className="fixed left-0 top-0 h-full w-64 p-4 bg-white shadow-md flex flex-col items-center">
        <Sidebar />
      </div>
      <div className="flex-grow flex flex-col items-center ml-64 mr-64">
        <div className="flex flex-col gap-4 mt-4">
          <Stories />
          <Feed />
        </div>
      </div>
      <div className="fixed right-0 top-0 h-full w-64 p-4 bg-white shadow-md flex flex-col items-center">
        <Profile />
        <div className="mt-4 w-full">
          <PeopleSuggestion />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
