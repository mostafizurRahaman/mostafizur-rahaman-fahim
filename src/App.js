import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './Routes/Routes';
import AOS from 'aos'; 
import { useEffect } from 'react';
function App() {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 1000,
    });
  }, [])
  
  return (
    <div className="App">
        <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
