import React, { useState } from 'react'
import NavBar from './NavBar'

const ViewAll = () => {
    const [data,changeData] = useState(
        [
            { "#": 1, "first": "mauuk", "last": "ottoooooo", "handle": "atttmdo" },
            { "#": 2, "first": "markkkk", "last": "ottoooo", "handle": "atmmmmdo" },
            { "#": 6, "first": "marrrrrk", "last": "otoooo", "handle": "atmdoooo" },
            { "#": 9, "first": "mmmmark", "last": "otto", "handle": "atmdo" },
        ]
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
                                    <th scope="col">#</th>
                                    <th scope="col">First</th>
                                    <th scope="col">Last</th>
                                    <th scope="col">Handle</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    data.map(
                                        (value, index) => {
                                            return <tr>
                                                <th scope="row">#</th>
                                                <td>{value.first}</td>
                                                <td>{value.last}</td>
                                                <td>{value.handle}</td>
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