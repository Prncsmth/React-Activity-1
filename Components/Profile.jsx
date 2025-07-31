import React from 'react';
import ProfilePicture from './ProfilePicture';
import AboutMe from './AboutMe';
import Skills from './Skills';
import Button from './Button';

export default function Profile() {
  return (
    <main className="profile">
      <ProfilePicture />
      <AboutMe />
      <Skills />
      <Button />
    </main>
  );
}
