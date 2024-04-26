import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './main.css';

import HomePage from './routes/HomePage.jsx';
import NavBar from './routes/NavBar.jsx';
import About from './routes/About.jsx';

import AppContextProvider from './context/AppContext.jsx';
import Internal from './routes/Internal.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <NavBar />,
    children: [
      {
        path: '/',
        element: <HomePage />,
        children: [
          {
            path: '/',
            element: <Internal />,
          },
        ],
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
    <AppContextProvider>
      <RouterProvider router={router} />
    </AppContextProvider>
  </React.StrictMode>
);
