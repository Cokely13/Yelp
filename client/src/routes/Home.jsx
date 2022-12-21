import React from 'react'
import AddPlace from '../components/AddPlace'
import Header from '../components/Header'
import "bootstrap/dist/css/bootstrap.min.css"
import PlacesList from '../components/PlacesList'


const Home = () => {
  return (
    <div>
      <Header/>
      <AddPlace/>
      <PlacesList/>
      </div>
  )
}

export default Home
