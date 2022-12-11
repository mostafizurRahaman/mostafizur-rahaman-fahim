import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Project from "../Project/Project";

const Projects = () => {
   const [projects, setProjects] = useState([]);
   useEffect(() => {
      fetch("https://mostafizur-rahaman-porfolio-server.vercel.app/projects")
         .then((res) => res.json())
         .then((data) => setProjects(data));
   }, []);

   return (
      <div className="px-10 lg:pl-48 my-20">
         <h2 className="text-6xl font-bold text-center  text my-20 text-primary ">
            My Projects
         </h2>
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {projects.map((project, idx) => (
               <Project idx={idx} key={project._id} project={project}></Project>
            ))}
         </div>
      </div>
   );
};

export default Projects;
