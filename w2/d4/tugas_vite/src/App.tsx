// src/App.tsx
import FetchPost from "./components/FetchPost";
import AxiosUser from "./components/AxiosUser";
import AxiosUserWithState from "./components/AxiosUserWithState";
import FetchPostWithAbort from "./components/FetchPostWithAbort";
import FilteredUsers from "./components/FilteredUsers";

export default function App() {
  return (
    <main className="min-h-screen bg-slate-900 text-slate-100 p-8">
      <h1 className="text-3xl font-bold text-center mb-10">
        📘 Evaluasi Harian: API Integration & Async Operations
      </h1>

      <div className="flex flex-col gap-6 max-w-3xl mx-auto">
        <div className="bg-slate-800 p-6 rounded-2xl shadow-md border border-slate-700">
          <FetchPost />
        </div>

        <div className="bg-slate-800 p-6 rounded-2xl shadow-md border border-slate-700">
          <AxiosUser />
        </div>

        <div className="bg-slate-800 p-6 rounded-2xl shadow-md border border-slate-700">
          <AxiosUserWithState />
        </div>

        <div className="bg-slate-800 p-6 rounded-2xl shadow-md border border-slate-700">
          <FetchPostWithAbort />
        </div>

        <div className="bg-slate-800 p-6 rounded-2xl shadow-md border border-slate-700">
          <FilteredUsers />
        </div>
      </div>
    </main>
  );
}
