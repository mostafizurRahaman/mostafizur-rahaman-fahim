import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import SocialSite from '../Shared/SocialSite/SocialSite';
import './Home.css'; 


const Home = () => {
   return (
      <div className='home-container'> 
         <div className='developer-info'>
         <h1>Mostafizur Rahaman</h1>
         <p>I'm <span> 
            <Typewriter 
            words={['web designer',"web developer", 'Mern Stack  Developer', "React Developer", "Frontend Developer"]}
            loop
            cursor
            cursorStyle='|'
            typeSpeed={150}
            deleteSpeed={150}
            delaySpeed={1000}
            />
         </span></p>
         <SocialSite></SocialSite>
         </div>
      </div> 
   );
};

export default Home;