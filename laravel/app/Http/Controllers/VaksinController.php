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

    function getVaksin($id){
        return vaksin::find($id);
    }

    function updateVaksin($id, Request $req){
        //return $req -> input ();
        //return $id;

        $vaksin = vaksin::find($id);
        $vaksin->id = $req->input('id');
        $vaksin->nama = $req->input('nama');
        $result = $vaksin->save();
        if($result){
            return["result"=>"data berhasil diupdate"];
        }else{
            return["result"=>"data gagal diupdate"];
        }
    }
}
