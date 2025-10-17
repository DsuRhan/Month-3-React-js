// src/components/PerformanceTasks/4a_LazyLoading_NoRouter.tsx
import { Suspense, lazy, useState } from "react";

const ComponentA = lazy(() => import("./lazy/ComponentA"));
const ComponentB = lazy(() => import("./lazy/ComponentB"));
const ComponentC = lazy(() => import("./lazy/ComponentC"));

export default function LazyLoading_NoRouter() {
  const [page, setPage] = useState<string | null>(null);

  return (
    <div className="p-4 bg-gray-800 rounded-lg mb-6">
      <h2 className="font-semibold text-xl mb-2 text-white">
        4a. Lazy Loading (No Router)
      </h2>
      <div className="space-x-2 mb-3">
        {["A", "B", "C"].map((name) => (
          <button
            key={name}
            onClick={() => setPage(name)}
            className="px-3 py-1 bg-purple-600 rounded"
          >
            Load {name}
          </button>
        ))}
      </div>

      <Suspense fallback={<p className="text-gray-400">Loading component...</p>}>
        {page === "A" && <ComponentA />}
        {page === "B" && <ComponentB />}
        {page === "C" && <ComponentC />}
      </Suspense>
    </div>
  );
}
