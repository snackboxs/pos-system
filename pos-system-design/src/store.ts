import { configureStore } from "@reduxjs/toolkit";
import { themeSlice } from "./features/theme/themeSlice";
import pageReducer from "./features/page/pageSlice";

export const store = configureStore({
   reducer: {
      theme: themeSlice.reducer,
      activePage: pageReducer,
   },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;
