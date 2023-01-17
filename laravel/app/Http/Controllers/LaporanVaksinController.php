<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\LaporanVaksin;

class LaporanVaksinController extends Controller
{
    public function laporanVaksin(){
        return laporanvaksin::all();
    }

    function addLaporan(Request $req) {
        
        $laporan = new laporanVaksin;
        $laporan->id = $req->input('id');
        $laporan->nama = $req->input('nama');
        $laporan->pesan = $req->input('pesan');
        $laporan->tanggal = $req->input('tanggal');
        $laporan->save();

        return $laporan;
    }

    function delete($id){
        $result = laporanVaksin::where('id', $id)->delete();
        if($result){
            return ["result"=>"Data sudah dihapus"];
        }else{
            return ["result"=>"Data gagal dihapus"];
        }
    }

    function getLaporan($id) {
        return laporanVaksin::find($id);
    }

    function updateLaporan($id, Request $req){
        //return $req -> input ();
        //return $id;

        $laporan = laporanVaksin::find($id);
        $laporan->id = $req->input('id');
        $laporan->nama = $req->input('nama');
        $laporan->pesan = $req->input('pesan');
        $laporan->tanggal = $req->input('tanggal');
        $result = $laporan->save();
        if($result){
            return["result"=>"data berhasil diupdate"];
        }else{
            return["result"=>"data gagal diupdate"];
        }
    }
}
