import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    isDark: true
}

const darkMode = createSlice({
    name: 'dark mode',
    initialState,
    reducers: {
        toggleDarkMode: (state) => {state.isDark = !state.isDark}
    }
})

export const {toggleDarkMode} = darkMode.actions
export default darkMode.reducer
