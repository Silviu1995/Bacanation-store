import React from 'react'
import { useState } from 'react'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import useFetch from '../../Hooks/useFetch';
import {addToCart} from '../../redux/cartReducer'
import './Product.scss'
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToFavorite } from '../../redux/favoriteReducer';
import {  toast } from 'react-toastify';
  
  const Product = () => {
  const id = useParams().id
  const [selectedImg, setSelectedImg] = useState("img")
  const [quantity, setQuantity] = useState(1)
  const {data,loading} = useFetch(`/products/${id}?populate=*`)
  const dispatch = useDispatch()
  
 
  return (
    <div className="product">
     {
     loading? "loading" 
     : (
     <>
     <div className="left">
        <div className="images">
          <img src={process.env.REACT_APP_UPLOAD_URL + data?.attributes?.img?.data?.attributes?.url} onClick={()=>setSelectedImg("img")} alt="" />
          <img src={process.env.REACT_APP_UPLOAD_URL + data?.attributes?.img2?.data?.attributes?.url} onClick={()=>setSelectedImg("img2")} alt="" />
        </div>
        <div className="mainImg">
          <img src={process.env.REACT_APP_UPLOAD_URL + data?.attributes?.[selectedImg]?.data?.attributes?.url} alt="" />
        </div>
      </div>
      <div className="right">
        <h1>{data?.attributes?.title}</h1>
        <span className='price'>{data?.attributes?.price}$</span>
        <p>{data?.attributes?.desc}</p>
        <div className="quantity">
          <button onClick={()=> setQuantity(prev =>prev === 1 ? 1 : prev-1)}>-</button >
          {quantity}
          <button onClick={()=> setQuantity(prev =>prev+1)}>+</button>
        </div>
        <button className="add" onClick={()=>{
          toast(`🛒 ${quantity} products added to Cart!`)
          dispatch(addToCart({
          id: data.id,
          title: data.attributes.title,
          desc: data.attributes.desc,
          price: data.attributes.price,
          img:process.env.REACT_APP_UPLOAD_URL + data.attributes.img.data.attributes.url,
          quantity,
        }))}}>
        <AddShoppingCartIcon/>ADD TO CART
        </button>
        <div className="links">
          <div className="item" onClick={()=>{
            toast('👍 Added to Favorites !')
            dispatch(addToFavorite({
              id: data.id,
              title: data.attributes.title,
              desc: data.attributes.desc,
              price: data.attributes.price,
              img:process.env.REACT_APP_UPLOAD_URL + data.attributes.img.data.attributes.url
            }))}}>
            <ThumbUpIcon  /> ADD TO DESIRED
          </div>
        </div>
        <div className="info">
          <span>Vendor: Polo</span>
          <span>Product Type: T-Shirt</span>
          <span>Tag: T-Shirt, Men, Top</span>
        </div>
        
      </div> 
      
      </>
      )}
     
    </div>
    
  )
}

export default Product
