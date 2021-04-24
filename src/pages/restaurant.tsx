import Link from 'next/link'
import Counter from '../features/counter/Counter'

export default function Restaurant() {
  return (
    <>
      <Link href="/">inicio</Link>
      <Counter />
      <Counter />
    </>
  )
}