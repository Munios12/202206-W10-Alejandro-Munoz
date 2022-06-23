import { useState } from "react";
import "./App.css";
import { Controller } from "./components/Controller";
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

  const selectAllGentleman = () => {
    setGentlemanInfo(
      gentlemanListInfo.map((gentleman) => ({
        ...gentleman,
        selected: true,
      }))
    );
  };

  const deleteGentleman = (id: number) => {
    setGentlemanInfo(
      gentlemanListInfo.filter((gentleman) => gentleman.id !== id)
    );
  };

  return (
    <div className="container">
      <header className="main-header">
        <h1 className="main-title">The pointing gentlemen</h1>
      </header>
      <section className="controls">
        <Controller
          gentlemanListInfo={gentlemanListInfo}
          selectAllGentleman={selectAllGentleman}
        />
      </section>
      <main className="main">
        <GentlemanList
          gentlemanListInfo={gentlemanListInfo}
          handleGentlemanStatus={handleGentlemanStatus}
          deleteGentleman={deleteGentleman}
        />
      </main>
    </div>
  );
}

export default App;
