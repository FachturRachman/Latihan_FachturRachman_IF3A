<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Pegawai extends Model
{
    use hasFactory;

    protected $fillable = [
        'nama',
        'jabatan',
        'gaji'
    ];
}
