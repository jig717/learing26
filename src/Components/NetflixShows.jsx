import React from 'react'
import { Link } from 'react-router-dom'

export const NetflixShows = () => {
  return (
    <div>
        <h1 style={{textAlign:'center'}}>
        Welcome to Netflix Shows Page</h1>
        <ul>
          <li>
            <Link to="/watch/Stranger Things">Stranger Things</Link>
          </li>
          <li>
            <Link to="/watch/The Crown">The Crown</Link>
          </li>
          <li>
            <Link to="/watch/Black Mirror">Black Mirror</Link>
          </li>
          <li>
            <Link to="/watch/Narcos">Narcos</Link>
          </li>
          <li>
            <Link to="/watch/Ozark">Ozark</Link>
          </li>
        </ul>
    </div>
  )
}
