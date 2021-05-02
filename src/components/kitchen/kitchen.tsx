import { useAppSelector } from '../../app/hooks'
import { SelectOrderCounter } from '../../features/orders/ordersSlice'
import OrderNote from '../orders/orderNote'
import styles from '../orders/order.module.css'

export default function Kitchen() {
  const orders = useAppSelector(SelectOrderCounter)

  return (
  <div  className={styles.noteContainer}>
    {orders.map((order, index)=>{
       return <OrderNote key={index} order={order}/>
    })}
  </div>
  )
}