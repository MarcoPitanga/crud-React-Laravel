<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class HelloWorldController extends Controller
{
    public function helloWorld($nome = null)
    {
        return "Hello World " . $nome;
    }
}
