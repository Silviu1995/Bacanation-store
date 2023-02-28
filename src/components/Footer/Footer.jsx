import './Footer.scss'
import CopyrightIcon from '@mui/icons-material/Copyright';

const Footer = () => {
  return (
    <div className='footer'>
      <div className="top">
        <div className="item">
          <h1>Collections</h1>
          <span>Women</span>
          <span>Men</span>
          <span>Shoes</span>
          <span>Accesories</span>
          <span>New Collections</span>
        </div>
        <div className="item">
          <h1>External links</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>
        <div className="item">
          <h1>About</h1>
          <span>Somthing about this app</span>
        </div>
        <div className="item">
          <h1>Contact</h1>
          <span>Some details about contact</span>
        </div>
      </div>
      
      <div className="bottom">
        <div className="left">
          <span className="logo">BACANATION STORE </span>
          <CopyrightIcon className='copyrightLogo'/> 
          <span className="copyright">copyright 2023. All right reserved !</span>
        </div>
          
        <div className="right">
          <img src="/img/payment.png" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Footer
