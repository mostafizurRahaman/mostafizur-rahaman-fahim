import React, { useState } from 'react';
import { FaHome, FaUser, FaCopy,FaServer , FaCode } from "react-icons/fa";
import {BsTelephoneFill} from 'react-icons/bs';
import {ImMenu} from "react-icons/im"; 
import {AiFillCloseCircle}  from 'react-icons/ai'; 
import { NavLink } from 'react-router-dom';
import './Header.css'; 

const Header = () => {
   const [open, setOpen] = useState(false); 
   const handleToggle = () =>{
      setOpen(!open); 
   }
      
   return (
     <>
          <div className='menuToggler' onClick={handleToggle} >
               {
                  open ? <AiFillCloseCircle/> : <ImMenu/>
               }
         </div>
         <nav  className={`menu-bar ${open ? "openMenu" : "closeMenu"}`}>
            <ul className='menu' >
               <NavLink to='/home' className={({isActive})=> isActive ? 'active' : undefined} onClick={handleToggle}> <span className='nav-icon'><FaHome/></span> <span className='side-text'>Home</span></NavLink>

               <NavLink to='/about-us' className={({isActive})=> isActive ? 'active' : undefined} onClick={handleToggle}> <span className='nav-icon'><FaUser/></span><span className='side-text' >About</span></NavLink>

               <NavLink to='/portfolio' className={({isActive})=> isActive ? 'active' : undefined} onClick={handleToggle}><span className='nav-icon'><FaCopy/></span><span className='side-text'>Portfolio</span></NavLink>

               <NavLink to='/skills' className={({isActive})=> isActive ? 'active' : undefined} onClick={handleToggle}><span className='nav-icon'><FaCode/></span><span className='side-text' >Skills</span></NavLink>

               <NavLink to='/services' className={({isActive})=> isActive ? 'active' : undefined} onClick={handleToggle}><span className='nav-icon'><FaServer/></span><span className='side-text'>services</span></NavLink>
               <NavLink to='/contact-us' className={({isActive})=> isActive ? 'active' : undefined} onClick={handleToggle}><span className='nav-icon'><BsTelephoneFill/></span><span className='side-text'>Contact</span></NavLink>

            </ul>
         </nav>
     </>
   );
};

export default Header;