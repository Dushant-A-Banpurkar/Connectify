import React from 'react';
import HomePage from './components/HomePage';
import Sidebar from './components/Sidebar';

const App: React.FC = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex">
      <Sidebar />
      <div className="flex-1 mx-auto mt-4">
        <HomePage />
      </div>
    </div>
  );
};

export default App;
