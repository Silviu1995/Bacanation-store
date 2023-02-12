import React, { useState } from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Link } from 'react-router-dom';
import './Navbar.scss'
import Cart from '../Cart/Cart';

const Navbar = () => {
  const [open, setOpen] = useState(false)
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="left">
          <div className="item">
            <img src="/img/en.png" alt="" className="img" />
            <KeyboardArrowDownIcon/>
          </div>
          <div className="item">
            <span>USD</span>
            <KeyboardArrowDownIcon/>
          </div>
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
          <Link className='link' to='/'>BACANATION STORE</Link>
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
            <SearchIcon/> 
            <AccountCircleIcon/>
            <ThumbUpIcon/>
            <div className="shopCart" onClick={()=> setOpen(!open)}>
              <ShoppingBasketIcon/>
              <span>0</span>
            </div> 
          </div>
          
        </div>
      </div>
      {open && <Cart/>}
    </div>
  )
}

export default Navbar
