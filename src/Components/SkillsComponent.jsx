import React from 'react';

export const SkillsComponent = () => {
  const skills = [
    { category: "Football Skills", items: ["Dribbling", "Passing", "Ball Control", "Free Kicks", "Leadership"] },
    { category: "Physical Attributes", items: ["Speed", "Agility", "Endurance", "Balance", "Strength"] },
    { category: "Tactical", items: ["Positioning", "Game Reading", "Vision", "Decision Making", "Consistency"] }
  ];

  return (
    <div style={{
      padding: "40px 20px",
      backgroundColor: "#f5f5f5",
      margin: "20px"
    }}>
      <h2 style={{ textAlign: "center", fontSize: "32px", marginBottom: "40px", color: "#000" }}>Skills & Abilities</h2>
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        gap: "30px",
        maxWidth: "1000px",
        margin: "0 auto"
      }}>
        {skills.map((skillGroup, index) => (
          <div key={index} style={{
            backgroundColor: "white",
            padding: "20px",
            borderRadius: "10px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            transition: "transform 0.3s"
          }} onMouseEnter={(e) => e.currentTarget.style.transform = "translateY(-5px)"}
             onMouseLeave={(e) => e.currentTarget.style.transform = "translateY(0)"}
          >
            <h3 style={{ color: "#1a73e8", marginBottom: "15px", fontSize: "20px" }}>{skillGroup.category}</h3>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {skillGroup.items.map((item, i) => (
                <li key={i} style={{
                  padding: "8px 0",
                  paddingLeft: "20px",
                  color: "#333",
                  position: "relative",
                  fontSize: "14px"
                }}>
                  <span style={{
                    position: "absolute",
                    left: 0,
                    color: "#1a73e8",
                    fontWeight: "bold"
                  }}>★</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};
