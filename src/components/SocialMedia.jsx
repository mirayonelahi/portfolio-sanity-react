import React from 'react';
import { BsTwitter, BsGithub } from 'react-icons/bs';
import { FaLinkedin } from 'react-icons/fa';

const SocialMedia = () => (
  <div className="app__social">
    <div>
    <a target="_blank"  href="https://www.linkedin.com/in/mir-ayon-elahi/">
    <FaLinkedin/>     
  </a>  
    </div>   
    <div>
    <a target="_blank"  href="https://github.com/mirayonelahi">
    <BsGithub/>     
  </a>  
    </div> 
    <div>
    <a target="_blank"  href="https://twitter.com/elahiayon">
    <BsTwitter/>     
  </a>  
    </div> 
  </div>
);

export default SocialMedia;
