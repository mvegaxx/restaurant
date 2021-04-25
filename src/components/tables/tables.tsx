import { useAppDispatch, useAppSelector } from '../../app/hooks'
import {
  SelectTableCounter
} from '../../features/tables/tablesSlice'
import styles from './Counter.module.css'
import { selectTable } from '../../features/orders/ordersSlice'

function Tables() {
  const count = useAppSelector(SelectTableCounter)
  const tables = []
  const dispatch = useAppDispatch()

  for (let index = 0; index < count; index++) {
    tables.push( <div key={index} className={styles.table} onClick={()=>dispatch(selectTable(index))}></div>)
    
  }

  return (
      <div className={styles.room} >
        {tables}
      </div>
  )
}

export default Tables
