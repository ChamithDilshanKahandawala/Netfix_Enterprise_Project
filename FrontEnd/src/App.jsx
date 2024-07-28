import React from 'react'
import Home from './pages/Home/Home'
import { Routes,Route } from 'react-router-dom'
import Login from './pages/Login/Login'
import Player from './pages/Player/player'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path ='/' element={<Home/>}/>
         <Route path ='/login' element={<Login/>}/>
         <Route path='/player/:id' element={<Player/>}/>
      </Routes>
      {/* <Home/> */}
      
      
    </div>
  )
}

export default App