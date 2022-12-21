import React from 'react'
import { useContext } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import PlacesFinder from '../Apis/PlacesFinder'
import { PlacesContext } from '../context/PlacesContext'

function UpdatePlace(props) {
  const {id} =useParams()
  let history = useNavigate()
  const {places} = useContext(PlacesContext)
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [priceRange, setPriceRange] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const response = await PlacesFinder.get(`/${id}`)
      setName(response.data.data.restaurants.name)
      setLocation(response.data.data.restaurants.location)
      setPriceRange(response.data.data.restaurants.pricerange)
    }
    fetchData()
  }, [])

    const handleSubmit = async (e) => {
      e.preventDefault()
      const updatedPlace = await PlacesFinder.put(`/${id}`, {
        name,
        location,
        pricerange:priceRange
      })
      history('/')
    }

  return (
    <div>
      {/* <h1>{places[0].name}</h1> */}
  <form action="">
    <div className="form-group">
      <label htmlFor="name">Name</label>
      <input value={name} onChange={event => setName(event.target.value)} id="name" className="form-control" type="text" />
      </div>
      <div className="form-group">
      <label htmlFor="location">Location</label>
      <input value={location} onChange={event => setLocation(event.target.value)}id="location" className="form-control" type="text" />
      </div>
      <div className="form-group">
      <label htmlFor="pricerange">PriceRange</label>
      <input value={priceRange} onChange={event => setPriceRange(event.target.value)} id="pricerange" className="form-control" type="number" />
    </div>
    <button type='submit' onClick={handleSubmit} className='btn btn-primary'>Submit</button>
  </form>
    </div>
  )
}

export default UpdatePlace
