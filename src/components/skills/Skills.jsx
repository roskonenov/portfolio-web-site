import React from 'react';
import { skillCardsData } from '../../data/Data.js'
import SkillCard from './SkillCard.jsx';

const Skills = () => {
    return (
        <div name='skills' className='w-full md:h-screen bg-[#335c67] text-[#e09f3e]'>
            <div className='max-w-[1000px] mx-auto p-4 md:pl-16 flex flex-col justify-center w-full h-full'>
                <div data-aos='fade-up'>
                    <p className='text-4xl font-bold inline border-b-4 border-[#9e2a2b] text-[#fff3b0]'>Skills</p>
                    <p data-aos='fade-up' data-aos-delay='100' className='py-4'>This are the technologies I've experience with</p>
                </div>
                <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                    {skillCardsData.map(skill =>
                        <div
                            data-aos={skill.id % 2 == 0 ? 'fade-up' : 'fade-down'}
                            data-aos-delay={`${skill.id * 100}`} >
                            <SkillCard
                                key={skill.id}
                                skillData={skill} />
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Skills