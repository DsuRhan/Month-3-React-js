import { useCallback } from "react";

export function useAudio(src: string, volume = 0.5) {
  const play = useCallback(() => {
    const audio = new Audio(src);
    audio.volume = volume;
    audio.play();
  }, [src, volume]);

  return play;
}
