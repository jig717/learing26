import React from 'react'
import { EmployeeList } from './EmployeeList'
export const Employees = () => {
    var title = "Employees APP"; // sting
    
    var company = {     // object 
            name:"Google",
        location:"USA"
    };

    var employees = [   // array
        {id:1,name:"John",age:30},
        {id:2,name:"Jane",age:25},
        {id:3,name:"Doe",age:35}
    ];
  return (
    <div style={{textAlign:'center'}}>
        <h1>Employees</h1>
        
        {/* {title}
        {company.location}
        {company.name} */}

        <EmployeeList title={title} company={company} employees={employees}     ></EmployeeList>

    </div>
  )
}
