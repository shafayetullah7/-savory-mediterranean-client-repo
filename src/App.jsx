import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './components/footer/Footer'
import Nav from './components/home/Nav';
const App = () => {
  return (
    <div className='font-poppins'>
      <div className='bg-[#A3BB98] py-2'>
          <Nav></Nav>
      </div>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default App;