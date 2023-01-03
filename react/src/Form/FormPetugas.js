import React, { useState } from "react";
import HeaderLogin from "../component/Header-Login";
import '../style/Form.css';
import { useNavigate } from "react-router-dom";

function FormPetugas() {
    const [nama, setNama] = useState("")
    const [tanggal_lahir, setTanggalLahir] = useState("")
    const [tempat_lahir, setTempatLahir] = useState("")
    const [jenis_kelamin, setJenisKelamin] = useState("")
    const [jabatan, setJabatan] = useState("")
    const [no_telp, setNoTelp] = useState("")
    const [status, setStatus] = useState("")
    const navigate = useNavigate();

    async function addPetugas() {
        const formData = new FormData();
        formData.append('nama', nama);
        formData.append('tanggal_lahir', tanggal_lahir);
        formData.append('tempat_lahir', tempat_lahir);
        formData.append('jenis_kelamin', jenis_kelamin);
        formData.append('jabatan', jabatan);
        formData.append('no_telp', no_telp);
        formData.append('status', status);
        let result = await fetch("http://localhost:8000/api/formpetugas", {
            method: 'POST',
            body: formData
        });
        alert("Data berhasil diinputkan");
    }

    return (

        <div>
            <HeaderLogin />
            <h2>Tambah Data Petugas </h2>
            <button onClick={() => navigate('/petugas')}>Kembali</button>

            <div className="col-sm-6 offset-sm-3">
                <br></br>
                <label className="detail">Nama Petugas : </label>
                <input type="text"
                    className="form-control"
                    placeholder="nama petugas"
                    onChange={(e) => setNama(e.target.value)}></input> <br></br>

                <label className="detail">Tempat Lahir : </label>
                <input type="text"
                    className="form-control"
                    placeholder="tempat lahir"
                    onChange={(e) => setTempatLahir(e.target.value)}></input> <br></br>

                <label className="detail">Tanggal Lahir : </label>
                <input type="date"
                    className="form-control"
                    placeholder="tanggal lahir"
                    onChange={(e) => setTanggalLahir(e.target.value)}></input> <br></br>

                <label className="detail">Jenis Kelamin : </label>
                <input type="text"
                    className="form-control"
                    placeholder="P/L"
                    onChange={(e) => setJenisKelamin(e.target.value)}></input> <br></br>

                <label className="detail">Jabatan : </label>
                <input type="text"
                    className="form-control"
                    placeholder="jabatan"
                    onChange={(e) => setJabatan(e.target.value)}></input> <br></br>

                <label className="detail">No Telp : </label>
                <input type="text"
                    className="form-control"
                    placeholder="no telp"
                    onChange={(e) => setNoTelp(e.target.value)}></input> <br></br>

                <label className="detail">Status : </label>
                <input type="text"
                    className="form-control"
                    placeholder="status"
                    onChange={(e) => setStatus(e.target.value)}></input> <br></br>

                <button onClick={addPetugas}>SUBMIT</button>
            </div>

        </div>
    )
}

export default FormPetugas