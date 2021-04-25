import { createSlice } from "@reduxjs/toolkit";
import { useAppSelector } from "../../app/hooks";

import type { AppState } from "../../app/store";
import type { TFood } from "../menu/menuSlice";
import { SelectTableCounter } from "../tables/tablesSlice";

type TOrders = {
  orders: TFood[];
};

export interface OrdersState {
  tableSelected: number;
  orderList: TOrders[][];
}

const initialState: OrdersState = {
  tableSelected: 0,
  orderList: [[]],
};

export const ordersSlice = createSlice({
  name: "orders",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    addOrder: (state, action) => {
      state.orderList[state.tableSelected].push(action.payload)
    },
    selectTable: (state, action) => {
      if(action.payload + 1 > state.orderList.length){
        let comp = action.payload  - state.orderList.length + 1
        let newArray = Array(comp).fill([])
        state.orderList = state.orderList.concat(newArray)
       }
      state.tableSelected = action.payload;
    },
  },
});

export const { addOrder, selectTable } = ordersSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.orders.count)`
export const SelectOrderCounter = (state: AppState) => state.orders.orderList;

export default ordersSlice.reducer;
