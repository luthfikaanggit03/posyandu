import React, { useState } from "react";
import HeaderLogin from "../component/Header-Login";
import '../style/Form.css';
import { useNavigate } from "react-router-dom";

function FormImunisasi() {
    const [id, setID] = useState("")
    const [jenis, setJenis] = useState("")
    const [tanggal, setTanggal] = useState("")
    const [anak, setAnak] = useState("")
    const [petugas, setPetugas] = useState("")
    const navigate = useNavigate();

    async function addImunisasi() {
        const formData = new FormData();
        formData.append('jenis', jenis);
        formData.append('tanggal', tanggal);
        formData.append('anak', anak);
        formData.append('petugas', petugas);
        let result = await fetch("http://localhost:8000/api/formimunisasi", {
            method: 'POST',
            body: formData
        });
        alert("Data berhasil diinputkan");
    }

    return (

        <div>
            <HeaderLogin />
            <h2>Tambah Data Imunisasi </h2>
            <button onClick={() => navigate('/imunisasi')}>Kembali</button>

            <div className="col-sm-6 offset-sm-3">
                <br></br>
                <label className="detail">Jenis Imunisasi : </label>
                <input type="text"
                    className="form-control"
                    placeholder="jenis imunisasi"
                    onChange={(e) => setJenis(e.target.value)}></input> <br></br>

                <label className="detail">Nama Anak : </label>
                <input type="text"
                    className="form-control"
                    placeholder="nama anak"
                    onChange={(e) => setAnak(e.target.value)}></input> <br></br>

                <label className="detail">Nama Petugas : </label>
                <input type="text"
                    className="form-control"
                    placeholder="nama petugas"
                    onChange={(e) => setPetugas(e.target.value)}></input> <br></br>

                <label className="detail">Tanggal Layanan : </label>
                <input type="date"
                    className="form-control"
                    placeholder="tanggal layanan"
                    onChange={(e) => setTanggal(e.target.value)}></input> <br></br>

                <button onClick={addImunisasi}>SUBMIT</button>
            </div>

        </div>
    )
}

export default FormImunisasi