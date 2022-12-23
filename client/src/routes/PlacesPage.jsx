import React from 'react'
import { useContext } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import PlacesFinder from '../Apis/PlacesFinder'
import AddReview from '../components/AddReview'
import Reviews from '../components/Reviews'
import StarRating from '../components/StarRating'

import { PlacesContext } from '../context/PlacesContext'

function PlacesPage(props) {



  const {id} =useParams()
  const {selectedPlace, setSelectedPlace} = useContext(PlacesContext)

  console.log(selectedPlace)

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
      <div className='text-center'>
        <StarRating rating={selectedPlace.restaurants.average_rating}/>
        <span className='text-warning m1-1'>{selectedPlace.restaurants.count ? `(${selectedPlace.restaurants.count})` : "(0)"}</span>
      </div>
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
