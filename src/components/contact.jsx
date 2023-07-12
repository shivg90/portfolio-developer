import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import Link from 'next/link';
import { FaGithub, FaLinkedin, FaMedium } from 'react-icons/fa';
import { HiOutlineChevronDoubleUp } from 'react-icons/hi';

const Contact = () => {
    return (
      <div id='contact' className='w-full lg:h-screen p-6'>
        <div className='max-w-[1240px] m-auto px-2 py-16 w-full'>
          <p className='text-xl tracking-widest uppercase text-pink-900'>Contact</p>
          <h2 className='py-4'>Get In Touch</h2>
          <div> 
          <div>
          <div className='text-gray-700 py-4'>
            <p>Feel free to test my projects, browse my GitHub or download my Resume to get a better feel for what I can do.</p>
            <p>Are you interested in collaborating with me or have questions? Let&apos;s get in touch!</p>
            <br></br>
            <p className="text-pink-950 font-bold">Email: siobhangatenby@gmail.com</p>
          </div>
          </div>
        
          
          <div>
            <div className="flex items-center justify-center max-w-[330px] m-auto py-6 flex-wrap md:flex-nowrap">
            <p className="uppercase pt-10 text-pink-900">Connect With Me</p>
            </div>
            <div>
            <div className='flex items-center justify-center max-w-[330px] m-auto py-2'>
                <a
                    href='https://www.linkedin.com/in/siobhangatenby'
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
        <div className="text-center text-gray-700">
            <p className="text-xs">Created with Next.js and Tailwind CSS by Siobhan Gatenby.</p>
            <Link href="/impressum" className="underline cursor-pointer">Impressum</Link>
        </div>
      </div>
    );
  };
  
  export default Contact
