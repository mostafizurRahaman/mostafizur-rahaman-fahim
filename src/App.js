import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Layout/Main/Main';
import Home from './components/Home/Home';

function App() {
  const router = createBrowserRouter([
    {path:'/', element:<Main></Main>, children: [
      {path:"/", element:<Home></Home>}, 
      {path:"/home", element: <Home></Home>}, 
      {path:"*", element:<h1>404 Error</h1>}
    ]}
  ])
  return (
    <div className="App">
        <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
