import React from 'react';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Menu from './pages/Menu';
import Wholemenu from './pages/Wholemenu';
import Contact from './pages/Contact';
import Cart from './pages/Cart';
import Orders from './pages/Orders';

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
        <Route path='/menu/:category' Component={Withnavandfot}>
          <Route path='/menu/:category' Component={Menu} />
        </Route>
        <Route path='/menu' Component={Withnavandfot}>
          <Route path='/menu' Component={Wholemenu} />
        </Route>
        <Route path='/contact' Component={Withnavandfot}>
          <Route path='/contact' Component={Contact} />
        </Route>
        <Route path='/cart' Component={Withnavandfot}>
          <Route path='/cart' Component={Cart} />
        </Route>
        <Route path='/orders' Component={Withnavandfot}>
          <Route path='/orders' Component={Orders} />
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
