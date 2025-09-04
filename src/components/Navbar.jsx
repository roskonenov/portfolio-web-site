import React, { useState } from 'react';
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import Logo from '../assets/logo.png';
import {Link} from 'react-scroll';

const Navbar = () => {
    const [ nav, setNav ] = useState(false);
    const handleClick = () => setNav(!nav);
    
    return (
        <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#e09f3e] text-[#9e2a2b] z-50'>
            <div>
                <img src={Logo} alt="Logo image" style={{ height: '50px' }} />
            </div>

            {/* Menu */}
            <ul className='hidden md:flex'>
                <li className='navbar-link'>
                    <Link to='home' smooth={true} duration={500} >
                    Home
                    </Link>
                </li>
                <li className='navbar-link'>
                    <Link to='about' smooth={true} duration={500} >
                    About
                    </Link>
                </li>
                <li className='navbar-link'>
                    <Link to='skills' smooth={true} duration={500} >
                    Skills
                    </Link>
                </li>
                <li className='navbar-link'>
                    <Link to='work' smooth={true} duration={500} >
                    Work
                    </Link>
                </li>
                <li className='navbar-link'>
                    <Link to='contact' smooth={true} duration={500} >
                    Contact
                    </Link>
                </li>
            </ul>

            {/* Hamburger */}
            <div onClick={handleClick} className='md:hidden z-10 cursor-pointer'>
                {!nav ? <FaBars /> : <FaTimes />}
            </div>

            {/* Mobile Menu */}
            <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#e09f3e] flex flex-col justify-center items-center'}>
                <li className='navbar-link py-6 text-4xl duration-50'>
                    <Link onClick={handleClick} to='home' smooth={true} duration={500} >
                    Home
                    </Link>
                </li>
                <li className='navbar-link py-6 text-4xl'>
                    <Link onClick={handleClick} to='about' smooth={true} duration={500} >
                    About
                    </Link>
                </li>
                <li className='navbar-link py-6 text-4xl'>
                    <Link onClick={handleClick} to='skills' smooth={true} duration={500} >
                    Skills
                    </Link>
                </li>
                <li className='navbar-link py-6 text-4xl'>
                    <Link onClick={handleClick} to='work' smooth={true} duration={500} >
                    Work
                    </Link>
                </li>
                <li className='navbar-link py-6 text-4xl'>
                    <Link onClick={handleClick} to='contact' smooth={true} duration={500} >
                    Contact
                    </Link>
                </li>
            </ul>

            {/* Social Icons */}
            <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
                <ul>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#0a66c2]'>
                        <a className='flex justify-between items-center w-full text-[#fff3b0]' href="https://www.linkedin.com/in/rosen-nenov-2ab7262b6/" target='_blank'>
                        LinkedIn <FaLinkedin size={30}/>
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#212830]'>
                        <a className='flex justify-between items-center w-full text-[#fff3b0]' href="https://github.com/roskonenov" target='_blank'>
                        GitHub <FaGithub size={30}/>
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
                        <Link to='contact' smooth={true} duration={500} className='flex justify-between items-center w-full text-[#fff3b0]' href="/">
                        Email <HiOutlineMail size={30}/>
                        </Link>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
                        <a className='flex justify-between items-center w-full text-[#fff3b0]' href="https://drive.google.com/file/d/1mxefq8kM4MUeGtaQ1gGH_1TYIfqX9UwG/view?usp=sharing" target='_blank'>
                        Resume <BsFillPersonLinesFill size={30}/>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar
