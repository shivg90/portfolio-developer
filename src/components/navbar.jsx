import React from 'react';
import Link from 'next/link';
import {AiOutlineMenu} from 'react-icons/ai'

const Navbar = () => {
    return (
        <div className="fixed top-0 w-full h-20 shadow-xl z-[100]">
            <div className="flex justify-end items-center w-full h-full px-2 2xl:px-16">
                <div> 
                    <ul className="hidden md:flex"> 
                        <Link href="/#about">
                            <li className="ml-10 text-base uppercase hover:border-b">About</li>
                        </Link>
                        <Link href="/#projects">
                            <li className="ml-10 text-base uppercase hover:border-b">Projects</li>
                        </Link>
                        <Link href="/#skills">
                            <li className="ml-10 text-base uppercase hover:border-b">Skills</li>
                        </Link>
                        <Link href="/#contact">
                            <li className="ml-10 text-base uppercase hover:border-b">Contact</li>
                        </Link>
                    </ul>

                    <div className="md:hidden">
                        <AiOutlineMenu size={25}></AiOutlineMenu>
                    </div>
                </div>
            </div>
        </div>
    )
} 

export default Navbar