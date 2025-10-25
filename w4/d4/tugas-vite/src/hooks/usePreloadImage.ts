import { useEffect } from "react";

export function usePreloadImage(src: string | string[]) {
  useEffect(() => {
    const sources = Array.isArray(src) ? src : [src];
    const imgs = sources.map((s) => {
      const img = new Image();
      img.src = s;
      return img;
    });

    return () => {
      imgs.forEach((img) => (img.src = ""));
    };
  }, [src]);
}
