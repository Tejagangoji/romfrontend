import React from 'react';
import '../styles/navbar.css';
import { Link, useNavigate } from 'react-router-dom';

export default function Navbar() {
    const navigate = useNavigate();
    const logout = () => {
        localStorage.removeItem("userlogin");
        return navigate('/login');
    }
  return (
    <div className='navbar'>
      <div className="part1"><h2 className="logo">Logo</h2></div>
      <div className='part2'>
        <ul className='navlists'>
          <li className='listitems'>Home</li>
          <li className='listitems'>Menu</li>
          <li className='listitems'>Contact</li>
          <li className='listitems'>Cart</li>
          <li className='listitems'><button onClick={logout} className='navaction'>Logout</button></li>
        </ul>
      </div>
    </div>
  )
}
