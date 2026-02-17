import React from 'react'
import { useState } from 'react'
import axios from 'axios'

export const ApiDemo1 = () => {
    const [getdata, setgetdata] = useState()
    const getData = async () => {
            const response = await axios.get("https://jsonplaceholder.typicode.com/users")
            console.log("data is coming from api",response.data)
            setgetdata(response.data)

    }
  return (
    <div style={{textAlign:'center'}}>
        <h1>API Demo 1</h1>
        <button onClick={getData}>Get Data</button>
        <div>
            <table className='table'>
                <thead> 
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>City</th>
                        <th>Street</th>
                    </tr>
                </thead>
                <tbody>                    
            {getdata &&getdata?.map((item) => (
                <tr key={item.id}>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.address?.city}</td>
                    <td>{item.address?.street}</td>
                </tr>
            ))}
            </tbody>
            </table>
        </div>
    </div>
  )
}
