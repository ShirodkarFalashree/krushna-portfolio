import React from 'react'
import Hero from '../sections/Hero'
import CompaniesStrip from '../components/CompaniesStrip'
import Video from "../sections/Video"
import About from '../sections/About'
import Service from '../sections/Service'
import HallOfFrame from '../sections/HallOfFrame'
import Process from '../sections/Process'
import OurSolution from '../sections/OurSolution'
import Pricing from '../sections/Pricing'
import Reviews from '../sections/Reviews'
import FAQ from '../sections/FAQ'
import Ready from '../sections/ready'
const Home = () => {
  return (
    <div className='min-h-screen text-black'>
      <Hero/>
      <CompaniesStrip/>
      <Video/>
      <About/>
      <Service/>
      <Process/>
      <HallOfFrame/>
      <OurSolution/> 
      <Pricing/>
      <Reviews/>
      <FAQ/>
      <Ready/>
    </div>
  )
}

export default Home
