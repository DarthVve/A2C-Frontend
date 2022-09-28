import React from 'react'
import { Footer, NavBar, Rectangle, Reviews, Showcase, Surplus } from '../../components'
import "./Landing.css"
import ManageAccountDetails from '../../components/ManageAccountDetails/ManageAccountDetails'

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
