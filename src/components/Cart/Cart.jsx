import React from 'react'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import {useDispatch, useSelector} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import './Cart.scss'
import { removeItem, resetCart } from '../../redux/cartReducer';
import { toast } from 'react-toastify';



const Cart = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
   const products = useSelector(state=>state.cart.products)
   const totalPrice = () => {
    let total = 0
    products.forEach((item) =>(total += item.quantity * item.price));
    return total.toFixed(2)
  }

  return (
    <div className='cart'>
      <h1>Products in your cart</h1>
      <div className="itemContainer">
      {
        products?.map((item) => (
        <div key={item.id} className="item">
            <img src={item.img} alt="" className="" />
            <div className="detailsContainer">
                <div className="details">
                    <h1>{item.title}</h1>
                    <p>{item.desc?.substring(0,100)}</p>
                    <span className='price'>{item.quantity} x ${item.price}</span>
                </div>
                <DeleteOutlineIcon className='delete' onClick={()=>dispatch(removeItem(item.id))} />
            </div>
            
        </div>
        ))}
      </div>
      
        <div className="bottom">
        <div className="total">
            <span>SUBTOTAL</span>
            
            <span>{totalPrice()}$</span>
        </div>
        <button className='checkOut' onClick={()=>navigate('/checkout')}>PROCEED TO CHECKOUT</button>
        <div className='reset' onClick={()=>{
          toast('🔄 The Cart was reset')
          dispatch(resetCart())}}>
            Reset Cart 
            <RestartAltIcon/></div>
        </div>
       
    </div> 
  )
}

export default Cart







