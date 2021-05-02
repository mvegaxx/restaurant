import { TFoodList } from "../../features/menu/menuSlice"
import styles from './order.module.css'

export default function OrderNote({ order }: any) {
  return (
    <div className={styles.note}>
      <p className={styles.noteTitle}> mesa: {order.table} </p>
      <div className={styles.orderList}>
        {order.order?.map((item: TFoodList) => {
          return <div>{`${item.image}  x ${item.quantity}`}</div>
        })}
      </div>
    </div>
  )
}