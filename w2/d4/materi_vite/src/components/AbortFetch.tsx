import { useState, useEffect } from 'react';

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface FetchError extends Error {
  name: string;
}

function AbortFetchComponent() {
  const [data, setData] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<FetchError | null>(null);

  useEffect(() => {
    const abortController = new AbortController(); // Buat AbortController
    const signal = abortController.signal; // Dapatkan signal

    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1', { signal }); // Teruskan signal
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        setData(result);
      } catch (err: FetchError | unknown) {
if (err instanceof DOMException && err.name === 'AbortError') {
  console.log('Fetch dibatalkan');
        } else {
          setError(err as FetchError);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    // Cleanup function: batalkan permintaan saat komponen di-unmount
    return () => {
      abortController.abort();
      console.log('Permintaan dibatalkan saat cleanup.');
    };
  }, []);

  if (loading) return <p>Memuat data (dengan pembatalan)...</p>;
  if (error) return <p>Terjadi kesalahan:</p>;

  return (
    <div>
      <h2>Data dari Fetch API (dengan AbortController)</h2>
      <h3>{data?.title}</h3>
      <p>{data?.body}</p>
    </div>
  );
}

export default AbortFetchComponent;