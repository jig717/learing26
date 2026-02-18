import React from 'react'
import {useState} from 'react'
import axios from 'axios'

export const ApiDemo3 = () => {
    const [getdata, setgetdata] = useState()    
        const getData = async () => {
            const response = await axios.get("https://dummyjson.com/users")
            console.log("data is coming from api",response.data)
            setgetdata(response.data)
        }
  return (
    <div>
        <h1>API Demo 3</h1>
        <button onClick={getData}>Get Data</button>
        <div>
            <table className='table'> 
                <thead>
                    <tr>
                        <th>id</th>
                        <th>firstName</th>
                        <th>lastName</th>
                        <th>maidenName</th>
                        <th>gender</th>
                        <th>email</th>
                        <th>phone</th>
                        <th>username</th>
                        <th>password</th>
            
                    </tr>
                 </thead>
                <tbody>
                    {getdata && getdata?.users?.map((item) => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.firstName}</td>
                            <td>{item.lastName}</td>
                            <td>{item.maidenName}</td>
                            <td>{item.gender}</td>
                            <td>{item.email}</td>
                            <td>{item.address?.city}</td>
                            <td>{item.address?.street}</td>
                            <td>{item.username}</td>
                            <td>{item.password}</td>
                
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
  )
}
