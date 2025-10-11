import { useEffect, useState } from "react";

interface Post {
  id: number;
  title: string;
  body: string;
}

export default function FetchPostWithAbort() {
  const [data, setData] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    fetch("https://jsonplaceholder.typicode.com/posts/1", { signal })
      .then((res) => {
        if (!res.ok) throw new Error("HTTP error");
        return res.json();
      })
      .then((result) => setData(result))
      .catch((err) => {
        if (err.name === "AbortError") {
          console.log("Fetch dibatalkan");
        } else {
          setError("Gagal mengambil data.");
        }
      })
      .finally(() => setLoading(false));

    return () => controller.abort();
  }, []);

  return (
    <section>
      <h2 className="text-xl font-semibold mb-2 text-sky-400">
        4️⃣ Fetch API + AbortController
      </h2>
      {loading && <p className="text-slate-400 italic">Memuat...</p>}
      {error && <p className="text-red-400">{error}</p>}
      {data && (
        <>
          <h3 className="text-lg font-medium mb-1">{data.title}</h3>
          <p className="text-slate-300">{data.body}</p>
        </>
      )}
    </section>
  );
}
