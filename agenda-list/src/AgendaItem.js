import React from "react";

function AgendaItem(props) {
  return (
    <div className="container">
      <input
        className="input"
        type="checkbox"
        checked={props.agenda.completed}
        onChange={() => props.handleChange(props.agenda.id)}
      />
      <p classname="child">{props.agenda.text}</p>
      <hr />
    </div>
  );
}

export default AgendaItem;
