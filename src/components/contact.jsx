import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';

const Contact = () => {
    return (
      <div id='contact' className='w-full lg:h-screen'>
        <div className='max-w-[1240px] m-auto px-2 py-16 w-full'>
          <p className='text-xl tracking-widest uppercase'>Contact</p>
          <h2 className='py-4'>Get In Touch</h2>
          <p className='text-gray-700 py-4'>
            If you are interested in collaborating with me or have any questions, please get in touch!
          </p>
          <div className='flex flex-wrap py-4'>
            <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
              <AiOutlineMail className='inline-block mr-2' />
              <p className='inline-block font-bold'>siobhangatenby@gmail.com</p>
            </div>
           
          </div>
        </div>
      </div>
    );
  };
  
  export default Contact
