import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import { useState } from 'react'
import PlacesFinder from '../Apis/PlacesFinder'
import { useContext } from 'react'
import { PlacesContext } from '../context/PlacesContext'

function AddPlace() {
  const {addPlaces} = useContext(PlacesContext)
  const [name, setName] = useState("")
  const [location, setLocation] = useState("")
  const [priceRange, setPriceRange] = useState("Price Range")
  const handleSubmit = async (e) => {
    e.preventDefault()
    try{
      const response = await  PlacesFinder.post("/",{
        name,
        location,
        pricerange: priceRange
      })
      addPlaces(response.data.data.restaurant)
      console.log(response)
    } catch (err){

    }
  }
  return (
    <div className="mb-4 col">
      <form action="">
        <div className="form-row">
          <div className="col">
            <input value={name} onChange={(event => setName(event.target.value))} type="text" className='form-control' placeholder='Name'/>
          </div>
          <div className="col">
            <input value={location} onChange={(event => setLocation(event.target.value))} type="text" className='form-control' placeholder='Location' />
          </div>
          <div className="col">
          <select value={priceRange} onChange={(event => setPriceRange(event.target.value))}  placeholder='Location' className="custom-select my-1 mr-sm-2">
          <option disabled>Price Range</option>
            <option value="1">$</option>
            <option value="2">$$</option>
            <option value="3">$$$</option>
            <option value="4">$$$$</option>
            <option value="5">$$$$$</option>
            </select>
          </div>
        </div>
        <button onClick={handleSubmit} type="submit"className='btn btn primary'>Add</button>
      </form>
    </div>
  )
}

export default AddPlace
