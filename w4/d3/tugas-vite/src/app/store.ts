import { configureStore } from "@reduxjs/toolkit"
import counterReducer from "../features/counter/counterSlice"
import userReducer from "../features/users/usersSlice"
import egoReducer from "../features/ego/egoSlice"

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    users: userReducer,
    ego: egoReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
