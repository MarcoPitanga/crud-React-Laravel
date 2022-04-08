import { useState } from 'react'
import { Pessoa } from './../../models/Pessoa'
import { Titulo, Card, Content, ContentBusca } from './styles'

const initial = { id: '', nome: '', idade: '', sexo: '1' }

export const CardAlterar = () => {
  const [pessoa, setPessoa] = useState(initial)
  const novaPessoa = new Pessoa()

  const handleChangePessoa = (campo) => (e) => {
    setPessoa((pessoa) => ({ ...pessoa, [campo]: e.target.value }))
  }

  const buscar = async () => {
    await novaPessoa.buscar(pessoa.id)
    setPessoa(novaPessoa)
  }

  const alterar = async () => {
    await novaPessoa.alterar(pessoa.id, pessoa.nome, pessoa.idade, pessoa.sexo)
  }

  const deletar = () => {
    novaPessoa.deletar(pessoa.id)
    setPessoa(initial)
  }

  return (
    <Card className="card bg-dark container">
      <div className="card-header">
        <Titulo>Edição</Titulo>
      </div>
      <Content className="card-body">
        <ContentBusca>
          <input
            className="form-control"
            type="text"
            placeholder="Id"
            value={pessoa.id}
            onChange={handleChangePessoa('id')}
          />
          <button type="button" className="btn btn-primary btn-sm" onClick={buscar}>
            Buscar
          </button>
        </ContentBusca>
        <input
          className="form-control"
          type="text"
          placeholder="Nome"
          value={pessoa.nome}
          onChange={handleChangePessoa('nome')}
        />
        <input
          className="form-control"
          type="text"
          placeholder="Idade"
          value={pessoa.idade}
          onChange={handleChangePessoa('idade')}
        />
        <select className="form-select" placeholder="Sexo" value={pessoa.sexo} onChange={handleChangePessoa('sexo')}>
          <option value="1" disabled>
            Sexo
          </option>
          <option value="M">Masculino</option>
          <option value="F">Feminino</option>
          <option value="O">Outro</option>
        </select>
        <button type="button" className="btn btn-primary btn-sm" onClick={alterar} style={{ marginRight: '15px' }}>
          Alterar
        </button>
        <button type="button" className="btn btn-primary btn-sm" onClick={deletar}>
          Deletar
        </button>
      </Content>
    </Card>
  )
}
