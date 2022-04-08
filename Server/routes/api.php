<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PessoaController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post("cadastrar", [PessoaController::class, 'cadastrar']);

Route::get('/buscar/{id}', [PessoaController::class, 'buscar']);

Route::put("atualizar/{id}", [PessoaController::class, 'atualizar']);

Route::get('/deletar/{id}', [PessoaController::class, 'deletar']);
