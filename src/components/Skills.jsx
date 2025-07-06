import React from 'react';
import Java from '../assets/java.png';
import Spring from '../assets/spring.png';
import GCloud from '../assets/gcloud.png';
import Firebase from '../assets/firebase.png';
import CSS from '../assets/css.png';
import HTML from '../assets/html.png';
import JavaScript from '../assets/javascript.png';
import ReactLogo from '../assets/react.png';
import TailWind from '../assets/tailwind.png';
import MySql from '../assets/mysql.png';
import Thymeleaf from '../assets/thymeleaf.png';
import GitHub from '../assets/github.png';

const Skills = () => {
    return (
        <div name='skills' className='w-full h-screen bg-[#335c67] text-[#e09f3e]'>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div>
                    <p className='text-4xl font-bold inline border-b-4 border-[#9e2a2b] text-[#fff3b0]'>Skills</p>
                    <p className='py-4'>This are the technologies I've experience with</p>
                </div>
                <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                    <div className='shadow-xs shadow-[#fff3b0] hover:scale-110 duration-500 rounded-xs pt-2'>
                        <img className='w-20 mx-auto' src={Java} alt="Java logo" />
                        <p className='my-4'>JAVA</p>
                    </div>
                    <div className='shadow-xs shadow-[#fff3b0] hover:scale-110 duration-500 rounded-xs pt-2'>
                        <img className='w-20 mx-auto' src={Spring} alt="Spring logo" />
                        <p className='my-4'>SPRING</p>
                    </div>
                    <div className='shadow-xs shadow-[#fff3b0] hover:scale-110 duration-500 rounded-xs pt-2'>
                        <img className='w-20 mx-auto' src={MySql} alt="MySql logo" />
                        <p className='my-4'>MYSQL</p>
                    </div>
                    <div className='shadow-xs shadow-[#fff3b0] hover:scale-110 duration-500 rounded-xs pt-2'>
                        <img className='w-20 mx-auto' src={Thymeleaf} alt="Thymeleaf logo" />
                        <p className='my-4'>THYMELEAF</p>
                    </div>
                    <div className='shadow-xs shadow-[#fff3b0] hover:scale-110 duration-500 rounded-xs pt-2'>
                        <img className='w-20 mx-auto' src={HTML} alt="HTML logo" />
                        <p className='my-4'>HTML</p>
                    </div>
                    <div className='shadow-xs shadow-[#fff3b0] hover:scale-110 duration-500 rounded-xs pt-2'>
                        <img className='w-20 mx-auto' src={CSS} alt="CSS logo" />
                        <p className='my-4'>CSS</p>
                    </div>
                    <div className='shadow-xs shadow-[#fff3b0] hover:scale-110 duration-500 rounded-xs pt-2'>
                        <img className='w-20 mx-auto' src={JavaScript} alt="JavaScript logo" />
                        <p className='my-4'>JAVASCRIPT</p>
                    </div>
                    <div className='shadow-xs shadow-[#fff3b0] hover:scale-110 duration-500 rounded-xs pt-2'>
                        <img className='w-20 mx-auto' src={ReactLogo} alt="React logo" />
                        <p className='my-4'>REACT</p>
                    </div>
                    <div className='shadow-xs shadow-[#fff3b0] hover:scale-110 duration-500 rounded-xs pt-2'>
                        <img className='w-20 mx-auto' src={TailWind} alt="Tailwind logo" />
                        <p className='my-4'>TAILWIND</p>
                    </div>
                    <div className='shadow-xs shadow-[#fff3b0] hover:scale-110 duration-500 rounded-xs pt-2'>
                        <img className='w-20 mx-auto' src={GitHub} alt="Github logo" />
                        <p className='my-4'>GITHUB</p>
                    </div>
                    <div className='shadow-xs shadow-[#fff3b0] hover:scale-110 duration-500 rounded-xs pt-2'>
                        <img className='w-20 mx-auto' src={GCloud} alt="GCloud logo" />
                        <p className='my-4'>GCLOUD</p>
                    </div>
                    <div className='shadow-xs shadow-[#fff3b0] hover:scale-110 duration-500 rounded-xs pt-2'>
                        <img className='w-20 mx-auto' src={Firebase} alt="Firebase logo" />
                        <p className='my-4'>FIREBASE</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills