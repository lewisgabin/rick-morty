import imgRick from "./img/rick-morty.png";
import "./App.css";
import { useState } from "react";
import { Caracters } from "./components/Caracters";
function App() {
  const [caracters, setCaracters] = useState(null);

  const resApi = async () => {
    const caracterApi = await fetch(
      "https://rickandmortyapi.com/api/character"
    );
    const caracterJson = await caracterApi.json();
    setCaracters(caracterJson.results);
  };
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title">Rick & Morty</h1>
        {caracters ? (
          <Caracters caracters={caracters} setCaracters={setCaracters} />
        ) : (
          <>
            <img className="imgHome" src={imgRick} alt="Morty"></img>
            <button className="btn-search" onClick={resApi}>
              Buscar Personaje
            </button>
          </>
        )}
      </header>
    </div>
  );
}

export default App;
