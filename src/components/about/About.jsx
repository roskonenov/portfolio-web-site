import React from 'react'
import graduationPicture from '../../assets/graduationPicture.jpg'

const About = () => {
    return (
        <div name='about' className='w-full h-screen bg-[#335c67] text-[#e09f3e]'>
            <div className='flex flex-col justify-center items-center w-full h-full px-4 md:pl-16'>
                <div data-aos='fade-up' className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                    <div className='pb-8'>
                        <p className='text-4xl font-bold inline border-b-4 border-[#9e2a2b] text-[#fff3b0]'>
                            About
                        </p>
                    </div>
                </div>
                <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8'>
                    <div data-aos='fade-up' data-aos-delay='100' className='text-bg text-4xl font-bold col-span-2'>
                        <p>Hi, I'm Rosen, nice to meet you. Please take a look around.</p>
                    </div>
                    <div data-aos='zoom-in' data-aos-delay='200' className='h-fit bg-cover bg-center col-span-2 sm:col-span-1 border-3 border-[#9e2a2b] rounded-4xl overflow-hidden'>
                        <img src={graduationPicture} alt="Graduation picture" />
                    </div>
                    <div data-aos='zoom-out' data-aos-delay='300' className='col-span-2 sm:col-span-1 text-sm md:text-[1rem] lg:text-lg whitespace-pre-wrap'>
                        Beyond technical skills, I bring <strong>curiosity</strong>, <strong>persistence</strong>, and a strong commitment to <strong>continuous learning</strong>. I enjoy tackling challenging problems, researching effective solutions, and refining my work until it meets a high standard of quality.

                        I pay close attention to <strong>detail</strong>, value <strong>collaboration</strong>, and believe that great software is built through <strong>clear communication</strong> and <strong>shared knowledge</strong>. Through every project, I aim not only to improve the final product but also to grow as a developer by learning from new challenges and experiences.

                        I am eager to contribute to a professional development team where I can apply my skills, learn from <strong>experienced engineers</strong>, and continue building software that creates <strong>real value for users</strong>.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About