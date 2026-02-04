import React from 'react'
import { Link } from 'react-router-dom'
export const NetflixMovies = () => {
  var movies = [{id:1, name:'Inception'},
     {id:2, name:'The Dark Knight'},
      {id:3, name:'Interstellar'},
       {id:4, name:'Parasite'}, 
       {id:5, name:'The Matrix'}
      ];
  return (
    <div style={{textAlign:'center'}}>
        <h1>Welcome to Netflix Movies Page</h1>
        {
          movies.map((movie)=>{
            return <li>
              <Link to={`/watch/${movie.name}`}>{movie.name}</Link>
            </li>
          })
          }
    </div>  
  ) 
}
