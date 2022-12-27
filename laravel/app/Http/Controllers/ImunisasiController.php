<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Imunisasi;

class ImunisasiController extends Controller
{
    public function imunisasi(){
        return imunisasi::all();
    }

    function addImunisasi(Request $req) {
        
        $imunisasi = new Imunisasi;
        $imunisasi->id = $req->input('id');
        $imunisasi->jenis = $req->input('jenis');
        $imunisasi->tanggal = $req->input('tanggal');
        $imunisasi->anak = $req->input('anak');
        $imunisasi->petugas = $req->input('petugas');
        $imunisasi->save();

        return $imunisasi;
    }

    function delete($id){
        $result = imunisasi::where('id', $id)->delete();
        if($result){
            return ["result"=>"Data sudah dihapus"];
        }else{
            return ["result"=>"Data gagal dihapus"];
        }
    }

    function getImunisasi($id) {
        return imunisasi::find($id);
    }
}
