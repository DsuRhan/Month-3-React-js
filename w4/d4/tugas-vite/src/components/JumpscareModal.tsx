import { type FC, useEffect } from "react";
import PortalModal from "./PortalModal";

interface JumpscareModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const JumpscareModal: FC<JumpscareModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (!isOpen) return;

    const audio = new Audio("../assets/jumpscare.mp3");
    audio.volume = 0.8;
    audio.play().catch(() => {
      // Jika browser memblokir autoplay, tidak masalah.
    });

    let active = true;
    const timer = setTimeout(() => {
      if (active) onClose();
      audio.pause();
      audio.currentTime = 0;
    }, 2000);

    return () => {
      active = false;
      audio.pause();
      audio.currentTime = 0;
      clearTimeout(timer);
    };
  }, [isOpen, onClose]);

  return (
    <PortalModal isOpen={isOpen}>
      <div className="fixed inset-0 z-50 w-screen h-screen bg-black flex items-center justify-center">
        <img
          src="https://media1.tenor.com/m/64mke797OFwAAAAC/african-kid-africa.gif"
          alt="Jumpscare"
          className="w-full h-full object-cover"
        />
      </div>
    </PortalModal>
  );
};

export default JumpscareModal;
