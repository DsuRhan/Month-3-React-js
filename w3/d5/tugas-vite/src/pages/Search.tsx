import { useSearchParams } from 'react-router-dom';

export default function Search() {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('q') || '';

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const input = e.currentTarget.elements.namedItem('q') as HTMLInputElement;
    setSearchParams({ q: input.value });
  };

  return (
    <section className="text-center py-10">
      <h2 className="text-3xl font-bold text-blue-600 mb-4">🔎 Pencarian</h2>

      <form onSubmit={handleSearch} className="space-x-2 mb-6">
        <input
          type="text"
          name="q"
          defaultValue={query}
          placeholder="Cari sesuatu..."
          className="border border-gray-300 rounded px-3 py-1"
        />
        <button type="submit" className="bg-blue-600 text-white px-4 py-1 rounded">
          Cari
        </button>
      </form>

      {query ? (
        <p className="text-gray-700">
          Hasil pencarian untuk: <span className="font-semibold">{query}</span>
        </p>
      ) : (
        <p className="text-gray-500">Masukkan kata kunci untuk mencari.</p>
      )}
    </section>
  );
}
