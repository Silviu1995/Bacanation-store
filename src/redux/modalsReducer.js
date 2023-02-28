import { createSlice } from '@reduxjs/toolkit'



const initialState= {
    loginPopUp: false,
    userPopUp: false,
  }
export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    toogleLoginModal: (state,action) =>{
      state.loginPopUp = action.payload
    },
    toogleUserModal: (state,action) =>{
      state.userPopUp = action.payload
    }

  }
})

// Action creators are generated for each case reducer function
export const { toogleLoginModal,toogleUserModal } = modalSlice.actions

export default modalSlice.reducer