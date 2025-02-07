"use client";

import { useState, useEffect } from "react";

const banners = [
  "https://i.imgur.com/pKJLAOI.png"
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
    <div className="w-full h-[60vh] flex justify-center items-center mt-0">
      <img 
        src={banners[index]} 
        alt="Publicidade" 
        className="w-full h-full object-cover "
      />
    </div>
  );
};

export default Banner;
