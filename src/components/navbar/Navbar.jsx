'use client';
import React, { useState, useEffect, useRef } from 'react';
import '@styles/navbar/Navbar.css';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '@public/Images/navbar/prfec-logo.png';
import Hamburger from '@public/Images/navbar/hamburger.png';
import Close from '@public/Images/navbar/close.png';

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className='navbar'>
      <div className='navbar-container'>
        <div className='navbar-logo'>
          <Link href="/">
            <Image className='prfec-logo' src={Logo} alt="Logo" />
          </Link>
        </div>

        <div className='navbar-contents'>
          <Link href="/login" className='navbar-login'>Log in</Link>
          <Link href="/signup" className='navbar-signup'>Sign up</Link>
        </div>

        <div className='navbar-menu-icons'>
          {!menuOpen && <Image src={Hamburger} alt="Menu" onClick={handleMenuClick} />}
          {menuOpen && <Image src={Close} alt="Close" onClick={handleMenuClick} />}
        </div>

        {menuOpen && (
          <div ref={menuRef} className='navbar-menu'>
            <Link href="/login" className='navbar-login'>Log in</Link>
            <Link href="/signup" className='navbar-signup'>Sign up</Link>
          </div>
        )}
      </div>
    </div>
  );
};
