import { createSlice } from '@reduxjs/toolkit'



const initialState= {
    isFetching: false,
    currentUser: null,
    currentUserSecret:null,
    error: null,
  }
export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    startFetch: (state) =>{
      state.isFetching = true
    },
    loginUser: (state,action) => {
        state.currentUser = action.payload.user
        state.isFetching = false 
        state.currentUserSecret = action.payload.secret
    },
    loginError: (state,action) => {
        state.error = action.payload
        state.isFetching = false
    },
    logoutUser: (state) =>{
      state.currentUser = null
    }

  }
})

// Action creators are generated for each case reducer function
export const { startFetch, loginUser, logoutUser, loginError } = userSlice.actions

export default userSlice.reducer