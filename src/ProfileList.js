// src/components/ProfileList.js
// src/components/ProfileList.js
import React from 'react';
import ProfileCard from './ProfileCard';

const ProfileList = ({ profiles }) => (
  <div className="container">
    {profiles.map(profile => (
      <ProfileCard key={profile.id} profile={profile} />
    ))}
  </div>
);

export default ProfileList;

