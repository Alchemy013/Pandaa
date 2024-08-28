import React from 'react'
import HeroSection from './components/HeroSection'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import About from './components/about'

const App = () => {
  return (
    <main className='overflow-y-hidden text-neutral-200 antialiased'>
      <HeroSection/>
      <Navbar/>
      <Projects/>
      <About/>
    </main>
  )
}

export default App