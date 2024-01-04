import { configureStore } from "@reduxjs/toolkit";
import { recepieApi } from "../api/recepieApi";
import recepieReducer from "../features/recepieSlice";
export const store = configureStore({
  reducer: {
    recepie: recepieReducer,
    [recepieApi.reducerPath]: recepieApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(recepieApi.middleware);
  },
});
