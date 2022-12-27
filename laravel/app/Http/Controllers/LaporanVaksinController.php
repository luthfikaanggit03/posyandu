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
        $laporan->jenis = $req->input('jenis');
        $laporan->layanan = $req->input('layanan');
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
}
