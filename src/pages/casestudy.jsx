import Image from 'next/image';
import React from 'react';
import ReactFlix from '/public/myflix-react-screenshot.png';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';
import UpdateForm from '/public/updateform-screenshot.png';
import ToggleCode from '/public/codesnip_toggle.png';
import ApiFlix from '/public/api-screenshot.png';


const caseStudy = () => {
  return (
    <div className='w-full'>
      <div className='w-screen h-[50vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/80 z-10' />
        <Image
          className='absolute z-1'
          fill={true}
          object-fit='cover'
          src={ReactFlix}
          alt='/'
        />
        
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>Case Study for MyFlix Movie App</h2>
          <h3>React JS / Bootstrap</h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
        <div className='col-span-4'>
          <h2 className="pt-2 pb-2">Overview</h2>
          <p>
          myFlix is a web application that lets users browse through movies, and provides information about the movies, genres, and directors  It allows users to create a profile and save their favourite movies.

          </p>
          <h2 className="pt-10 pb-2">Purpose & Context</h2>
          <p>
          The purpose of the project was to demonstrate the javascript skills learned so far on my web development course with Career Foundry.
          </p>
          <h2 className="pt-10 pb-2">Objective</h2>
          <p>
          The overall goal was to build a frontend application using backend code from another project in order to demonstrate full-stack capabilities as a web developer.
          </p>
          <h2 className="pt-10 pb-2">Approach</h2>
          <p>
          I used the project brief available from Career Foundry to review the technical requirements, key features and user stories to be included before starting this project.
          </p>
          <h3 className="pt-4">Step 1: Database</h3>
          <p>
          A database of information is required for the application to be able to display movies, and to store user login/profile data.  For this I used MongoDB, an online database hosting tool, to create my own database of information using a noSQL data model.
          </p>
          <div>
          <Image
          className='pt-4'
          //fill={true}
          //object-fit='cover'
          src={ApiFlix}
          alt='/'
          />
          </div>
          <h3 className="pt-4">Step 2: Backend</h3>
          <p>
           I created an API following REST architecture using Node.js and Express, which communicates with the previously created database.  To send and receive information from the database, the backend code uses HTTP methods such as GET, POST and PUT.  The information is retrieved in JSON format and is authorised via a JWT token authentication.
          </p>
          <h3 className="pt-4">Step 3: Frontend</h3>
          <p>
          Upon finishing the API, my next step was to construct the user interface that facilitates sending requests to and receiving responses from the backend code. The interface is designed as a single-page, responsive application using React. It encompasses various views, such as the main view displaying a comprehensive list of movies, a single movie view providing details about a particular movie and enabling users to add it to their favorites list. Additionally, there are login, registration, and profile views available, allowing users to update their personal information and manage their favorites.
          </p>
          <div>
          <Image
          className='pt-4'
          //fill={true}
          //object-fit='cover'
          src={UpdateForm}
          alt='/'
          />
          </div>
          <h3 className="pt-4">Step 4: Deployment</h3>
          <p>
          By using Netlify, a renowned web application hosting platform, the Movie App was deployed and made readily accessible to users.
          </p>
          <h2 className="pt-10 pb-2">Challenges</h2>
          <p>
          I faced a couple of different challenges throughout this project that forced me to spend time doing further research to problem solve.   These challenges are mostly attributed to the learning curve that is involved in using the React Library, and more specifically, with React’s state management of functional components.   This pushed me out of my comfort zone and as a result I am more confident in tackling the obstacles involved in learning a new technology.
          </p>
          <div>
          <Image
          className='pt-4'
          //fill={true}
          //object-fit='cover'
          src={ToggleCode}
          alt='/'
          />
          </div>
          <h2 className="pt-10 pb-2">Conclusions</h2>
          <p className="pb-4">
          The main learning from this was the importance of practicing new concepts before trying to implement them, and using multiple resources when trying something new in developing.  I learnt a lot about the component based architecture of React, and now that I understand its principles, can also see that it provides a more flexible way of managing components state.
          </p>
          <h2 className="pt-10 pb-2">Credits</h2>
          <div className="pb-4">
          <p>
          Full-Stack Developer: Siobhan Gatenby
          </p>
          <p>
          Course Mentor: Nizar Triki
          </p>
          <p>
          Course Tutor: Emanuel Okello
          </p>
          </div>
          <a
            href="https://github.com/shivg90/myFlix-client"
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4 mr-8'>Code</button>
          </a>
          <a
            href="https://shivg90-myflix-movie-app.netlify.app/login"
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4'>Demo</button>
          </a>
        </div>
        <div className='col-span-4 md:col-span-1 py-4'>
          <div className='p-2 shadow-xl shadow-gray-400 rounded-xl'>
            <p className='text-center font-bold pb-2'>Technologies</p>
            <div className='space-y-2'>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> React
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Bootstrap
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Javascript
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Node
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Express
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> MongoDB
              </p>
            </div>
          </div>
        </div>
        <Link href='/#projects'>
          <p className='underline cursor-pointer'>Back</p>
        </Link>
      </div>
    </div>
  );
};

export default caseStudy;