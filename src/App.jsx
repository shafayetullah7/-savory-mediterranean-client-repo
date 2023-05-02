import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './components/footer/Footer'
const App = () => {
  return (
    <div className=''>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default App;