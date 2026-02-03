import React from 'react'

export const MapDemo6 = () => {
    var deo6 = [
        { name: "jagadi", value: 10, age: 25 , city: "ahmedabad"},
        { name: "prathna", value: 20, age: 24 , city: "surat"},
        { name: "rekha", value: 30, age: 23 , city: "vadodara"},
        { name: "amit", value: 40, age: 26 , city: "rajkot"},
        { name: "soni", value: 50, age: 22 , city: "bhavnagar"},
        { name: "dharmesh", value: 60, age: 27 , city: "junagadh"},
        { name: "mehul", value: 70, age: 28 , city: "gandhinagar"},
    ];
  return (
    <div>
        <h2 style={{textAlign:'center'}}> Map Demo 6 - List of Examples with Values</h2>
        <table border={1}>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Value</th>
                    <th>Age</th>
                    <th>City</th>
                </tr>
            </thead>

            <tbody>
                {
                deo6.map((item) => (
                    <tr>
                        <td style={{background:item.name =='soni' && 'yellow'}} >{item.name}</td>
                        <td style={{background:item.value>23 ? 'grey':'white'}}>{item.value}</td>
                        <td style={{color:item.age>25 ?'blue':'black'}}>{item.age}</td>
                        <td style={{background:item.city == 'vadodara' ? 'pink':'white'}}>{item.city}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}
