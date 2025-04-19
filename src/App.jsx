import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

import './App.css';
import ARViewer from './Home'; 
import Home from './pages/Home';
import Desarrollo from './pages/Desarrollo';
import Mision from './pages/Mision';
import Nosotros from './pages/Nosotros';
import Identidad from './pages/Identidad';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/huitzillin',
    element: <Desarrollo />,
  },
  {
    path: '/mision-vision',
    element: <Mision />,
  },
  {
    path: '/nosotros',
    element: <Nosotros />,
  },
  {
    path: '/identidad',
    element: <Identidad />,
  }
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
