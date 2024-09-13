'use client'
import React, {useState} from 'react'
import '@styles/navbar/Navbar.css'
import Link from 'next/link'
import Image from 'next/image'
import Logo from '@public/Images/navbar/prfec-logo.png'
import Hamburger from '@public/Images/navbar/hamburger.png';
import Close from '@public/Images/navbar/close.png';

export const Navbar = () => {

    const [menuOpen, setMenuOpen] = useState(false);

    function handleMenuClick(){
        setMenuOpen(!menuOpen);
    }

  return (
    <div className='navbar'>
        <div className='navbar-container'>
            <div className='navbar-logo'>
                <Link href="/">
                    <Image className='prfec-logo' src={Logo}/>
                </Link>
            </div>

            <div className='navbar-contents'>
                <button className='navbar-login'>Log in</button>
                <button className='navbar-signup'>Sign up</button>
            </div>

            <div className='navbar-menu-icons'>
               {!menuOpen && <Image src={Hamburger} onClick={handleMenuClick}/>}
               {menuOpen && <Image src={Close} onClick={handleMenuClick}/>}
            </div>

            {menuOpen && <div className='navbar-menu'>
                <button className='navbar-login'>Log in</button>
                <button className='navbar-signup'>Sign up</button>
              </div> 
            }  
        </div>
    </div>
  )
}
