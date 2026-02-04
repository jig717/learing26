import React from 'react'
import { Link } from 'react-router-dom'
export const Teams = () => {
    var team = [
         {id:1, name:'CSK'},
         {id:2, name:'MI'},
         {id:3, name:'RCB'},
         {id:4, name:'KK'},
         {id:5, name:'Menchester United'},
         {id:6, name:'FC Barcelona '},
         {id:7, name:'Real Madrid'},
         {id:8, name:'PSG'},
         {id:9, name:'Liverpool'},
         {id:10, name:'Manchester City'},
         {id:11, name:'Bayern Munich'},
];
  return (
   <div style={{textAlign:'center'}}>
         <h1 style={{textAlign:'center'}}>Ipl teams </h1>
            <ul>
                {
                    team.map((te)=>{
                        return <li>
                        <Link to={`/watch/${te.name}`}>{te.name}</Link>
                        </li>
                    })
                }
            </ul>

    </div>
  )
}
