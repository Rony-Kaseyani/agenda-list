import React, { useState } from "react";
import "./App.css";
import AgendaItem from "./AgendaItem";
//import agendaData from "./agendaData";

function App() {
  const [agenda, setAgenda] = useState({
    agendaData: [
      {
        id: 1,
        text: "Do the laundry",
        completed: true,
      },
      {
        id: 2,
        text: "Do the dishes",
        completed: false,
      },
      {
        id: 3,
        text: "Vacuum and mop",
        completed: false,
      },
      {
        id: 4,
        text: "Take out trash",
        completed: true,
      },
      {
        id: 5,
        text: "Watch 'This is Us'",
        completed: false,
      },
      {
        id: 6,
        text: "Marinate chicken wings",
        completed: false,
      },
    ],
  });

  function handleChange(id) {
    let updatedList = agenda.agendaData.map((list) => {
      if (list.id === id) {
        return {
          ...list,
          completed: !list.completed,
        };
      }
      return list;
    });

    setAgenda({
      agendaData: updatedList,
    });
  }

  const agendaList = agenda.agendaData.map((agenda) => {
    return (
      <AgendaItem key={agenda.id} agenda={agenda} handleChange={handleChange} />
    );
  });

  return (
    <div className="App">
      <React.StrictMode>{agendaList}</React.StrictMode>
    </div>
  );
}

export default App;
