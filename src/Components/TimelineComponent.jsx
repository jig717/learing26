import React from 'react';

export const TimelineComponent = () => {
  const careerEvents = [
    { year: "2004", event: "Joined FC Barcelona at age 13", type: "milestone" },
    { year: "2006", event: "Made debut for Barcelona first team", type: "milestone" },
    { year: "2009", event: "First Ballon d'Or award", type: "achievement" },
    { year: "2011", event: "Scored 53 goals in a single calendar year", type: "record" },
    { year: "2015", event: "Won UEFA Champions League with Barcelona", type: "achievement" },
    { year: "2021", event: "Transferred to Paris Saint-Germain", type: "milestone" },
    { year: "2022", event: "Won FIFA World Cup with Argentina", type: "achievement" },
    { year: "2023", event: "Joined Inter Miami CF", type: "milestone" }
  ];

  const getColor = (type) => {
    switch(type) {
      case "milestone": return "#ff9800";
      case "achievement": return "#4caf50";
      case "record": return "#e91e63";
      default: return "#1a73e8";
    }
  };

  return (
    <div style={{
      padding: "40px 20px",
      backgroundColor: "#f5f5f5",
      margin: "20px"
    }}>
      <h2 style={{ textAlign: "center", fontSize: "32px", marginBottom: "40px", color: "#000" }}>Career Timeline</h2>
      <div style={{
        maxWidth: "800px",
        margin: "0 auto",
        position: "relative",
        paddingLeft: "50px"
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          bottom: 0,
          width: "3px",
          backgroundColor: "#1a73e8"
        }} />
        
        {careerEvents.map((item, index) => (
          <div key={index} style={{
            marginBottom: "30px",
            position: "relative"
          }}>
            <div style={{
              position: "absolute",
              left: "-28px",
              top: "5px",
              width: "20px",
              height: "20px",
              borderRadius: "50%",
              backgroundColor: getColor(item.type),
              border: "3px solid white",
              boxShadow: "0 0 0 3px #1a73e8"
            }} />
            <div style={{
              backgroundColor: "white",
              padding: "20px",
              borderRadius: "8px",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)"
            }}>
              <h4 style={{ color: getColor(item.type), margin: "0 0 8px 0", fontSize: "16px", fontWeight: "bold" }}>
                {item.year}
              </h4>
              <p style={{ color: "#333", margin: 0, fontSize: "14px" }}>{item.event}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
