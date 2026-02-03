import React from 'react'

export const Footercomponents = () => {
  return (
    <div style={{
      background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)",
      color: "white", 
      padding: "30px 20px",
      textAlign: "center",
      marginTop: "40px",
      borderTop: "3px solid #1a73e8"
    }}>
      <h3 style={{ margin: "0 0 15px 0", fontSize: "24px", fontWeight: "bold" }}>Clubs Represented</h3>
      <div style={{
        display: "flex",
        justifyContent: "center",
        gap: "30px",
        flexWrap: "wrap",
        marginBottom: "20px"
      }}>
        <div style={{ fontSize: "14px" }}>
          <strong style={{ color: "#1a73e8" }}>FC Barcelona</strong>
          <p style={{ margin: "5px 0 0 0", color: "#b0b0b0", fontSize: "12px" }}>2004-2021</p>
        </div>
        <div style={{ fontSize: "14px" }}>
          <strong style={{ color: "#ffc107" }}>Paris Saint-Germain</strong>
          <p style={{ margin: "5px 0 0 0", color: "#b0b0b0", fontSize: "12px" }}>2021-2023</p>
        </div>
        <div style={{ fontSize: "14px" }}>
          <strong style={{ color: "#ff5722" }}>Inter Miami CF</strong>
          <p style={{ margin: "5px 0 0 0", color: "#b0b0b0", fontSize: "12px" }}>2023-Present</p>
        </div>
      </div>
      <p style={{ margin: "20px 0 0 0", color: "#b0b0b0", fontSize: "12px" }}>
        © 2026 Lionel Messi Portfolio. All Rights Reserved.
      </p>
    </div>
  )
}
