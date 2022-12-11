import React from "react";
import { Typewriter } from "react-simple-typewriter";
import SocialSite from "../Shared/SocialSite/SocialSite";
import "./Home.css";
import Projects from "./Projects/Projects";

const Home = () => {
   return (
      <div>
         <div className="home-container"  data-aos="zoom-out-left">
            <div className="developer-info" >
               <h1 >Mostafizur Rahaman</h1>
               <p>
                  I'm{" "}
                  <span>
                     <Typewriter
                        words={[
                           "web designer",
                           "web developer",
                           "Mern Stack  Developer",
                           "React Developer",
                           "Frontend Developer",
                        ]}
                        loop
                        cursor
                        cursorStyle="|"
                        typeSpeed={150}
                        deleteSpeed={150}
                        delaySpeed={1000}
                     />
                  </span>
               </p>
               <SocialSite></SocialSite>
            </div>
         </div>
         <Projects></Projects>
      </div>
   );
};

export default Home;
