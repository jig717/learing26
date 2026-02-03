import React from 'react'

export const Headercomponents = () => {
  return (
    <div style={{
      background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)",
      color: "white", 
      padding: "30px 20px", 
      textAlign: "center", 
      width: "100%",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.3)"
    }}>
        <h1 style={{ 
          margin: "0", 
          fontSize: "42px", 
          fontWeight: "bold",
          letterSpacing: "2px",
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)"
        }}>
          Lionel Andrés Messi
        </h1>
        <p style={{
          margin: "10px 0 0 0",
          fontSize: "16px",
          color: "#b0b0b0",
          fontStyle: "italic"
        }}>
          Professional Footballer | Football Legend
        </p>
    </div>
  )
}
