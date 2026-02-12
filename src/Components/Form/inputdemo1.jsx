import React, { useState } from 'react'

// Self-contained demo: dependent country -> state dropdowns, submit via onClick or form submit,
// and output section showing submitted data with a `submitted` flag.

const countries = [
  { code: 'US', name: 'United States', states: ['California', 'Texas', 'Florida', 'New York'] },
  { code: 'IN', name: 'India', states: ['Karnataka', 'Maharashtra', 'Tamil Nadu', 'Delhi'] },
  { code: 'CA', name: 'Canada', states: ['Ontario', 'Quebec', 'British Columbia'] },
  { code: 'AU', name: 'Australia', states: ['New South Wales', 'Victoria', 'Queensland'] },
]

export const inputdemo1 = () => {
  const [country, setCountry] = useState('')
  const [stateVal, setStateVal] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [submittedData, setSubmittedData] = useState(null)

  const availableStates = countries.find(c => c.code === country)?.states || []

  const handleCountryChange = (e) => {
    setCountry(e.target.value)
    setStateVal('')
    setSubmitted(false)
  }

  const handleStateChange = (e) => {
    setStateVal(e.target.value)
    setSubmitted(false)
  }

  const doSubmit = (payload) => {
    // attach the .submitted flag per hint
    const out = { ...payload, submitted: true }
    setSubmittedData(out)
    setSubmitted(true)
    console.log('Submitted payload:', out)
  }

  const handleFormSubmit = (e) => {
    e.preventDefault()
    doSubmit({ country, state: stateVal })
  }

  const handleManualSubmit = () => {
    doSubmit({ country, state: stateVal })
  }

  return (
    <div>
      <h1>Input Demo 1 — Dependent Dropdown</h1>

      {/* The form is generated here so form submit still works */}
      <form onSubmit={handleFormSubmit}>
        <div style={{ marginBottom: 8 }}>
          <label style={{ display: 'block' }}>Country</label>
          <select value={country} onChange={handleCountryChange}>
            <option value="">-- select country --</option>
            {countries.map(c => (
              <option key={c.code} value={c.code}>{c.name}</option>
            ))}
          </select>
        </div>

        <div style={{ marginBottom: 8 }}>
          <label style={{ display: 'block' }}>State / Province</label>
          <select value={stateVal} onChange={handleStateChange} disabled={!country}>
            <option value="">-- select state --</option>
            {availableStates.map(s => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </div>

        <div>
          <button type="button" onClick={handleManualSubmit}>Submit (onClick)</button>
          <button type="submit" style={{ marginLeft: 8 }}>Submit (form)</button>
        </div>
      </form>

      {/* Output section: shown only after a submit */}
      {submitted && (
        <div style={{ marginTop: 12, padding: 8, border: '1px solid #ddd' }}>
          <h2>Output</h2>
          <div><strong>submitted:</strong> {String(submittedData?.submitted)}</div>
          <div><strong>Country:</strong> {submittedData?.country || '-'}</div>
          <div><strong>State:</strong> {submittedData?.state || '-'}</div>
        </div>
      )}
    </div>
  )
}

export default inputdemo1
