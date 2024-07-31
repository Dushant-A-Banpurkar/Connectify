import React from 'react';
import Stories from './Stories';
import Profile from './Profile';
import PeopleSuggestion from './PeopleSuggestion';
import Feed from './Feed';
import Sidebar from './Sidebar';

const HomePage: React.FC = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-center">
      <div className="lg:fixed lg:left-0 lg:top-0 lg:h-full w-full lg:w-64 p-4 bg-white shadow-md flex flex-col items-center">
        <Sidebar />
      </div>
      <div className="flex-grow flex flex-col items-center lg:ml-64 lg:mr-80 mt-4 lg:mt-0">
        <div className="flex flex-col gap-4 w-full max-w-2xl">
          <Stories />
          <Feed />
        </div>
      </div>
      <div className="lg:fixed lg:right-0 lg:top-0 lg:h-full w-full lg:w-80 p-4 bg-white shadow-md flex flex-col items-center mt-4 lg:mt-0">
        
        <div className='w-full'> <Profile /></div>
        <div className="mt-4 w-full">
          <PeopleSuggestion />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
