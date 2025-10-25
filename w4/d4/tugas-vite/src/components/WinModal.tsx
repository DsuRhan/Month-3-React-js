import { type FC, useEffect, useRef } from "react";
import PortalModal from "./PortalModal";

interface WinModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const WinModal: FC<WinModalProps> = ({ isOpen, onClose }) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isOpen) {
      audio.currentTime = 0;
      audio.play().catch(() => {});
    } else {
      audio.pause();
    }
  }, [isOpen]);

  return (
    <PortalModal isOpen={isOpen}>
      <div className="bg-white text-gray-800 rounded-lg p-6 shadow-xl text-center">
        <h2 className="text-2xl font-bold mb-2">🎉 Selamat!</h2>
        <p>Kau berhasil melewati labirin tanpa menyentuh dinding.</p>
        <button
          onClick={onClose}
          className="mt-4 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md transition"
        >
          Main Lagi
        </button>
        <audio ref={audioRef} src="/assets/bgm-win.mp3" preload="auto" />
      </div>
    </PortalModal>
  );
};

export default WinModal;
