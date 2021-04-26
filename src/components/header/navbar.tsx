import Link from "next/link";
import Menu from "../menu/menu";
import styles from '../../styles/Home.module.css'

export default function Navbar() {
  return (
    <header className={styles.header}>
      <Link href="/">inicio</Link>
      <Link href="/restaurant">restaurant</Link>
      <Link href="/counterExample">Counter example</Link>
      <Menu />
    </header>
  )
}