import { useFetch } from "../hooks/useFetch";

export function FetchExample() {
  const { data, loading, error } = useFetch<{ id: number; title: string; body: string }>(
    "https://jsonplaceholder.typicode.com/posts/1"
  );

  return (
    <div className="bg-gray-800 p-4 rounded-lg mb-4 text-gray-100 w-80 text-center">
      <h3 className="text-lg font-semibold mb-2">useFetch Example</h3>
      {loading && <p>Loading...</p>}
      {error && <p className="text-red-400">{error}</p>}
      {data && (
        <div>
          <h4 className="font-bold">{data.title}</h4>
          <p className="text-sm text-gray-300">{data.body}</p>
        </div>
      )}
    </div>
  );
}
