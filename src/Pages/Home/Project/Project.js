import React from 'react';
import {BsServer, BsGithub} from 'react-icons/bs'; 
import {Link } from 'react-router-dom'; 
import {HiOutlineExternalLink} from 'react-icons/hi'; 
import './project.css'; 
const Project = ({project}) => {
   const  {_id, name, description , liveLink, clientside, serverside, img} = project; 
   return (
      <div className='p-5 rounded-lg project bg-white'>
         <img src={img} alt={name} />
         <div>
            <h2 className='text-3xl my-5  font-bold text-center   '>{name}</h2>
            <p>{description}</p>
            <div className='flex items-center justify-center  gap-10 my-5'>
             {
               serverside && <a href={serverside && serverside}><BsServer></BsServer></a>
             } 
             {
               clientside && <a href={clientside && clientside}> <BsGithub></BsGithub>    </a>
             }
             {
               liveLink && <a href={liveLink && liveLink}><HiOutlineExternalLink></HiOutlineExternalLink></a>
             }
              
            </div>
         </div>
      </div>
   );
};

export default Project;