import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from 'react-router-dom'
import Home from './pages/Home/Home';
import Product from './pages/Product/Product';
import Products from './pages/Products/Products';
import Login from './pages/Login/Login'
import Navbar from './components/Navbar/Navbar'; 
import Footer from './components/Footer/Footer';
import Favorites from './pages/Favorites/Favorites';
import './app.scss'
import Checkout from './pages/Checkout/Checkout';
import Register from './pages/Register/Register';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Layout = () => {
  return(
    <div className='app'>

      <Navbar/>
      <Outlet/>
      <Footer/>
      
    </div>
    

  )
}
const router = createBrowserRouter([
  {
    path:"/",
    element: <Layout/>,
    children:[
      {
        path:"/",
        element: <Home/>
      },
      {
        path:"/products/:id",
        element: <Products/>
      },
      {
        path:"/product/:id",
        element: <Product/>
      },
      {
        path:"/favorites",
        element: <Favorites/>
      },
      {
        path:"/checkout",
        element: <Checkout/>
      },
      {
        path:"/login",
        element: <Login/>
      },
      {
        path:"/register",
        element:<Register/>
      }
    ]
  }

])

function App() {
  

  
  return (
    <div>
      
      
      <RouterProvider router={router}/>
      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        />
    </div>
  );
}

export default App;
