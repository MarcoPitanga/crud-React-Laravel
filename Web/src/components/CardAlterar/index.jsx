import { Titulo, Card, Content, ContentBusca } from './styles'

export const CardAlterar = () => {
  return (
    <Card className="card bg-dark container">
      <div className="card-header">
        <Titulo>Edição</Titulo>
      </div>
      <Content className="card-body">
        <ContentBusca>
          <input className="form-control" type="text" placeholder="Id" />
          <button type="button" className="btn btn-primary btn-sm">
            Buscar
          </button>
        </ContentBusca>
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
