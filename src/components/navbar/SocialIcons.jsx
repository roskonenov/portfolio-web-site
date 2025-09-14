import React from 'react'
import { Link } from 'react-scroll';
import { socialIconsData } from '../../constant/constant.js'

const SocialIcons = () => {
    return (
        <div className='hidden md:flex fixed flex-col top-[35%] left-0'>
            <ul>
                {socialIconsData.map(socialIcon =>
                    <li key={socialIcon.id} className={`w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-5px] duration-300 bg-[${socialIcon.bgColor}]`}>
                        <Link className='flex justify-between items-center w-full text-[#fff3b0]' href={socialIcon.link} target='_blank'>
                            {socialIcon.label} <socialIcon.icon size={30} />
                        </Link>
                    </li>
                )}
            </ul>
        </div>
    )
}

export default SocialIcons