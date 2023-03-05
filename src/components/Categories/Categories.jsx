import { Link } from 'react-router-dom'
import './Categories.scss'

const Categories = () => {
  return (
    <div className='categories'>
        <div className="col col-l">
        <div className="row">
                <img src="https://images.pexels.com/photos/7035508/pexels-photo-7035508.jpeg" alt="" />
                <button>
                    <Link to='/products/2' className='link'>Women</Link>
                </button>
            </div> 
            <div className="row">
                <div className="col">
                    <div className="row">
                    <img src="https://images.pexels.com/photos/15290928/pexels-photo-15290928.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                    <button>
                        <Link to='/products/1' className='link'>Men</Link>
                    </button>
                    </div>
                </div>
                <div className="col">
                    <div className="row">
                        <img src="https://images.pexels.com/photos/1619815/pexels-photo-1619815.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                        <button>
                            <Link to='/products/3' className='link'>Kids</Link>
                        </button>
                    </div>
                </div>
            </div>   
        </div>  
    </div>
  )
}

export default Categories
