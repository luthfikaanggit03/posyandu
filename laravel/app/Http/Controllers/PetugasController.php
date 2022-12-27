<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Petugas;

class PetugasController extends Controller
{
    public function index(){
        return petugas::all();
        
    }

    function addPetugas(Request $req) {
        
        $petugas = new Petugas;
        $petugas->id = $req->input('id');
        $petugas->nama = $req->input('nama');
        $petugas->tempat_lahir = $req->input('tempat_lahir');
        $petugas->tanggal_lahir = $req->input('tanggal_lahir');
        $petugas->jabatan = $req->input('jabatan');
        $petugas->jenis_kelamin = $req->input('jenis_kelamin');
        $petugas->no_telp = $req->input('no_telp');
        $petugas->status = $req->input('status');
        $petugas->save();

        return $petugas;
    }

    function delete($id){
        $result = petugas::where('id', $id)->delete();
        if($result){
            return ["result"=>"Data sudah dihapus"];
        }else{
            return ["result"=>"Data gagal dihapus"];
        }
    }

    function getPetugas($id) {
        return petugas::find($id);
    }
        
        
    

}
