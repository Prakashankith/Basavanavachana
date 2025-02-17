import React from "react";

function VachanaCard({ vachana, onNext, onFavorite, onUnFavorite }) {
  return (
    <>
      <div className="flex flex-col items-center justify-center p-6 bg-white shadow-lg rounded-lg text-center max-w-lg mx-auto transition-transform duration-300 hover:scale-105">
        <p className="text-xl font-semibold mb-4 text-gray-900">
          {vachana.text}
        </p>
        <div className="flex justify-center gap-4 mt-4">
          <button
            onClick={onNext}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Next
          </button>
          <button
            onClick={onFavorite}
            className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 transition"
          >
            Favorite
          </button>
          {/* <button
            onClick={onUnFavorite}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
          >
            UnFavorite
          </button> */}
        </div>
      </div>
    </>
  );
}

export default VachanaCard;
