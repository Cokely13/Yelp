import React from 'react'
import { useContext } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import PlacesFinder from '../Apis/PlacesFinder'
import AddReview from '../components/AddReview'
import Reviews from '../components/Reviews'

import { PlacesContext } from '../context/PlacesContext'

function PlacesPage(props) {

  const {id} =useParams()
  const {selectedPlace, setSelectedPlace} = useContext(PlacesContext)


  useEffect(() => {
    const fetchData = async () => {
      try{
      const response = await PlacesFinder.get(`/${id}`)
      setSelectedPlace(response.data.data)
    } catch (err){
      console.log(err)
    }
    }
    fetchData()
  }, [])


  return (
    <div>{selectedPlace && (
      <>
      <h1 className='text-center display-1'>{selectedPlace.restaurants.name}</h1>
      <div className="mt-3">
      <Reviews reviews={selectedPlace.reviews}/>
      <AddReview/>
      </div>
      </>
    )}
    </div>
  )
}

export default PlacesPage
