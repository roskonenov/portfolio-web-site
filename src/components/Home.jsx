import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'

const Home = () => {
    return (
        <div name='home' className='w-full h-screen bg-[#0a192f]'>

            {/* Container */}
            <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
                <p className='text-pink-600'>Hi, my name is</p>
                <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Rosen Nenov</h1>
                <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>I'm a Full Stack Developer</h2>
                <p className='text-[#892b0] py-4 max-w-[700px]'>I am motivated and detail-oriented with a strong foundation in Java (Spring Boot) and modern front-end technologies like React and JavaScript. Experienced in building real-world applications, following clean code principles and best practices in both back-end and front-end development. Skilled in working with relational databases (MySQL) and designing RESTful APIs. Passionate about continuous learning and eager to contribute to innovative software projects in a collaborative team environment.</p>
                <div>

                    <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>View Work
                        <span className='group-hover:rotate-90 duration-300'>
                            <HiArrowNarrowRight className='ml-3' />
                        </span>
                    </button>

                </div>
            </div>
        </div >
    )
}

export default Home