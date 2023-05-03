import React from 'react';
import Link from 'next/link';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { AiOutlineMail } from 'react-icons/ai';

const Main = () => {
    return (
        <div className="w-full h-screen text-center mt-4">
            <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
                <div>
                    <h1 className="py-4 text-gray-700">
                        Hi, I&apos;m <span className="text-pink-900" >Siobhan</span>
                    </h1>
                    <h1 className="py-2 text-gray-700">
                        A Front-End Web Developer
                    </h1>
                    <p className="py-6 text-gray-600 max-w-[70%] mx-auto text-center">
                        I&apos;m a recent graduate of a Full-Stack Web Development course looking to speciaise in Frontend projects.
                        With a background in Merchandise Planning and Supply Chain Management I am a career-changer hoping to utilize my skills both old and new.
                    </p>

                    <div className='flex items-center justify-center max-w-[330px] m-auto py-6'>
                        <a
                        href='https://www.linkedin.com/in/siobhan-gatenby-7a18b34b/'
                        target='_blank'
                        rel='noreferrer'
                        >
                        <div className='mx-2 rounded-full shadow-lg shadow-gray-400 p-8 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <FaLinkedinIn />
                        </div>
                        </a>
                        <a
                        href='https://github.com/shivg90'
                        target='_blank'
                        rel='noreferrer'
                        >
                        <div className='mx-2 rounded-full shadow-lg shadow-gray-400 p-8 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <FaGithub />
                        </div>
                        </a>
                        <Link href='/#contact'>
                        <div className='mx-2 rounded-full shadow-lg shadow-gray-400 p-8 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <AiOutlineMail />
                        </div>
                        </Link>
                        <Link href='/resume'>
                        <div className='mx-2 rounded-full shadow-lg shadow-gray-400 p-8 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <BsFillPersonLinesFill />
                        </div>
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    )
    
}

export default Main