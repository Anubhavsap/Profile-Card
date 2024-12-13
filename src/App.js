// src/App.js
import React, { useState } from 'react';
import ProfileList from './ProfileList';
import './App.js'; 
import MapComponent from './MapComponent';
import ProfileDetails from './ProfileDetails';
import SearchBar from './SearchBar';
import pritam from './images/pritam.jpeg'; // Correct path based on your project structure
import arijit from './images/arijit.jpeg'; // Correct path based on your project structure
import honey from './images/honey.jpeg'; // Correct path based on your
import sonu from './images/sonu.jpeg'; // Correct path based on your project structure
const App = () => {
  const [selectedProfile, setSelectedProfile] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const profiles = [
    // Sample profile data structure
    {
      id: 1,
      name: 'Arijit Doe',
      photo: arijit, // Use the imported image variable
      description: 'A brief description about John Doe.',
      address: { lat: 40.7128, lng: -74.0060 } // Example coordinates
    },
    {
      id: 2,
      name: 'Jane Smith',
      photo: pritam, // Use imported image
      description: 'A brief description about Jane Smith.',
      address: { lat: 34.0522, lng: -118.2437 } // Example coordinates
    },
    {
      id: 3,
      name: 'Anubhav Singh ',
      photo: sonu, // Use imported image
      description: 'A brief description about Jane Smith.',
      address: { lat: 34.0522, lng: -118.2437 } // Example coordinates
    },
    {
      id: 4,
      name: 'Honey Singh',
      photo: honey, // Use imported image
      description: 'A brief description about Jane Smith.',
      address: { lat: 34.0522, lng: -118.2437 } // Example coordinates
    },
  ];

  const filteredProfiles = profiles.filter(profile =>
    profile.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <ProfileList profiles={filteredProfiles} onSelect={setSelectedProfile} />
      {selectedProfile && (
        <>
          <MapComponent location={selectedProfile.address} />
          <ProfileDetails profile={selectedProfile} />
        </>
      )}
    </div>
  );
};

export default App;
