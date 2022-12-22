import React from 'react'
import { useContext } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import PlacesFinder from '../Apis/PlacesFinder'
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
    <div>{selectedPlace && selectedPlace.name}</div>
  )
}

export default PlacesPage
