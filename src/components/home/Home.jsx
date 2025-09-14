import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { Link } from 'react-scroll'

const Home = () => {
    return (
        <div name='home' className='w-full h-screen bg-[#335c67]'>

            {/* Container */}
            <div data-aos='fade-right' className='max-w-[1000px] mx-auto px-4 md:pl-16 flex flex-col justify-center h-full'>
                <p data-aos='fade-left' data-aos-delay='100' className='text-[#9e2a2b] sm:text-2xl'>Hi, my name is</p>
                <h1 data-aos='fade-right' data-aos-delay='200' className='text-bg text-4xl sm:text-7xl font-bold'>Rosen Nenov</h1>
                <h2 data-aos='fade-left' data-aos-delay='300' className='text-bg text-4xl sm:text-7xl font-bold'>I'm a Full Stack Developer</h2>
                <p data-aos='fade-right' data-aos-delay='400' className='text-[#e09f3e] text-sm sm:text-lg py-4 max-w-[700px]'>I have strong experience in <strong>Java</strong> and <strong>React</strong>. I build scalable, user- friendly web applications and have worked on both frontend and backend projects using <strong>Spring, MySQL</strong>, and modern <strong>JavaScript</strong>. Passionate about clean code, teamwork, and continuous learning. Looking for a junior developer position where I can grow and deliver impactful solutions.</p>
                <div data-aos='zoom-in' data-aos-delay='500'>
                    <Link to='work' smooth={true} duration={500} className='relative text-[#fff3b0] group border-2 px-6 py-3 pr-9 my-2 mx-auto inline-flex items-center hover:bg-[#9e2a2b] hover:border-[#9e2a2b] cursor-pointer'>View Work
                        <span className='absolute left-25 group-hover:rotate-90 group-hover:ml-[+4px] group-hover:mt-[-7px] duration-300'>
                            <HiArrowNarrowRight className='ml-3' />
                        </span>
                    </Link>
                </div>
            </div>
        </div >
    )
}

export default Home