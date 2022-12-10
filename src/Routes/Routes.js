import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import Contact from "../Pages/Contact/Contact";
import Home from "../Pages/Home/Home";



const router = createBrowserRouter([
   {
    path:'/',
    element:<Main></Main>, 
    children: [
      {
         path:"/", 
         element:<Home></Home>,
      }, 
      {
         path: '/home', 
         element: <Home></Home>
      }, 
      {
         path: '/contact-us', 
         element: <Contact></Contact>
      }
   ]}
 ])



 export default router; 