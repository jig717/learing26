import React from 'react'   
import MessiImage from '../assets/image/mess.jpg';
export const Contentcomponents = () => {
  return (
    <div style={{
      padding: "40px 20px", 
      display: "flex",
      alignItems: "center", 
      justifyContent: "center",
      gap: "30px",
      margin: "20px",
      maxWidth: "1000px",
     // margin:"20px auto"
    }}>
      <div style={{
        flex: "0 0 250px",
        textAlign: "center"
      }}>
        <img src={MessiImage} 
             alt="Lionel Messi" 
             style={{
               width: "250px",
               height: "300px",
               objectFit: "cover",
               borderRadius: "15px",
               boxShadow: "0 8px 16px rgba(0, 0, 0, 0.3)",
               border: "4px solid #1a73e8"
             }} 
        />
      </div>
      <div style={{
        flex: "1",
        minWidth: "300px"
      }}>
        <h2 style={{
          fontSize: "28px",
          color: "#1a73e8",
          marginBottom: "15px",
          marginTop: 0
        }}>
          About Me
        </h2>
        <p style={{
          fontSize: "16px", 
          color: "#333", 
          lineHeight: "1.8",
          margin: "0 0 15px 0"
        }}>
          Lionel Andrés Messi, commonly known as Lionel Messi, is an Argentine professional footballer who plays as a forward. Born on June 24, 1987, in Rosario, Argentina, Messi is widely regarded as one of the greatest football players of all time.
        </p>
        <p style={{
          fontSize: "16px", 
          color: "#333", 
          lineHeight: "1.8",
          margin: "0 0 15px 0"
        }}>
          He spent the majority of his career at FC Barcelona, where he won numerous titles and broke multiple records. After his success in Europe with PSG, he achieved his lifelong dream of winning the FIFA World Cup with Argentina in 2022.
        </p>
        <p style={{
          fontSize: "16px", 
          color: "#333", 
          lineHeight: "1.8",
          margin: 0
        }}>
          Messi has won the Ballon d'Or award multiple times and is known for his exceptional dribbling skills, vision, and goal-scoring ability. His impact on world football is immeasurable.
        </p>
      </div>
    </div>
  )
}
  