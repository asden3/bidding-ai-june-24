import React from "react";

function Card({ value, suit }) {
  const cardStyle = {
    fontSize: "2rem",
    lineHeight: "2rem",
    border: "1px solid black",
    padding: "5px",
    margin: "30px 3px",
  };

  const suitColors = {
    "♣": "#0D8140",
    "♦": "#F6851E",
    "♠": "#28397A",
    "♥": "#ED1E24",
  };

  const suitStyle = {
    color: suitColors[suit] || "black",
  };

  return (
    <div style={cardStyle}>
      <div>{value}</div>
      <div style={suitStyle}>{suit}</div>
    </div>
  );
}

export default Card;
