export class Pessoa {
  cadastrar(nome, idade, sexo) {
    this.nome = nome
    this.idade = idade
    this.sexo = sexo
  }

  buscar(id) {
    this.id = id
  }

  editar(nome, idade, sexo) {
    this.nome = nome
    this.idade = idade
    this.sexo = sexo
  }

  deletar(id) {
    this.id = id
  }
}
