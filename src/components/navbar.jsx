import React from 'react';
import Link from 'next/link';
import {AiOutlineHome} from 'react-icons/ai'

const Navbar = () => {

    return (
        <div className="bg-slate-200 fixed top-0 w-full h-20 shadow-xl z-[100] flex items-center justify-between px-8 xl:px-16">
            <div className='flex justify-start items-center'>
            <Link href='/'>
              <div className=''>
                <AiOutlineHome
                  size={25}
                />
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
                    <ul className="md:hidden flex flex-wrap">
                        <Link href="/#about">
                            <li className="ml-4 my-2 text-xs uppercase hover:border-b">About</li>
                        </Link>
                        <Link href="/#projects">
                            <li className="ml-4 my-2 text-xs uppercase hover:border-b">Projects</li>
                        </Link>
                        <Link href="/#skills">
                            <li className="ml-4 my-2 text-xs uppercase hover:border-b">Skills</li>
                        </Link>
                        <Link href="/#contact">
                            <li className="ml-4 my-2 text-xs uppercase hover:border-b">Contact</li>
                        </Link>
                    </ul>
                   
                </div>
            </div>
        </div>
    )
} 

export default Navbar