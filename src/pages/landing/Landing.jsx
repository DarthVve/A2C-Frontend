import React from 'react'
import { Footer, NavBar, Rectangle, Reviews, Showcase, Surplus, ManageAccountDetails } from '../../components'
import "./Landing.css"

function Landing() {
  return (
    <div className='Home'>
      <NavBar Landing/>
      <Showcase />
      <Surplus />
      <Rectangle />
      <Reviews />
      <Footer />
      <ManageAccountDetails/>
    </div>
  )
}

export default Landing
