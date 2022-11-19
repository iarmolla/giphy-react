import React, { useState } from 'react'
import '../styles/login.css'
import { motion } from "framer-motion"

function Login() {
  const spring = {
    type: "spring",
    stiffness: 700,
    damping: 30
  };
  const [isOn, setIsOn] = useState(false);
  const toggleSwitch = () => setIsOn(!isOn);
  console.log(isOn)
  return (
    <div className='sm:h-screen grid sm:grid-cols-2 login'>
      <form action="POST" className='flex flex-col justify-center items-center'>
        <img src="https://giphy.com/static/img/be-animated.gif" className="login-image" alt=''></img>
        <div className="switch mb-4" data-isOn={isOn} onClick={toggleSwitch}>
          <motion.div className="handle relative" layout transition={spring}>
            <span className={`${isOn ? 'button-title' : 'button-title--'}`} >{isOn ? 'Log in' : 'Sign up'}</span>
            <div className='flex flex-col justify-center items-center h-full'>
              <span>{!isOn ? 'Log in' : 'Sign up'}</span>
            </div>
          </motion.div>
        </div>
        <div className='form-inputs flex flex-col justify-center items-center gap-3 w-full'>
          <input
            className="outline-0 text-left text-gray-900 text-sm rounded-sm py-3 w-2/4 pl-5"
            placeholder="Email address" />
          <input
            className="outline-0 text-left text-gray-900 text-sm rounded-sm py-3 w-2/4 pl-5"
            placeholder="Password" type='password' />
          <button className="outline-0 text-center bg-slate-200 text-sm rounded-sm py-3 w-2/4 pl-3 login-submit">Login</button>
        </div>
        <div className='mt-4'>
          <span className='text-cyan-500 text-xs font-bold'>Forgot Your Password?</span>
        </div>
        <div className='flex flex-col w-full items-center justify-center gap-3 mt-4'>
          <button className='form-logs relative  rounded-sm text-center py-3 w-2/4'>Log in with Facebook
            <div className='absolute top-3 left-20 sm:left-3 sm:top-3'>
              <img className='h-7 rounded-md hidden sm:hidden md:hidden lg:block' src="https://www.pngkey.com/png/full/509-5094426_facebook-twitter-instagram-pinterest-facebook-logo-in-circle.png" alt="" />
            </div>
          </button>
          <button className='form-logs relative rounded-sm text-center py-3 w-2/4'>Log in with Apple
            <div className='absolute top-3 left-20 sm:left-3 '>
              <img className='h-7 rounded-md hidden sm:hidden md:hidden lg:block' src='https://www.transparentpng.com/thumb/apple-logo/UyOL60-apple-logo-wonderful-picture-images.png' alt="" />
            </div>
          </button>
        </div>
        <div className='mt-1'>
          <span className='text-xs font-bold'>By logging in you agree to GIPHY's<span className='text-cyan-500 text-xs font-bold'>Terms of Service</span></span>
        </div>
      </form>
      <div className='bg-[url(https://64.media.tumblr.com/e05172187a870c27dce5e119178dab32/905eb58846d763f4-4c/s540x810/5e2f930c3665bfebf17c10834bf6cc15c91ae9c1.gifv)]'>
      </div>
      <div className='login-background'></div>
    </div>
  )
}

export default Login