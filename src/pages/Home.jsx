import React, { useState } from "react";
import { vachanas } from "../data/vachanas";
import VachanaCard from "../Components/VachanaCard";

export default function Home({ onFavorite }) {
  const [index, setIndex] = useState(0);

  const nextVachana = () => {
    setIndex(Math.floor(Math.random() * vachanas.length));
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-blue-100">
      <VachanaCard
        vachana={vachanas[index]}
        onNext={nextVachana}
        onFavorite={() => onFavorite(vachanas[index].id)}
      />
    </div>
  );
}
