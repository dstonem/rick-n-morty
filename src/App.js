import "./App.css";
import { useEffect } from "react";
import CharacterInfoContainer from "./components/characterFetcher/CharacterInfo/CharacterInfoContainer";
import Button from "./components/characterFetcher/Button/Button";
import useFetchChar from "./utils/hooks/useFetchChar";

function App() {
  const [char, getCharInfo] = useFetchChar();

  // eslint-disable-next-line
  useEffect(getCharInfo, []);

  return char === {} ? (
    <p>...loading...</p>
  ) : (
    <div className="App">
      <CharacterInfoContainer
        source={char.image}
        name={char.name}
        status={char.status}
      />
      <Button handleClick={getCharInfo} />
    </div>
  );
}

export default App;
