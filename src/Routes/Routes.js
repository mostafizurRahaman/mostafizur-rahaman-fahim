import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import About from "../Pages/About/About";
import Blog from "../Pages/Blog/Blog";
import Contact from "../Pages/Contact/Contact";
import Home from "../Pages/Home/Home";
import SingleProject from "../Pages/SingleProject/SingleProject";
import Skills from "../Pages/Skills/Skills";

const router = createBrowserRouter([
   {
      path: "/",
      element: <Main></Main>,
      children: [
         {
            path: "/",
            element: <Home></Home>,
         },
         {
            path: "/home",
            element: <Home></Home>,
         },
         {
            path: "/contact-us",
            element: <Contact></Contact>,
         },
         {
            path: "/about-us",
            element: <About></About>,
         },
         {
            path: "/skills",
            element: <Skills></Skills>,
         },
         {
            path: "/project/:id",
            element: <SingleProject></SingleProject>,
            loader: ({ params }) =>
               fetch(
                  `https://mostafizur-rahaman-porfolio-server.vercel.app/projects/${params.id}`
               ),
         },
         {
            path: "/blog",
            element: <Blog></Blog>,
         },
      ],
   },
]);

export default router;
