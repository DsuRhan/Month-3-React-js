import { useState } from "react";
import { usePreloadImage } from "../hooks/usePreloadImage";
import MazePath from "./MazePath";
import JumpscareModal from "./JumpscareModal";
import WinModal from "./WinModal";

const MazeGame = () => {
  const [gameState, setGameState] = useState<"playing" | "win" | "lose">("playing");
  const [isAudioReady, setIsAudioReady] = useState(false);

  usePreloadImage("https://media1.tenor.com/m/64mke797OFwAAAAC/african-kid-africa.gif");

  const prepareAudio = () => {
  try {
    const audio = new Audio("/assets/jumpscare.mp3"); // gunakan path absolut dari public/
    audio.volume = 0;
    audio.play()
      .then(() => {
        audio.pause();
        audio.currentTime = 0;
        audio.volume = 1;
        setIsAudioReady(true);
      })
      .catch(() => {
        // jika browser masih menolak autoplay, tetap lanjutkan game
        setIsAudioReady(true);
      });
  } catch {
    setIsAudioReady(true);
  }
};

  const handleLose = () => setGameState("lose");
  const handleWin = () => setGameState("win");
  const handleRestart = () => setGameState("playing");

  return (
    <div className="flex flex-col items-center gap-4 mt-10">
      <h1 className="text-2xl font-bold">🌀 Maze Tracker</h1>
      <p className="text-gray-600">
        Tekan dan tahan dari Kotak hijau "Start" ke Kotak Biru "Finish" tanpa keluar jalur!
      </p>

      {!isAudioReady ? (
        <button
          onClick={prepareAudio}
          className="px-4 py-2 bg-blue-600 text-white rounded-md"
        >
          Mulai Game
        </button>
      ) : (
        <>
          {gameState === "playing" && <MazePath onWin={handleWin} onLose={handleLose} />}
          <JumpscareModal isOpen={gameState === "lose"} onClose={handleRestart} />
          <WinModal isOpen={gameState === "win"} onClose={handleRestart} />
        </>
      )}
    </div>
  );
};

export default MazeGame;
