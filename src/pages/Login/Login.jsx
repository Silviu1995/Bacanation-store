import './login.scss'
import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { startFetch, loginUser, loginError } from '../../redux/userReducer'
import { toast } from 'react-toastify';
import axios from 'axios'
const Login = () => {
  const email = useRef()
  const navigate = useNavigate()
  const password = useRef()
  const dispatch = useDispatch()

  const registerHandler = (event) => {
    event.preventDefault()
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
    dispatch(loginUser(res.data.user))
    toast.success(`Welcome back, ${res.data.user.username}`)
  } catch (error) {
    dispatch(loginError(error.code))
    toast.warning(`Wrong username or password`)
  }
};


const isFetching = useSelector(state=>state.user.isFetching)
  return (
    <div className='login'>
      <div className="loginWrapper">
        <div className="loginLeft">
            <img src="/img/logo_transparent.png" alt="" />
        </div>
        <div className="loginRight">
            <div  className="loginBox" >
              <form  className="loginForm">
                  <input 
                    placeholder='Email' 
                    type="email" 
                    required 
                    className="loginInput" 
                    ref={email}
                    />
                    <input 
                    placeholder='Password' 
                    type="password" 
                    minLength='6'
                    required 
                    className="loginInput" 
                    ref={password} 
                    />
                    <button onClick={handleSubmit}
                    className="loginButton">'Log in'
                    </button>
              </form>
                <span className="loginForgot">Forgot Password ?</span>
                <button onClick={registerHandler} className="loginRegisterButton">Register Now </button>
               
            </div>
            
        </div>
      </div>
    </div>
  )
}

export default Login
