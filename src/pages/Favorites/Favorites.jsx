import React from 'react'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../redux/cartReducer';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { removeFavorite } from '../../redux/favoriteReducer';
import './favorites.scss'
import { toast } from 'react-toastify';

const Favorites = () => {
const dispatch = useDispatch()


   const products = useSelector(state=>state.favorite.favProducts)
   
  return (
    <div className='favorite'>
      <h2 className="title"> My favorite products</h2>
      
      <div className="itemContainer">
      {
        products?.map((item) => (
        <div key={item.id} className="item">
            <img src={item.img} alt="" className="" />
            <div className="details">
                <h1>{item.title}</h1>
                <p>{item.desc?.substring(0,100)}</p>
                <span className='price'>Price: ${item.price}</span>
            </div>
        <div className="buttons" >
          <button className="add" onClick={()=>{
             toast(`🛒 Added to Cart!`)
             dispatch(addToCart({
              id: item.id,
              title: item.title,
              desc: item.desc,
              price: item.price,
              img:item.img,
              quantity:1,
            
            }))
          }
          }
           
           >
            <AddShoppingCartIcon/>ADD TO CART
          </button>
          <button className='delete' onClick={()=>{
            toast('🗑️ Deleted from favorites !')
            dispatch(removeFavorite(item.id))}}>
            <DeleteOutlineIcon    />REMOVE
          </button>
          
        </div>
        
        </div>
        ))}
      <hr />
      </div>
      
    </div>
  )
}

export default Favorites
