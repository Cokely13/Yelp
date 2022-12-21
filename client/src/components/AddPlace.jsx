import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"

function AddPlace() {
  return (
    <div className="mb-4 col">
      <form action="">
        <div className="form-row">
          <div className="col">
            <input type="text" className='form-control' placeholder='Name'/>
          </div>
          <div className="col">
            <input type="text" className='form-control' placeholder='Location' />
          </div>
          <div className="col">
          <select className="custom-select my-1 mr-sm-2">
            <option value="1">$</option>
            <option value="2">$$</option>
            <option value="3">$$$</option>
            <option value="4">$$$$</option>
            <option value="5">$$$$$</option>
            </select>
          </div>
        </div>
        <button className='btn btn primary'>Add</button>
      </form>
    </div>
  )
}

export default AddPlace
