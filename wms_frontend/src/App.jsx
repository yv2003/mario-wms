import React from 'react'
import {Link, Route, Routes} from 'react-router-dom'
import Items from './Items'
import Homepg from './homepg/homepg'

const App = () => {
  return (
    <>
      <nav>
        <ul>
          <li><Link to='/'>Home</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path='/items' element={<Items />}/>
        <Route path='/' element={<Homepg />}/>
      </Routes>
    </>
  )
}

export default App