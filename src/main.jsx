import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './main.css';

import App from './routes/App.jsx';
import NavBar from './routes/NavBar.jsx';
import About from './routes/About.jsx';

import AppContext from './context/AppContext.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <NavBar />,
    children: [
      {
        path: '/',
        element: <App />,
      },
    ],
  },
  {
    path: '/about',
    element: <About />,
  },
]);

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppContext>
      <RouterProvider router={router} />
    </AppContext>
  </React.StrictMode>
);
