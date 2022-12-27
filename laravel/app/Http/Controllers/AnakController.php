<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Anak;

class AnakController extends Controller
{
    public function anak(){
        return anak::all();
    }

    function addAnak(Request $req) {
        
        $anak = new Anak;
        $anak->id = $req->input('id');
        $anak->nama = $req->input('nama');
        $anak->nama_ibu = $req->input('nama_ibu');
        $anak->nama_ayah = $req->input('nama_ayah');
        $anak->tempat_lahir = $req->input('tempat_lahir');
        $anak->tanggal_lahir = $req->input('tanggal_lahir');
        $anak->jenis_kelamin = $req->input('jenis_kelamin');
        $anak->alamat = $req->input('alamat');
        $anak->save();

        return $anak;
    }

    function delete($id){
        $result = anak::where('id', $id)->delete();
        if($result){
            return ["result"=>"Data sudah dihapus"];
        }else{
            return ["result"=>"Data gagal dihapus"];
        }
    }

    function getAnak($id) {
        return anak::find($id);
    }
}
