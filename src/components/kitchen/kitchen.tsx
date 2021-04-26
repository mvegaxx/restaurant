import { useAppSelector } from '../../app/hooks'
import { SelectOrderCounter } from '../../features/orders/ordersSlice'
import OrderNote from '../orders/orderNote'

export default function Kitchen() {
  const orders = useAppSelector(SelectOrderCounter)

  return (
  <div>
    {orders.map((order, index)=>{
       return order.length > 0 && <OrderNote key={index} order={order}/>
    })}
  </div>
  )
}