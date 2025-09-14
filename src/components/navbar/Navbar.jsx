import React, { useEffect, useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa'
import Logo from '../../assets/logo.png';
import { Link } from 'react-scroll';
import { navLinks } from '../../constant/constant.js'

const Navbar = () => {
    const [mobileNavOpen, setMobileNavOpen] = useState(false);
    const handleClick = () => setMobileNavOpen(m => m ? false : true);
    const mobileNavToggle = mobileNavOpen ? 'translate-x-0' : 'translate-x-[+100%]';
    const [navBg, setNavBg] = useState(false);

    useEffect(() => {
        const navBgHandler = () => {
            window.scrollY >= 50 ? setNavBg(true) : setNavBg(false);
        }

        window.addEventListener('scroll', navBgHandler);

        return () => window.removeEventListener('scroll', navBgHandler);
    }, []);


    return (
        <div className={`fixed w-full md:h-[80px] h-[50px] flex justify-between items-center px-4 ${navBg ? 'bg-linear-to-r from-[#e09f3e] to-[#fff3b0]' : 'bg-none'} transition-colors duration-150 text-[#9e2a2b] z-50`}>
            <div>
                <img src={Logo} alt="Logo image" style={{ height: '50px' }} />
            </div>

            {/* Menu */}
            <ul className='hidden md:flex'>
                {navLinks.map(navLink =>
                    <li key={navLink.id} className='navbar-link'>
                        <Link to={navLink.url} smooth={true} duration={700} >
                            <p className='nav__link'>{navLink.label}</p>
                        </Link>
                    </li>)}
            </ul>

            {/* Hamburger */}
            <div onClick={handleClick} className='md:hidden z-11 cursor-pointer'>
                {!mobileNavOpen ? <FaBars /> : <FaTimes />}
            </div>

            {/* Overlay */}
            <div className={`fixed ${mobileNavToggle} transform transition-all duration-300 inset-0 z-9 bg-black opacity-70 w-full h-screen`}
                onClick={handleClick}>
            </div>

            {/* Mobile Menu */}
            <ul className={`fixed ${mobileNavToggle} transform transition-all duration-300 delay-100 top-0 right-0 sm:w-[60%] w-[80%] h-screen z-10 bg-[#e09f3e] flex flex-col justify-center items-center`}>
                {navLinks.map(navLink =>
                    <li key={navLink.id} className='navbar-link py-6 text-4xl duration-50 border-b-[1.5px] border-[#9e2a2b]'>
                        <Link onClick={handleClick} to={navLink.url} smooth={true} duration={500} >
                            {navLink.label}
                        </Link>
                    </li>
                )}
            </ul>
        </div>
    )
}

export default Navbar
