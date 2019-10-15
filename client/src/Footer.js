import GitHubLogo from './images/github_logo.svg';
import LinkedInLogo from './images/linkedin_logo.png';

import React from 'react';

export default function Footer() {
  return (
    <div className='footer'>
      Created by Scott Ratigan.
      <a href='https://github.com/scotteratigan' target='_blank' rel='noopener noreferrer'>
        <img className='logo-link' src={GitHubLogo} alt='GitHub Logo' />
      </a>
      <a
        href='https://www.linkedin.com/in/scotteratigan/'
        target='_blank'
        rel='noopener noreferrer'>
        <img className='logo-link' src={LinkedInLogo} alt='LinkedIn Logo' />
      </a>
    </div>
  );
}
