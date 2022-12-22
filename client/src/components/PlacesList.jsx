import React, {useEffect} from 'react'
import { useContext } from 'react'
import PlacesFinder from '../Apis/PlacesFinder'
import { PlacesContext } from '../context/PlacesContext'
import {useNavigate} from 'react-router-dom'


const PlacesList = (props) => {
  const {places, setPlaces} = useContext(PlacesContext)
  let history = useNavigate()

   useEffect(() => {
    const fetchData = async () => {
      try{
        const response = await PlacesFinder.get("/")
        setPlaces(response.data.data.restaurants)
      } catch (err) {}
    };
      fetchData();
    }, [])

const handleDelete = async(e, id) => {
  e.stopPropagation()
  try{
   const response = await PlacesFinder.delete(`/${id}`)
   setPlaces(places.filter(place => {
    return place.id !== id
   }))
   console.log(response)
  } catch (err){

  }
}

const handleUpdate = (e, id) => {
  e.stopPropagation()
  history(`/place/${id}/update`)
}

const handlePlaceSelect = (id) => {
  history(`/place/${id}`)
}

  return (
    <div className='list-group'>
      <table className="table table-hover table-dark">
        <thead>
          <tr className="bg-primary">
            <th scope='col'>Place</th>
            <th scope='col'>Location</th>
            <th scope='col'>Pricerange</th>
            <th scope='col'>Ratings</th>
            <th scope='col'>Edit</th>
            <th scope='col'>Delete</th>
          </tr>
        </thead>
        <tbody>
          {places && places.map(place => {
            return (
            <tr onClick={() => handlePlaceSelect(place.id)}  key={place.id}>
              <td>{place.name}</td>
              <td>{place.location}</td>
              <td>{"$".repeat(place.pricerange)}</td>
              <td>reviews</td>
              <td><button onClick={(e) => handleUpdate(e, place.id)} className="btn btn-warning">Update</button></td>
              <td><button onClick={(e) => handleDelete(e, place.id)} className="btn btn-danger">Delete</button></td>
            </tr>)
          })}
        </tbody>
      </table>
    </div>
  )
}

export default PlacesList
