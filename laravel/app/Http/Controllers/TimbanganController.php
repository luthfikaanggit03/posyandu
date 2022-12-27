<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Timbangan;

class TimbanganController extends Controller
{
    public function timbangan(){
        return timbangan::all();
    }

    function addTimbangan(Request $req) {
        
        $timbangan = new Timbangan;
        $timbangan->id = $req->input('id');
        $timbangan->tanggal = $req->input('tanggal');
        $timbangan->anak = $req->input('anak');
        $timbangan->umur = $req->input('umur');
        $timbangan->beratbadan = $req->input('beratBadan');
        $timbangan->tinggi = $req->input('tinggi');
        $timbangan->save();

        return $timbangan;
    }

    function delete($id){
        $result = timbangan::where('id', $id)->delete();
        if($result){
            return ["result"=>"Data sudah dihapus"];
        }else{
            return ["result"=>"Data gagal dihapus"];
        }
    }

    function getTimbangan($id) {
        return timbangan::find($id);
    }
}
