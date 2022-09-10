import React from 'react'
import main_page_image from './images/main_page_image.png'

function Main_page() {
  return (
    <div style ={{ backgroundImage: `url('${main_page_image}')`, backgroundSize:'100%', backgroundRepeat:'no-repeat'}}>
      <div style={{paddingTop:'21%', paddingBottom:'21%'}} className="container">
        <h1><strong>Smart Contact Manager</strong></h1>
        <p><strong>Start Collecting Your Contacts In Samter Way, We Provide Very Efficient And Smarter Way Of Handling Contacts</strong></p>
      </div>
    </div>
  )
}

export default Main_page
