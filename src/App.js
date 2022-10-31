import React, { Component } from 'react';
import { BrowserRouter, Routes, Route, Outlet, Navigate } from 'react-router-dom';
import Wrapper from './components/Wrapper';
import Home from './pages/Home';
import Products from './pages/Products';
import About from './pages/About';
import Contact from './pages/Contact';
import Product from './pages/Product';
import NotFound from './pages/NotFound';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
        <Route path='*' element ={<Navigate to= '/not-found'/>} />
          <Route path ='/' element={<Wrapper/>} >
            <Route index element={<Home/>} />

            <Route path ='products' element={<Outlet/>}>
              <Route index element={<Products/>} />

              <Route path =':productId' element={<Product/>} />
            </Route>

           <Route path ='about' element={<About/>} />

           <Route path ='contact' element={<Contact/>} />
          </Route>
          <Route path = '/not-found' element = {<NotFound/>} />
        </Routes>
        
      </BrowserRouter>
    );
  }
}


//39

export default App;