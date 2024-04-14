import React from 'react';
import Header from './Components/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from './Components/Footer/Footer';
import Contact from './Components/Contact/Contact';
import Params from './Components/Params/Params';
function Layout() {

  setInterval(() => {
    document.title = 'Your Logo1'
  }, 1000);
  setInterval(() => {
    document.title = 'Amazing...'
  }, 2000);
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
