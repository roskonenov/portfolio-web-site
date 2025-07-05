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
        <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'>
            <form ref={form} onSubmit={sendEmail} action="" className='flex flex-col max-w-[600px] w-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>Contact</p>
                    <p className='text-gray-300 py-4'>Submit the form below or send me an email roskonenov@gmail.com</p>

                </div>
                <input className='bg-[#ccd5f6] p-2' type="text" placeholder='Name' name='name' />
                <input className='my-4 p-2 bg-[#ccd5f6]' type="email" placeholder='Email' name='email' />
                <textarea className='bg-[#ccd5f6] p-2' placeholder='Message' name='message' rows='10'></textarea>
                <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
            </form>
        </div>
    )
}

export default Contact