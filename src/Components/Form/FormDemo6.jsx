import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

export const FormDemo6 = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm({ mode: "all" })
    
    const password = watch("password", "")
    

    const hasCapital = /[A-Z]/.test(password)
    const hasSmall = /[a-z]/.test(password)
    const hasDigit = /[0-9]/.test(password)
    const hasSpecial = /[!@#$%^&*(),.?":{}|<>]/.test(password)
    const hasMinLength = password.length >= 8

    const submitHandler = (data) => {
        console.log(data)
    }

    const validationSchema = {
        passwordValidator: {
            required: {
                value: true,
                message: "Password is required"
            },
            minLength: {
                value: 8,
                message: "Minimum 8 characters required"
            }
        }
    }
    const getValidationStyle = (isValid) => ({
        color: password == "" ? "black" : isValid ? "green" : "red",
    })

    return (
        <div style={{ textAlign: "center", padding: "20px" }}>
            <h1>Password Validation Form</h1>
            <form onSubmit={handleSubmit(submitHandler)}>
                <div>
                    <label>PASSWORD:</label>
                    <input 
                        type="password" 
                        {...register("password", validationSchema.passwordValidator)}
                        placeholder="Enter password"
                        style={{ marginLeft: "10px", padding: "5px", fontSize: "16px" }}
                    ></input>
                    {errors.password && <span style={{ color: "red", display  : "block" }}>{errors.password.message}</span>}
                </div>
                
                <div style={{ marginTop: "20px", textAlign: "left", display: "inline-block" }}>
                    <p style={getValidationStyle(hasCapital)}>
                        {hasCapital ? "✓" : "○"} At least 1 capital letter (A-Z)
                    </p>
                    <p style={getValidationStyle(hasSmall)}>
                       {hasSmall ? "✓" : "○"} At least 1 small letter (a-z)
                    </p>
                    <p style={getValidationStyle(hasDigit)}>
                        {hasDigit ? "✓" : "○"} At least 1 digit (0-9)
                    </p>
                    <p style={getValidationStyle(hasSpecial)}>
                        {hasSpecial ? "✓" : "○"} At least 1 special character (!@#$%^&*...)
                    </p>
                    <p style={getValidationStyle(hasMinLength)}>
                        {hasMinLength ? "✓" : "○"} Minimum 8 characters
                    </p>
                </div>
                
                <div style={{ marginTop: "20px" }}>
                    <input type="submit" value="Submit" style={{ padding: "10px 20px", fontSize: "16px" }}></input>
                </div>
            </form>
        </div>
    )
}
