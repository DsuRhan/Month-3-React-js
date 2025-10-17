import MemoExample from "./components/1_MemoExample";
import UseMemoExample from "./components/2_UseMemoExample";
import UseCallbackExample from "./components/3_UseCallbackExample";
import LazyLoading_NoRouter from "./components/4a_LazyLoading_NoRouter";
import LazyLoading_WithRouter from "./components/4b_LazyLoading_WithRouter";
import ProfilerExample from "./components/5_ProfilerExample";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-6 space-y-6">
      <MemoExample />
      <UseMemoExample />
      <UseCallbackExample />
      <LazyLoading_NoRouter />
      <LazyLoading_WithRouter />
      <ProfilerExample />
    </div>
  );
}
