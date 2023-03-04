import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeItem,increaseCartItem, decreaseCartItem } from '../../redux/cartReducer'
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import {loadStripe} from '@stripe/stripe-js';
import {paymentRequest} from '../../makeRequest2'
import {  toast } from 'react-toastify';
import './Checkout.scss'
import { toogleLoginModal } from '../../redux/modalsReducer';
const Checkout = () => {
  const dispatch = useDispatch()
  const secret = useSelector(state=>state.user.currentUserSecret)
  const totalPrice = () => {
    let total = 0
    products.forEach((item) =>(total += item.quantity * item.price));
    return total.toFixed(2)
  }
  const currentUser = useSelector(state =>state.user.currentUser)
  const stripePromise = loadStripe('pk_test_51MAhvzGmzXS81173x8hfApmX6Fz7lt6lcDBHH2g5gSyHFHLvNc8JNyXIcz4t3sOxArnrmWXBzVZhZ26cKHMiQMXg00OKQrirQj')
  const handlePayment = async () => {
    if(!currentUser) {
      dispatch(toogleLoginModal(true))
    } else {
      try{
        const stripe = await stripePromise 
        const res = await paymentRequest.post('/orders',{
          products,
          email: currentUser.email,
        }, {headers: {
              Authorization: "bearer " + secret
           }})
    
        await stripe.redirectToCheckout({
          sessionId:res.data.stripeSession.id
        })
        } catch(err) {
          console.log(err)
        }
    }
    
  }
  const products = useSelector(state=>state.cart.products)
  
  return (
    <div className='checkout'>
      <div className="checkoutContainer">
        <div className="checkoutProducts">
        {
        products?.map((item) => (
        <div key={item.id} className="item">
            <img src={item.img} alt="" className="" />
            <div className="detailsContainer">
              <div className="leftCheckout">
                <div className="details">
                    <h1>{item.title}</h1>
                    <p>{item.desc?.substring(0,100)}</p>
                    <span>Price: {item.price}$</span>
                </div>
                <button onClick={()=>{
                  toast(`🗑️${item.quantity} products deleted from Cart !`)
                  dispatch(removeItem(item.id))}}>Remove</button>
              </div>
              <div className="rightCheckout">
                <h2>Total price {(item.quantity*item.price).toFixed(2)}$</h2>
                <div className="quantity">
                  <div className="up">
                    <RemoveIcon onClick={()=>dispatch(decreaseCartItem({id:item.id,quantity:1}))}/>
                    QUANTITY
                    <AddIcon onClick={()=>dispatch(increaseCartItem({id:item.id,quantity:1}))}/>
                  </div>
                  <span>Total quantity: {item.quantity}</span>
                </div>
              </div>
            </div>
        </div>
        ))}
        </div>
        <div className="payment">
          <h1 className="sumary">SUMMARY</h1>
          <div className="subtotal">
            <span>Subtotal</span>
            <span>{totalPrice()}$</span>
          </div>
          <div className="subtotal">
            <span>Estimated tax and shipping</span>
            <span>0$</span>
          </div>
        <div className="total">
          <h2>total</h2>
          <h2>{totalPrice()}$</h2>
        </div>
        <button className='buttonCheckout' onClick={handlePayment}>Checkout</button>
        </div>
      </div>
    </div>
  )
}

export default Checkout
