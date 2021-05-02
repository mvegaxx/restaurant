import { compose, createSlice } from "@reduxjs/toolkit";
import type { AppState } from "../../app/store";
import { initialState as Init } from "../menu/menuSlice";

export type TFoodList = {
  name: string;
  image: string;
  price: number;
  quantity: number;
  status: boolean;
};

export interface OrdersState {
  tableSelected: number;
  menu: TFoodList[];
  orderList: [];
}

const initialState: OrdersState = {
  tableSelected: 0,
  menu: Init,
  orderList: [],
};

export const ordersSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    resetOrderList: (state) =>{
      state.menu = Init
    },
    selectTable: (state, action) => {
      state.tableSelected = action.payload;
    },
    setOrder: (state, action) => {
      state.menu.filter((item) => {
        action.payload.name == item.name
          ? item.quantity = action.payload.quantity
          : null;
      });
    },
    addOrder: (state) => {
      const orderIOtems = state.menu.filter((item) => {
        
        return item.quantity && item;
      });
      orderIOtems.length > 0 && state.orderList.push({
        table: state.tableSelected,
        order: orderIOtems,
      });
      state.menu = Init;
    },
  },
});

export const { addOrder, selectTable, setOrder, resetOrderList } = ordersSlice.actions;

export const SelectOrderCounter = (state: AppState) => state.orders.orderList;
export const SelectMenu = (state: AppState) => state.orders.menu;

export default ordersSlice.reducer;
