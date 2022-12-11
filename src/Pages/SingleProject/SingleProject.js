import React from 'react';
import { useLoaderData } from 'react-router-dom';


const SingleProject = () => {
   const project = useLoaderData(); 
   const {name, clientside, liveLink, serverside, pictures, technology, description} = project; 

   return (
      <div>
         <div className='px-5 md:pl-48 '>
            <div>
               <h2 className='text-6xl font-bold text-center  text my-20 text-primary title uppercase '>{name}</h2>
               <p className='text-2xl font-semibold capitalize text-center '>{description}</p>
               <div>
                  <h3 className=' font-bold title2 text-3xl capitalize '>Project pages: </h3>
                  <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 ">
                     {
                        pictures.map(pic => <div className='p-5 rounded-lg project'>
                              <img src={pic} alt="pic" className="rounded-lg" />
                        </div>)
                     }
                  </div>
               </div>
               <div>
                  <h3 className='font-bold title2 text-3xl capitalize   '>Technology used</h3>
                  <div className='flex flex-wrap gap-5 mb-20 justify-center'>
                  {
                     technology.map(tech => <button className='px-10 rounded-lg  py-2 bg-primary text-secondary text-xl  font-bold capitalize'>{tech}</button> )
                  }
                  </div>
               </div>
               <div >
                     <h3 className='title2'> Important Link</h3>
                     <div className='flex flex-wrap gap-5 mb-20 justify-center' >
                           <a href={clientside} className='px-10 rounded-lg  py-2 bg-primary text-secondary text-xl  font-bold capitalize'>Github Clientside</a>
                           <a href={serverside} className='px-10 rounded-lg  py-2 bg-primary text-secondary text-xl  font-bold capitalize'>Github serverside</a>
                           <a href={liveLink} className='px-10 rounded-lg  py-2 bg-primary text-secondary text-xl  font-bold capitalize'>Liveside</a>

                     </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default SingleProject;