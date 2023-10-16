import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from '../Pages/About'
import Actors from '../Pages/Actors'
import Temporadas from '../Pages/Temporadas'
import Contacto from '../Pages/Contacto'
import Home from '../Pages/Home'
import SerieDetails from '../Pages/SerieDetails'

const RoutesIndex = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/contacto' element={<Contacto />} />
      <Route path='/actors/:id' element={<Actors />} />
      <Route path='/temporadas/:id' element={<Temporadas />} />
      <Route path='/about' element={<About />} />
      <Route path='/serie/:id' element={<SerieDetails />} />
    </Routes>
  )
}

export default RoutesIndex
