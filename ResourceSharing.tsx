import React from 'react';

const ResourceSharing: React.FC = () => {
  return (
    <div className="bg-white border border-gray-300 rounded-md p-4 shadow-md">
      <h2 className="text-lg font-bold mb-2">Resource Sharing</h2>
      {/* Add a form or upload button to allow users to share study materials */}
      <div>
        <input
          type="file"
          className="file-input file-input-bordered w-full mb-2"
          placeholder="Share a study material"
        />
        <button className="btn btn-primary w-full">Upload</button>
      </div>
    </div>
  );
};

export default ResourceSharing;