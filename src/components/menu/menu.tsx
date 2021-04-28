import { useEffect, useState } from 'react'
import { useAppSelector, useAppDispatch } from '../../app/hooks'
import { SelectMenu, TFood, TFoodList } from '../../features/menu/menuSlice'
import { addOrder } from '../../features/orders/ordersSlice'
import styles from './menu.module.css'

function Menu() {
  const menu = useAppSelector(SelectMenu)
  const [showMenu, setShowMenu] = useState(true)
  const [quantity, setQuantity] = useState(0)
  const [nameItem, setNameItem] = useState("")
  const dispatch = useAppDispatch()

  function submitOrder(event: any) {
    event.preventDefault()
    dispatch(addOrder({ quantity, nameItem }))
  }

  function handleSelectedFood(event: any, menuItem: string) {
    setQuantity(event.target.value)
    setNameItem(menuItem)
    console.log({quantity: event.target.value, name: menuItem})
  }

  return (
    showMenu
      ? <div className={styles.menuContainer}>
        <form onSubmit={submitOrder} className={styles.menu}>
          <h1
            className={styles.title}
          >
            Menu
          </h1>
          {menu.map((menuItem: any, index) => {
            // console.log(menu[index].quantity = 0)

            return (
              <div key={index}>
                <div
                  key={menuItem.name}
                  className={styles.menuItem}
                >
                  <h2>{menuItem.image}</h2>
                  <h3>{menuItem.name}</h3>
                  <h3>{"$" + `${menuItem.prcie}`}</h3>
                  <div className={styles.quantity}>
                    <input
                      type="number"
                      name="foodItems"
                      min="0"
                      defaultValue="0"
                      onChange={(event) => handleSelectedFood(event, menuItem.name)}
                    />
                  </div>
                </div>
              </div>
            )
          })}
          <div
            className={styles.cancelButton}
            onClick={() => setShowMenu(false)}>
            Cancelar
          </div>
          <button
            type="submit"
            className={styles.submitButton}
          >
            CREAR ORDEN
          </button>
        </form >
      </div>
      : <a onClick={() => setShowMenu(true)}> ver menu </a>
  )
}

export default Menu
