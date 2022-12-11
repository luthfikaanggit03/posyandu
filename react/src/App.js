import React from "react";
import Header from "./component/Header";
import { Route, Routes } from 'react-router-dom'
import Home from "./component/Home";
import Login from "./component/Login";
import Dashboard from "./pages/Dashboard";
import Imunisasi from "./pages/Imunisasi";
import Anak from "./pages/Anak";
import Petugas from "./pages/Petugas";
import RiwayatVaksin from "./pages/Riwayat_Vaksin";
import Timbangan from "./pages/Timbangan";
import Vaksin from "./pages/Vaksin";

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
          <Route path="/riwayat_vaksin" element={<RiwayatVaksin />}></Route>
          <Route path="/timbangan" element={<Timbangan />}></Route>
          <Route path="/vaksin" element={<Vaksin />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
