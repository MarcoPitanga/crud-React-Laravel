<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Pessoa extends Model
{
    protected $table = 'pessoa';
    use HasFactory;

    protected $fillable = ['nome', 'idade', 'sexo', 'created_at', 'updated_at'];
}
