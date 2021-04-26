import PageContainer from '../components/header/pageContainer'
import Counter from '../features/counter/Counter'

export default function CounterExample() {
  return (
    <PageContainer title="Inicio">
      <Counter />
      <Counter />
    </PageContainer>
  )
}