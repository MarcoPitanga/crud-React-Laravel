import { Titulo, Card, Content } from './styles'

export const CardCadastro = () => {
  return (
    <Card className="card bg-dark container">
      <div className="card-header">
        <Titulo>Cadastro</Titulo>
      </div>
      <Content className="card-body">
        <input className="form-control" type="text" placeholder="Nome" />
        <input className="form-control" type="text" placeholder="Idade" />
        <select className="form-select" placeholder="Sexo">
          <option value="M">Masculino</option>
          <option value="F">Feminino</option>
          <option value="O">Outro</option>
        </select>
        <button type="button" className="btn btn-primary btn-sm">
          Enviar
        </button>
      </Content>
    </Card>
  )
}
