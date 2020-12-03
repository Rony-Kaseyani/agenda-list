import React from "react";
import "./App.css";
import AgendaItem from "./AgendaItem";

import agendaData from "./agendaData";

function App() {
  const agendaList = agendaData.map((agenda) => {
    return <AgendaItem text={agenda.text} completed={agenda.completed} />;
  });

  return (
    <div className="App">
      <React.StrictMode>{agendaList}</React.StrictMode>
    </div>
  );
}

export default App;
