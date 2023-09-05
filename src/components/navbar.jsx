import React, {useState} from 'react';
import Link from 'next/link';
import { AiOutlineMenu, AiOutlineClose} from 'react-icons/ai';

const Navbar = () => {
    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }

    return (
        <div className="bg-slate-200 fixed top-0 w-full h-20 shadow-xl z-[100] flex items-center justify-between px-8 xl:px-16">
            <div className='flex justify-start items-center'>
            <Link href='/'>
              <div className="fixed top-0 h-20 flex items-center">
                <p className="text-3xl">S | G </p>
              </div>
            </Link>
            </div>
            
            <div className="flex justify-end items-center w-full h-full px-2 2xl:px-16">
                <div> 
                    <ul className="hidden md:flex"> 
                        <Link href="/#about">
                            <li className="ml-10 text-sm uppercase hover:border-b">About</li>
                        </Link>
                        <Link href="/#projects">
                            <li className="ml-10 text-sm uppercase hover:border-b">Projects</li>
                        </Link>
                        <Link href="/#skills">
                            <li className="ml-10 text-sm uppercase hover:border-b">Skills</li>
                        </Link>
                        <Link href="/#contact">
                            <li className="ml-10 text-sm uppercase hover:border-b">Contact</li>
                        </Link>
                    </ul>
                    <div className='md:hidden' onClick={handleNav}>
                        <AiOutlineMenu size={25} />
                    </div>
                </div>
            </div>

            <div className={nav ? 'fixed left-0 top-0 w-full h-screen bg-black/70' : ''}>
                <div 
                  className={
                    nav 
                        ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-white p-10 ease-in duration-500' 
                        : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'
                  }
                >
                    <div>
                        <div className='flex w-full h-20 items-center justify-between'>
                            <p className="text-3xl">S | G </p>
                            <div onClick={handleNav} className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'>
                                <AiOutlineClose />
                            </div>
                        </div>
                    </div>
                    <div className='py-4 flex flex-col'>
                    <ul className="uppercase">
                        <Link href="/#about">
                            <li className="m-4 text-sm hover:border-b">About</li>
                        </Link>
                        <Link href="/#projects">
                            <li className="m-4 text-sm hover:border-b">Projects</li>
                        </Link>
                        <Link href="/#skills">
                            <li className="m-4 text-sm hover:border-b">Skills</li>
                        </Link>
                        <Link href="/#contact">
                            <li className="m-4 text-sm hover:border-b">Contact</li>
                        </Link>
                    </ul>
                    </div>

                </div>
            </div>  
        </div>
    )
} 

export default Navbar