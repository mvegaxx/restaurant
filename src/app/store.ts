import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'

import counterReducer from '../features/counter/counterSlice'
import tablesReducer from '../features/tables/tablesSlice'
import menuReducer from '../features/menu/menuSlice'
import ordersReducer from '../features/orders/ordersSlice'

export function makeStore() {
  return configureStore({
    reducer: { 
      counter: counterReducer,
      tables: tablesReducer,
      menu: menuReducer,
      orders: ordersReducer,
    },
  })
}

const store = makeStore()

export type AppState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action<string>
>

export default store
