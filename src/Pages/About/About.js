import React from "react";
import author from "../../Assets/author-imgae.png";
const About = () => {
   return (
      <div className="pl-5 pr-5 lg:pl-48 " data-aos="zoom-out-right">
        <div data-aos="zoom-in-right">
        <h1 className="title">About Me</h1>
         <p className="font-semibold text-2xl my-5 text-neutral text-justify">
            I’m a Frontend Web Developer (MERN) & Computer Science Student. I
            have been learning web development for a year & still learning. As
            Full Stack developer, I’m able to design & develop a full stack
            website. I aim to be a senior Frontend Web Developer in the next 2
            years & also try to update myself with new technologies.
         </p>
        </div>

         <div className="flex items-start flex-col lg:flex-row gap-10">
            <div className="w-full lg:w-1/2" data-aos="flip-right">
               <img src={author} alt="" />
            </div>
            <div className="flex flex-col gap-3" data-aos="flip-left">
               <h2 className="font-bold  text-[20px] lg:text-5xl my-5 text-neutral uppercase ">
                  Frontend Web Developer (Mern Stack)
               </h2>
               <p className="text-2xl font-semibold text-justify">
                  I'm a full-stack web developer who has a wide range of skills
                  in React, Express JS, Node Js, MongoDB, Javascript, HTML, CSS, TailwindCSS,  Bootstrap 5, React Bootstrap, DaisyUI, Stripe, JWT, Firebase Authentication, API, REST API, GitHub, Git, Netlify, Vercel etc.
               </p>
               <div className="flex items-start justify-between my-5 md:flex-row flex-col md:gap-0 gap-3">
                  <ul className="md:w-1/2 text-2xl   space-y-3 ">
                     <li>
                        {" "}
                        <span className="font-bold mr-4">Birthday :</span> 07
                        April 2002
                     </li>
                     <li>
                        <span className="font-bold mr-4">Phone :</span>{" "}
                        +8801951976238
                     </li>
                     <li>
                        <span className="font-bold mr-4">City : </span>
                        Lakshmipur , Bangladesh
                     </li>
                     <li>
                        <span className="font-bold mr-4">Linkedin :</span>{" "}
                        <a href="https://www.linkedin.com/in/mostafiz0401/">
                           {" "}
                           mostafiz0401
                        </a>{" "}
                     </li>
                  </ul>
                  <ul className="md:w-1/2 text-2xl font-medium  space-y-3">
                     <li>
                        <span className="font-bold mr-4">Age:</span> 20 years
                     </li>
                     <li>
                        <span className="font-bold mr-4">Degree:</span> Diploma
                        In Computer Engineering
                     </li>
                     <li>
                        <span className="font-bold mr-4">Email :</span>{" "}
                        <a href="mostafizurrahaman0401@gmail.com">
                           mostafizurrahaman0401@gmail.com
                        </a>
                     </li>
                     <li>
                        <span className="font-bold mr-4">Github :</span>{" "}
                        <a href="https://github.com/mostafizurRahaman">
                           mostafizurRahaman
                        </a>
                     </li>
                  </ul>
               </div>
               <div>
                  <p className="text-2xl font-semibold">
                     On more personal level, I am very open to any situation
                     that is changing and which test my abilities and with my
                     work catalogue I have a reputation as being fast learner.
                  </p>
               </div>
            </div>
         </div>
      </div>
   );
};

export default About;
