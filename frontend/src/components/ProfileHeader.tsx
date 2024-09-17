import React, { useState, useRef, useEffect } from 'react';
import { IconPencil } from '@tabler/icons-react';
import ProfilePosts from './ProfilePost'; // Import ProfilePosts component
import Skills from './Skills'; //Import Skills components
import Projects from './Projects';
import InterestsHobbies from './InterestsHobbies';
import PersonalInformation from './PersonalInformation';
import AcademicInformation from './AcademicInformation';
import Achievements from './Achievements';
import SocialLinks from './SocialLinks';
import SavePost from './SavePost';

interface ProfileHeaderProps {
  profilePic: string;
  coverPhoto: string;
  onProfilePicChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onCoverPhotoChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const ProfileHeader: React.FC<ProfileHeaderProps> = ({
  profilePic,
  coverPhoto,
  onProfilePicChange,
  onCoverPhotoChange
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentEdit, setCurrentEdit] = useState<'profile' | 'cover' | null>(null);
  const [selectedTab, setSelectedTab] = useState<'Post' | 'Save' | 'Connections' | 'About'>('Post');

  const profilePicInputRef = useRef<HTMLInputElement>(null);
  const coverPhotoInputRef = useRef<HTMLInputElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  const handlePhotoClick = (type: 'profile' | 'cover') => {
    setCurrentEdit(type);
    setIsModalOpen(true);
  };

  const handleUploadClick = () => {
    if (currentEdit === 'profile' && profilePicInputRef.current) {
      profilePicInputRef.current.click();
    } else if (currentEdit === 'cover' && coverPhotoInputRef.current) {
      coverPhotoInputRef.current.click();
    }
    setIsModalOpen(false);
  };

  const handleRemoveClick = () => {
    // Implement logic to remove the current photo here
    setIsModalOpen(false);
  };

  const handleCancelClick = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        setIsModalOpen(false);
      }
    };

    if (isModalOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isModalOpen]);

  return (
    <div className="profile-header bg-slate-50 shadow-md rounded-xl p-4 relative">
      {/* Cover Photo */}
      <div className="cover-photo bg-gray-300 h-72 rounded-t-lg relative cursor-pointer" onClick={() => handlePhotoClick('cover')}>
        <img
          src={coverPhoto}
          alt="Cover"
          className="w-full h-full object-cover rounded-t-lg"
        />
      </div>
      <input
        type="file"
        accept="image/*"
        className="hidden"
        ref={coverPhotoInputRef}
        onChange={onCoverPhotoChange}
      />

      {/* Profile Info */}
      <div className="flex items-start mt-4">
        {/* Profile Picture */}
        <div className="relative cursor-pointer" onClick={() => handlePhotoClick('profile')}>
          <img
            src={profilePic}
            alt="Profile"
            className="w-32 h-32 rounded-full border-4 border-white"
          />
        </div>
        <input
          type="file"
          accept="image/*"
          className="hidden"
          ref={profilePicInputRef}
          onChange={onProfilePicChange}
        />

        {/* Bio and Other Info */}
        <div className="ml-4 flex-1">
          <h1 className="text-2xl font-bold">Saurabh Kori</h1>
          <p className="text-gray-600">@thesaurabhkori</p>
          <div className="flex items-center mt-2">
            <p className="text-gray-900">Bio: Computer Science and Engineering</p>
            <button className="text-white bg-blue-500 p-2 rounded-full hover:bg-blue-600 ml-4">
              <IconPencil className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Modal for photo options */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50">
          <div ref={modalRef} className="bg-gray-100 p-6 rounded-lg w-100 shadow-lg">
            <h3 className="text-2xl font-bold mb-2 text-center">Select Action</h3>
            <hr className="border-gray-300 mb-2" />

            <button
              onClick={handleUploadClick}
              className="w-full text-blue-500 p-3 border-b border-gray-300 hover:bg-gray-100 transition-colors"
            >
              Upload Photo
            </button>
            <button
              onClick={handleRemoveClick}
              className="w-full text-red-500 p-3 border-b border-gray-300 hover:bg-gray-100 transition-colors"
            >
              Remove Current Photo
            </button>
            <button
              onClick={handleCancelClick}
              className="w-full text-gray-800 p-3 hover:bg-gray-100 transition-colors"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {/* Tabs Section */}
      <div className="tabs-section mt-4 flex justify-evenly border-t border-gray-700">
        {['Post', 'Save', 'Connections', 'About'].map(tab => (
          <button
            key={tab}
            className={`w-1/6 text-center py-2 ${selectedTab === tab ? 'border-b-2 border-blue-500 font-semibold' : 'text-gray-700'}`}
            onClick={() => setSelectedTab(tab as 'Post' | 'Save' | 'Connections' | 'About')}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Conditional rendering for ProfilePosts */}
      <div className="mt-4">
        {selectedTab === 'Post' && <ProfilePosts />} {/* Render ProfilePosts when Post tab is selected */}
      </div>
      <div className="mt-4">
        {selectedTab === 'Connections' && <Skills />} {/* Render Skills when Connections tab is selected */}
      </div>
      <div className="mt-4">
        {selectedTab === 'Connections' && <InterestsHobbies />} {/* Render ProfilePosts when Post tab is selected */}
      </div>
      <div className="mt-4">
        {selectedTab === 'Connections' && <Projects />} {/* Render Projects when Connections tab is selected */}
      </div>
      <div className="mt-4">
        {selectedTab === 'About' && <PersonalInformation />} {/* Render ProfilePosts when Post tab is selected */}
      </div>
      <div className="mt-4">
        {selectedTab === 'About' && <AcademicInformation />} {/* Render ProfilePosts when Post tab is selected */}
      </div>
      <div className="mt-4">
        {selectedTab === 'About' && <Achievements />} {/* Render ProfilePosts when Post tab is selected */}
      </div>
      <div className="mt-4">
        {selectedTab === 'About' && <SocialLinks />} {/* Render ProfilePosts when Post tab is selected */}
      </div>
      <div className="mt-4">
        {selectedTab === 'Save' && <SavePost />} {/* Render ProfilePosts when Post tab is selected */}
      </div>
    </div>
  );
};

export default ProfileHeader;
