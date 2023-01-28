import React from 'react'
import {Link, Route, Routes} from 'react-router-dom'
import Warehouse from './warehouse/Warehouse'

const App = () => {
  return (
    <>
      <nav>
        <ul>
          <li><Link to='/warehouse'>Warehouse</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path='/warehouse' element={<Warehouse />}/>
      </Routes>
    </>
  )
}

export default App