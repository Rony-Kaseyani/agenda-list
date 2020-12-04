import React from "react";

function AgendaItem(props) {
  return (
    <div>
      <input
        type="checkbox"
        checked={props.agenda.completed}
        onChange={() => props.handleChange(props.agenda.id)}
      />
      <p>{props.agenda.text}</p>
      <hr />
    </div>
  );
}

export default AgendaItem;
