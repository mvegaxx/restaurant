import { createSlice } from "@reduxjs/toolkit";

import type { AppState } from "../../app/store";

export type TFood = {
  name: string;
  image: string;
  prcie: string;
  status: boolean;
};



const initialState: TFood[] = [
  { name: "Hamburguesa", image: "🍔", prcie: "123", status: false },
  { name: "Pizza", image: "🍕", prcie: "222", status: true },
  { name: "Taco", image: "🌮", prcie: "222", status: true },
  { name: "Hot dog", image: "🌭", prcie: "222", status: true },
  { name: "Papas fritas", image: "🍟", prcie: "222", status: true },
  { name: "Sandwich", image: "🥪", prcie: "222", status: true },
  { name: "Ensalada", image: "🥗", prcie: "222", status: true },
  { name: "Spageti", image: "🍝", prcie: "222", status: true },
  { name: "Sushi", image: "🍣", prcie: "222", status: true },
  { name: "Ramen", image: "🍜", prcie: "222", status: true },
  { name: "Hotcakes", image: "🥞", prcie: "222", status: true },
  { name: "Carne", image: "🍖", prcie: "222", status: true },
];

export const menuSlice = createSlice({
  name: "menu",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    toggleAvailability: (state, action) => {
    },
  },
});

export const { toggleAvailability } = menuSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.menu.count)`
export const SelectMenu = (state: AppState) => state.menu;

export default menuSlice.reducer;
