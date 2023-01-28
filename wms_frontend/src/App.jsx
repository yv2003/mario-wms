import React from 'react'
import {Link, Route, Routes} from 'react-router-dom'
import Elements from './Elements'

const App = () => {
  return (
    <>
      <nav>
        <ul>
          <li><Link to='/element'>Elements</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path='/element' element={<Elements />}/>
      </Routes>
    </>
  )
}

export default App