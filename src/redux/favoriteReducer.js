import { createSlice } from '@reduxjs/toolkit'
const initialState= {
    favProducts: []
  }
export const favoriteSlice = createSlice({
  name: 'favorite',
  initialState,
  reducers: {
    addToFavorite: (state,action) => {
      const item = state.favProducts.find(item => item.id === action.payload.id)
      if(!item) {
        state.favProducts.push(action.payload)
      }
      
    },
    removeFavorite: (state,action) => {
      state.favProducts = state.favProducts.filter(item => item.id !== action.payload) 
    }
  }
})

// Action creators are generated for each case reducer function
export const { addToFavorite, removeFavorite } = favoriteSlice.actions

export default favoriteSlice.reducer