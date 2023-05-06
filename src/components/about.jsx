import React from 'react';
import Image from 'next/image'

const About = () => {
    return (
      <div id='about' className='w-full md:h-screen p-6 flex items-center py-16' >
        <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
            <div className='col-span-2'>
                <p className='uppercase text-xl tracking-widest text-pink-900'>
                About
                </p>
                <h2 className='py-4'>Who I Am</h2>
                <p className='py-2 text-gray-700 text-lg'>
                  I am open-minded and always looking to challenge myself. That’s why I decided to study a full-time 6 month course in Full-Stack Web Development, where I gained experience in using essential technologies to build a number of projects in Javascript.  With next-to-none prior skills, I’ve went from drowning in div’s to being able to develop using the MERN/MEAN tech stack.  I’ve also picked up skills in wire framing, user flows, testing and debugging.
                </p>
                <p className='py-2 text-gray-700 text-lg'>
                  Thanks to my background as a business planner, I am already well-equipped with transferable skills such as project management, organisation, collaboration and a keen eye for details.
                </p>
                <p className='py-2 text-gray-700 text-lg'>
                My motivation to work in Web Dev is in the directon of front-end development and CSS, as I love seeing my ideas and functions come to life! 
                </p>
            </div>
            <div className="w-full h-auto m-auto flex items-center justify-center">
                <Image
                className="mx-auto rounded-full relative overflow-hidden"
                src="/profile-picture.png"
                alt="a profile picture of myself"
                width={300}
                height={300}
                >
                </Image>
            </div>
        </div>
      </div>
    )
}

export default About