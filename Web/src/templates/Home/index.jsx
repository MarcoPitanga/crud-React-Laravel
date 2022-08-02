import { CardCadastro } from '../../components/CardCadastro'
import { CardAlterar } from '../../components/CardAlterar'
import { api } from '../../services/api'
import { Container, Linha, Coluna } from './styles'
import { useEffect, useState } from 'react'

export const Home = () => {
  const [pessoas, setPessoas] = useState()
  useEffect(() => {
    api.get('listar').then((res) => {
      setPessoas(res.data)
    })
  }, [])

  return (
    <>
      <Container>
        <CardCadastro />
        <CardAlterar />
      </Container>
      <Container>
        {Boolean(pessoas) && (
          <table>
            <Linha>
              <Coluna>id</Coluna>
              <Coluna>Nome</Coluna>
              <Coluna>Idade</Coluna>
              <Coluna>Sexo</Coluna>
            </Linha>
            {pessoas.map((pessoa) => (
              <Linha key={pessoa.id}>
                <Coluna>{pessoa.id}</Coluna>
                <Coluna>{pessoa.nome}</Coluna>
                <Coluna>{pessoa.idade}</Coluna>
                <Coluna>{pessoa.sexo}</Coluna>
              </Linha>
            ))}
          </table>
        )}
      </Container>
    </>
  )
}
