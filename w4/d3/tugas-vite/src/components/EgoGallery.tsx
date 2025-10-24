import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import type { RootState, AppDispatch } from "../app/store"
import { fetchEgos, selectCharacter, selectEgo, closePopup } from "../features/ego/egoSlice"
import { formatWikiName } from "../utils/formatWikiName"
import { motion, AnimatePresence } from "framer-motion"

export default function EgoGallery() {
  const dispatch = useDispatch<AppDispatch>()
  const { characters, selectedChar, selectedEgo, loading } = useSelector(
    (state: RootState) => state.ego
  )

  useEffect(() => {
    dispatch(fetchEgos())
  }, [dispatch])

  if (loading) {
    return <p className="text-center py-10 text-gray-500">Loading EGO data...</p>
  }

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-6 text-blue-600">
        Limbus EGO Gallery
      </h1>

      <div className="grid grid-cols-6 gap-6">
        {characters.map((char) => {
          const charImg = `https://limbuscompany.wiki.gg/images/thumb/${formatWikiName(
            `${char.character}_ID_Photo_MP`
          )}.png/200px-${formatWikiName(`${char.character}_ID_Photo_MP`)}.png`

          return (
            <div
              key={char.character}
              onClick={() => dispatch(selectCharacter(char))}
              className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center cursor-pointer hover:scale-105 transition-transform"
            >
              <img
                src={charImg}
                alt={char.character}
                className="rounded-lg mb-3 w-full object-cover"
              />
              <p className="font-semibold text-gray-800">{char.character}</p>
            </div>
          )
        })}
      </div>

      <AnimatePresence>
        {selectedChar && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{
                opacity: 1,
                scale: 1,
                transition: { duration: 0.4, ease: "easeOut" },
              }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="bg-white p-6 rounded-xl shadow-xl w-96 text-center relative border border-gray-300"
            >
              <button
                onClick={() => dispatch(closePopup())}
                className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>

              <h2 className="text-2xl font-bold mb-4">{selectedChar.character}</h2>

              <div className="flex flex-wrap justify-center gap-2 mb-4">
                {selectedChar.egos.map((ego, index) => (
                  <button
                    key={ego.name}
                    onClick={() => dispatch(selectEgo(ego.name))}
                    className={`px-3 py-1 rounded text-sm border ${
                      selectedEgo === ego.name
                        ? "bg-blue-600 text-white"
                        : "bg-gray-200 hover:bg-gray-300"
                    }`}
                  >
                    EGO {index + 1}
                  </button>
                ))}
              </div>

              {selectedEgo && (
                <motion.div
                  key={selectedEgo}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0, transition: { duration: 0.3 } }}
                >
                  <img
                    src={`https://limbuscompany.wiki.gg/images/${formatWikiName(
                      `${selectedEgo}_${selectedChar.character}`
                    )}.png`}
                    alt={selectedEgo}
                    className="rounded-lg mb-2 w-full object-cover"
                  />
                  <p className="font-semibold text-gray-800">{selectedEgo}</p>
                </motion.div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
