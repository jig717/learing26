import React from 'react'
import { CardComponent } from './CardComponent';

export const SubEmployeeList = (props) => {
    var discription = "This is Employees APP"; // string 
    console.log("subemplist",props);
  return (
    <div>
        <h1>SubEmployeeList </h1>
        <CardComponent title={props.title} description={discription}></CardComponent>
    </div>
  )
}
