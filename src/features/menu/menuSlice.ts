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

export const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    toggleAvailability: (state, action) => {
    },
  },
});

export const { toggleAvailability } = menuSlice.actions;

export const SelectMenu = (state: AppState) => state.menu;

export default menuSlice.reducer;
