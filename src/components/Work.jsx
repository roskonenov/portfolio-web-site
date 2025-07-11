import React from 'react';
import TravelNest from '../assets/TravelNest.png';
import ComicWorld from '../assets/ComicWorld.png';

const Work = () => {
    return (
        <div name='work' className='w-full md:h-screen text-[#e09f3e] bg-[#335c67]'>
            <div className='max-w-[1000px] mx-auto p-4 pt-10 flex flex-col justify-center w-full h-full'>
                <div className='pb-8 mt-8'>
                    <p className='text-4xl font-bold inline border-b-4 text-[#fff3b0] border-[#9e2a2b]'>Work</p>
                    <p className='py-6'>This are my recent projects</p>
                </div>
                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>

                    <div style={{ backgroundImage: `url(${ComicWorld})` }}
                        className='relative shadow-md shadow-[#fff3b0] group container rounded-md flex justify-center items-center mx-auto bg-no-repeat bg-cover bg-center h-[250px]'>
                        <div className='absolute top-0 left-0 w-full h-full rounded-md flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition duration-300 bg-gradient-to-r from-[rgba(255,243,176,0.8)] to-[rgba(224,159,62,0.8)]'>
                            <span className='text-2xl font-bold text-[#335c67] tracking-wider'>
                                React JS Application
                            </span>
                            <div className='pt-8 text-center'>
                                <a className='text-center rounded-lg px-4 py-3 m-2 bg-[#fff3b0] hover:bg-[#9e2a2b] hover:text-[#fff3b0] duration-100 text-[#335c67] font-bold text-lg' href="https://comic-world-457306.web.app/" target='_blank'>
                                    Demo
                                </a>
                                <a className='text-center rounded-lg px-4 py-3 m-2 bg-[#fff3b0] hover:bg-[#9e2a2b] hover:text-[#fff3b0] duration-100 text-[#335c67] font-bold text-lg' href="https://github.com/roskonenov/ComicWorld" target='_blank'>
                                    Code
                                </a>
                            </div>
                        </div>
                    </div>
                    <div style={{ backgroundImage: `url(${TravelNest})` }}
                        className='relative shadow-md shadow-[#fff3b0] group container rounded-md flex justify-center items-center mx-auto bg-no-repeat bg-cover bg-center h-[250px]'>
                        <div className='absolute top-0 left-0 w-full h-full rounded-md flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition duration-300 bg-gradient-to-r from-[rgba(255,243,176,0.8)] to-[rgba(224,159,62,0.8)]'>
                            <span className='text-2xl font-bold text-[#335c67] tracking-wider'>
                                Spring Boot Application
                            </span>
                            <div className='pt-8 text-center'>
                                <a className='text-center rounded-lg px-4 py-3 m-2 bg-[#fff3b0] hover:bg-[#9e2a2b] hover:text-[#fff3b0] duration-100 text-[#335c67] font-bold text-lg' href="https://travelnest-production.up.railway.app/" target='_blank'>
                                    Demo
                                </a>
                                <a className='text-center rounded-lg px-4 py-3 m-2 bg-[#fff3b0] hover:bg-[#9e2a2b] hover:text-[#fff3b0] duration-100 text-[#335c67] font-bold text-lg' href="https://github.com/roskonenov/TravelNest" target='_blank'>
                                    Code
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Work