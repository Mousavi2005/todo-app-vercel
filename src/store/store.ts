import { configureStore } from '@reduxjs/toolkit'
import activeSectionReducerReducer from '../slices/activeSection'
import darkModeReducer from '../slices/darkMode'

export const store = configureStore({
    reducer: {
        activeSection: activeSectionReducerReducer,
        darkMode: darkModeReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
