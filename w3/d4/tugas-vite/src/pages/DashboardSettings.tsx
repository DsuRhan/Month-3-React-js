import React, { useEffect, useRef, useState } from "react";

const DashboardSettings: React.FC = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isMuted, setIsMuted] = useState(false);
  const [theme, setTheme] = useState<string>(() => {
    return localStorage.getItem("theme") || "light";
  });

  // --- Simpan tema di localStorage setiap kali berubah ---
  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  // --- BGM otomatis ---
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const playAudio = async () => {
      try {
        await audio.play();
      } catch {
        console.warn("Autoplay diblokir browser, tekan tombol Unmute untuk memulai.");
      }
    };
    playAudio();

    return () => {
      audio.pause();
    };
  }, []);

  const toggleMute = () => {
    const audio = audioRef.current;
    if (audio) {
      audio.muted = !audio.muted;
      setIsMuted(audio.muted);
    }
  };

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <div
      className={`p-6 space-y-6 rounded-xl shadow-md transition-colors duration-300 ${
        theme === "light"
          ? "bg-gray-100 text-gray-900"
          : "bg-gray-900 text-gray-100"
      }`}
    >
      <h2 className="text-2xl font-semibold">Pengaturan Dashboard</h2>

      {/* BGM Control */}
      <section className="flex items-center justify-between">
        <p className="text-lg">Background Music</p>
        <button
          onClick={toggleMute}
          className={`px-4 py-2 text-sm rounded-md transition-colors ${
            theme === "light"
              ? "bg-blue-500 hover:bg-blue-600 text-white"
              : "bg-blue-400 hover:bg-blue-500 text-gray-900"
          }`}
        >
          {isMuted ? "Unmute" : "Mute"}
        </button>
      </section>

      {/* Theme Control */}
      <section className="flex items-center justify-between">
        <p className="text-lg">Tema Aplikasi</p>
        <button
          onClick={toggleTheme}
          className={`px-4 py-2 text-sm rounded-md transition-colors ${
            theme === "light"
              ? "bg-indigo-500 hover:bg-indigo-600 text-white"
              : "bg-indigo-400 hover:bg-indigo-500 text-gray-900"
          }`}
        >
          {theme === "light" ? "Ubah ke Dark" : "Ubah ke Light"}
        </button>
      </section>

      {/* Audio Element */}
      <audio ref={audioRef} loop>
        <source src="/bgm.mp3" type="audio/mpeg" />
        Browser tidak mendukung audio tag.
      </audio>
    </div>
  );
};

export default DashboardSettings;
