import { configureStore } from "@reduxjs/toolkit";
import { recepieApi } from "../api/recepieApi";

export const store = configureStore({
  reducer: {
    [recepieApi.reducerPath]: recepieApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(recepieApi.middleware);
  },
});
