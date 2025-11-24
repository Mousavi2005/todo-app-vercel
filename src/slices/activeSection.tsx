import { createSlice } from "@reduxjs/toolkit";

type Section = 'All' | 'Active' | 'Completed'

const initialState = {
    activeSection: 'All' as Section
}

const activeSection = createSlice({
    name: "active section",
    initialState,
    reducers: {
        setActiveSection: (state, action) => { state.activeSection = action.payload }
    }
})

export const { setActiveSection } = activeSection.actions
export default activeSection.reducer
