import { Link } from 'react-router-dom'
import './Categories.scss'

const Categories = () => {
  return (
    <div className='categories'>
        <div className="col col-l">
        <div className="row">
                <img src="https://images.pexels.com/photos/7035508/pexels-photo-7035508.jpeg" alt="" />
                <button>
                    <Link className='link'>Women</Link>
                </button>
            </div> 
            <div className="row">
                <div className="col">
                    <div className="row">
                    <img src="https://images.pexels.com/photos/15290928/pexels-photo-15290928.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                    <button>
                        <Link className='link'>Men</Link>
                    </button>
                    </div>
                </div>
                <div className="col">
                    <div className="row">
                        <img src="https://images.pexels.com/photos/1619815/pexels-photo-1619815.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                        <button>
                            <Link className='link'>Kids</Link>
                        </button>
                    </div>
                </div>
            </div>   
        </div>  
        <div className="col col-l">
            <div className="row">
                <div className="col">
                    <div className="row">
                    <img src="https://images.pexels.com/photos/15290928/pexels-photo-15290928.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                    <button>
                        <Link className='link'>Sales</Link>
                    </button>
                    </div>
                </div>
                <div className="col">
                    <div className="row">
                        <img src="https://images.pexels.com/photos/15296759/pexels-photo-15296759.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                        <button>
                            <Link className='link'>Sales</Link>
                        </button>
                    </div>
                </div>
            </div>
            <div className="row">
                <img src="https://images.pexels.com/photos/2475255/pexels-photo-2475255.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                <button>
                    <Link className='link'>Sales</Link>
                </button>
            </div>    
        </div>  
    </div>
  )
}

export default Categories
