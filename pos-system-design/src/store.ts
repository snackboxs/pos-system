import { configureStore } from "@reduxjs/toolkit";
import { themeSlice } from "./features/theme/themeSlice";
import pageReducer from "./features/page/pageSlice";
import { authCheck } from "./features/auth/authCheck";
// import { itemSelectedSlice } from "./features/itemSelected/itemSelectedSlice";
import itemSelectedReducer from "./features/itemSelected/itemSelectedSlice";

export const store = configureStore({
   reducer: {
      theme: themeSlice.reducer,
      activePage: pageReducer,
      auth: authCheck.reducer,
      // itemSelected: itemSelectedSlice.reducer,
      itemSelected: itemSelectedReducer,
   },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;
