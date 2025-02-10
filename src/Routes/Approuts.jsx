import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import Layout from '../Layout';
import Home from '../pages/Home';
import Contact from '../pages/contact';
import About from '../pages/About';
import Propertis from '../pages/Propertis';
import Service from '../pages/Service';
import Gotop from '../components/Gotop';


function Approuts() {
  return (
    <>
        <Gotop/>
      <BrowserRouter>
      <Routes>
        <Route element={<Layout/>} >
            <Route path='/' element={<Home/>} />
            <Route path='/contact' element={<Contact/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/propertis' element={<Propertis/>} />
            <Route path='/service' element={<Service/>} />
        </Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default Approuts
