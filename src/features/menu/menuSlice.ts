import { createSlice } from "@reduxjs/toolkit";

import type { AppState } from "../../app/store";

export type TFoodList = {
  name: string;
  image: string;
  price: number;
  quantity: number;
  status: boolean;
};

export type TFood = {
  Hamburguer: TFoodList;
  Pizza: TFoodList;
  Taco: TFoodList;
  HotDog: TFoodList;
  Fries: TFoodList;
  Sandwich: TFoodList;
  Salad: TFoodList;
  Spageti: TFoodList;
  Sushi: TFoodList;
  Ramen: TFoodList;
  Hotcakes: TFoodList;
  Steak: TFoodList;
};

export const initialState: TFoodList[] = [
  { name: "Hamburguesa", image: "🍔", price: 123, status: false, quantity:0 },
  { name: "Pizza", image: "🍕", price: 222, status: true, quantity:0 },
  { name: "Taco", image: "🌮", price: 222, status: true, quantity:0 },
  { name: "Hot dog", image: "🌭", price: 222, status: true, quantity:0 },
  { name: "Papas fritas", image: "🍟", price: 222, status: true, quantity:0 },
  { name: "Sandwich", image: "🥪", price: 222, status: true, quantity:0 },
  { name: "Ensalada", image: "🥗", price: 222, status: true, quantity:0 },
  { name: "Spageti", image: "🍝", price: 222, status: true, quantity:0 },
  { name: "Sushi", image: "🍣", price: 222, status: true, quantity:0 },
  { name: "Ramen", image: "🍜", price: 222, status: true, quantity:0 },
  { name: "Hotcakes", image: "🥞", price: 222, status: true, quantity:0 },
  { name: "Carne", image: "🍖", price: 222, status: true, quantity:0 },
];
//   Hamburguer: { name: "Hamburguesa", image: "🍔", price: 123, status: false, quantity:0 },
//   Pizza: { name: "Pizza", image: "🍕", price: 222, status: true, quantity:0 },
//   Taco: { name: "Taco", image: "🌮", price: 222, status: true, quantity:0 },
//   HotDog: { name: "Hot dog", image: "🌭", price: 222, status: true, quantity:0 },
//   Fries: { name: "Papas fritas", image: "🍟", price: 222, status: true, quantity:0 },
//   Sandwich: { name: "Sandwich", image: "🥪", price: 222, status: true, quantity:0 },
//   Salad: { name: "Ensalada", image: "🥗", price: 222, status: true, quantity:0 },
//   Spageti: { name: "Spageti", image: "🍝", price: 222, status: true, quantity:0 },
//   Sushi: { name: "Sushi", image: "🍣", price: 222, status: true, quantity:0 },
//   Ramen: { name: "Ramen", image: "🍜", price: 222, status: true, quantity:0 },
//   Hotcakes: { name: "Hotcakes", image: "🥞", price: 222, status: true, quantity:0 },
//   Steak: { name: "Carne", image: "🍖", price: 222, status: true, quantity:0 },
// };

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
