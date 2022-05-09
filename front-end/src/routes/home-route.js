import React from 'react';
import HomePage from '../pages/home-page';
import ContactPage from '../pages/contact-page';
import SkillsPage from '../pages/skills-page';

const HomeRoute = () => {
  return (
    <main>
      <div id='home'>
        <HomePage />
      </div>
      <div id='cv'>
        <SkillsPage />
      </div>
      <div id='contact'>
        <ContactPage />
      </div>
    </main>
  );
};
// to : index.js (routes)
export default HomeRoute;
