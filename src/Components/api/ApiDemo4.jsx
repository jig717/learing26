import axios from 'axios'
import React from 'react'   
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const ApiDemo4 = () => {
    const [movies, setMovies] = useState([])
    const [showData, setShowData] = useState(false)
    const navigate = useNavigate()
    const [Search, setSearch] = useState('')

    const getData = async () => {   
        const response = await axios.get(`https://www.omdbapi.com/?s=${Search}&apikey=2ba4f9e3`) 
        console.log("data is coming from api",response.data)
        if(response.data.Response === "True") {
            setMovies(response.data.Search)
        }
    }
    const handleShowData = () => {
        setShowData(true)
        getData()
    }

    const handleDetail = (imdbId) => {
        navigate(`/movie/${imdbId}`)
    }

  return (
    <div style={{padding:'20px'}}>
        <h1 style={{textAlign:'center'}}>Movie Gallery</h1>
        
        {/* Button to show data */}
        <div style={{textAlign:'center', marginBottom:'20px'}}>
            <input type="text" 
                value={Search}
                onChange={(e) => setSearch(e.target.value)}></input>
            <button 
                onClick={handleShowData}
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
                Show Movies
            </button>

        </div>

        {/* Movie Grid */}
        {showData && (
            <div style={{
                display:'grid',
                gridTemplateColumns:'repeat(auto-fill, minmax(200px, 1fr))',
                gap:'20px',
                padding:'20px'
            }}>
                {movies?.map((item) => (
                    <div key={item.imdbID} style={{
                        border:'1px solid #ddd',
                        borderRadius:'8px',
                        padding:'15px',
                        textAlign:'center',
                        boxShadow:'0 4px 8px rgba(0,0,0,0.15), 0 6px 20px rgba(0,0,0,0.1)',
                        transition:'transform 0.3s ease, box-shadow 0.3s ease',
                        backgroundColor:'white'
                    }}>
                        <img 
                            src={item.Poster !== "N/A" ? item.Poster : "https://via.placeholder.com/200x300"} 
                            alt={item.Title}
                            style={{width:'100%', height:'300px', objectFit:'cover', borderRadius:'5px'}}
                        />
                        <h3 style={{fontSize:'16px', margin:'10px 0'}}>{item.Title}</h3>
                        <p style={{color:'#666'}}>{item.Year}</p>
                        <button 
                            onClick={() => handleDetail(item.imdbID)}
                            style={{
                                padding:'8px 16px',
                                backgroundColor:'#007bff',
                                color:'white',
                                border:'none',
                                borderRadius:'5px',
                                cursor:'pointer',
                                marginTop:'10px'
                            }}
                        >
                            Detail
                        </button>
                    </div>
                ))}
            </div>
        )}

        {!showData && (
            <p style={{textAlign:'center', color:'#666'}}>Click the button above to show movies</p>
        )}

        {showData && movies.length === 0 && (
            <p style={{textAlign:'center'}}>No movies found.</p>
        )}
    </div>
  )
}
