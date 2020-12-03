import React from "react";
import './App.css';
import AgendaItem from "./AgendaItem";

function App() {
  return (
    <div className="App">
    <React.StrictMode>
      <AgendaItem />
      <AgendaItem />
      <AgendaItem />
      <AgendaItem />
      <AgendaItem />
    </React.StrictMode>
    </div>
  );
}

export default App;
