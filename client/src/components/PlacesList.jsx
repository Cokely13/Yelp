import React from 'react'

function PlacesList() {
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
          <tr>
            <td>Mcdonalds</td>
            <td>NY</td>
            <td>$$$</td>
            <td>Rating</td>
            <td><button className="btn btn-warning">Update</button></td>
            <td><button className="btn btn-danger">Delete</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default PlacesList