import React from 'react';

export const ContactComponent = () => {
  const contactInfo = [
    { platform: "Instagram", handle: "@leomessi", icon: "📱" },
    { platform: "Twitter", handle: "@leomessi", icon: "𝕏" },
    { platform: "YouTube", handle: "Leo Messi Official", icon: "▶️" },
    { platform: "Email", handle: "contact@leomessi.com", icon: "✉️" }
  ];

  return (
    <div style={{
      padding: "40px 20px",
      backgroundColor: "white",
      margin: "20px"
    }}>
      <h2 style={{ textAlign: "center", fontSize: "32px", marginBottom: "40px", color: "#000" }}>Connect</h2>
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        gap: "20px",
        maxWidth: "1000px",
        margin: "0 auto"
      }}>
        {contactInfo.map((contact, index) => (
          <a key={index} href="#" style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "25px",
            backgroundColor: "#f0f0f0",
            borderRadius: "10px",
            textDecoration: "none",
            transition: "all 0.3s",
            cursor: "pointer",
            border: "2px solid transparent"
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "#1a73e8";
            e.currentTarget.style.color = "white";
            e.currentTarget.style.border = "2px solid #1a73e8";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "#f0f0f0";
            e.currentTarget.style.color = "inherit";
            e.currentTarget.style.border = "2px solid transparent";
          }}
          >
            <div style={{ marginRight: "15px", fontSize: "28px" }}>{contact.icon}</div>
            <div style={{ textAlign: "left" }}>
              <h4 style={{ margin: "0 0 5px 0", fontSize: "16px", fontWeight: "bold", color: "#1a73e8" }}>
                {contact.platform}
              </h4>
              <p style={{ margin: 0, fontSize: "14px", color: "#666" }}>{contact.handle}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};
