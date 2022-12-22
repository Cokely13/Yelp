import React from 'react'
import { useContext } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import PlacesFinder from '../Apis/PlacesFinder'
import StarRating from '../components/StarRating'
import { PlacesContext } from '../context/PlacesContext'

function PlacesPage(props) {

  const {id} =useParams()
  const {selectedPlace, setSelectedPlace} = useContext(PlacesContext)


  useEffect(() => {
    const fetchData = async () => {
      try{
      const response = await PlacesFinder.get(`/${id}`)
      setSelectedPlace(response.data.data.restaurants)
    } catch (err){
      console.log(err)
    }
    }
    fetchData()
  }, [])


  return (
    <div>
    <div>{selectedPlace && selectedPlace.name}</div>
    <StarRating rating={3.1}/>
    </div>
  )
}

export default PlacesPage
