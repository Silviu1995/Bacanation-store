import cartReducer from "./cartReducer";
import favoriteReducer from "./favoriteReducer";
import userReducer from "./userReducer";
import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import modalReducer from "./modalsReducer";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const persistedCart = persistReducer(persistConfig, cartReducer);
const persistedFavorite = persistReducer(persistConfig, favoriteReducer);
export const store = configureStore({
  reducer: {
    cart: persistedCart,
    favorite: persistedFavorite,
    user: userReducer,
    modal: modalReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export let persistor = persistStore(store);