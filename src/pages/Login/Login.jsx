import React, { useState } from 'react'
import './Login.css'
import logo from '../../assets/logo.png'
// import bnr_img from '../../assets/background_banner.jpg'

const Login = () => {
  const[signState,setSignState] = useState("Sign In")

  return (
    <div className='login'>
      {/* <img src={bnr_img} className='banner_img' /> */}
      <img src={logo} className='login_logo' alt="" />
      <div className="login_form">
        <h1>{signState}</h1>
        <form>
          {signState==="Sign Up"?<input type="text" placeholder='Your Name'  name="" id="" />:<></>}
          <input type="text" placeholder='Email' />
          <input type="text" placeholder='Password'/>
          <button className='btn'>Sign In</button>
          <div className="form_help">
            <div className="remember">
              <input type="checkbox" />
              <label htmlFor="">Remember Me</label>
            </div>
            <a href="">Need Help?</a>


          </div>
        </form>

        <div className="form_switch">
          {signState ==="Sign In"?<p>New to Netflix? <span onClick={()=>{setSignState("Sign Up")}}>Sign Up Now</span></p>:
          <p>Already have account? <span onClick={()=>{setSignState("Sign In")}}>Sign In Now</span ></p>}
          
        </div>
      </div>
    </div>
    
  )
}

export default Login