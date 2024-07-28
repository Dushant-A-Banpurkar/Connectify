import React from 'react';

const Profile: React.FC = () => {
  return (
    <div className="bg-white border border-gray-300 rounded-md p-4 shadow-md">
      <div className="flex items-center mb-04">
        <div className="w-16 h-16 rounded-full bg-gray-300 mr-3"></div>
        <div>
          <div className="font-bold text-xl">User Name</div>
          <div className="text-sm text-gray-500">@username</div>
        </div>
      </div>
      
      <div className="grid grid-cols-3 gap-2">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="w-full aspect-w-1 aspect-h-1 bg-gray-300"></div>
        ))}
      </div>
    </div>
  );
};

export default Profile;
