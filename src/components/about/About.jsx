import React from 'react'
import graduationPicture from '../../assets/graduationPicture.jpg'

const About = () => {
    return (
        <div name='about' className='w-full h-screen bg-[#335c67] text-[#e09f3e]'>
            <div className='flex flex-col justify-center items-center w-full h-full px-4 md:pl-16'>
                <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                    <div className='pb-8'>
                        <p className='text-4xl font-bold inline border-b-4 border-[#9e2a2b] text-[#fff3b0]'>
                            About
                        </p>
                    </div>
                    {/* <div></div> */}
                </div>
                <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8'>
                    <div className='text-bg text-4xl font-bold col-span-2'>
                        <p className=''>Hi, I'm Rosen, nice to meet you. Please take a look around.</p>
                    </div>
                    <img className='col-span-2 sm:col-span-1' src={graduationPicture} alt="Graduation picture" />
                    <p className='col-span-2 sm:col-span-1 text-sm sm:text-md md:text-lg'>
                        I am motivated and detail-oriented with a strong foundation in Java (Spring Boot) and modern front-end technologies like React and JavaScript. Experienced in building real-world applications, following clean code principles and best practices in both back-end and front-end development. Skilled in working with relational databases (MySQL) and designing RESTful APIs. Passionate about continuous learning and eager to contribute to innovative software projects in a collaborative team environment.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About