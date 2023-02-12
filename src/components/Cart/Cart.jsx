import React from 'react'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import './Cart.scss'

const Cart = () => {
    const data = [
        {
            id: 1,
            title: "Blue berry",
            img: "https://images.pexels.com/photos/8452006/pexels-photo-8452006.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            img2: "https://images.pexels.com/photos/8451998/pexels-photo-8451998.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            isNew: true,
            desc: 'Nice',
            oldPrice: 65,
            price: 29
        },
        {
            id: 1,
            title: "Blue berry",
            img: "https://images.pexels.com/photos/3760853/pexels-photo-3760853.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            img2: "https://images.pexels.com/photos/3760852/pexels-photo-3760852.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            isNew: true,
            desc: 'Nice',
            oldPrice: 22,
            price: 19
        },
        {
            id: 1,
            title: "Blue berry",
            img: "https://images.pexels.com/photos/3760853/pexels-photo-3760853.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            img2: "https://images.pexels.com/photos/3760852/pexels-photo-3760852.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            isNew: true,
            desc: 'Nice',
            oldPrice: 22,
            price: 19
        }
    ]
  return (
    <div className='cart'>
      <h1>Products in your cart</h1>
      <div className="itemContainer">
      {
        data?.map((item) => (
        <div key={item.id} className="item">
            <img src={item.img} alt="" className="" />
            <div className="details">
                <h1>{item.title}</h1>
                <p>{item.desc?.substring(0,100)}</p>
                <span className='price'>1 x ${item.price}</span>
            </div>
            <DeleteOutlineIcon className='delete'/>
        </div>
        ))}
      </div>
      
        <div className="bottom">
        <div className="total">
            <span>SUBTOTAL</span>
            <span>125$</span>
        </div>
        <button className='checkOut'>PROCEED TO CHECKOUT</button>
        <div className='reset'>Reset Cart <RestartAltIcon/></div>
        </div>
       
    </div> 
  )
}

export default Cart
