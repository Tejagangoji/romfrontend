import React from 'react';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

/* admin */
import Adminlogin from './pages/admin/Adminlogin';
import Adminhome from './pages/admin/Adminhome';

function Withnavandfot() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' Component={Withnavandfot}>
          <Route path='/' Component={Home} />
        </Route>
        <Route path='/login' Component={Login} />
        <Route path='/register' Component={Register} />
        {/* admin */}
        <Route path='/admin' Component={Adminhome} />
        <Route path='/adminlogin' Component={Adminlogin} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
