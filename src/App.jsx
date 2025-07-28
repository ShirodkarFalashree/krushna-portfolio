import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createBrowserRouter, RouterProvider, Outlet, Navigate } from 'react-router-dom';

const Layout = () => {
  return (
    <div className='font-inter bg-mainbg min-h-screen text-white'>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      helo
    </>
  )
}

export default App
