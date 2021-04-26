import PageContainer from '../components/header/pageContainer'
import Kitchen from '../components/kitchen/kitchen'
import TableManager from '../components/tables/tablesManager'
import styles from '../styles/Home.module.css'

export default function Restaurant() {
  return (
    <PageContainer title="Restaurant">
      <div className={styles.room}>
        <div className={styles.tables}>
          <TableManager />
        </div>
        <div className={styles.kitchen}>
          <Kitchen  />
        </div>
        <div className={styles.checkout} />
      </div>
    </PageContainer>
  )
}