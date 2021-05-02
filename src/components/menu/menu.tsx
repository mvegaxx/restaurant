import { useRef, useState } from 'react'
import { useAppSelector, useAppDispatch } from '../../app/hooks'
import { SelectMenu } from '../../features/orders/ordersSlice'
import { addOrder, setOrder, resetOrderList } from '../../features/orders/ordersSlice'
import styles from './menu.module.css'

export type TFoodList = {
  name?: string;
  image?: string;
  price?: number;
  quantity?: number;
  status?: boolean;
};

function Menu() {
  const menu = useAppSelector(SelectMenu)
  const [showMenu, setShowMenu] = useState(true)
  const dispatch = useAppDispatch()

  function submitOrder(event: any) {
    
    event.preventDefault()
    dispatch(addOrder())
  }

  function handleSelectedFood(event: any, menuItem: string) {
    dispatch(setOrder({ quantity: parseInt(event.target.value) , name: menuItem }))
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
            // // console.log(menu[index].quantity = 0)
            return (
              <div key={index}>
                <div
                  key={menuItem.name}
                  className={styles.menuItem}
                >
                  <h2>{menuItem.image}</h2>
                  <h3>{menuItem.name}</h3>
                  <h3>{"$" + `${menuItem.price}`}</h3>
                  <div className={styles.quantity}>
                    <input
                      type="number"
                      name="foodItems"
                      min={0}
                      value={menuItem.quantity}
                      onChangeCapture={(event) => handleSelectedFood(event, menuItem.name)}
                    />
                  </div>
                </div>
              </div>
            )
          })}
          <div
            className={styles.cancelButton}
            onClick={() => { 
              setShowMenu(false)
              dispatch(resetOrderList())
            }}>
            Cancelar
          </div>
          <button
            type="submit"
            className={styles.submitButton}
          >
            CREAR ORDEN
          </button>
            {/* <input id="reset" ref={reset} hidden type="reset" /> */}
        </form >
      </div>
      : <a onClick={() => setShowMenu(true)}> ver menu </a>
  )
}

export default Menu
