import GitHubLogo from './images/github_logo.svg';
import LinkedInLogo from './images/linkedin_logo.png';
import React from 'react';
import './Footer.scss';

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
      <a
        className='smaller'
        href='https://github.com/scotteratigan/typing'
        target='_blank'
        rel='noopener noreferrer'>
        View Source
      </a>
    </div>
  );
}
