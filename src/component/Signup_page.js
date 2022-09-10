import React, { useState } from 'react'
import background from './images/background.jpeg'

function Signup_page() {
  
  const [data, setData]=useState({uname:"", email:"", password:"", repassword:"", about:""});
  
  const onChange=(event)=>{
    setData({...data, [event.target.name]: event.target.value});
  }

  return (
    <div className='pb-5' style={{ backgroundImage: `url('${background}')`, backgroundSize:'100%', backgroundRepeat:'cover'}}>
      <div className="container py-5">
        <div class="card">
          <div class="card-header py-3" style={{fontSize:'22px'}}><strong>Sign Up Page / Register Page</strong></div>
          <div class="card-body">
            <blockquote class="blockquote mb-0">
              <form>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Your Name</label>
                <input type="text" name='uname' value={data.uname} onChange={onchange()} class="form-control" id="exampleFormControlInput1" placeholder="Enter Your Name Here" />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Your Email</label>
                <input type="email" name='email' value={data.email} onChange={onChange()} class="form-control" id="exampleFormControlInput1" placeholder="Enter Your Email Here" />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Your Password</label>
                <input type="password" name='password' value={data.password} onChange={onChange()} class="form-control" id="exampleFormControlInput1" placeholder="Enter Your Password Here" />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Re-enter Your Password</label>
                <input type="password" name='repassword' value={data.repassword} onChange={onchange()} class="form-control" id="exampleFormControlInput1" placeholder="Enter Password Same As Above One Here" />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
                <textarea name='about' value={data.about} onChange={onchange()} class="form-control" id="exampleFormControlTextarea1" placeholder='Enter Something About Yourself' rows="3"></textarea>
              </div>
              {/* Default CheckBox */}
              <input class="form-check-input mb-3" type="checkbox" value="" id="flexCheckDefault"/>
              <label class="form-check-label" for="flexCheckDefault">&nbsp; Accept Terms And Condition</label>
              {/*  */}
              <br/>
              <button type="button" class="btn btn-dark mx-2">Submit</button>
              <button type="button" class="btn btn-dark">Restart</button>
              </form>
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup_page
