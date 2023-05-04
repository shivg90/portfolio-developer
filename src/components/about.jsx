import React from 'react';
import Image from 'next/image'

const About = () => {
    return (
      <div id='about' className='w-full md:h-screen p-2 flex items-center py-16' >
        <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
            <div className='col-span-2'>
                <p className='uppercase text-xl tracking-widest text-pink-900'>
                About
                </p>
                <h2 className='py-4'>Who I Am</h2>
                <p className='py-2 text-gray-700 text-lg'>
                I’m creative, open-minded and always looking to challenge myself.  That’s why I decided to study a full-time 6 month course in Full-Stack Web Development, where I gained experience in using essential web technologies like Javascript.  It also taught me the foundation of the entire design to production process, including User Flows, Testing and Debugging.
                </p>
                <p className='py-2 text-gray-700 text-lg'>
                I love seeing my ideas and code come to life in client-side projects, and I am excited to continue learning and developing.
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