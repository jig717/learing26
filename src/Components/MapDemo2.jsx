import React from 'react'

export const MapDemo2 = () => {
    var  studentr = [ 
        { name: "Alice", age: 20 }, { name: "Bob", age: 22 }, { name: "Charlie", age: 23 }, { name: "David", age: 21 } 
    ];
  return (
    <div>
      <h2 style={{textAlign:'center'}}>Map Demo 2 - List of Students</h2>
      {studentr.map((st) => (
        <h1>{st.name} - {st.age} years old</h1>
      ))}
    </div>
  )
}
