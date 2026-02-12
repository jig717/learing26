import React from 'react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
export const FormDemo2 = () => {
    const {register,handleSubmit} = useForm()
    const [userData, setuserData] = useState({})
    const [Submit ,setSubmit] = useState(false)

    const handel =(data)=>{
        console.log(data)
        setuserData(data)
        setSubmit(true)
    }
  return (
    <div style={{textAlign:"center"}}>
        <h1>FormDemo2</h1>
        <form onSubmit={handleSubmit(handel)}>
            <div>
                <label htmlFor="name">FirstName:</label>
                <input type="text" {...register("FirstName")}/><br></br>
            </div>
            <div>
                <label htmlFor="name">LastName:</label>
                <input type="text" {...register("LastName")}/><br></br>
            </div>
            <div>
                <label htmlFor="name">Email:</label>
                <input type="text" {...register("Email")}/><br></br>     
            </div>
            <div>
                <label htmlFor="name">Gender</label><br></br>
               Male: <input type="radio" value="male" name='gender' {...register("Gender")}/>
               Female:<input type="radio" value="female" name='gender'{...register("Gender")}/>
            </div>
            <div>
               <label>PhoneNo:</label>
              	<input type="number" {...register("PhoneNo")}/>  
            </div>
            <div>
                <input type="submit" />
            </div>
        </form>
        {
            Submit == true && <div>
                <h1>OUTPUT</h1>
                <h1>Name = {userData.FirstName} {userData.LastName}</h1>
                <h2>Email = {userData.Email}</h2> 
                <h2>Gender = {userData.Gender}</h2>
                <h2>PhoneNo = {userData.PhoneNo}</h2>

            </div>
        }


    </div>
  )
}
