import axios from 'axios'
import React from 'react'   
import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'

export const MovieDetail = () => {
    const { imdbId } = useParams()
    const [movie, setMovie] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const [showDetail, setShowDetail] = useState(false)

    const getMovieDetail = async () => {
        try {
            setLoading(true)
            const response = await axios.get(`https://www.omdbapi.com/?i=${imdbId}&apikey=2ba4f9e3`)
            console.log("Movie detail data:", response.data)
            if(response.data.Response === "True") {
                setMovie(response.data)
            } else {
                setError("Movie not found")
            }
        } catch (err) {
            setError("Error fetching movie details")
            console.error(err)
        } finally {
            setLoading(false)
        }
    }

    const handleShowDetail = () => {
        setShowDetail(true)
        getMovieDetail()
    }

    if(loading) {
        return (
            <div style={{textAlign:'center', padding:'50px'}}>
                <h2>Loading...</h2>
            </div>
        )
    }

  return (
    <div style={{padding:'20px', maxWidth:'800px', margin:'0 auto'}}>
        <Link to="/ApiDemo4" style={{display:'inline-block', marginBottom:'20px', padding:'10px 20px', backgroundColor:'#007bff', color:'white', textDecoration:'none', borderRadius:'5px'}}>
            Back to Movies
        </Link>

        
        {!showDetail && (
            <div style={{textAlign:'center', marginTop:'20px'}}>
                <button 
                    onClick={handleShowDetail}
                    style={{
                        padding:'12px 30px', 
                        fontSize:'18px', 
                        cursor:'pointer',
                        backgroundColor:'#28a745',
                        color:'white',
                        border:'none',
                        borderRadius:'5px',
                        boxShadow:'0 4px 6px rgba(0,0,0,0.1)'
                    }}
                >
                    Get Details
                </button>
            </div>
        )}

        {error && (
            <div style={{textAlign:'center', padding:'50px'}}>
                <h2 style={{color:'red'}}>{error}</h2>
            </div>
        )}

        {showDetail && movie && (
            <div style={{
                border:'1px solid #ddd',
                borderRadius:'10px',
                padding:'20px',
                boxShadow:'0 10px 30px rgba(0,0,0,0.2), 0 6px 10px rgba(0,0,0,0.1)',
                backgroundColor:'white'
            }}>
                <div style={{display:'flex', flexWrap:'wrap', gap:'20px'}}>
                    <div style={{flex:'1', minWidth:'250px'}}>
                        <img 
                            src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/300x450"} 
                            alt={movie.Title}
                            style={{width:'100%', borderRadius:'10px'}}
                        />
                    </div>
                    <div style={{flex:'2', minWidth:'250px'}}>
                        <h1 style={{marginBottom:'10px'}}>{movie.Title}</h1>
                        <p><strong>Year:</strong> {movie.Year}</p>
                        <p><strong>Rated:</strong> {movie.Rated}</p>
                        <p><strong>Released:</strong> {movie.Released}</p>
                        <p><strong>Runtime:</strong> {movie.Runtime}</p>
                        <p><strong>Genre:</strong> {movie.Genre}</p>
                        <p><strong>Director:</strong> {movie.Director}</p>
                        <p><strong>Writer:</strong> {movie.Writer}</p>
                        <p><strong>Actors:</strong> {movie.Actors}</p>
                        <p><strong>Language:</strong> {movie.Language}</p>
                        <p><strong>Country:</strong> {movie.Country}</p>
                        <p><strong>Awards:</strong> {movie.Awards}</p>
                        <p><strong>IMDB Rating:</strong> {movie.imdbRating}</p>
                        <p><strong>IMDB Votes:</strong> {movie.imdbVotes}</p>
                    

                    </div>
                </div>

                <div style={{marginTop:'20px'}}>
                    <h3>Plot</h3>
                    <p style={{lineHeight:'1.6'}}>{movie.Plot}</p>
                </div>
            </div>
        )}
    </div>
  )
}
