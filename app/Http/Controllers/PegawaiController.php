<?php

namespace App\Http\Controllers;

use App\Models\Pegawai;
use Illuminate\Http\Request;

class PegawaiController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $pegawai = Pegawai::all();
        return response()->json($pegawai);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'nama' => 'required|string|max:255',
            'jabatan' => 'required|string|max:255',
            'gaji' => 'required|integer',
        ]);

        $pegawai = Pegawai->create($validated);

        return response()->json([
            'massage'=> 'Data pegawai berhasil ditambahkan.',
            'data' => $pegawai
        ], 201);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $pegawai = Pegawai::findOrFail($id);

        $validated = $request->validate([
            'nama' => 'sometimes|string|max:255',
            'jabatan' => 'sometimes|string|max:255',
            'gaji' => 'sometimes|integer', 
        ]);

        $pegawai->update($validated);

        return response()->json([
            'massage'=> 'Data pegawai berhasil ditambahkan.',
            'data' => $pegawai
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $pegawai = Pegawai::findOrFail($id);
        $pegawai->delete();

        return response()->json([
            'message' => 'Data pegawai berhasil dihapus.'
        ]);
    }

}
