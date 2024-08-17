import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CharacterInfo from "./pages/character-info/CharacterInfo.component";
import CharacterList from "./pages/character-list/CharacterList.component";
import FavListPage from "./pages/fav-list/FavList.component";
import Loader from "./components/loader/Loader";
import { useAuth } from "./context/AuthContext";

import "./App.scss";
import { useEffect } from "react";
import { MenuComponent } from "./components/menu/Menu";

function App() {
  const { updateHash } = useAuth();
  const BASE_URL = '/marvel'
  useEffect(() => {
    updateHash();
  }, []);

  return (
    <div className="App">
      <Router>
        <MenuComponent>
          <Routes>
            <Route path={`${BASE_URL}/`} element={<Loader url={`${BASE_URL}/characters`} />} />
            <Route path={`${BASE_URL}/characters`} element={<CharacterList />} />
            <Route path={`${BASE_URL}/characters/:id`} element={<CharacterInfo />} />
            <Route path={`${BASE_URL}/favorites`} element={<FavListPage />} />
          </Routes>
        </MenuComponent>
      </Router>
    </div>
  );
}

export default App;
