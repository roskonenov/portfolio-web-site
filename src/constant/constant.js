import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedin } from 'react-icons/fa'

export const navLinks = [
    {
        id: 1,
        url: 'home',
        label: 'Home'
    },
    {
        id: 2,
        url: 'about',
        label: 'About'
    },
    {
        id: 3,
        url: 'skills',
        label: 'Skills'
    },
    {
        id: 4,
        url: 'work',
        label: 'Work'
    },
    {
        id: 5,
        url: 'contact',
        label: 'Contact'
    },
];

export const socialIconsData = [
    {
        id: 1,
        bgColor: 'bg-[#0a66c2]',
        link: 'https://www.linkedin.com/in/rosen-nenov-2ab7262b6/',
        label: 'LinkedIn',
        icon: FaLinkedin,
        anchorType: 'a',
    },
    {
        id: 2,
        bgColor: 'bg-[#212830]',
        link: 'https://github.com/roskonenov',
        label: 'GitHub',
        icon: FaGithub,
        anchorType: 'a',
    },
    {
        id: 3,
        bgColor: 'bg-[#6fc2b0]',
        link: 'contact',
        label: 'Email',
        icon: HiOutlineMail,
        anchorType: 'Link',
    },
    {
        id: 4,
        bgColor: 'bg-[#565f69]',
        link: 'https://drive.google.com/file/d/1mxefq8kM4MUeGtaQ1gGH_1TYIfqX9UwG/view?usp=sharing',
        label: 'Resume',
        icon: BsFillPersonLinesFill,
        anchorType: 'a',
    },
];