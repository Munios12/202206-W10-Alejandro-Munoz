import { useState } from "react";
import "./App.css";
import { GentlemanList } from "./components/GentlemanList";
import { gentlemanData } from "./data/gentlemanData";

function App() {
  const [gentlemanListInfo, setGentlemanInfo] = useState(gentlemanData);

  return (
    <div className="container">
      <header className="main-header">
        <h1 className="main-title">The pointing gentlemen</h1>
      </header>
      <section className="controls">
        <p className="info">0 gentlemen pointing at you</p>
        <button className="button button--select">Select all</button>
      </section>
      <main className="main">
        <GentlemanList gentlemanListInfo={gentlemanListInfo} />
      </main>
    </div>
  );
}

export default App;
