import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState = {
    credentials : [{name:"user1", pass:"pass1", role:"USER"},{name:"user2", pass:"pass2", role:"ADMIN"}],
    isUserLoggedIn: false
}

export const slice = createSlice({
    name: 'credentials',
    initialState,
    reducers: {
        addUser: (state, action) => ({
            ...state, credentials: [...state.credentials, action.payload]
        }),
        userLogIn: (state, action) => ({
            ...state, isUserLoggedIn: true
        }),
        userLogOut: (state, action) => ({
            ...state, isUserLoggedIn: false
        })
    }
})

export const {addUser, userLogIn, userLogOut} = slice.actions

export default slice.reducer