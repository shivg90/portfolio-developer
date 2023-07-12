import React from 'react'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import Navbar from '@component/components/navbar'
import Main from '@component/components/main'
import About from '@component/components/about'
import Skills from '@component/components/skills'
import Projects from '@component/components/projects'
import Contact from '@component/components/contact'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    
  <main>
    <Head>
        <title>Siobhan | Web Developer</title>
        <meta name="description" content="Portfolio website of Siobhan Gatenby full-stack web developer." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="web,developer,webdevelopment,portfolio,webdeveloper,frontend,javascript,react,next,tailwind" />
        <meta charSet="UTF-8"></meta>
        <link rel="icon" href="/favicon.ico" />
    </Head>
    <Navbar />
    <Main />
    <About />
    <Skills />
    <Projects />
    <Contact />


   
  </main>

  )
}
