import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../store.ts";

// 1. Data Structure
interface CartItem {
   id: string;
   name: string;
   price: number;
   description: string;
   count: number;
}

interface ItemSelectedState {
   items: CartItem[];
}

const initialState: ItemSelectedState = {
   items: [
      {
         id: "card-0",
         name: "Spicy Chicken Burger",
         price: 15,
         description: "Lorem ipsum dolor sit amet",
         count: 2,
      },
      {
         id: "card-1",
         name: "Double Cheese Pizza",
         price: 22,
         description: "Consectetur adipiscing elit",
         count: 0,
      },
      {
         id: "card-2",
         name: "French Fries",
         price: 5,
         description: "Sed do eiusmod tempor",
         count: 1,
      },
      {
         id: "card-3",
         name: "Soda Pop",
         price: 3,
         description: "Incididunt ut labore et dolore",
         count: 3,
      },
      {
         id: "card-4",
         name: "Ice Cream Cone",
         price: 7,
         description: "Magna aliqua enim minim",
         count: 1,
      },
   ],
};

export const itemSelectedSlice = createSlice({
   name: "itemSelected",
   initialState,
   reducers: {
      changeItemCount: (
         state,
         action: PayloadAction<{ id: string; change: number }>
      ) => {
         const { id, change } = action.payload;
         const item = state.items.find((i) => i.id === id);

         if (item) {
            item.count = Math.max(0, item.count + change);
         }
      },
   },
});
export const selectItemCount = (state: RootState, id: string): number => {
   const item = state.itemSelected.items.find((i) => i.id === id);
   return item ? item.count : 0;
};

export const selectItemDetails = (
   state: RootState,
   id: string
): CartItem | undefined => {
   return state.itemSelected.items.find((i) => i.id === id);
};

export const selectAllItems = (state: RootState) => state.itemSelected.items;

export const { changeItemCount } = itemSelectedSlice.actions;
export default itemSelectedSlice.reducer;
