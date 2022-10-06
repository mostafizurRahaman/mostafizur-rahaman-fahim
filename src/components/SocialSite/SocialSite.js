import React from 'react';
import {FaFacebook, FaTwitter, FaGithub, FaLinkedinIn ,FaInstagram} from 'react-icons/fa';
import './SocialSite.css'; 
const SocialSite = () => {
   return (
      <ul className='social-container'>
      <li><a href="https://www.facebook.com/mostafiz478889"><FaFacebook className='social-icon'/></a></li>
      <li><a href="https://www.facebook.com/mostafiz478889"><FaTwitter className='social-icon'/></a></li>
      <li><a href="https://www.facebook.com/mostafiz478889"><FaGithub className='social-icon'/></a></li>
      <li><a href="https://www.facebook.com/mostafiz478889"><FaLinkedinIn className='social-icon'/></a></li>
      <li><a href="https://www.facebook.com/mostafiz478889"><FaInstagram className='social-icon'/></a></li>
   </ul>
   );
};

export default SocialSite;