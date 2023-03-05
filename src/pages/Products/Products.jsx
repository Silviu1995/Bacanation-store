import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import List from '../../components/List/List'
import useFetch from '../../Hooks/useFetch'
import './Products.scss'

const Products = () => {
  
  const catId = parseInt(useParams().id)
  const [maxPrice,setMaxPrice] = useState(1000)
  const [sort,setSort] = useState(null)
  const {data} = useFetch(`/sub-categories?[filters][categories][id]]$eq=${catId}`)
  const [selectedSubCategories,setSelectedSubCategories] = useState([])
  const handleChange = (event) =>{
    const value = event.target.value
    const isChecked = event.target.checked
    setSelectedSubCategories(
      isChecked
      ? [...selectedSubCategories,value]
      : selectedSubCategories.filter((item) => item!==value)
    )
  }
  console.log(selectedSubCategories)
  // console.log(data)
  return (
    <div className='products'>
      <div className="left">
        <div className="filterItem"> 
          <h2>Product categories</h2>
        {
          data?.map((item) =>(
            <div key={item?.id} className="inputItem">
              <input type="checkbox" id={item?.id} value={item?.id} onChange={handleChange} />
              <label htmlFor={item?.id}>{item?.attributes.title}</label>
            </div>
          ))
        }
         
        </div>
        <div className="filterItem">
          <h2>Filter by price</h2>
          <div className="inputItem">
            <span>0</span>
            <input type="range" min={0} max={1000} onChange={(event) => setMaxPrice(event.target.value)}/>
            <span>{maxPrice}</span>
          </div>
        
          <h2>Sort by</h2>
          <div className="inputItem">
            <input type="radio" id='asc' value="asc" name="price" onChange={(e)=>setSort('asc')}/>
            <label htmlFor='asc'>Price (Lowest price)</label>
          </div>
          <div className="inputItem">
            <input type="radio" id='desc' value="desc" name="price" onChange={(e)=>setSort('desc')} />
            <label htmlFor='desc'>Price (Highest price)</label>
          </div>
        </div>
      </div>
      <div className="right">
        <img src="https://images.pexels.com/photos/8430908/pexels-photo-8430908.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="catImg" />
        <List maxPrice={maxPrice} catId={catId} sort={sort} subCats={selectedSubCategories} />
      </div>
    </div>
  )
}

export default Products
