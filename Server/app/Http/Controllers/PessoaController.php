<?php

namespace App\Http\Controllers;

use \App\Models\Pessoa;
use Illuminate\Http\Request;

class PessoaController extends Controller
{
    public function buscar($id)
    {
        $pessoas = Pessoa::where('id', $id)->get(['id', 'nome', 'idade', 'sexo']);
        return $pessoas;
    }

    public function cadastrar(Request $req)
    {
        $pessoa = [
            'nome' => $req->nome,
            'idade' => $req->idade,
            'sexo' => $req->sexo
        ];

        return Pessoa::create($pessoa);
    }

    public function atualizar(Request $req, $id)
    {
        $dados = [
            'nome' => $req->nome,
            'idade' => $req->idade,
            'sexo' => $req->sexo
        ];

        $pessoa = Pessoa::find($id);

        return $pessoa->update($dados);
    }

    public function deletar($id)
    {
        $pessoa = Pessoa::find($id);

        return $pessoa->delete();
    }

    public function listar()
    {
        $pessoas = Pessoa::all();

        return $pessoas;
    }
}
