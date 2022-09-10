import React from 'react'
import background from './images/background.jpeg'

function About_main() {
  return (
    <div className='pb-5' style={{ backgroundImage: `url('${background}')`, backgroundSize:'100%', backgroundRepeat:'cover'}}>
      <div className="container">
      <h1 className='py-4'><strong>About Page</strong></h1>
      <hr/>
      <p><strong>A contact manager is a software program that enables users to easily store and find contact information, such as names, addresses, and telephone numbers. They are contact-centric databases that provide a fully integrated approach to tracking all information and communication activities linked to contacts. Simple ones for personal use are included in most smartphones.</strong></p>
      <h2 className='py-3'><strong>Benefits:</strong></h2>
      <ul>
        <p><strong>Centralized repository of contact information</strong></p>
        <p><strong>Ready-to-use database with searching</strong></p>
        <p><strong>Sales tracking</strong></p>
        <p><strong>Notes and conversation management</strong></p>
        <p><strong>Contact sharing</strong></p>
      </ul>
      <hr/>
      <h3 className='py-2'><strong>Made And Maintrained By:</strong></h3>
      <h5><strong><strong>NDS SOFTWARE & DESGINING
      <br/>DEVELOPER: NEEL SHAH
      <br/>PROJECT PIONEER DATE: 10-09-2022
      </strong></strong></h5>
      </div>
    </div>
  )
}

export default About_main
