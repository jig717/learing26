import React from 'react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
export const FormDemo3 = () => {
    const {register,handleSubmit} = useForm()
  const [userData, setuserData] = useState({})
  const [Submit ,setSubmit] = useState(false)
  const handel=(data)=>{
    console.log(data)
    setuserData(data)
    setSubmit(true)
  }
  return (
    <div style={{textAlign:'center'}}>
        <h1>JobApplication</h1>
    <form onSubmit={handleSubmit(handel)}>
    <div>
        <label htmlFor="Name">Name:</label>
        <input type="text" {...register("Name")}/>  
    </div>
    <div>
        <label htmlFor="Address">Address:</label>
        <input type="text" {...register("Address")}/>  
    </div>
    <div>
        <label htmlFor="Email">Email:</label>
        <input type="text" {...register("Email")}/>  
    </div>
    <div>
        <label htmlFor="PhoneNo">PhoneNo:</label>
        <input type="number" {...register("PhoneNo")}/>  
    </div>
    <div>
        <label htmlFor="Position">Position:</label>
        <select {...register("Position")}>
            <option value="Frontend Developer">Frontend Developer</option>
            <option value="Backend Developer">Backend Developer</option>
            <option value="FullStack Developer">FullStack Developer</option>
            <option value="DevOPs">DevOPs</option>
        </select>
    </div>
    <div>
        <label htmlFor="Gender">Gender:</label><br></br>
       Male: <input type="radio" value="male" name='gender' {...register("Gender")}/>
       Female:<input type="radio" value="female" name='gender' {...register("Gender")}/>  
    </div>
    <div>
        <input type="submit" />
    </div>
    </form>
    {
        Submit == true && <div>
            <h1>OUTPUT</h1>
            <h1>Name = {userData.Name}</h1>
            <h2>Address = {userData.Address}</h2>
            <h2>Email = {userData.Email}</h2>
            <h2>PhoneNo = {userData.PhoneNo}</h2>
            <h2>Position = {userData.Position}</h2>
           <h2>Gender = {userData.Gender}</h2>
        </div>
    }
    </div>
  )
}
