import React from 'react'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from './routes/Home'
import UpdatePage from './routes/UpdatePage'
import PlacesPage from './routes/PlacesPage'
import { PlacesContextProvider } from './context/PlacesContext'

const App = () =>{
  return (
    <PlacesContextProvider>
  <div className='container'>
    <Router>
    <Routes>
      <Route exact path="/" element={<Home/>}></Route>
      <Route exact path="/place/:id/update" element={<UpdatePage/>}></Route>
      <Route exact path="/place/:id" element={<PlacesPage/>}></Route>
      </Routes>
    </Router>
  </div>
  </PlacesContextProvider>)
}

export default App
