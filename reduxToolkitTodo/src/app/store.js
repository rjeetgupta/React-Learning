import { configureStore } from "@reduxjs/toolkit"
import todoReducer from "../features/todo/todoSlice"

// Define the store with the reducer
export const store = configureStore({
    reducer : todoReducer
})