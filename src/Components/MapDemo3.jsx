import React from 'react'

export const MapDemo3 = () => {
    var subject = [
        {id: 1, name: "Mitul ", marks: 85, gender:"Male",age:20},
        {id: 2, name: "Rahul", marks: 90, gender:"Male",age:22},
        {id: 3, name: "Priya", marks: 88, gender:"Female",age:21}
    ]
  return (
    <div style={{ textAlign:'center' }}>
        <h2>Map Demo 3 - List of Students with Details</h2>
       <table border={1}>
        <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Marks</th>
                <th>Gender</th>
                <th>Age</th>
            </tr>
        </thead>
        <tbody>
            {subject.map((stu) => (
                <tr>
                    <td>{stu.id}</td>
                    <td>{stu.name}</td>
                    <td>{stu.marks}</td>
                    <td>{stu.gender}</td>
                    <td>{stu.age}</td>
                </tr>
            ))}
                    
        </tbody>
       </table>

    </div>

  )
}
