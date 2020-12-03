import React from "react";

function AgendaItem(props) {
  return (
    <div>
      <input type="checkbox" checked={props.completed} />
      <p>{props.text}</p>
      <hr />
    </div>
  );
}

export default AgendaItem;
