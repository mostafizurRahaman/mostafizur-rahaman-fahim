import React from 'react';
import {BsServer, BsGithub} from 'react-icons/bs';  
import {HiOutlineExternalLink} from 'react-icons/hi'; 
import './project.css'; 
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
const Project = ({project, idx}) => {
   const  {_id, name, description , liveLink, clientside, serverside, img} = project; 
  
   return (
   <div className='p-5 rounded-lg project bg-white' data-aos="zoom-in">
         <img src={img} alt={name} className="w-full h-72 border-2 border-primary rounded-lg" />
         <div>
            <h2 className='text-3xl my-5  font-bold text-center  uppercase '>{name}</h2>
            <p className='text-xl capitalize text-justify  font-medium '>{description}</p>
           <div className='flex items-center justify-between '>
               <div>
                     <Link to={`/project/${_id}`}> <button  className="bg-primary text-white font-bold  px-5 py-2 rounded-lg text-xl ">Show more</button></Link>
               </div>
               <div className='flex items-center justify-center  gap-5 my-5 text-3xl '>
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
      </div>
   );
};

export default Project;