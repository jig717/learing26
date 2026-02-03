import React from 'react'

export const MapDemo5 = () => {
      var students =[
        {id:1,name:"amit",age:23,marks:78,city:"ahmedabad",gender:"male"},
        {id:2,name:"prathna",age:25,marks:81,city:"ahmedabad",gender:"female"},
        {id:3,name:"rekha",age:22,marks:72,city:"ahmedabad",gender:"female"},
    ]
  return (
    <div>
        <h2 style={{textAlign:'center'}}>Map Demo 5 - Student Details in Table</h2>
        <table border={1}>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Marks</th>
                    <th>City</th>
                    <th>Gender</th>
                </tr>
            </thead>
            <tbody>
                {students.map((stu)=>{
                    return(
                    <tr style={{background:stu.gender == 'female' && 'pink'}}>
                        <td>{stu.id}</td>
                        <td>{stu.name}</td>
                        <td style={{color:stu.age>24 ?'yellow':'black'}}>{stu.age}</td>
                        <td>{stu.marks}</td>
                        <td>{stu.city}</td>
                        <td>{stu.gender}</td>
                    </tr>)
                })}
            </tbody>
            </table>
    </div>
  )
}
