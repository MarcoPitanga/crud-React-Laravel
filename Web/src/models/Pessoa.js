import { api } from '../services/api'

export class Pessoa {
  cadastrar(nome, idade, sexo) {
    api.post('cadastrar', {
      nome,
      idade,
      sexo
    })
  }

  async buscar(id) {
    const { data } = await api.get(`buscar/${id}`)
    const [resultado] = data

    this.id = resultado.id
    this.nome = resultado.nome
    this.idade = resultado.idade
    this.sexo = resultado.sexo
  }

  async alterar(id, nome, idade, sexo) {
    await api.put(`atualizar/${id}`, {
      nome,
      idade,
      sexo
    })

    this.nome = nome
    this.idade = idade
    this.sexo = sexo
  }

  deletar(id) {
    api.get(`deletar/${id}`)
  }
}
