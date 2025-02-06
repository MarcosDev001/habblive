"use client";
import { useState, useEffect } from "react";
import { Pause, Play, Headphones } from "lucide-react";

const RadioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const togglePlay = () => {
    const audio = document.getElementById("radio") as HTMLAudioElement;
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  if (!isClient) {
    return null;
  }

  return (
    <div className="w-full h-[80px] flex justify-center items-center bg-gradient-to-r from-[#083558] via-[#083558] to-[#083558] py-3">
      <div className="bg-[#083558] text-white p-3 flex items-center w-full max-w-4xl rounded-2xl shadow-md">
        <img
          src="https://habbo.city/habbo-imaging/avatarimage?figure=hd-3094-1020.lg-990001781-62.sh-990001746-62-1198.fa-1206-62.hr-990001525-49-31.ch-235-92.ca-1801-62.ha-990002634-110.ea-990002571-71.he-1604-62&action=std,crr=1&gesture=std&direction=2&head_direction=2&size=n&img_format=png"
          alt="DJ Avatar"
          className="w-[4rem] h-24"  
        />
        <div className="ml-3 flex flex-col justify-center">
          <div className="flex items-center space-x-2">
            <span className="bg-[#f5a623] text-white px-2 py-1 rounded-full text-xs font-semibold shadow-md">
              Auto/Dj
            </span>
            <p className="text-white text-sm font-semibold">
              Live com <span className="text-[#f5a623]">AutoDJ</span>
            </p>
          </div>
          <div className="flex items-center space-x-1 text-white text-xs">
            <Headphones size={14} />
            <span className="font-semibold">197 ouvintes</span>
          </div>
        </div>
        <div className="flex-grow"></div>
        <div className="flex items-center space-x-3">
          <button
            onClick={togglePlay}
            className="text-[#f5a623] hover:text-white transition-colors duration-300"
          >
            {isPlaying ? <Pause size={24} /> : <Play size={24} />}
          </button>
          <input
            type="range"
            className="w-36 h-2 bg-[#f5a623] rounded-full appearance-none cursor-pointer"
          />
        </div>
        <button
          onClick={openModal}
          className="bg-[#f5a623] hover:bg-[#e0a72b] text-white font-semibold px-3 py-1 rounded-md text-xs transition-all ml-3"
        >
          SEQUÊNCIA
        </button>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-[#1f2a3d] text-white p-4 rounded-lg shadow-md max-w-3xl w-full">
            <h2 className="text-2xl font-semibold text-[#f5a623] mb-3 text-center">
              Próximos Locutores
            </h2>
            <div className="space-y-4">
              {[1, 2, 3, 4].map((index) => (
                <div key={index} className="flex items-center space-x-3 border-b border-[#f5a623] pb-3">
                  <img
                    src={`/locutor-${index}.jpg`}
                    alt={`Locutor ${index}`}
                    className="w-14 h-14 rounded-full border-2 border-[#f5a623] shadow-lg"
                  />
                  <div className="flex-grow">
                    <p className="text-base font-semibold text-[#f5a623]">Locutor {index}</p>
                    <p className="text-sm text-[#ccc]">Programa: <span className="font-semibold text-white">Prog. {index}</span></p>
                    <p className="text-sm text-[#ccc]">Horário: <span className="font-semibold text-white">{8 + index}:00</span></p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 flex justify-center">
              <button
                onClick={closeModal}
                className="bg-[#f5a623] hover:bg-[#e0a72b] text-white px-5 py-2 rounded-md text-lg transition-all"
              >
                Fechar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RadioPlayer;
