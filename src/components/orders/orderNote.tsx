import { TFood } from "../../features/menu/menuSlice"

export default function OrderNote({order}: any) {
  return (
  <div>
    {console.log(order)}
    {order.map((item: TFood)=>{
      return item.image
    })}
  </div>
  )
}