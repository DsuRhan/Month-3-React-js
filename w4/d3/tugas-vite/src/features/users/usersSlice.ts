import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

interface User {
  id: number
  name: string
  email: string
}

interface UsersState {
  list: User[]
  status: 'idle' | 'loading' | 'succeeded' | 'failed'
  error: string | null
}

const initialState: UsersState = {
  list: [],
  status: 'idle',
  error: null,
}

// Async thunk untuk fetch data pengguna
export const fetchUsers = createAsyncThunk<User[]>('users/fetch', async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  return (await res.json()) as User[]
})

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.list = action.payload
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message ?? 'Terjadi kesalahan saat mengambil data'
      })
  },
})

export default usersSlice.reducer
