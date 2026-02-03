import React from 'react';

export const AchievementsComponent = () => {
  const achievements = [
    { title: "8x Ballon d'Or", description: "Most prestigious individual award in football" },
    { title: "Copa América Champion", description: "Led Argentina to victory in 2021" },
    { title: "FIFA World Cup 2022", description: "Greatest achievement of his career" },
    { title: "676 Career Goals", description: "One of the highest goal scorers in football history" },
    { title: "4x UEFA Champions League", description: "Multiple titles with FC Barcelona" },
    { title: "10x La Liga Champion", description: "Dominated Spanish football" }
  ];

  return (
    <div style={{
      padding: "40px 20px",
      backgroundColor: "white",
      margin: "20px"
    }}>
      <h2 style={{ textAlign: "center", fontSize: "32px", marginBottom: "40px", color: "#000" }}>Major Achievements</h2>
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
        gap: "25px",
        maxWidth: "1200px",
        margin: "0 auto"
      }}>
        {achievements.map((achievement, index) => (
          <div key={index} style={{
            backgroundColor: "#f9f9f9",
            border: "2px solid #1a73e8",
            padding: "25px",
            borderRadius: "10px",
            textAlign: "center",
            transition: "all 0.3s",
            cursor: "pointer"
          }} 
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "#e8f0fe";
            e.currentTarget.style.transform = "scale(1.05)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "#f9f9f9";
            e.currentTarget.style.transform = "scale(1)";
          }}
          >
            <h3 style={{ color: "#1a73e8", marginBottom: "10px", fontSize: "20px" }}>{achievement.title}</h3>
            <p style={{ color: "#666", margin: 0, fontSize: "14px" }}>{achievement.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
