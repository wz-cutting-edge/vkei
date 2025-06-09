import React from "react";

const Events = (props) => {
  return (
    <div className="event-card">
      <h3>{props.name}</h3>
      <img src={props.image} alt={props.tour} />
      <h4>{props.tour}</h4>
      <p>{props.cities}</p>
    </div>
  )
}

export default Events;