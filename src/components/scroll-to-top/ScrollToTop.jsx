import React, { useState } from 'react'
import { PiArrowFatUp } from "react-icons/pi";

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        window.scrollY > 300 ? setIsVisible(true) : setIsVisible(false);
    };

    window.addEventListener('scroll', toggleVisibility);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    return (
        <div className='fixed bottom-4 right-4 animate-pulse'>
            {isVisible &&
                <button className='bg-linear-to-r from-[#e09f3e] to-[#fff3b0] text-[#9e2a2b] rounded-full w-12 h-12 flex justify-center items-center cursor-pointer'
                 onClick={scrollToTop}>
                    <PiArrowFatUp className='w-full h-full p-2'/>
                </button>}
        </div>
    )
}

export default ScrollToTop