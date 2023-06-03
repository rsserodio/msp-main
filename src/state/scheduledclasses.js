import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState = {
    scheduledclasses : [{name:"Yoga", instructor:"Luis P.", capacity:15, duration:"30 days", date:"26/06/2023 12:45"},{name:"Pilates", instructor:"Antonio R.", capacity:20, duration:"30 days", date:"28/06/2023 09:11"}]
}

export const slice = createSlice({
    name: 'scheduledclasses',
    initialState,
    reducers: {
        addScheduledClass: (state, action) => ({
            ...state, scheduledclasses: [...state.scheduledclasses, action.payload]
        })
    }
})

export const {addScheduledClass} = slice.actions

export default slice.reducer