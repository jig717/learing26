import React from 'react'

export const MapDemo1 = () => {
  var contry =[{ name:"India"},
    { name:"USA"},
    { name:"UK"},
    { name:"UAE"},
    { name:"Canada"},
    {name:"Australia"},
    { name:"Germany"},
    { name:"France"}]
  return (
    <div>
      <h2 style={{textAlign:'center'}}>Map Demo 1 - List of Countries</h2>
     {contry.map((item)=>{
        return <h1>{item.name}</h1>
     })}
    </div>
  )
}
