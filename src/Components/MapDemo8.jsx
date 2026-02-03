import React from 'react'

export const MapDemo8 = () => {
     var demo8 = [
        { id: 1, product: "Laptop", price: 800, stock: 15 },
        { id: 2, product: "Smartphone", price: 600, stock: 30 },
        { id: 3, product: "Tablet", price: 300, stock: 20 },
        { id: 4, product: "Monitor", price: 200, stock: 10 },
        { id: 5, product: "Keyboard", price: 50, stock: 50 },
    ];
  return (
    <div>
        <h2 style={{textAlign:'center'}}>Map Demo 8 - Product List with Price and Stock</h2>
        <table border={1} style={{textAlign:'center'}}>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Stock</th>
                </tr>
            </thead>     
            <tbody> 
                {
                demo8.map((item) => (
                    <tr style={{background:item.stock < 20 ? '#b5c711' : '#d8e2d8c0'}}>
                        <td style={{background:item.id == 2 ? '#547792' : '#A8DF8E'}} >{item.id}</td>  
                        <td style={{background:item.product == 'Tablet' ? '#b7cae2' : '#F5FBE6'}} >{item.product}</td>
                        <td style={{background:item.price > 500 ? '#E5D9B6' : '#F0FFDF'}} >{item.price}</td>
                        <td style={{background:item.stock > 20 ? '#F8FBA2' : '#0C7779'}} >{item.stock}</td>
                    </tr>
                ))}
            </tbody>
            </table>

    </div>
  )
}
