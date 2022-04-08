import { useState } from 'react'
import { Pessoa } from './../../models/Pessoa'
import { Titulo, Card, Content } from './styles'

const initial = { id: '', nome: '', idade: '', sexo: '1' }

export const CardCadastro = () => {
  const [pessoa, setPessoa] = useState(initial)
  const novaPessoa = new Pessoa()

  const handleChangePessoa = (campo) => (e) => {
    setPessoa((pessoa) => ({ ...pessoa, [campo]: e.target.value }))
  }

  const handleClick = () => {
    novaPessoa.cadastrar(pessoa.nome, pessoa.idade, pessoa.sexo)
    setPessoa(initial)
  }

  return (
    <Card className="card bg-dark container">
      <div className="card-header">
        <Titulo>Cadastro</Titulo>
      </div>
      <Content className="card-body">
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
          <option value="M">Masculino</option>
          <option value="F">Feminino</option>
          <option value="O">Outro</option>
        </select>
        <button type="button" className="btn btn-primary btn-sm" onClick={handleClick}>
          Enviar
        </button>
      </Content>
    </Card>
  )
}
