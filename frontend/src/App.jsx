import React from 'react'
import Header from "./components/Header"
import Home from './pages/Home'
import { Route,Routes } from 'react-router-dom'
import Footer from './components/Footer'
const App = () => {
  return (
    <div className='w-full relative'>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        
      </Routes>
      < Footer />
      
    </div>
  )
}

export default App