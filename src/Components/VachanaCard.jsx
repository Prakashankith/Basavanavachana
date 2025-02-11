import React from "react";

function VachanaCard({ vachana, onNext, onFavorite }) {
  return (
    <>
      <div className="flex flex-col items-center justify-center p-6 bg-white shadow-lg rounded-lg text-center">
        <p className="text-lg font-semibold mb-4">{vachana}</p>
        <div className="flex gap-4 mt-4">
          <button
            onClick={onNext}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
          >
            Next
          </button>
          <button
            onClick={onFavorite}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
          >
            Favorite
          </button>
        </div>
      </div>
    </>
  );
}

export default VachanaCard;
