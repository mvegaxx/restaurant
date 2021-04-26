import { useEffect, useState } from 'react'
import { useAppSelector, useAppDispatch } from '../../app/hooks'
import { SelectMenu } from '../../features/menu/menuSlice'
import { addOrder } from '../../features/orders/ordersSlice'
import styles from './menu.module.css'

function Menu() {
  const [showMenu, setShowMenu] = useState(false)
  const [SelectedFood, setSelectedFood] = useState<any>([])
  const menu = useAppSelector(SelectMenu)
  const dispatch = useAppDispatch()

  function submitOrder(event: any) {
    event.preventDefault()
    dispatch(addOrder(SelectedFood))
  }

  useEffect(()=>{
    setSelectedFood([])
  },[showMenu])


  function handleSelectedFood(event: any, menuItem: {}) {
    const filtered: {}[] = SelectedFood.filter((value: {}) => value !== menuItem)
    const newArray: {}[] = new Array(parseInt(event.target.value)).fill(menuItem)
    const finalArray: {}[] = newArray.concat(filtered)
    setSelectedFood(finalArray)
  }


  return (
    showMenu
      ?<div className={styles.menuContainer}>
       <form onSubmit={submitOrder} className={styles.menu}>
          <h1
            className={styles.title}
          >
            Menu
          </h1>
          {menu.map((menuItem: any, index) => {
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
                    onChange={(event) => handleSelectedFood(event, menuItem)}
                  />
                  </div>
                </div>
              </div>
            )
          })}
          <div
            className={styles.cancelButton} 
            onClick={()=> setShowMenu(false)}>
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
      : <a onClick={()=> setShowMenu(true)}> ver menu </a>
  )
}

export default Menu
