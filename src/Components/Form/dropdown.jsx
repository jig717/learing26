import React, { useState } from 'react'
import { useForm } from 'react-hook-form'


const countries = [
  { code: 'US', name: 'United States', states: ['California', 'Texas', 'Florida', 'New York'] },
  { code: 'IN', name: 'India', states: ['Karnataka', 'Maharashtra', 'Tamil Nadu', 'Delhi'] },
  { code: 'CA', name: 'Canada', states: ['Ontario', 'Quebec', 'British Columbia'] },
  { code: 'AU', name: 'Australia', states: ['New South Wales', 'Victoria', 'Queensland'] },
]

export const Dropdown = () => {
  const { register, handleSubmit, setValue } = useForm()
  const [selectedCountry, setSelectedCountry] = useState('')

  const handleCountryChange = (e) => {
    const code = e.target.value
    setSelectedCountry(code)
    setValue('state', '')
  }

  const availableStates = countries.find(c => c.code === selectedCountry)?.states || []

  const onSubmit = (data) => {
    console.log('Form submit:', data)
    alert(`Selected: ${data.country || '-'} / ${data.state || '-'}`)
  }

  return (
    <div>
      <h1>Dependent Dropdowns</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div style={{ marginBottom: 8 }}>
          <label style={{ display: 'block' }}>Country:</label>
          <select {...register('country')} value={selectedCountry} onChange={handleCountryChange}>
            <option value="">-- select country --</option>
            {countries.map(c => (
              <option key={c.code} value={c.code}>{c.name}</option>
            ))}
          </select>
        </div>

        <div style={{ marginBottom: 8 }}>
          <label style={{ display: 'block' }}>State / Province:</label>
          <select {...register('state')} disabled={!selectedCountry}>
            <option value="">-- select state --</option>
            {availableStates.map(s => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </div>
        <div>
             <input type="submit" />
            </div>
      </form>
       {
            onSubmit == true && <div>
                <h1>OUTPUT</h1>
                <h1>Country = {userData.country}</h1>
                <h2>State = {userData.state}</h2>
            </div>
        }

    </div>
  )
}
