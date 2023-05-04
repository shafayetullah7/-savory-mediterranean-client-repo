import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './components/footer/Footer'
import Nav from './components/home/Nav';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <div className='font-poppins'>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />

      <div className='bg-[#A3BB98] py-2 z-50'>
          <Nav></Nav>
      </div>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default App;