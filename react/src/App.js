import React from "react";
import Header from "./component/Header";
import { Form, Route, Routes } from 'react-router-dom'
import Home from "./component/Home";
import Login from "./component/Login";
import Dashboard from "./pages/Dashboard";
import Imunisasi from "./pages/Imunisasi";
import Anak from "./pages/Anak";
import Petugas from "./pages/Petugas";
import RiwayatVaksin from "./pages/Riwayat_Vaksin";
import Timbangan from "./pages/Timbangan";
import Vaksin from "./pages/Vaksin";
import FormPetugas from "./Form/FormPetugas";
import FormImunisasi from "./Form/FormImunisasi";
import FormVaksin from "./Form/FormVaksin";
import FormTimbangan from "./Form/FormTimbangan";
import FormLaporan from "./Form/FormLaporan";
import FormAnak from "./Form/FormAnak";
import UpdateLaporan from "./update/UpdateLaporan";
import UpdateVaksin from "./update/UpdateVaksin";
import UpdateImunisasi from "./update/UpdateImunisasi";
import UpdateAnak from "./update/UpdateAnak";
import UpdatePetugas from "./update/UpdatePetugas";
import UpdateTimbangan from "./update/UpdateTimbangan";

function App() {
  return (
    <div>
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route path="/imunisasi" element={<Imunisasi />}></Route>
          <Route path="/anak" element={<Anak />}></Route>
          <Route path="/petugas" element={<Petugas />}></Route>
          <Route path="/timbangan" element={<Timbangan />}></Route>
          <Route path="/riwayat_kunjungan" element={<RiwayatVaksin />}></Route>
          <Route path="/vaksin" element={<Vaksin />}></Route>
          
          <Route path="/form_petugas" element={<FormPetugas />}></Route>
          <Route path="/form_imunisasi" element={<FormImunisasi />}></Route>
          <Route path="/form_vaksin" element={<FormVaksin />}></Route>
          <Route path="/form_timbangan" element={<FormTimbangan />}></Route>
          <Route path="/form_laporan" element={<FormLaporan />}></Route>
          <Route path="/form_anak" element={<FormAnak />}></Route>

          <Route path="/update_laporan/:id" element={<UpdateLaporan />}></Route>  
          <Route path="/update_vaksin/:id" element={<UpdateVaksin />}></Route>
          <Route path="/update_imunisasi/:id" element={<UpdateImunisasi />}></Route>
          <Route path="/update_anak/:id" element={<UpdateAnak />}></Route>
          <Route path="/update_petugas/:id" element={<UpdatePetugas />}></Route>
          <Route path="/update_timbangan/:id" element={<UpdateTimbangan />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
