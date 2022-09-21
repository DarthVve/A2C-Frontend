import React from 'react'
import Footer  from '../../components/landingPage/Footer'
import Navbar from '../../components/landingPage/Navbar'
import Rectangle from '../../components/landingPage/Rectangle'
import Reviews from '../../components/landingPage/Reviews'
import Showcase from '../../components/landingPage/Showcase'
import Surplus from '../../components/landingPage/Surplus'
import "./Landing.css"

function Landing() {
  return (
    <div className='Home'>
      <Navbar Landing/>
      <Showcase />
      <Surplus />
      <Rectangle />
      <Reviews />
      <Footer />
    </div>
  )
}

export default Landing
