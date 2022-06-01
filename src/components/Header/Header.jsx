import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.jpg'
import './Header.css'
const Header = () => {
    return (
        <>
        <div className='header-container'>
        <Link to='/' >
            <img src={logo} alt='logo'  />
            </Link>
            <div className='header-links'>
            <Link to='/' className='btn'>Home </Link>
            <Link to='/characters' className='btn'>Characters </Link>
            <Link to='/episodes' className='btn'>Episodes</Link>
            </div>
            </div>
        </>
    );
};

export default Header;