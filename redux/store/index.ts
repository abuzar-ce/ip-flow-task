import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { apiSlice, darkWebSlice, jwtSlice, nuclieSlice } from "./apiSlice";

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    [nuclieSlice.reducerPath]: nuclieSlice.reducer,
    [darkWebSlice.reducerPath]: darkWebSlice.reducer,
    [jwtSlice.reducerPath]: jwtSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(apiSlice.middleware)
      .concat(nuclieSlice.middleware)
      .concat(darkWebSlice.middleware)
      .concat(jwtSlice.middleware),
});

// enabling automatic refetching
setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
