import React from 'react'

export const MapDemo4 = () => {
    var citys = [
        { name: "New York", country: "USA" },
        { name: "London", country: "UK" },
        { name: "Tokyo", country: "Japan" },
        { name: "Sydney", country: "Australia" }
    ];
  return (
    <div>
      <h2 style={{textAlign:'center'}}>Map Demo 4 - List of Cities with Country</h2>
        {citys.map((ct) => (
        <h3>{ct.name} - {ct.country}</h3>
      ))}
    

    </div>
  )
}
