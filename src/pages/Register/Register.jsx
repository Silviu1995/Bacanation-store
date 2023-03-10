import './register.scss'
import {  useRef } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
// import { useState } from 'react'
import swal from 'sweetalert'


const Register = () => {
  // const [fetching,setFetching] = useState(false)
  const username = useRef()
  const email = useRef()
  const password = useRef()
  const confirmPassword = useRef()
  const navigate = useNavigate()
  const registerClick = async (event) =>{
    event.preventDefault() 
    if( password.current.value !== confirmPassword.current.value) 
      { confirmPassword.current.setCustomValidity("Passwords don't match !")
      } else {
        const user = {
          username: username.current.value,
          email: email.current.value,
          password: password.current.value
        }
        try{
          await axios.post(process.env.REACT_APP_API_URL+'/auth/local/register',user)
          swal({
            title: "Account created!",
            text: "You will be redirected to the login page!",
            icon: "success",
            button: "Continue",
          })
          .then(() => {
          navigate('/login');
          });
          
        } catch(err) {
          console.log(err)
        }
        // setFetching(false) 
      }
  }

  return (
    <div className='register' >
      <div className="registerWrapper">
        <div className="registerLeft">
          <img src="/img/logo_transparent.png" alt="" />
        </div>
        <div className="registerRight">
            <div className="registerBox">
              <form onSubmit={registerClick}  className="registerForm">
              <input required minLength='6' ref={username} placeholder='Display name' type="text" className="registerInput" />
                <input ref={email} placeholder='Email' type="email" className="registerInput" />
                <input 
                ref={password} 
                placeholder='Password' 
                required
                minLength='6' 
                type="password" 
                className="registerInput" 
                />
                <input 
                ref={confirmPassword} 
                required
                minLength='6' 
                placeholder='Password again' 
                type="password" 
                className="registerInput" 
                />
                <button className="registerButton">Sign up</button>
              </form>
                <button  onClick={()=> navigate('/login')} className="registerRegisterButton">Log into Account</button>
            </div>
            
        </div>
      </div>
    </div>
  )
}

export default Register
