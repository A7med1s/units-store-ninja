import {Routes,Route,BrowserRouter} from 'react-router-dom'

import HomePage from './pages/HomePage'
import CartPage from './pages/CartPage'
import ProductPage from './pages/ProductPage'
import CategoryPage from './pages/CategoryPage'
import MobilesCategory from './pages/Categories/MobilesCategory'
import LabtopsCategory from './pages/Categories/LabtopsCategory'
import FootwearsCategory from './pages/Categories/FootwearsCategory'
import ClothesCategory from './pages/Categories/ClothesCategory'
import PrivacyPolicy from './pages/PrivacyPolicy'
import AboutUs from './pages/AboutUs'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
function App() {

  return (
    <>
  <BrowserRouter>
      <Navbar/>
    <Routes>
    <Route index path='/' element={<HomePage/>}/>
    <Route  path='cart' element={<CartPage/>}/>
    <Route  path='category' element={<CategoryPage/>}/>
    <Route  path='product' element={<ProductPage/>}/>
    <Route  path='mobiles-page' element={<MobilesCategory/>}/>
    <Route  path='labtops-page' element={<LabtopsCategory/>}/>
   <Route  path='footwear-page' element={<FootwearsCategory/>}/>
   <Route  path='clothes-page' element={<ClothesCategory/>}/> 
   <Route  path='about-us' element={<AboutUs/>}/> 
   <Route  path='privacy-policy' element={<PrivacyPolicy/>}/> 
    </Routes>
    <Footer/>
  </BrowserRouter>

    </>
  )
}

export default App
