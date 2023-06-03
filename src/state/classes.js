import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState = {
    classes : [{name:"Yoga", instructor:"Luis P.", capacity:15, duration:"30 days"},{name:"Pilates", instructor:"Antonio R.", capacity:20, duration:"30 days"}]
}

export const slice = createSlice({
    name: 'classes',
    initialState,
    reducers: {
        addClass: (state, action) => ({
            ...state, classes: [...state.classes, action.payload]
        })
    }
})

export const {addClass} = slice.actions

export default slice.reducer

