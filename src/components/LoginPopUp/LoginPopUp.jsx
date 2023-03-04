import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toogleLoginModal } from '../../redux/modalsReducer';
import './LoginPopUp.scss'
import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { startFetch, loginUser,loginError } from '../../redux/userReducer';
import { toast } from 'react-toastify';
import axios from 'axios';
const LoginPopUp = () => {
  const email = useRef()
  const navigate = useNavigate()
  const password = useRef()
  const dispatch = useDispatch()
  const open = useSelector(state => state.modal.loginPopUp)
  const onClose = () => dispatch(toogleLoginModal(false))

  const registerHandler = (event) => {
    event.preventDefault()
    dispatch(toogleLoginModal(false))
    navigate('/register')
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const user = {
      identifier: email.current.value,
      password: password.current.value
    }
    
    try {
      dispatch(startFetch())
      const res = await axios.post(process.env.REACT_APP_API_URL+'/auth/local',user);
      dispatch(loginUser({ user:res.data.user, secret:res.data.jwt}))
      dispatch(toogleLoginModal(false))
      toast.success(`Welcome back, ${res.data.user.username}`)
    } catch (error) {
      dispatch(loginError(error.code))
      toast.warning(`Wrong username or password`)
    }
  };
  if (!open) return null;
  return (
    <div className='loginModal' onClick={onClose}>
    <div className="loginModalContainer" onClick={(e) => {
          e.stopPropagation();
        }}>
      <h1 className='loginModalTitle'>Welcome Back !</h1>
      <div className="loginModalUp">
          <img src="/img/logo_transparent.png" alt="" />
      </div>
      <div className="loginModalDown">
          <div  className="loginModalBox" >
            <form  className="loginModalForm">
                <input 
                  placeholder='Email' 
                  type="email" 
                  required 
                  className="loginModalInput" 
                  ref={email}
                  />
                  <input 
                  placeholder='Password' 
                  type="password" 
                  minLength='6'
                  required 
                  className="loginModalInput" 
                  ref={password} 
                  />
                  <button onClick={handleSubmit}
                  className="loginModalButton">Log in
                  </button>
            </form>
              <span className="loginModalForgot">Not registered yet ?</span>
              <button onClick={registerHandler} className="loginModalRegister">Register Now </button>
             
          </div>
          
      </div>
    </div>
  </div>
  );
};

export default LoginPopUp;