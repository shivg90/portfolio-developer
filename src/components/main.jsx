import React from 'react';
import Link from 'next/link';
import { FaGithub, FaLinkedinIn, FaMedium } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';

const Main = () => {
    return (
        <div className="w-full h-screen text-center mt-6">
            <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
                <div>
                    <h1 className="py-4 text-gray-700">
                        Hi, I&apos;m <span className="text-pink-900" >Siobhan</span>
                    </h1>
                    <h1 className="py-2 text-gray-700">
                        A Frontend Web Developer
                    </h1>
                    <p className="py-6 text-gray-700 max-w-[70%] mx-auto text-center">
                        I&apos;m a Berlin based graduate of a Full-Stack Web Development course looking for my first junior role.  I’d love to specialise in Frontend projects with CSS, and am open to freelance, hybrid and remote work.
                        With a background in business and a passion for creativity, I am a career-changer hoping to utilize my skills both old and new.
                    </p>

                    <div className='flex items-center justify-center max-w-[330px] m-auto py-6'>
                        <a
                        href='https://www.linkedin.com/in/siobhangatenby'
                        target='_blank'
                        rel='noreferrer'
                        >
                        <div className='mx-2 rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <FaLinkedinIn />
                        </div>
                        </a>
                        <a
                        href='https://github.com/shivg90'
                        target='_blank'
                        rel='noreferrer'
                        >
                        <div className='mx-2 rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <FaGithub />
                        </div>
                        </a>
                        <Link href='mailto:siobhangatenby@gmail.com'>
                        <div className='mx-2 rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <AiOutlineMail />
                        </div>
                        </Link>
                        <Link href='https://medium.com/@siobhangatenby'>
                        <div className='mx-2 rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <FaMedium />
                        </div>
                        </Link>

                        
                    </div>
                    <div className="flex items-center justify-center py-6">
                        <Link href='/files/Gatenby-Siobhan-Resume.pdf'>
                            <p className='pb-5 mt-10 text-center uppercase pt-5 py-5 px-5 rounded-lg bg-pink-900 text-white font-bold text-lg cursor-pointer hover:scale-110 ease-in duration-300'>Download my Resume</p>
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    )
    
}

export default Main