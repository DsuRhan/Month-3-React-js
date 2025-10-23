import { useEffect, useState } from "react";

/*
  🧩 Custom Hook Generic dengan Type Safety
  <T> = tipe data hasil fetch.
*/
export function useFetch<T>(url: string) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(url);
        if (!res.ok) throw new Error(`HTTP Error: ${res.status}`);
        const result = (await res.json()) as T;
        setData(result);
      } catch (err: unknown) {
        // 🧠 Developer Note:
        // - err bertipe unknown, bukan any.
        // - Kita periksa apakah instance Error agar bisa ambil message.
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("Unexpected error occurred");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  /*
    🧠 Developer Note:
    - Generic <T> memungkinkan reuse dengan berbagai tipe data:
      const { data } = useFetch<User[]>("/api/users");
    - Error handling lebih aman dan jelas.
  */
  return { data, loading, error };
}
