import React, { useState, useRef } from 'react';
import ProfileHeader from './ProfileHeader';
// import ProfilePosts from './ProfilePost'; 
// import PersonalInformation from './PersonalInformation'; 
// import SocialLinks from './SocialLinks'; 
// import AcademicInformation from './AcademicInformation'; 
// import Events from './Events'; 
// import Skills from './Skills'; 
// import Achievements from './Achievements'; 
// import Projects from './Projects'; 
// import InterestsHobbies from './InterestsHobbies';
import { IconEdit } from '@tabler/icons-react';

const ProfilePage: React.FC = () => {
  const [profilePic, setProfilePic] = useState('profile-pic-url');
  const [coverPhoto, setCoverPhoto] = useState('cover-photo-url');

  const profilePicInputRef = useRef<HTMLInputElement>(null);
  const coverPhotoInputRef = useRef<HTMLInputElement>(null);

  const handleProfilePicChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onload = () => {
        setProfilePic(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleCoverPhotoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onload = () => {
        setCoverPhoto(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleProfilePicClick = () => {
    if (profilePicInputRef.current) {
      profilePicInputRef.current.click();
    }
  };

  const handleCoverPhotoClick = () => {
    if (coverPhotoInputRef.current) {
      coverPhotoInputRef.current.click();
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray mr-auto">
      <div className="container bg-white shadow-xl rounded-xl p-4 max-w-auto w-full">
        <ProfileHeader
          profilePic={profilePic}
          coverPhoto={coverPhoto}
          onProfilePicChange={handleProfilePicChange}
          onCoverPhotoChange={handleCoverPhotoChange}
          onProfilePicClick={handleProfilePicClick}
          onCoverPhotoClick={handleCoverPhotoClick}
        />

        {/* <ProfilePosts /> */}

        <div className="user-information mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* <PersonalInformation /> */}
          {/* <SocialLinks /> */}
        </div>

        <div className="academic-information mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* <AcademicInformation /> */}
        </div>

        <div className="activity-and-engagement mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* <Events /> */}
          <div className="bg-white shadow-md rounded-lg p-4 relative">
            {/* <Skills /> */}
          </div>
        </div>

        <div className="additional-features mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* <Achievements /> */}
          
          {/* <Projects /> */}
          {/* <InterestsHobbies /> */}
        </div>

        <input
          type="file"
          ref={profilePicInputRef}
          onChange={handleProfilePicChange}
          accept="image/*"
          style={{ display: 'none' }}
        />
        <input
          type="file"
          ref={coverPhotoInputRef}
          onChange={handleCoverPhotoChange}
          accept="image/*"
          style={{ display: 'none' }}
        />
      </div>
    </div>
  );
};

export default ProfilePage;