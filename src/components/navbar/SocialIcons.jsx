import React from 'react'
import { Link } from 'react-scroll';
import { socialIconsData } from '../../constant/constant.js'

const SocialIcons = () => {
    return (
        <div className='hidden md:flex fixed flex-col top-[35%] left-0'>
            <ul>
                {socialIconsData.map(socialIcon =>
                    <li key={socialIcon.id} className={`w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-5px] duration-300 bg-[${socialIcon.bgColor}]`}>
                        {socialIcon.anchorType === 'Link' ? (
                            <Link
                                className='flex justify-between items-center w-full text-[#fff3b0]'
                                to={socialIcon.link}
                                smooth={true}
                                duration={500}>
                                {socialIcon.label}
                                <socialIcon.icon size={30} />
                            </Link>
                        ) : (
                            <a
                                className='flex justify-between items-center w-full text-[#fff3b0]'
                                href={socialIcon.link}
                                target='_blank'
                            >
                                {socialIcon.label} 
                                <socialIcon.icon size={30} />
                            </a>
                        )}
                    </li>
                )}
            </ul>
        </div>
    )
}

export default SocialIcons