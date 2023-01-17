<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\PetugasController;
use App\Http\Controllers\ImunisasiController;
use App\Http\Controllers\VaksinController;
use App\Http\Controllers\AnakController;
use App\Http\Controllers\LaporanVaksinController;
use App\Http\Controllers\TimbanganController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->post('/user', function (Request $request) {
    return $request->user();
});

//API PETUGAS
Route::post('formpetugas', [PetugasController::class, 'addPetugas']);
Route::get('index', [PetugasController::class, 'index']);
Route::delete('deletepetugas/{id}', [PetugasController::class, 'delete']);
Route::get('getpetugas/{id}', [PetugasController::class, 'getPetugas']);
Route::put('updatepetugas/{id}', [PetugasController::class, 'updatePetugas']);

//API IMUNISASI
Route::get('imunisasi', [ImunisasiController::class, 'imunisasi']);
Route::post('formimunisasi', [ImunisasiController::class, 'addImunisasi']);
Route::delete('deleteimunisasi/{id}', [ImunisasiController::class, 'delete']);
Route::get('getimunisasi/{id}', [ImunisasiController::class, 'getImunisasi']);
Route::put('updateimunisasi/{id}', [ImunisasiController::class, 'updateImunisasi']);

//API VAKSIN
Route::get('vaksin', [VaksinController::class, 'vaksin']);
Route::post('formvaksin', [VaksinController::class, 'addVaksin']);
Route::delete('deletevaksin/{id}', [VaksinController::class, 'delete']);
Route::get('getvaksin/{id}', [VaksinController::class, 'getVaksin']);
Route::put('updatevaksin/{id}', [VaksinController::class, 'updateVaksin']);

//API ANAK
Route::get('anak', [AnakController::class, 'anak']);
Route::post('formanak', [AnakController::class, 'addAnak']);
Route::delete('deleteanak/{id}', [AnakController::class, 'delete']);
Route::get('getanak/{id}', [AnakController::class, 'getAnak']);
Route::put('updateanak/{id}', [AnakController::class, 'updateAnak']);

//API LAPORAN VAKSIN
Route::get('laporan_vaksin', [LaporanVaksinController::class, 'laporanVaksin']);
Route::post('formlaporan', [LaporanVaksinController::class, 'addLaporan']);
Route::delete('deletelaporan/{id}', [LaporanVaksinController::class, 'delete']);
Route::get('getlaporan_vaksin/{id}', [LaporanVaksinController::class, 'getLaporan']);
Route::put('updatelaporan/{id}', [LaporanVaksinController::class, 'updateLaporan']);

//API TIMBANGAN
Route::get('timbangan', [TimbanganController::class, 'timbangan']);
Route::post('formtimbangan', [TimbanganController::class, 'addTimbangan']);
Route::delete('deletetimbangan/{id}', [TimbanganController::class, 'delete']);
Route::get('gettimbangan/{id}', [TimbanganController::class, 'getTimbangan']);
Route::put('updatetimbangan/{id}', [TimbanganController::class, 'updateTimbangan']);



    