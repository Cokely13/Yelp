import React from 'react'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from './routes/Home'
import UpdatePage from './routes/UpdatePage'
import PlacesPage from './routes/PlacesPage'

const App = () =>{
  return <div>
    <Router>
    <Routes>
      <Route exact path="/" element={<Home/>}></Route>
      <Route exact path="/place/:id/update" element={<UpdatePage/>}></Route>
      <Route exact path="/place/:id" element={<PlacesPage/>}></Route>
      </Routes>
    </Router>
  </div>
}

export default App
