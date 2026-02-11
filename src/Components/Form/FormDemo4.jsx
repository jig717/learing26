import React from 'react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

export const FormDemo4 = () => {
    const {register,handleSubmit} = useForm()
    const [userData, setuserData] = useState({})
    const [Submit ,setSubmit] = useState(false)
    const handel=(data)=>{
        console.log(data)
        setuserData(data)
        setSubmit(true)
    }
  return (
    <div>
        <h1>Anime</h1>
        <form onSubmit={handleSubmit(handel)}>
            <div>
                <label >Anime-Name:</label>
                <input type="text" {...register("Anime_Name")}/>
                <br></br>
            </div>
            <div>
              <label>Anime_category</label>
             <select {...register("Anime_Category")}>
            <option value="Iesakai">Iesakai Anime</option>
            <option value="Romantic Anime">Romantic Anime</option>
            <option value="Fantasy Anime">Fantasy Anime</option>
            <option value="Adventure Anime">Adventure Anime</option>
        </select>
            </div>
            <div>
                <label htmlFor="name">Anime_Release_Year:</label>       
                <input type="number" {...register("Anime_Release_Year")}/>
                <br></br>
            </div>
            <div>
                <input type="submit" />
            </div>
        </form>
        {
            Submit == true && <div>
                <h1>OUTPUT</h1>
                <h1>Anime-Name = {userData.Anime_Name}</h1>
                <h2>Anime-category = {userData.Anime_Category}</h2>
                <h2>Anime-Release-Year = {userData.Anime_Release_Year}</h2>
            </div>
        }
    </div>
  )  
}
