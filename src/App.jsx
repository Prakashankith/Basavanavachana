import React, { useState } from "react";
import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";

function App() {
  const [favorites, setFavorites] = useState([]);

  const addToFavorites = (vachana) => {
    if (!favorites.includes(vachana)) {
      setFavorites([...favorites, vachana]);
    }
  };

  const removeFromFavorites = (vachana) => {
    setFavorites(favorites.filter((fav) => fav !== vachana));
  };

  return (
    <Router>
      <nav className="p-4 bg-blue-600 text-white flex justify-between">
        <Link to="/" className="font-bold">
          Home
        </Link>
        <Link to="/favorites" className="font-bold">
          Favorites
        </Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home onFavorite={addToFavorites} />} />
        <Route
          path="/favorites"
          element={
            <Favorites
              favorites={favorites}
              onUnfavorite={removeFromFavorites}
            />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
