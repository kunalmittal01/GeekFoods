import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Landing from './HomePage/Landing';
import Quote from './QuotePage/Quote';
import Restaurants from './RestaurantPage/Restaurants';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Contact from './ContactPage/Contact'
function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/Quote" element={<Quote />} />
          <Route path="/Restaurants" element={<Restaurants />} />
          <Route path="/Contact" element={<Contact/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
