import { useEffect, useState } from "react";

const EffectCleanup = () => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener("resize", handleResize);
    console.log("Resize listener attached");

    return () => {
      window.removeEventListener("resize", handleResize);
      console.log("Resize listener cleaned up");
    };
  }, []);

  return (
    <div className="p-4 bg-slate-800 rounded-xl shadow-md text-slate-100">
      <h2 className="font-bold text-lg mb-2">3️⃣ Cleanup Function</h2>
      <p>Width: {windowSize.width}px</p>
      <p>Height: {windowSize.height}px</p>
    </div>
  );
};

export default EffectCleanup;
