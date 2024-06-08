import React from 'react'
import NavBar from './NavBar'

const DeleteTodo = () => {
  return (
    <div> 
        <NavBar/>
         <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-xl-12 col-xxl-12">
                    <label htmlFor="" className="form-label">name</label>
                    <input type="text" className="form-control" />
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-xl-12 col-xxl-12">
                    <button className="btn btn-success">delete</button>
                </div>
            </div>
         </div>
    </div>
  )
}

export default DeleteTodo