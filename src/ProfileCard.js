// src/components/ProfileCard.js
// src/components/ProfileCard.js
import React from 'react';

const ProfileCard = ({ profile }) => (
  <div className="profile-card">
    <img src={profile.photo} alt={profile.name} />
    <h2>{profile.name}</h2>
    <p>{profile.description}</p>
    <p>Location: {profile.address.lat}, {profile.address.lng}</p>
  </div>
);

export default ProfileCard;

