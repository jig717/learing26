import React from 'react'
import { useForm } from 'react-hook-form'

export const FormValidation2 = () => {
    const{register,handleSubmit,formState:{errors}}=useForm()
    console.log("errors...",errors)

  const submitHandler = (data)=>{
    console.log(data)
  }
    const sakib = {
      hub:{
        required:{
          value:true,
          message:"Name is required"
        },
        min:{
          value:10,
          message:"min age should be 10"
        },
        max:{
          value:60,
          message:"max age should be 60"
        }
      },
      addressValidator:{
        required:{
          value:true,
          message:"address is required*"
        },
        minLength:{
          value:5,
          message:"min 5 char is required"
        },
        maxLength:{
          value:20,
          message:"max 20 char is accepted"
        },
    },
    ageValidator:{
      required:{
        value:true,
        message:"Age is Required*"
      },
      min:{
        value:18,
        message:"min age should be 18*"
      },
      max:{
        value:60,
        message:"max age should be 60*"
      }
    }
  }

  return (
    <div style={{textAlign:'center'}}>

      <form onSubmit={handleSubmit(submitHandler)}>
        <div>
          <label>Name:</label>
          <input type='text' {...register("name",sakib.hub)}></input>
          {errors.name?.message}
        </div>
        <div>
          <label>Address:</label>
          <input type='text' {...register("address",sakib.addressValidator)}></input>
          {errors.address?.message}
        </div>
        <div>
          <label>Age:</label>
          <input type='number' {...register("age",sakib.ageValidator)}></input>
          {errors.age?.message}
        </div>
         <div>
          <label>Phone:</label>
          <input type='text' {...register("phone",{required:{value:true,message:"phone is required*"},
          minLength:{value:10,message:"min 10 digit required*"},
          maxLength:{value:10,message:"max 10 digit required*"}})}></input>
          {errors.phone?.message}
         </div>
         <div>x
          <label>Fav_Anime</label>
          <input type="text" {...register("fav_anime" , {required:{value:true,message:"fav_anime is required*"}})}></input>
          {errors.fav_anime?.message}
         </div>
         <div>
          <label>Release_Year:</label>
          <input type="number" {...register("release_year" , {required:{value:true,message:"release_year is required*"}})}></input>
          {errors.release_year?.message}
         </div>
         <div>
          <label>Rating:</label>
          <input type="number" {...register("rating" , {required:{value:true,message:"rating is required*"},
          min:{value:1,message:"min rating sh ould be 1"},
          max:{value:10,message:"max rating should be 10"} })}></input>
          {errors.rating?.message}
         </div>
         <div>
          <label>Language:</label>
          <input type="text" {...register("language" , {required:{value:true,message:"language is required*"},
          minLength:{value:5,message:"min 5 char required*"},
          maxLength:{value:20,message:"max 20 char required"}})}></input>
          {errors.language?.message}
         </div>
        <div>
          <input type='submit'></input>
        </div>
      </form>
    </div>
  )
}
