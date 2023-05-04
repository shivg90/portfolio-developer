import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import Link from 'next/link';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { HiOutlineChevronDoubleUp } from 'react-icons/hi';

const Contact = () => {
    return (
      <div id='contact' className='w-full lg:h-screen'>
        <div className='max-w-[1240px] m-auto px-2 py-16 w-full'>
          <p className='text-xl tracking-widest uppercase'>Contact</p>
          <h2 className='py-4'>Get In Touch</h2>
          <div> 
          <div>
          <p className='text-gray-700 py-4'>
            If you are interested in collaborating with me or have any questions, please get in touch! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          </div>
          <div>
            <div className="flex items-center justify-center max-w-[330px] m-auto py-6">
            <p className="uppercase pt-8">Connect With Me</p>
            </div>
            <div>
            <div className='flex items-center justify-center max-w-[330px] m-auto py-2'>
                <a
                    href='https://www.linkedin.com/in/siobhan-gatenby-7a18b34b/'
                    target='_blank'
                    rel='noreferrer'
                    >
                    <div className='mx-2 rounded-full shadow-lg shadow-gray-400 p-8 cursor-pointer hover:scale-110 ease-in duration-300'>
                    <FaLinkedin />
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
