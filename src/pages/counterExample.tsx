import Link from 'next/link'
import Counter from '../features/counter/Counter'

export default function CounterExample() {
  return (
    <>
      <Link href="/">inicio</Link>
      <Link href="/restaurant">restaurant</Link>
      <Counter />
      <Counter />
    </>
  )
}