import React, { useState } from "react";
import HeaderLogin from "../component/Header-Login";
import '../style/Form.css';
import { useNavigate } from "react-router-dom";

function FormAnak() {
    const [nama, setNama] = useState("")
    const [nama_ibu, setNamaIbu] = useState("")
    const [nama_ayah, setNamaAyah] = useState("")
    const [tempat_lahir, setTempatLahir] = useState("")
    const [tanggal_lahir, setTanggalLahir] = useState("")
    const [jenis_kelamin, setJenisKelamin] = useState("")
    const [alamat, setAlamat] = useState("")
    const navigate = useNavigate();

    async function addAnak() {
        const formData = new FormData();
        formData.append('nama', nama);
        formData.append('nama_ibu', nama_ibu);
        formData.append('nama_ayah', nama_ayah);
        formData.append('tempat_lahir', tempat_lahir);
        formData.append('tanggal_lahir', tanggal_lahir);
        formData.append('jenis_kelamin', jenis_kelamin);
        formData.append('alamat', alamat);
        let result = await fetch("http://localhost:8000/api/formanak", {
            method: 'POST',
            body: formData
        });
        alert("Data berhasil diinputkan");
    }

    return (

        <div>
            <HeaderLogin />
            <h2>Tambah Data Anak </h2>
            <button onClick={() => navigate('/anak')}>Kembali</button>

            <div className="col-sm-6 offset-sm-3">
                <br></br>
                <label className="detail">Nama Anak : </label>
                <input type="text"
                    className="form-control"
                    placeholder="nama anak"
                    onChange={(e) => setNama(e.target.value)}></input> <br></br>

                <label className="detail">Nama Ibu : </label>
                <input type="text"
                    className="form-control"
                    placeholder="nama ibu"
                    onChange={(e) => setNamaIbu(e.target.value)}></input> <br></br>

                <label className="detail">Nama Ayah : </label>
                <input type="text"
                    className="form-control"
                    placeholder="nama ayah"
                    onChange={(e) => setNamaAyah(e.target.value)}></input> <br></br>

                <label className="detail">Jenis Kelamin : </label>
                <input type="text"
                    className="form-control"
                    placeholder="P/L"
                    onChange={(e) => setJenisKelamin(e.target.value)}></input> <br></br>

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

                <label className="detail">Alamat : </label>
                <input type="text"
                    className="form-control"
                    placeholder="alamat"
                    onChange={(e) => setAlamat(e.target.value)}></input> <br></br>

                <button onClick={addAnak}>SUBMIT</button>
            </div>

        </div>
    )
}

export default FormAnak