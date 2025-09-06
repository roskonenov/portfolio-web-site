import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { Link } from 'react-scroll'

const Home = () => {
    return (
        <div name='home' className='w-full h-screen bg-[#335c67]'>

            {/* Container */}
            <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
                <p className='text-[#9e2a2b] sm:text-2xl'>Hi, my name is</p>
                <h1 className='text-bg text-4xl sm:text-7xl font-bold'>Rosen Nenov</h1>
                <h2 className='text-bg text-4xl sm:text-7xl font-bold'>I'm a Full Stack Developer</h2>
                <p className='text-[#e09f3e] py-4 max-w-[700px]'>I am motivated and detail-oriented with a strong foundation in Java (Spring Boot) and modern front-end technologies like React and JavaScript. Experienced in building real-world applications, following clean code principles and best practices in both back-end and front-end development. Skilled in working with relational databases (MySQL) and designing RESTful APIs. Passionate about continuous learning and eager to contribute to innovative software projects in a collaborative team environment.</p>
                <div>
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