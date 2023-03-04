import './Home.scss'
import Slider from '../../components/Slider/Slider'
import FeaturedProducts from '../../components/FeaturedProducts/FeaturedProducts'
import Categories from '../../components/Categories/Categories'
import Contact from '../../components/Contact/Contact'
import { useSelector } from 'react-redux'
const Home = () => {
  const currentUser = useSelector(state=>state.user.currentUser)
  console.log(currentUser)
  console.log(process.env.REACT_APP_API_URL)
  return (
    <div className='home'>
      <Slider/>
     
      <FeaturedProducts type='featured '/>
      <Categories/>
      <FeaturedProducts type='trend '/>
      <Contact/>
      
    </div>
  )
}

export default Home
