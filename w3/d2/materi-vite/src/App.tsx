import { useCharacterImage } from "./hooks/useCharacterImage";
import { CharacterSearch } from "./components/CharacterSearch";
import { CharacterImage } from "./components/CharacterImage";
import { CharacterToggleGroup } from "./components/CharacterToggleGroup";

function App() {
  const {
    operatorName,
    setOperatorName,
    imageType,
    setType,
    imageUrl,
    loading,
    error,
    skinUrls,
    nextSkin,
  } = useCharacterImage();

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center p-6">
      <h1 className="text-3xl text-white mb-6 font-bold">Arknights Operator Viewer</h1>
      <p className="text-white mb-2">Switch Space with Underscore</p>

      <CharacterSearch value={operatorName} onChange={setOperatorName} />
      <CharacterImage imageUrl={imageUrl} name={operatorName} loading={loading} error={error} />

      {operatorName && (
        <div className="flex flex-col items-center gap-3">
          <CharacterToggleGroup onSelect={setType} currentType={imageType} />
          {imageType === "skin" && skinUrls.length > 1 && (
            <button
              onClick={nextSkin}
              className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition"
            >
              Next Skin ({skinUrls.length})
            </button>
          )}
        </div>
      )}
    </div>
  );
}

export default App;
