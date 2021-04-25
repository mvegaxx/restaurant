import { useState } from 'react'

import { useAppSelector, useAppDispatch } from '../../app/hooks'
import {SelectMenu} from '../../features/menu/menuSlice'
import {addOrder} from '../../features/orders/ordersSlice'
import styles from './Counter.module.css'

function Menu() {
  const menu = useAppSelector(SelectMenu)
  const dispatch = useAppDispatch()
  return (
    <div>
      {menu.map((menuItem: any) => {
        return (
          <button key={menuItem.name} onClick={()=> dispatch(addOrder(menuItem))}>
            <h1>{menuItem.name}</h1>
            <h1>{menuItem.image}</h1>
            <h1>{menuItem.prcie}</h1>
            <input type="checkbox"  />
          </button>
        )
      })}
    </div>
  )
}

export default Menu
