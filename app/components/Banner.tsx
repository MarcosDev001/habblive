"use client"; // Adicione esta linha no topo do arquivo

import { useState, useEffect } from "react";

const banners = [
  "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/dbb57898-1804-4e30-a5c8-9295546548e6/dhmdqe6-cd7ebfa7-6d81-4a9c-8eed-297c84b0462d.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2RiYjU3ODk4LTE4MDQtNGUzMC1hNWM4LTkyOTU1NDY1NDhlNlwvZGhtZHFlNi1jZDdlYmZhNy02ZDgxLTRhOWMtOGVlZC0yOTdjODRiMDQ2MmQuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.rFmp8m65bPyK6ua5bp7yIcZjHGV08ULnrQR3eMo1xpg"
];

const Banner = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % banners.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-auto flex justify-center items-center my-4 relative">
      <img 
        src={banners[index]} 
        alt="Publicidade" 
        className="absolute w-full h-[60vh] top-[-20px] left-0 right-0 bottom-0 object-cover rounded-lg shadow-lg" 
      />
    </div>
  );
};

export default Banner;
