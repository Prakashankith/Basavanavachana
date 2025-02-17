import React from "react";

export default function FavoriteList({ favorites, onUnfavorite }) {
  return (
    <div className="container">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">
        Favorite Vachanas
      </h2>
      {favorites.length === 0 ? (
        <p className="text-gray-500 text-center">No favorites yet.</p>
      ) : (
        <ul className="space-y-4">
          {favorites.map((vachana) => (
            <li
              key={vachana.id}
              className="flex justify-between items-center p-4 bg-white shadow rounded-lg transition-transform duration-300 hover:scale-105"
            >
              <span className="text-gray-800">{vachana.text}</span>
              <button
                onClick={() => onUnfavorite(vachana.id)}
                className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
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
