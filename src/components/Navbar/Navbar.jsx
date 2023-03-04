import React, { useState } from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './Navbar.scss'
import Cart from '../Cart/Cart';
import { toogleUserModal } from '../../redux/modalsReducer';
import UserPopUp from '../UserPopUp/UserPopUp';
import LoginPopUp from '../LoginPopUp/LoginPopUp';
const Navbar = () => {
  const products = useSelector(state => state.cart.products)
  const favProducts = useSelector(state => state.favorite.favProducts)
  const [open, setOpen] = useState(false)

  const user = useSelector(state =>state.user.currentUser)

  const dispatch = useDispatch()
  return (
    <div className="navbar" >
      <div className="wrapper">
        <div className="left">
          <div className="item">
            <Link className='link' to='/products/1'>Women</Link>
          </div>
          <div className="item">
            <Link className='link' to='/products/2'>Men</Link>
          </div>
          <div className="item">
            <Link className='link' to='/products/3'>Kids</Link>
          </div>
        </div>
        <div className="center">
          <Link className='link' to='/'>
            <img src="/img/logo_transparent.png" alt="" />
          </Link>
        </div>
        <div className="right">
          <div className="item">
            <Link className='link' to='/products/3'>Home</Link>
          </div>
          <div className="item">
            <Link className='link' to='/products/3'>About</Link>
          </div>
          <div className="item">
            <Link className='link' to='/products/3'>Contact</Link>
          </div>
          <div className="item">
            <Link className='link' to='/products/3'>Stores</Link>
          </div>
          <div className="icons">
           <div className="profile">
           <AccountCircleIcon onClick={()=>dispatch(toogleUserModal(true))}/>
           {user && <span className='profileBadge'></span> }
           </div>
            <Link to='/favorites' className='link'>
            <div className="shopCart">
            <ThumbUpIcon/>
              <span>{favProducts.length}</span>
            </div> 
            
            </Link>
            
            <div className="shopCart" onClick={()=> setOpen(!open)}>
              <ShoppingBasketIcon/>
              <span>{products.length}</span>
            </div> 
          </div>
          
        </div>
      </div>
      <UserPopUp/>
      <LoginPopUp/>
      {open && <Cart/>}
    </div>
  )
}

export default Navbar
