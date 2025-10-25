import { useState, useCallback, useRef, type FC } from "react";

interface MazePathProps {
  onWin: () => void;
  onLose: () => void;
}

function useGenerateMaze(size = 21) {
  const generateMaze = useCallback(() => {
    const maze = Array.from({ length: size }, () => Array(size).fill(1));
    const stack: [number, number][] = [];
    const startX = Math.floor(size / 2);
    const startY = Math.floor(size / 2);

    maze[startY][startX] = 0;
    stack.push([startX, startY]);

    const directions = [
      [0, -2],
      [2, 0],
      [0, 2],
      [-2, 0],
    ];

    while (stack.length) {
      const [x, y] = stack.pop() as [number, number];
      const shuffled = directions.sort(() => Math.random() - 0.5);
      for (const [dx, dy] of shuffled) {
        const nx = x + dx;
        const ny = y + dy;
        if (nx > 0 && ny > 0 && nx < size - 1 && ny < size - 1 && maze[ny][nx] === 1) {
          maze[ny][nx] = 0;
          maze[y + dy / 2][x + dx / 2] = 0;
          stack.push([nx, ny]);
        }
      }
    }

    const exits: [number, number][] = [];
    for (let i = 0; i < size; i++) {
      if (maze[1][i] === 0) exits.push([i, 0]);
      if (maze[size - 2][i] === 0) exits.push([i, size - 1]);
      if (maze[i][1] === 0) exits.push([0, i]);
      if (maze[i][size - 2] === 0) exits.push([size - 1, i]);
    }

    const [fx, fy] = exits[Math.floor(Math.random() * exits.length)] || [size - 3, size - 2];
    maze[fy][fx] = 2;
    return maze;
  }, [size]);

  const [maze, setMaze] = useState<number[][]>(() => generateMaze());

  const regenerate = useCallback(() => {
    setMaze(generateMaze());
  }, [generateMaze]);

  return { maze, regenerate, size };
}

const MazePath: FC<MazePathProps> = ({ onWin, onLose }) => {
  const { maze, regenerate, size } = useGenerateMaze(21);
  const [started, setStarted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hoveredCell, setHoveredCell] = useState<[number, number] | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const startX = Math.floor(size / 2);
  const startY = Math.floor(size / 2);

  const handleStart = () => {
    setStarted(true);
    setIsPlaying(true);
  };

  const handleLose = () => {
    if (isPlaying) {
      setIsPlaying(false);
      setStarted(false);
      setHoveredCell(null);
      onLose();
    }
  };

  const handleWin = () => {
    if (isPlaying) {
      setIsPlaying(false);
      setStarted(false);
      setHoveredCell(null);
      onWin();
    }
  };

  const handlePointerMove = (x: number, y: number) => {
    if (!isPlaying) return;
    const value = maze[y]?.[x];
    setHoveredCell([x, y]);
    if (value === 1) handleLose();
    else if (value === 2) handleWin();
  };

  // 🟢 HP / touch handler
  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isPlaying || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const touch = e.touches[0];
    const cellSize = rect.width / size;
    const x = Math.floor((touch.clientX - rect.left) / cellSize);
    const y = Math.floor((touch.clientY - rect.top) / cellSize);
    if (x >= 0 && y >= 0 && x < size && y < size) handlePointerMove(x, y);
  };

  const isMobile = "ontouchstart" in window || navigator.maxTouchPoints > 0;

  return (
    <div className="flex flex-col items-center gap-4 select-none touch-none">
      <button
        onClick={() => {
          regenerate();
          setStarted(false);
          setIsPlaying(false);
          setHoveredCell(null);
        }}
        className="px-3 py-1 bg-gray-600 text-white rounded"
      >
        Restart
      </button>

      <div
        ref={containerRef}
        onTouchMove={isMobile ? handleTouchMove : undefined}
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${size}, 20px)`,
          gridTemplateRows: `repeat(${size}, 20px)`,
        }}
        className="border border-gray-700"
        onPointerUp={() => setIsPlaying(false)}
      >
        {maze.map((row, y) =>
          row.map((cell, x) => {
            const isStart = x === startX && y === startY;
            const isFinish = cell === 2;
            const isHovered = hoveredCell?.[0] === x && hoveredCell?.[1] === y;
            const bgColor = isHovered
              ? "bg-amber-300"
              : isStart
              ? "bg-green-500"
              : isFinish
              ? "bg-blue-500"
              : cell === 1
              ? "bg-gray-800"
              : "bg-gray-200";

            return (
              <div
                key={`${x}-${y}`}
                onPointerDown={() => {
                  if (isStart && !started) handleStart();
                }}
                onPointerEnter={!isMobile ? () => handlePointerMove(x, y) : undefined}
                className={`w-5 h-5 transition-colors duration-100 ${bgColor} ${
                  !started && isStart ? "cursor-pointer" : ""
                }`}
              />
            );
          })
        )}
      </div>
    </div>
  );
};

export default MazePath;
