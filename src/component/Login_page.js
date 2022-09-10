import React from 'react'
import background from './images/background.jpeg'

function Login_page() {
  return (
    <div className='pb-5' style={{ backgroundImage: `url('${background}')`, backgroundSize:'100%', backgroundRepeat:'cover'}}>
      <div className="container py-5">
        <div class="card">
          <div class="card-header py-3" style={{fontSize:'22px'}}><strong>Login Page</strong></div>
          <div class="card-body">
            <blockquote class="blockquote mb-0">
              <form>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Your Name</label>
                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Enter Your Name Here" />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Your Email</label>
                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Enter Your Email Here" />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Your Password</label>
                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Enter Your Password Here" />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" placeholder='Enter Something About Yourself' rows="3"></textarea>
              </div>
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

export default Login_page
