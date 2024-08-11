import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CharacterInfo from "./pages/character-info/characterInfo.component";
import CharacterList from "./pages/character-list/characterList.component";
import Loader from "./components/loader/Loader";
import { useAuth } from "./context/AuthContext";

import "./App.scss";
import { useEffect } from "react";
import { MenuComponent } from "./components/menu/Menu";

function App() {
  const { updateHash } = useAuth();

  useEffect(() => {
    updateHash();
  }, []);

  return (
    <div className="App">
      <MenuComponent>
        <Router>
          <Routes>
            <Route path="/" element={<Loader url="characters" />} />
            <Route path="/characters" element={<CharacterList />} />
            <Route path="/characters/:id" element={<CharacterInfo />} />
          </Routes>
        </Router>
      </MenuComponent>
    </div>
  );
}

export default App;
