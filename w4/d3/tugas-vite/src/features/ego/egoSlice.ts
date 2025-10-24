import { createSlice, createAsyncThunk,type PayloadAction } from "@reduxjs/toolkit"
import type { CharacterEgo } from "./egoAPI"
import { egoData } from "./egoAPI"

interface EgoState {
  characters: CharacterEgo[]
  selectedChar: CharacterEgo | null
  selectedEgo: string | null
  loading: boolean
}

const initialState: EgoState = {
  characters: [],
  selectedChar: null,
  selectedEgo: null,
  loading: false,
}

// simulasi fetch async (seperti dari API)
export const fetchEgos = createAsyncThunk("ego/fetchEgos", async () => {
  return new Promise<CharacterEgo[]>((resolve) => {
    setTimeout(() => resolve(egoData), 600)
  })
})

const egoSlice = createSlice({
  name: "ego",
  initialState,
  reducers: {
    selectCharacter: (state, action: PayloadAction<CharacterEgo>) => {
      state.selectedChar = action.payload
      state.selectedEgo = action.payload.egos[0]?.name ?? null
    },
    selectEgo: (state, action: PayloadAction<string>) => {
      state.selectedEgo = action.payload
    },
    closePopup: (state) => {
      state.selectedChar = null
      state.selectedEgo = null
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchEgos.pending, (state) => {
        state.loading = true
      })
      .addCase(fetchEgos.fulfilled, (state, action) => {
        state.loading = false
        state.characters = action.payload
      })
  },
})

export const { selectCharacter, selectEgo, closePopup } = egoSlice.actions
export default egoSlice.reducer
