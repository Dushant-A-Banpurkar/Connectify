import React from 'react';

const PeopleSuggestion: React.FC = () => {
  return (
    <div className="p-4 bg-white border border-gray-300 rounded-md mb-4">
      <h2 className="font-bold mb-4">Suggestions For You</h2>
      {[...Array(5)].map((_, i) => (
        <div key={i} className="flex items-center mb-4">
          <div className="w-10 h-10 rounded-full bg-gray-300 mr-3"></div>
          <div>
            <div className="font-bold">User {i + 1}</div>
            <div className="text-sm text-gray-500">@user{i + 1}</div>
          </div>
          <button className="ml-auto text-blue-500 font-semibold">Follow</button>
        </div>
      ))}
    </div>
  );
};

export default PeopleSuggestion;
