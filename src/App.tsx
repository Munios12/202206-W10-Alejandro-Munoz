import { useState } from "react";
import "./App.css";
import { GentlemanList } from "./components/GentlemanList";
import { gentlemanData } from "./data/gentlemanData";

function App() {
  const [gentlemanListInfo, setGentlemanInfo] = useState(gentlemanData);

  const handleGentlemanStatus = (id: number) => {
    setGentlemanInfo(
      gentlemanListInfo.map((gentleman) => ({
        ...gentleman,
        selected:
          gentleman.id === id ? !gentleman.selected : gentleman.selected,
      }))
    );
  };

  console.log(setGentlemanInfo);

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
        <GentlemanList
          gentlemanListInfo={gentlemanListInfo}
          handleGentlemanStatus={handleGentlemanStatus}
        />
      </main>
    </div>
  );
}

export default App;
