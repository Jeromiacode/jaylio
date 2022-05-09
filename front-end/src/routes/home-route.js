import React from 'react';
import HomePage from '../pages/home-page';
import AboutPage from '../pages/about-page';
import ContactPage from '../pages/contact-page';
import SkillsPage from '../pages/skills-page';

const HomeRoute = () => {
  return (
    <>
      <div id='home'>
        <HomePage />
      </div>
      <div id='about'>
        <AboutPage />
      </div>
      <div id='cv'>
        <SkillsPage />
      </div>
      <div id='contact'>
        <ContactPage />
      </div>
    </>
  );
};
// to : index.js (routes)
export default HomeRoute;
