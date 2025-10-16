interface CharacterImageProps {
  imageUrl: string;
  name: string;
  loading: boolean;
  error: string;
}

export function CharacterImage({ imageUrl, name, loading, error }: CharacterImageProps) {
  if (!name) return null;

  return (
    <div className="flex flex-col items-center gap-2">
      <h2 className="text-xl text-gray-200">{name}</h2>

      {loading && <p className="text-blue-400 animate-pulse">Loading image...</p>}

      {!loading && error && (
        <p className="text-red-400 text-sm">{error}</p>
      )}

      {!loading && imageUrl && (
        <img
          src={imageUrl}
          alt={name}
          className="rounded-xl border border-gray-600 shadow-lg w-auto h-140 transition-all duration-300"
        />
      )}
    </div>
  );
}
