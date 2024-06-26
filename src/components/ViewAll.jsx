import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'
import axios from 'axios'

const ViewAll = () => {
    const [data,changeData] = useState([])
    const fetchData=() => {
        axios("https://jsonplaceholder.typicode.com/todos").then(
            (response)=>{
                changeData(response.data)
            }
        ).catch()

    }
    useEffect(
        ()=>{
fetchData()
    },[]
)



    return (
        <div>
            <NavBar />
            <div className='container'>
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">


                        <table className="table">

                            <thead>
                                <tr>
                                    <th scope="col">user id</th>
                                    <th scope="col">id</th>
                                    <th scope="col">title</th>
                                   
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    data.map(
                                        (value, index) => {
                                            return <tr>
                                                <td scope="row">{value.userId}</td>
                                                <td>{value.id}</td>
                                                <td>{value.title}</td>
                                            </tr>

                                        })}


                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
                    
                    );
}

export default ViewAll