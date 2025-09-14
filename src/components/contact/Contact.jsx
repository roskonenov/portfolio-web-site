import React, { useRef } from 'react'
import emailjs from 'emailjs-com';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            'service_3gnopkq',
            'template_m0mabxa',
            form.current,
            't8JRJcWQ_IFWYAqD9'
        ).then(
            result => {
                console.log(result.text);
                alert("Message sent successfilly!");
            },
            error => {
                console.log(error.text);
                alert("Something went wrong.")
            }
        );
        e.target.reset();
    }
    return (
        <div name='contact' className='w-full h-screen lg:mt-0 mt-56 bg-[#335c67] flex justify-center items-center p-4'>
            <form ref={form} onSubmit={sendEmail} action="" className='flex flex-col max-w-[600px] w-full'>
                <div data-aos='fade-up' className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-[#9e2a2b] text-[#fff3b0]'>Contact</p>
                    <p  data-aos='zoom-out' data-aos-delay='100' className='text-[#e09f3e] py-4'>Submit the form below or send me an email roskonenov@gmail.com</p>

                </div>
                <input data-aos='fade-left' data-aos-delay='200' className='bg-[#fff3b0] p-2 outline-[#9e2a2b]' type="text" placeholder='Name' name='name' required/>
                <input data-aos='fade-right' data-aos-delay='300' className='my-4 p-2 bg-[#fff3b0] outline-[#9e2a2b]' type="email" placeholder='Email' name='email' required/>
                <textarea data-aos='fade-left' data-aos-delay='400' className='bg-[#fff3b0] p-2 outline-[#9e2a2b]' placeholder='Message' name='message' rows='10' required></textarea>
                <button data-aos='zoom-out' data-aos-delay='500' className='text-[#fff3b0] border-2 hover:bg-[#9e2a2b] hover:border-[#9e2a2b] duration-100 px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
            </form>
        </div>
    )
}

export default Contact