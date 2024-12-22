import { configureStore } from "@reduxjs/toolkit"
import bookReducer from "./booksSlice.js"
import noteReducer from "./notesSlice.js"

export default configureStore({
    reducer: {
        books: bookReducer,
        notes: noteReducer
    }
})