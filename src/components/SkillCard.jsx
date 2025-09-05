import React from 'react'
import Tilt from 'react-parallax-tilt'


const SkillCard = ({skillData}) => {
    return (
        <Tilt className='shadow-xs shadow-[#fff3b0] hover:scale-105 duration-500 rounded-xs pt-2'>
            <img className='w-20 mx-auto' 
            src={`${skillData.icon}`}
            alt= {`${skillData.name} logo`} />
            <p className='my-4'>{skillData.name}</p>
        </Tilt>
    )
}

export default SkillCard