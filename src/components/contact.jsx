import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import Link from 'next/link';
import { FaGithub, FaLinkedin, FaTwitter, FaMedium } from 'react-icons/fa';
//import { BsFillPersonLinesFill } from 'react-icons/bs';
import { HiOutlineChevronDoubleUp } from 'react-icons/hi';

const Contact = () => {
    return (
      <div id='contact' className='w-full lg:h-screen p-6'>
        <div className='max-w-[1240px] m-auto px-2 py-16 w-full'>
          <p className='text-xl tracking-widest uppercase'>Contact</p>
          <h2 className='py-4'>Get In Touch</h2>
          <div> 
          <div>
          <p className='text-gray-700 py-4'>
            If you are interested in collaborating with me or have any questions, please get in touch! 
          </p>
          </div>
          <div className="w-full flex items-center justify-center flex-wrap md:flex-nowrap">
          <div className="pt-5 pb-5 px-10 mt-10 w-fit shadow-xl shadow-gray-400 rounded-xl cursor-pointer hover:scale-110 ease-in duration-300">
          <div className='text-gray-700 py-4'>
          <p className="flex items-center justify-center text-xl font-bold">
            siobhangatenby@gmail.com
          </p>
          <p className="flex items-center justify-center text-xl font-bold">
            +4917646611081
          </p>
          </div>
          </div>
          </div>
          
          <div>
            <div className="flex items-center justify-center max-w-[330px] m-auto py-6 flex-wrap md:flex-nowrap">
            <p className="uppercase pt-8">Connect With Me</p>
            </div>
            <div>
            <div className='flex items-center justify-center max-w-[330px] m-auto py-2'>
                <a
                    href='https://www.linkedin.com/in/siobhan-gatenby-7a18b34b/'
                    target='_blank'
                    rel='noreferrer'
                    >
                    <div className='mx-2 rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                    <FaLinkedin />
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
                <a
                    href='https://twitter.com/shivg90'
                    target='_blank'
                    rel='noreferrer'
                    >
                    <div className='mx-2 rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                    <FaTwitter />
                    </div>
                </a>
                <a
                    href='https://medium.com/@siobhangatenby'
                    target='_blank'
                    rel='noreferrer'
                    >
                    <div className='mx-2 rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                    <FaMedium />
                    </div>
                </a>
            </div>
            </div>
          </div>
          </div>
        </div>
        <div className='flex justify-center py-12'>
          <Link href='/'>
              <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                <HiOutlineChevronDoubleUp
                  className='text-pink-950'
                  size={30}
                />
              </div>
          </Link>
        </div>
      </div>
    );
  };
  
  export default Contact
