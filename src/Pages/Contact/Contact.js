
import React from "react";

import "./Contact.css";

const Contact = () => {
   
   return (
      <div className="flex  items-center justify-center p-12 flex-col gap-7 bg-blue-400 contact-form mt-10">
         <h2 className="capitalize text-4xl text-primary before:w-1/2 before:h-1 before:inline-block pb-3   before:absolute inline-block relative before:bottom-0 before:bg-primary-500 text-center my-5  mt-10 ">
            Contact With me
         </h2>
         <form action="https://formsubmit.co/fahim654326@gmail.com" method="POST"
            className="grid grid-cols-1 md:grid-cols-2 gap-10 w-4/5"
         >
            <div className="flex flex-col w-full  gap-4">
               <label className="text-xl font-bold" htmlFor="first-name">
                  {" "}
                  First Name:{" "}
               </label>
               <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  placeholder="first name : "
                  className="border-2 rounded-lg w-full px-3 py-2 placeholder:text-xl placeholder:text-primary bg-transparent placeholder:text-opacity-70"
                  required
                  
               />
               
            </div>
            <div className="flex flex-col w-full  gap-4">
               <label className="text-xl font-bold" htmlFor="last-name">
                  last Name:{" "}
               </label>
               <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  placeholder="last name : "
                  className="border-2 rounded-lg w-full px-3 py-2 placeholder:text-xl placeholder:text-primary bg-transparent"
                  required
                 
               />
               
            </div>
            <div className="flex flex-col w-full  gap-4">
               <label className="text-xl font-bold" htmlFor="email">
                  email:
               </label>
               <input
                  type="email"
                  id="email"
                  placeholder="email"
                  name="email"
                  className="border-2 rounded-lg w-full px-3 py-2 placeholder:text-xl placeholder:text-primary  bg-transparent"
                  required
               
               />
               
            </div>
            <div className="flex flex-col w-full gap-4">
               <label className="text-xl font-bold" htmlFor="phone">
                  Mobile Number :{" "}
               </label>
               <input
                  type="phone"
                  id="phone"
                  name="phone"
                  placeholder="phone"
                  className="border-2 rounded-lg w-full px-3 py-2 placeholder:text-xl placeholder:text-primary bg-transparent "
                  required
                  
               />
               
            </div>
            <div className="flex flex-col w-full  gap-4 col-span-1 md:col-span-2">
               <label className="text-xl font-bold" htmlFor="message">
                  Message:{" "}
               </label>
               <textarea
                  placeholder="Enter your message"
                  name="message"
                  id="message"
                  cols="30"
                  rows="10"
                  className="border-2 border-primary outline-primary duration-500 transition-all  rounded-lg w-full px-3 py-2 focus:py-4 bg-transparent placeholder:text-xl placeholder:text-primary"
                  required
                 
               ></textarea>
               <div>
                  <button
                     type="submit"
                     className="text-2xl  font-semibold text-white bg-primary px-10 mt-5 py-4   block mx-auto  "
                  >
                     Send Message
                  </button>
               </div>
            </div>
         </form>
      </div>
   );
};

export default Contact;
