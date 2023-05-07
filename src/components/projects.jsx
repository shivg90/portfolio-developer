import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Pokedex from '/public/pokedex-screenshot.png';
import Meet from '/public/meet-screenshot.png';
import Chat from '/public/chat-app-screenshot.png';
import ApiFlix from '/public/api-screenshot.png';
import ReactFlix from '/public/myflix-react-screenshot.png';
import AngularFlix from '/public/myflix-angular-screenshot.png';

const Projects = () => {
    return (
      <div id='projects' className='w-full'> 
        <div className='max-w-[1240px] mx-auto p-6 py-16'>
          <p className='text-xl tracking-widest uppercase text-pink-950'>
            Projects
          </p>
          <h2 className='py-4'>What I&apos;ve Built</h2>
          
          <div className='grid md:grid-cols-2 gap-8'> 
          
         <div className="relative items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group">
          <div className='relative flex items-center justify-center rounded-xl h-auto w-full hover:bg-gradient-to-r from-pink-950 to-pink-400'>
            <Image
                className="object-contain h-80 w-full rounded-xl group-hover:opacity-10"
                src={Pokedex}
                alt="a screenshot of my project"
            />
            <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
            <h3 className='text-2xl tracking-wider text-center text-white'>Pokedex-App</h3>
            <div className="flex items-center">
            <Link href="https://github.com/shivg90/simple-js-app">
            <p className='text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer m-2 w-20'>GITHUB</p>
            </Link>
            <Link href="https://shivg90.github.io/simple-js-app/">
            <p className='text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer m-2 w-20'>DEMO</p>
            </Link>
            </div>
           
            </div>
            
          </div>
            <p className='p-4 h-auto w-full text-gray-700 text-lg'>
              A simple App that displays Pokemons and lets users click on each character to view more details.  
              It was built with <span className="font-bold">HTML, CSS, JavaScript, Jquery</span> and <span className="font-bold">Bootstrap</span> and the data is drawn from a public API.
            </p>
        </div>
          
         
          
         
        <div className="relative items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group">
          <div className='relative flex items-center justify-center rounded-xl h-auto w-full hover:bg-gradient-to-r from-pink-950 to-pink-400'>
            <Image
                className="object-contain h-80 w-full rounded-xl group-hover:opacity-10"
                src={Meet}
                alt="a screenshot of my project"
            />
            <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
            <h3 className='text-2xl tracking-wider text-center text-white'>Meet-App</h3>
            <div className="flex items-center">
            <Link href="https://github.com/shivg90/meet">
            <p className='text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer m-2 w-20'>GITHUB</p>
            </Link>
            <Link href="https://shivg90.github.io/meet/">
            <p className='text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer m-2 w-20'>DEMO</p>
            </Link>
            </div>
            </div>
          </div>
            <p className='p-4 h-auto w-full text-gray-700 text-lg'>
              A PWA app which uses a Test-Driven approach, built with <span className="font-bold">React</span>.
              The app displays a list and charts of events using data from a Google Calendar, where users can select their desired location.
              User authentication and authorization (OAuth) are implemented using <span className="font-bold">AWS lambda functions</span>.
            </p>
          </div>

            <div className="relative items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group">
              <div className='relative flex items-center justify-center rounded-xl h-auto w-full hover:bg-gradient-to-r from-pink-950 to-pink-400'>
            <Image
                className="object-contain h-80 w-full rounded-xl group-hover:opacity-10"
                src={Chat}
                alt="a screenshot of my project"
            />
            <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
            <h3 className='text-2xl tracking-wider text-center text-white'>Chat-App</h3>
            <div className="flex items-center justify-center">
            <Link href="https://github.com/shivg90/Chat-App">
            <p className='text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer m-2 w-20'>GITHUB</p>
            </Link>
            </div>
            </div>
          </div>
            <p className='p-4 h-auto w-full text-gray-700 text-lg'>
              A Chat App for mobile devices built with <span className="font-bold">React-Native</span> and Expo.
              A basic user interface has been implemented that allows users to enter their screen name, chat, share images and their location. 
              <br></br>
               <span className="font-bold">Firebase</span> has been used to store user data.
            </p>
            </div>

            <div className="relative items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group">
            <div className='relative flex items-center justify-center rounded-xl h-auto w-full hover:bg-gradient-to-r from-pink-950 to-pink-400'>   
            <Image
                className="object-contain h-80 w-full rounded-xl group-hover:opacity-10"
                src={ApiFlix}
                alt="a screenshot of my project"
            />
            <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
            <h3 className='text-2xl tracking-wider text-center text-white'>Backend-API</h3>
            <div className="flex items-center justify-center">
            <Link href="https://github.com/shivg90/myflix-app">
            <p className='text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer m-2 w-20'>GITHUB</p>
            </Link>
            </div>
            </div>
          </div>
            <p className='p-4 h-auto w-full text-gray-700 text-lg'>
              This is an API built according to REST architecture. 
              It provides a backend database of movie information which was built with <span className="font-bold"> Node.js, Express</span> and <span className="font-bold">MongoDB</span>.
              It also implements user authentication and authorization code.
            </p>
            </div>

            <div className="relative items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group">
            <div className='relative flex items-center justify-center rounded-xl h-auto w-full hover:bg-gradient-to-r from-pink-950 to-pink-400'>
            <Image
                className="object-contain h-80 w-full rounded-xl group-hover:opacity-10"
                src={ReactFlix}
                alt="a screenshot of my project"
            />
            <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
            <h3 className='text-2xl tracking-wider text-center text-white'>myFlix-React-Client</h3>
            <div className="flex items-center justify-center">
            <Link href="https://github.com/shivg90/myFlix-client">
            <p className='text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer m-2 w-20'>GITHUB</p>
            </Link>
            <Link href="https://shivg90-myflix-movie-app.netlify.app/login">
            <p className='text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer m-2 w-20'>DEMO</p>
            </Link>
            </div>
            </div>
          </div>
            <p className='p-4 h-auto w-full text-gray-700 text-lg'>
              A single page application that displays the client-side of a movie browsing app.
              It was made with <span className="font-bold">React-Bootstrap</span> and uses <span className="font-bold"> Parcel</span> as its build tool.  The app is deployed on Netlify.
            </p>
            </div>

            <div className="relative items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group">
            <div className='relative flex items-center justify-center rounded-xl h-auto w-full hover:bg-gradient-to-r from-pink-950 to-pink-400'> 
            <Image
                className="object-contain h-80 w-full rounded-xl group-hover:opacity-10"
                src={AngularFlix}
                alt="a screenshot of my project"
            />
            <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
            <h3 className='text-2xl tracking-wider text-center text-white'>myFlix-Angular-Client</h3>
            <div className="flex items-center justify-center">
            <Link href="https://github.com/shivg90/myFlix-Angular-client">
            <p className='text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer m-2 w-20'>GITHUB</p>
            </Link>
            <Link href="https://shivg90.github.io/myFlix-Angular-client/welcome">
            <p className='text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer m-2 w-20'>DEMO</p>
            </Link>
            </div>
            </div>
          </div>
            <p className='p-4 h-auto w-full text-gray-700 text-lg'>
              The client side of a movie browsing app, made with <span className="font-bold">Angular-Material</span> and written with <span className="font-bold">Typescript</span>.
              Users can login, signup, browse movie information and create a favorites list.
            </p>
            </div>
          
          </div>
        </div>
      </div>
    );
  };
  
  export default Projects;