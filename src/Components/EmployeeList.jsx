import React from 'react'
import { SubEmployeeList } from './SubEmployeeList';

export const EmployeeList = (props) => {
    console.log("emplist",props);
  return (
    <div>
      <h1>EmployeeList </h1>
      {props.title}
      <h1>{props.company.name}</h1>
      <h1>{props.company.location}</h1>
      <table className='table'>
        <thead>
            <tr>
                <td>ID</td>
                <td>Name</td>
                <td>Age</td>
            </tr>
        </thead>
        <tbody>
            {
                props.employees?.map((em)=>{
                    return <tr>
                        <th>{em.id}</th>
                        <th>{em.name}</th>
                        <th>{em.age}</th>
                    </tr>
                })
            }            

        </tbody>
      </table>
            <SubEmployeeList title={props.title}></SubEmployeeList>
    </div>  
  )
}
