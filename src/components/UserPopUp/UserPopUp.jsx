import { useDispatch, useSelector } from 'react-redux'
import {logoutUser} from '../../redux/userReducer'
import './UserPopUp.scss'
import { Link } from 'react-router-dom'
import { toogleUserModal } from '../../redux/modalsReducer'
import CloseIcon from '@mui/icons-material/Close';

const UserPopUp = () => {
  const dispatch = useDispatch()
  const user = useSelector(state=>state.user.currentUser)

  const open = useSelector(state=> state.modal.userPopUp)
  const onClose = () => dispatch(toogleUserModal(false))
  if (!open) return null;
  return (
    <div onClick={onClose} className="userOverlay">
      <div onClick={(e) => {
          e.stopPropagation();
        }} className='userPopUp'>
      
      <div className="userButtons">
      {user
        ? <button  onClick={() => dispatch(logoutUser())}>Sign Out</button> 
        : <Link className='link' to='/login'> <button  onClick={onClose}>Sign In</button> </Link>
        }
        
        
        {user && <button className="profilePage">Profile Page</button> }
      </div>
      
      <span className='close' onClick={onClose}> Close <CloseIcon/></span>
    </div>
    </div>
    
  )
}

export default UserPopUp
