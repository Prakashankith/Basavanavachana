import React from "react";
import FavoriteList from "../Components/FavoriteList";

export default function Favorites({ favorites, onUnfavorite }) {
  return (
    <div className="h-screen bg-blue-100">
      <FavoriteList favorites={favorites} onUnfavorite={onUnfavorite} />
    </div>
  );
}
