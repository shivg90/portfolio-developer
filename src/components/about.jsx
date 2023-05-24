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
                  I am open-minded and always looking to challenge myself. That’s why I decided to study a full-time 6 month course in Full-Stack Web Development, where I gained experience in using essential technologies to build a number of projects with Javascript.  
                </p>
                <p className='py-2 text-gray-700 text-lg'>
                  Thanks to my background as a business planner, I am already well-equipped with transferable skills such as project management, problem solving, collaboration and a keen eye for details which has helped greatly with the transition into web development.
                </p>
                <p className='py-2 text-gray-700 text-lg'>
                What drives me to do this kind of work is that every day is varied and presents new learning opportunities. From debugging to creating new features, UI design and trying out new frameworks, both my analytical and creative mindsets are challenged.  I have also enjoyed the unexpected feeling of community since starting my journey into the tech world, where developers are supportive of newcomers to the field and passionate about sharing knowledge.

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