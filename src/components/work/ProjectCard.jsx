import React from 'react'

const ProjectCard = ({project}) => {
    return (
        <div style={{ backgroundImage: `url(${project.backgroundImage})` }}
            className='relative shadow-md shadow-[#fff3b0] group container rounded-md flex justify-center items-center mx-auto bg-no-repeat bg-cover bg-center h-[250px]'>
            <div className='lg:absolute relative lg:top-0 top-3/4 left-0 w-full lg:h-full h-2/3 rounded-md flex flex-col lg:justify-center justify-end  items-center lg:opacity-0 group-hover:opacity-100 transition duration-300 lg:bg-gradient-to-r from-[rgba(255,243,176,0.8)] to-[rgba(224,159,62,0.8)]'>
                <span className='text-2xl text-center font-bold lg:text-[#335c67] text-[#e09f3e] tracking-wider'>
                    {project.appType}
                </span>
                <div className='pt-8 text-center'>
                    <a className='text-center rounded-lg px-4 py-3 m-2 lg:bg-[#fff3b0] bg-[#335c67]  hover:bg-[#9e2a2b] hover:border-[#9e2a2b] hover:text-[#fff3b0] duration-100 lg:text-[#335c67] text-[#fff3b0] border-2 lg:border-none font-bold text-lg' href={`${project.demoLink}`} target='_blank'>
                        Demo
                    </a>
                    <a className='text-center rounded-lg px-4 py-3 m-2 lg:bg-[#fff3b0] bg-[#335c67]  hover:bg-[#9e2a2b] hover:border-[#9e2a2b] hover:text-[#fff3b0] duration-100 lg:text-[#335c67] text-[#fff3b0] border-2 lg:border-none font-bold text-lg' href={`${project.codeLink}`} target='_blank'>
                        Code
                    </a>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard