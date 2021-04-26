import { useAppSelector, useAppDispatch } from '../../app/hooks'
import {
  decrement,
  increment,
  SelectTableCounter
} from '../../features/tables/tablesSlice'
import Tables from './tables'
import styles from './Counter.module.css'

function TableManager() {
  const dispatch = useAppDispatch()
  const count = useAppSelector(SelectTableCounter)

  return (
    <>
      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
        <span className={styles.value}>{count}</span>
        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          +
        </button>
      </div>
      <Tables />
    </>
  )
}

export default TableManager
