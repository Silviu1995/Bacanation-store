import React from 'react'
import { useState } from 'react'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import BalanceIcon from '@mui/icons-material/Balance';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import './Product.scss'

const Product = () => {
  const images = [
    "https://images.pexels.com/photos/6764016/pexels-photo-6764016.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/6764015/pexels-photo-6764015.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  ]
  const [selectedImg, setSelectedImg] = useState(0)
  const [quantity, setQuantity] = useState(1)
  return (
    <div className="product">
      <div className="left">
        <div className="images">
          <img src={images[0]} onClick={()=>setSelectedImg(0)} alt="" />
          <img src={images[1]} onClick={()=>setSelectedImg(1)} alt="" />
        </div>
        <div className="mainImg">
          <img src={images[selectedImg]} alt="" />
        </div>
      </div>
      <div className="right">
        <h1>Title</h1>
        <span className='price'>199$</span>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam architecto iste voluptatum officia. Esse quia quae natus tenetur dolores sequi, repellendus inventore, atque rerum, expedita sint labore quis nobis ut.</p>
        <div className="quantity">
          <button onClick={()=> setQuantity(prev =>prev === 1 ? 1 : prev-1)}>-</button >
          {quantity}
          <button onClick={()=> setQuantity(prev =>prev+1)}>+</button>
        </div>
        <button className="add">
        <AddShoppingCartIcon/>ADD TO CART
        </button>
        <div className="links">
          <div className="item">
            <ThumbUpIcon/> ADD TO DESIRED
          </div>
          <div className="item">
            <BalanceIcon/> ADD TO COMPARE
          </div>
        </div>
        <div className="info">
          <span>Vendor: Polo</span>
          <span>Product Type: T-Shirt</span>
          <span>Tag: T-Shirt, Men, Top</span>
        </div>
        <hr />
      </div>
    </div>
  )
}

export default Product
