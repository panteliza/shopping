import React from 'react';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails'
import Sidebar from './components/Sidebar'

import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero';
const App = () => {
  return (
  <div className='overflow-hidden'>
    <Router>
      <Header/>
      <Hero/>
      <Routes>
        <Route path='/Elle-Flair' element={<Home/>}/>
        <Route path='/products/:id' element={<ProductDetails/>}/>
      </Routes>
      <Sidebar/>
      <Footer/>
    </Router>
  </div>
  );
};

export default App;