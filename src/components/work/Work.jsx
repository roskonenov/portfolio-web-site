import React, { useState } from 'react';
import { projectInfo } from '../../data/Data.js'
import ProjectCard from './ProjectCard.jsx';


const Work = () => {
    const [expandedProjectId, setExpandedProjectId] = useState(null);

    const toggleExpandHandler = (id) => {
        setExpandedProjectId(e => e === id ? null : id);
    };
    return (
        <div name='work' className='w-full h-fill text-[#e09f3e] bg-[#335c67]'>
            <div className='max-w-[1000px] mx-auto p-4 md:pl-16 pt-10 flex flex-col justify-center w-full h-full'>
                <div data-aos='fade-up' className='pb-8 mt-8'>
                    <p className='text-4xl font-bold inline border-b-4 text-[#fff3b0] border-[#9e2a2b]'>Work</p>
                    <p data-aos='fade-up' data-aos-delay='100' className='py-6'>This are my recent projects</p>
                </div>
                <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-y-4 gap-y-50'>
                    {projectInfo.map(project =>
                        <div
                            key={project.id}
                            data-aos={project.id % 2 == 0 ? 'zoom-in' : 'zoom-out'}
                            data-aos-delay={`${project.id * 200}`} >
                            <ProjectCard 
                            project={project}
                            isExpanded = {expandedProjectId === project.id}
                            toggleExpand = {() => toggleExpandHandler(project.id)} />
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Work