import React, { useState } from 'react';
import { FaHome, FaUser, FaBlogger , FaCode, FaDownload} from "react-icons/fa";
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
          <div className='menuToggler z-50 ' onClick={handleToggle} >
               {
                  open ? <AiFillCloseCircle/> : <ImMenu/>
               }
         </div>
         <nav  className={`menu-bar ${open ? "openMenu" : "closeMenu"}`}>
            <ul className='menu' >
               <NavLink  to='/home' className={`text-2xl ${({isActive})=> isActive ? 'active' : undefined}`} onClick={handleToggle}> <span className='nav-icon'><FaHome/></span> <span className='side-text'>Home</span></NavLink>

               <NavLink to='/about-us' className={`text-2xl ${({isActive})=> isActive ? 'active' : undefined}`} onClick={handleToggle}> <span className='nav-icon'><FaUser/></span><span className='side-text' >About</span></NavLink>

               <a href='https://drive.google.com/file/d/1wPzZyH1_ihm5FtiQtCAfQUVl1emGx1Hz/view?usp=share_link'  download='Mostafizur_rahaman_resume' className='text-2xl' target="blank" onClick={handleToggle}> <span className='nav-icon'><FaDownload/></span><span className='side-text'> resume</span></a>

               <NavLink to='/skills' className={`text-2xl ${({isActive})=> isActive ? 'active' : undefined}`} onClick={handleToggle}><span className='nav-icon'><FaCode/></span><span className='side-text' >Skills</span></NavLink>

               <NavLink to='/blog' className={`text-2xl ${({isActive})=> isActive ? 'active' : undefined}`} onClick={handleToggle}><span className='nav-icon'><FaBlogger/></span><span className='side-text' >Blog</span></NavLink>

               {/* <NavLink to='/services' className={`text-2xl ${({isActive})=> isActive ? 'active' : undefined}`} onClick={handleToggle}><span className='nav-icon'><FaServer/></span><span className='side-text'>services</span></NavLink> */}
               <NavLink to='/contact-us' className={`text-2xl ${({isActive})=> isActive ? 'active' : undefined}`} onClick={handleToggle}><span className='nav-icon'><BsTelephoneFill/></span><span className='side-text'>Contact</span></NavLink>

            </ul>
         </nav>
     </>
   );
};

export default Header;