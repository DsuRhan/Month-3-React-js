// src/components/PerformanceTasks/4b_LazyLoading_WithRouter.tsx
import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const PageOne = lazy(() => import("./lazy/PageOne"));
const PageTwo = lazy(() => import("./lazy/PageTwo"));
const PageThree = lazy(() => import("./lazy/PageThree"));

export default function LazyLoading_WithRouter() {
  return (
    <Router>
      <div className="p-4 bg-gray-800 rounded-lg mb-6">
        <h2 className="font-semibold text-xl mb-2 text-white">
          4b. Lazy Loading (With Router - Suggested by Lune, The Multifunctional High Quality AI) 
        </h2>

        <nav className="space-x-3 mb-4">
          <Link to="/page1" className="text-purple-400 hover:underline">
            Page 1
          </Link>
          <Link to="/page2" className="text-purple-400 hover:underline">
            Page 2
          </Link>
          <Link to="/page3" className="text-purple-400 hover:underline">
            Page 3
          </Link>
        </nav>

        <Suspense fallback={<p className="text-gray-400">Loading page...</p>}>
          <Routes>
            <Route path="/page1" element={<PageOne />} />
            <Route path="/page2" element={<PageTwo />} />
            <Route path="/page3" element={<PageThree />} />
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
}
