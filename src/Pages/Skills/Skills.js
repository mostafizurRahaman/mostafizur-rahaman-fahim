import React from "react";
import "./Skills.css";

const Skills = () => {
   return (
      <div className="my-20 md:pl-48 px-5 z-0" data-aos="fade-down">
         <h2 className="title">My Skills</h2>
         <div className="flex items-center gap-3 lg:gap-12 w-full lg:flex-row flex-col ">
            <div className=" w-full lg:w-1/2" data-aos="flip-right">
               <div className="skill mt-3 html">
                  <div className="skill_name text-primary font-bold uppercase text-2xl ml-2 mb-2 -z-10">
                     html
                  </div>
                  <div className="skill_bar">
                     <div className="skill_progress" per="95%"></div>
                  </div>
               </div>
               <div className="skill mt-3 css">
                  <div className="skill_name text-primary font-bold uppercase text-2xl ml-2 mb-2 -z-10">
                     CSS
                  </div>
                  <div className="skill_bar">
                     <div className="skill_progress" per="90%"></div>
                  </div>
               </div>
               <div className="skill mt-3 javascript">
                  <div className="skill_name text-primary font-bold uppercase text-2xl ml-2 mb-2 -z-10">
                     Javascript
                  </div>
                  <div className="skill_bar">
                     <div className="skill_progress" per="85%"></div>
                  </div>
               </div>
               <div className="skill mt-3 tailwindcss">
                  <div className="skill_name text-primary font-bold uppercase text-2xl ml-2 mb-2 -z-10 ">
                     TailwindCss
                  </div>
                  <div className="skill_bar">
                     <div className="skill_progress" per="95%"></div>
                  </div>
               </div>
               <div className="skill mt-3 bootstrap">
                  <div className="skill_name text-primary font-bold uppercase text-2xl ml-2 mb-2 -z-10">
                     Bootstrap 5
                  </div>
                  <div className="skill_bar">
                     <div className="skill_progress" per="95%"></div>
                  </div>
               </div>
               <div className="skill mt-3 github">
                  <div className="skill_name text-primary font-bold uppercase text-2xl ml-2 mb-2 -z-10 ">
                     Github
                  </div>
                  <div className="skill_bar">
                     <div className="skill_progress" per="95%"></div>
                  </div>
               </div>
            </div>
            <div className="w-full lg:w-1/2 " data-aos="flip-left">
               <div className="skill mt-3  react">
                  <div className="skill_name text-primary font-bold uppercase text-2xl ml-2 mb-2 reactjs">
                     REACT
                  </div>
                  <div className="skill_bar">
                     <div className="skill_progress" per="85%"></div>
                  </div>
               </div>
               <div className="skill mt-3 express">
                  <div className="skill_name text-primary font-bold uppercase text-2xl ml-2 mb-2 ">
                     Express Js
                  </div>
                  <div className="skill_bar">
                     <div className="skill_progress" per="75%"></div>
                  </div>
               </div>
               <div className="skill mt-3  node">
                  <div className="skill_name text-primary font-bold uppercase text-2xl ml-2 mb-2 ">
                     Node Js
                  </div>
                  <div className="skill_bar ">
                     <div className="skill_progress" per="25%"></div>
                  </div>
               </div>
               <div className="skill mt-3  mongoDb">
                  <div className="skill_name text-primary font-bold uppercase text-2xl ml-2 mb-2 ">
                     MongoDB
                  </div>
                  <div className="skill_bar">
                     <div className="skill_progress" per="80%"></div>
                  </div>
               </div>
               <div className="skill mt-3 firebase">
                  <div className="skill_name text-primary font-bold uppercase text-2xl ml-2 mb-2">
                     Firebase
                  </div>
                  <div className="skill_bar firebase ">
                     <div className="skill_progress" per="98%"></div>
                  </div>
               </div>
               <div className="skill mt-3 vercel">
                  <div className="skill_name text-primary font-bold uppercase text-2xl ml-2 mb-2 -z-10 ">
                     Vercel
                  </div>
                  <div className="skill_bar ">
                     <div className="skill_progress" per="100%"></div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Skills;
