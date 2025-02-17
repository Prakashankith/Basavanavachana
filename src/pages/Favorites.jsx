import React from "react";
import FavoriteList from "../Components/FavoriteList";

export default function Favorites({ favorites, onUnfavorite }) {
  return (
    <div className="min-h-screen bg-blue-50">
      <FavoriteList favorites={favorites} onUnfavorite={onUnfavorite} />
    </div>
  );
}
