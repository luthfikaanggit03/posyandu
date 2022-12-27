<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Vaksin;

class VaksinController extends Controller
{
    public function vaksin(){
        return vaksin::all();
    }

    function addVaksin(Request $req) {
        
        $vaksin = new Vaksin;
        $vaksin->id = $req->input('id');
        $vaksin->nama = $req->input('nama');
        $vaksin->save();

        return $vaksin;
    }

    function delete($id){
        $result = vaksin::where('id', $id)->delete();
        if($result){
            return ["result"=>"Data sudah dihapus"];
        }else{
            return ["result"=>"Data gagal dihapus"];
        }
    }

    function getVaksin($id) {
        return vaksin::find($id);
    }
}
