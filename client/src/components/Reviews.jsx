import React from 'react'
import StarRating from './StarRating'

function Reviews({reviews}) {
  return (
    <div className='row row-cols-3 mb-2'>
        {reviews.map((review) => {
          return (
          <div key={review.id} className="card tex white bg-primary mb-3 mr-4" style={({maxWidth: "30%"})}>
          <div className="card-header d-flex justify-content-between">
            <span>{review.name}</span>
            <span><StarRating rating ={review.rating}/></span>
          </div>
          <div className="card-body">
            <p className='card-text'>{review.review}</p>
          </div>
        </div>
          )
        })}

      {/* <div className="card tex white bg-primary mb-3 mr-4" style={({maxWidth: "30%"})}>
        <div className="card-header d-flex justify-content-between">
          <span>Jake</span>
          <span><StarRating rating ={3}/></span>
        </div>
        <div className="card-body">
          <p className='card-text'>This place rules</p>
        </div>
      </div>
      <div className="card tex white bg-primary mb-3 mr-4" style={({maxWidth: "30%"})}>
        <div className="card-header d-flex justify-content-between">
          <span>Jake</span>
          <span><StarRating rating ={3}/></span>
        </div>
        <div className="card-body">
          <p className='card-text'>This place rules</p>
        </div>
      </div>
      <div className="card tex white bg-primary mb-3 mr-4" style={({maxWidth: "30%"})}>
        <div className="card-header d-flex justify-content-between">
          <span>Jake</span>
          <span><StarRating rating ={3}/></span>
        </div>
        <div className="card-body">
          <p className='card-text'>This place rules</p>
        </div>
      </div>
      <div className="card tex white bg-primary mb-3 mr-4" style={({maxWidth: "30%"})}>
        <div className="card-header d-flex justify-content-between">
          <span>Jake</span>
          <span><StarRating rating ={3}/></span>
        </div>
        <div className="card-body">
          <p className='card-text'>This place rules</p>
        </div>
      </div> */}
    </div>
  )
}

export default Reviews
