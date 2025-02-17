import React, { useEffect, useState } from "react";
import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import { vachanas } from "./data/vachanas";

function App() {
  const [favoriteIds, setFavoriteIds] = useState([]);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    console.log("loaded from localstorage:", storedFavorites);
    setFavoriteIds(storedFavorites);
  }, []);

  // !Save favorites to local storage when updated
  useEffect(() => {
    console.log("saving to loacalStorage", favoriteIds);
    localStorage.setItem("favorites", JSON.stringify(favoriteIds));
  }, [favoriteIds]);

  // !Add to favorites

  const addToFavorites = (id) => {
    if (!favoriteIds.includes(id)) {
      setFavoriteIds([...favoriteIds, id]);
      // setFavoriteIds(updatedFavorites);
      // localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    }
  };

  // !Remove from favorites

  const removeFromFavorites = (id) => {
    const updatedFavorites = favoriteIds.filter((favId) => favId !== id);
    setFavoriteIds(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  // !Get favorite vachanas by filtering the full list
  const favoritesVachanas = vachanas.filter((v) => favoriteIds.includes(v.id));

  return (
    <Router>
      <nav className="p-4 bg-blue-600 text-white flex justify-between items-center">
        <Link
          to="/"
          className="text-xl font-bold hover:text-gray-200 transition"
        >
          Home
        </Link>
        <Link
          to="/favorites"
          className="text-xl font-bold hover:text-gray-200 transition"
        >
          Favorites
        </Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home onFavorite={addToFavorites} />} />
        <Route
          path="/favorites"
          element={
            <Favorites
              favorites={favoritesVachanas}
              onUnfavorite={removeFromFavorites}
            />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
