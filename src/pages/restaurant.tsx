import Link from 'next/link'
import Menu from '../components/menu/menu'
import TableManager from '../components/tables/tablesManager'

export default function Restaurant() {
  return (
    <>
      <Link href="/">inicio</Link>
      <Link href="/counterExample">Counter example</Link>
      <TableManager></TableManager>
      <Menu/>
    </>
  )
}