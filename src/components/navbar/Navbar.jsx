import React, { useState } from 'react';
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import Logo from '../../assets/logo.png';
import { Link } from 'react-scroll';
import { navLinks } from '../../constant/constant.js'

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);
    const navToggle = nav ? 'translate-x-0' : 'translate-x-[+100%]'

    return (
        <div className='fixed w-full md:h-[80px] h-[50px] flex justify-between items-center px-4 bg-[#e09f3e] text-[#9e2a2b] z-50'>
            <div>
                <img src={Logo} alt="Logo image" style={{ height: '50px' }} />
            </div>

            {/* Menu */}
            <ul className='hidden md:flex'>
                {navLinks.map(navLink =>
                    <li key={navLink.id} className='navbar-link'>
                        <Link to={navLink.url} smooth={true} duration={500} >
                            <p className='nav__link'>{navLink.label}</p>
                        </Link>
                    </li>)}
            </ul>

            {/* Hamburger */}
            <div onClick={handleClick} className='md:hidden z-11 cursor-pointer'>
                {!nav ? <FaBars /> : <FaTimes />}
            </div>

            {/* Overlay */}
            <div className={`fixed ${navToggle} transform transition-all duration-300 inset-0 z-9 bg-black opacity-70 w-full h-screen`}
            onClick={handleClick}>
            </div>

            {/* Mobile Menu */}
            <ul className={`fixed ${navToggle} transform transition-all duration-300 delay-100 top-0 right-0 sm:w-[60%] w-[80%] h-screen z-10 bg-[#e09f3e] flex flex-col justify-center items-center`}>
                {navLinks.map(navLink =>
                    <li key={navLink.id} className='navbar-link py-6 text-4xl duration-50 border-b-[1.5px] border-[#9e2a2b]'>
                        <Link onClick={handleClick} to={navLink.url} smooth={true} duration={500} >
                            {navLink.label}
                        </Link>
                    </li>
                )}
            </ul>

            {/* Social Icons */}
            <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
                <ul>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#0a66c2]'>
                        <a className='flex justify-between items-center w-full text-[#fff3b0]' href="https://www.linkedin.com/in/rosen-nenov-2ab7262b6/" target='_blank'>
                            LinkedIn <FaLinkedin size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#212830]'>
                        <a className='flex justify-between items-center w-full text-[#fff3b0]' href="https://github.com/roskonenov" target='_blank'>
                            GitHub <FaGithub size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
                        <Link to='contact' smooth={true} duration={500} className='flex justify-between items-center w-full text-[#fff3b0]' href="/">
                            Email <HiOutlineMail size={30} />
                        </Link>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
                        <a className='flex justify-between items-center w-full text-[#fff3b0]' href="https://drive.google.com/file/d/1mxefq8kM4MUeGtaQ1gGH_1TYIfqX9UwG/view?usp=sharing" target='_blank'>
                            Resume <BsFillPersonLinesFill size={30} />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar
