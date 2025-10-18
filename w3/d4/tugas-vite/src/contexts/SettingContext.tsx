import React, { createContext, useContext, useEffect, useRef, useState } from "react";

export type Theme = "light" | "dark";

interface SettingsContextType {
  theme: Theme;
  toggleTheme: () => void;
  bgmOn: boolean;
  toggleBgm: () => void;
}

const SettingsContext = createContext<SettingsContextType | undefined>(undefined);

export const SettingsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // THEME STATE
  const [theme, setTheme] = useState<Theme>(() => {
    const stored = localStorage.getItem("theme");
    return stored === "dark" ? "dark" : "light";
  });

  // BGM STATE
  const [bgmOn, setBgmOn] = useState(true);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // INITIALIZE AUDIO ONCE
  useEffect(() => {
    audioRef.current = new Audio("/bgm.mp3"); // Pastikan file ini ada di public/
    audioRef.current.loop = true;
    if (bgmOn) {
      audioRef.current.play().catch(() => {
        // browser kadang butuh interaksi user dulu
      });
    }
    return () => {
      audioRef.current?.pause();
    };
  }, [bgmOn]);

  // HANDLE BGM TOGGLE
  useEffect(() => {
    if (!audioRef.current) return;
    if (bgmOn) {
      audioRef.current.play().catch(() => {});
    } else {
      audioRef.current.pause();
    }
  }, [bgmOn]);

  // HANDLE THEME
  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => setTheme((prev) => (prev === "light" ? "dark" : "light"));
  const toggleBgm = () => setBgmOn((prev) => !prev);

  return (
    <SettingsContext.Provider value={{ theme, toggleTheme, bgmOn, toggleBgm }}>
      <div
        className={`min-h-screen transition-colors duration-300 ${
          theme === "dark" ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"
        }`}
      >
        {children}
      </div>
    </SettingsContext.Provider>
  );
};

export function useSettings() {
  const context = useContext(SettingsContext);
  if (!context) {
    throw new Error("useSettings must be used within a SettingsProvider");
  }
  return context;
}
