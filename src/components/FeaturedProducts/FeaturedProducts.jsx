import './FeaturedProducts.scss'
import Card from '../Card/Card'
import useFetch from '../../Hooks/useFetch'

const FeaturedProducts = ({type}) => {
  const {data, loading} = useFetch(`/products?populate=*&[filters][type][$eq]=${type}`)
 
  return (
    <div className='featuredProducts'>
      <div className="top">
        <h1>{type} products</h1>
        <p>Some description of products</p>
      </div>
      <div className="bottom">
        {
          loading? "loading" :  data.map(item => (
                <Card item={item} key={item.id}/>
            ))
        }
      </div>
    </div>
  )
}

export default FeaturedProducts
