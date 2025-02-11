import React from "react";

export default function FavoriteList({ favorites, onUnfavorite }) {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Favorite Vachanas</h2>
      {favorites.length === 0 ? (
        <p className="text-gray-500">No favorites yet.</p>
      ) : (
        <ul className="space-y-2">
          {favorites.map((vachana, index) => (
            <li key={index} className="p-4 bg-gray-100 rounded-lg shadow-sm">
              <span>{vachana}</span>
              <button
                onClick={() => onUnfavorite(vachana)}
                className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
              >
                UnFavorite
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
