// src/components/ProfileDetails.js
import React from 'react';

const ProfileDetails = ({ profile }) => (
  <div>
    <h1>{profile.name}</h1>
    <img src={profile.photo} alt={profile.name} />
    <p>{profile.description}</p>
    {/* Add more details here */}
  </div>
);

export default ProfileDetails;
