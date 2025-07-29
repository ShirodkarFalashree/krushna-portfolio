import { useState } from 'react';
import { createBrowserRouter, RouterProvider, Outlet, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Work from './pages/Work';
import Blog from './pages/Blog';
import { GridBackground } from './components/bg';

// Layout component
const Layout = () => {
  return (
    <div className='font-inter bg-mainbg min-h-screen text-black'>
      
      <Navbar />
      <div style={{
      backgroundImage: `
        linear-gradient(to right, #dedede45 1px, transparent 1px),
        linear-gradient(to bottom, #dedede45 1px, transparent 1px)
      `,
      backgroundSize: '9px 9px'
    }}>

      <Outlet />
      </div>
      <Footer />
    </div>
  );
};





// Router configuration
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/work',
        element: <Work />,
      },
      {
        path: '/blog',
        element: <Blog />,
      },
      {
        path: '*',
        element: <Navigate to="/" />,
      },
    ],
  },
]);

// Main App component
function App() {
  return <RouterProvider router={router} />;
}

export default App;