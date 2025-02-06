"use client";

import { useState, useEffect, useRef } from "react";
import { Pause, Play, Headphones } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const RadioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentSong] = useState("AutoDJ Mix #34");
  const [listeners] = useState(217);
  const [volume, setVolume] = useState(1);
  const [songDuration, setSongDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Função para alternar a reprodução
  const togglePlay = () => {
    const audio = audioRef.current;
    if (audio) {
      if (isPlaying) {
        audio.pause();
      } else {
        audio.play();
      }
      setIsPlaying((prev) => !prev);
    }
  };

  // Função para alterar o volume
  const handleVolumeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = event.target.valueAsNumber / 100;
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
    setVolume(newVolume);
  };

  // Configura os event listeners do áudio
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateTime = () => setCurrentTime(audio.currentTime);
    const updateDuration = () => setSongDuration(audio.duration);

    audio.addEventListener("timeupdate", updateTime);
    audio.addEventListener("loadedmetadata", updateDuration);

    return () => {
      audio.removeEventListener("timeupdate", updateTime);
      audio.removeEventListener("loadedmetadata", updateDuration);
    };
  }, []);

  return (
    <div className="w-full h-[80px] flex justify-center items-center bg-gradient-to-r from-[#083558] via-[#083558] to-[#083558] py-3">
      <motion.div
        className="bg-[#083558] text-white p-4 flex items-center w-full max-w-6xl rounded-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <img
          src="https://habbo.city/habbo-imaging/avatarimage?figure=hd-3094-1020.lg-990001781-62.sh-990001746-62-1198.fa-1206-62.ch-235-92.ca-1801-62.ha-990002634-110.ea-990002571-71.he-1604-62&action=std,crr=1&gesture=std&direction=2&head_direction=2&size=n&img_format=png"
          alt="DJ Avatar"
          className="w-[74px] h-[7rem]"
        />

        <div className="ml-4">
          <span className="bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
            AutoDJ
          </span>
          <p className="text-white text-sm font-semibold mt-1">
            Live com <span className="text-yellow-400">{currentSong}</span>
          </p>
        </div>

        <div className="flex-grow flex justify-center items-center space-x-6">
          <button
            onClick={togglePlay}
            className="text-yellow-400 hover:text-white transition-colors duration-300"
          >
            {isPlaying ? <Pause size={28} /> : <Play size={28} />}
          </button>
          <input
            type="range"
            className="w-36 h-2 bg-yellow-400 rounded-full appearance-none cursor-pointer"
            value={volume * 100}
            onChange={handleVolumeChange}
          />
          <div className="flex items-center space-x-2">
            <Headphones size={18} />
            <span className="font-semibold text-white">{listeners} ouvintes</span>
          </div>
        </div>

        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-yellow-500 hover:bg-yellow-400 text-white font-semibold px-4 py-2 rounded-md text-sm transition-all ml-3"
        >
          SEQUÊNCIA
        </button>
      </motion.div>

      <audio ref={audioRef} src="https://path-to-your-audio-stream" hidden />

      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-blue-900 text-white p-6 rounded-xl shadow-lg max-w-2xl w-full"
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -50, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="text-2xl font-semibold text-yellow-400 text-center mb-4">
                Próximos Locutores
              </h2>
              <div className="space-y-4">
                {[1, 2, 3, 4].map((index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-4 border-b border-yellow-500 pb-2"
                  >
                    <img
                      src={`/locutor-${index}.jpg`}
                      alt={`Locutor ${index}`}
                      className="w-12 h-12 rounded-full border-2 border-yellow-400"
                    />
                    <div>
                      <p className="text-yellow-400 font-semibold">Locutor {index}</p>
                      <p className="text-sm text-gray-300">
                        Programa: <span className="text-white font-medium">Prog. {index}</span>
                      </p>
                      <p className="text-sm text-gray-300">
                        Horário: <span className="text-white font-medium">{8 + index}:00</span>
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 flex justify-center">
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="bg-yellow-500 hover:bg-yellow-400 text-white px-6 py-2 rounded-md text-lg"
                >
                  Fechar
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default RadioPlayer;
