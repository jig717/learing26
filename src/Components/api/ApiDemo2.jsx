import React, { useState } from 'react'
import axios from 'axios'

export const ApiDemo2 = () => {
    const [getdata, setgetdata] = useState()
    const getData = async () => {
        const response = await axios.get("https://dummyjson.com/products")
        console.log("data is coming from api", response.data)
        setgetdata(response.data)
    }

        return (
        <div>
            <h1>API Demo 2</h1>
            <button onClick={getData}>Get Data</button>
            <div>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Price</th>
                            <th>Brand</th>
                            <th>Category</th>
                            <th>discountPercentage</th>
                            <th>availabilityStatus</th>
                        </tr>
                    </thead>
                    <tbody>
                        {getdata && getdata?.products?.map((item) => (
                            <tr key={item.id}>
                                <td>{item.title}</td>
                                <td>{item.price}</td>
                                <td>{item.brand}</td>
                                <td>{item.category}</td>
                                <td>{item.discountPercentage}</td>
                                <td>{item.availabilityStatus}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default ApiDemo2
