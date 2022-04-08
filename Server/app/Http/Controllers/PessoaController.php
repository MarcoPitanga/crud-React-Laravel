<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PessoaController extends Controller
{
    public function buscar($id)
    {
        $pessoas = \App\Models\Pessoa::where('id', $id)->get(['id', 'nome', 'idade', 'sexo']);
        return $pessoas;
    }

    public function cadastrar(Request $req)
    {
        $pessoa = [
            'nome' => $req->nome,
            'idade' => $req->idade,
            'sexo' => $req->sexo
        ];

        return \App\Models\Pessoa::create($pessoa);
    }

    public function atualizar(Request $req, $id)
    {
        $dados = [
            'nome' => $req->nome,
            'idade' => $req->idade,
            'sexo' => $req->sexo
        ];

        $pessoa = \App\Models\Pessoa::find($id);

        return $pessoa->update($dados);
    }

    public function deletar($id)
    {
        $pessoa = \App\Models\Pessoa::find($id);

        return $pessoa->delete();
    }
}
