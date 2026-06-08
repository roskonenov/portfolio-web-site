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
                <p data-aos="fade-right" data-aos-delay="400" className="text-[#e09f3e] text-sm sm:text-lg py-4 max-w-[700px]"
                >
                    I'm a full-stack developer with experience building web applications using
                    <strong> Java</strong>, <strong>Spring Boot</strong>, <strong>Node.js</strong>, <strong> Express</strong>, <strong> React</strong>, and <strong> MySQL</strong>. I've developed projects featuring authentication, authorization, CRUD operations, REST APIs, server-side rendering, and responsive user interfaces. I enjoy turning ideas into reliable software, writing clean and maintainable code, and continuously expanding my technical skills. I'm currently seeking a junior developer role where I can contribute to real-world projects while growing as an engineer.
                </p>
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