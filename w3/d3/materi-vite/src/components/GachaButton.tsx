import GachaAnimation from "./GachaAnimation";
import Popup from "./Popup";
import { useGacha } from "../hooks/useGacha";
import { usePopup } from "../hooks/usePopup";
import { useAudio } from "../hooks/useAudio";

export default function GachaButton() {
  const { selected, rolling, roll, reset } = useGacha();
  const { isOpen, open, close } = usePopup();
  const playSound = useAudio("/sounds/gacha-roll.mp3");

  const handleClick = () => {
    playSound();
    roll();
    setTimeout(open, 2500);
  };

  const handleClose = () => {
    close();
    reset();
  };

  return (
    <div className="flex flex-col items-center gap-4 mt-10">
      <h1 className="text-2xl font-bold text-gray-800">S-Rank Agent Gacha 🎰</h1>

      <button
        disabled={rolling}
        onClick={handleClick}
        className="px-6 py-3 bg-purple-600 text-white font-semibold rounded-xl shadow-md hover:bg-purple-700 transition disabled:opacity-50"
      >
        {rolling ? "Rolling..." : "Pull Gacha"}
      </button>

      <GachaAnimation active={rolling} />
      {isOpen && <Popup agent={selected} onClose={handleClose} />}
    </div>
  );
}
