import React from 'react'
import Home from './Home'
import { Route, Routes } from 'react-router-dom'
import Phone from './Phone'
import Headphone from './Headphone'
import Vr from './Vr'
import Laptop from './Laptop'
import Search from './Search'
import Wired from './Wired'
import Watch from './Watch'
import Ps from './Ps'
import Speaker from './Speaker'
const Display = () => {
  return (
    <div>
        <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/phone' element={<Phone />} />
        <Route path='/headphone' element={<Headphone />} />
        <Route path='/vr' element={<Vr />} />
        <Route path='/laptop' element={<Laptop />} />
        <Route path='/search' element={<Search />} />
        <Route path='/wired' element={<Wired />} />
        <Route path='/watch' element={<Watch />} />
        <Route path='/ps' element={<Ps />} />
        <Route path='/speaker' element={<Speaker />} />
      </Routes>
    </div>
  )
}

export default Display