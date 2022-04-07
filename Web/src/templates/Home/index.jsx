import { CardCadastro } from '../../components/CardCadastro'
import { CardAlterar } from '../../components/CardAlterar'

import { Container } from './styles'

export const Home = () => {
  return (
    <Container>
      <CardCadastro />
      <CardAlterar />
    </Container>
  )
}
