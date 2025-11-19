import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../store.ts";

const initialState = {
   auth: true,
};

export const authCheck = createSlice({
   name: "auth",
   initialState,
   reducers: {
      setAuth(state, action) {
         state.auth = action.payload;
      }
   },
});

export const { setAuth } = authCheck.actions;
export const auth = (state: RootState) => state.auth.auth;
export default authCheck.reducer;
