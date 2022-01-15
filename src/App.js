import React from 'react'
import Divider from './components/Divider'
import BuyGet from './pages/BuyGet'
import Category from './pages/Category'
import Item from './pages/Item'
import LandingPage from './pages/LandingPage'
import NewArrival from './pages/NewArrival'
import Promotion from './pages/Promotion'
import Contact from './pages/Contact'
import imageOne from './images/Category icons/Asset 42.png'
import imageTwo from './images/Category icons/Asset 43.png'
import imageThree from './images/Category icons/Asset 45.png'
import Footer from './components/Footer'
import ScrollTop from './components/ScrollTop'

const App = () => {
  return (
    <div>
      <LandingPage />
      <Category />
      <BuyGet />
      <Promotion />
      <Divider />
      <NewArrival />
      <Divider />
      <Item name={'phone'} image={imageOne} />
      <Divider />
      <Item name={'Laptop'} image={imageTwo} />
      <Divider />
      <Item name={'Tablet'} image={imageThree} />
      <Contact />
      <Footer />
      <ScrollTop />
    </div>
  )
}

export default App
