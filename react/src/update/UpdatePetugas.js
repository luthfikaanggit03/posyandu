import React, { useEffect, useState } from "react";
import HeaderLogin from "../component/Header-Login";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const UpdatePetugas = () => {
    const { id } = useParams();
    const [nama, setNama] = useState("");
    const [tempat_lahir, setTempatLahir] = useState("");
    const [tanggal_lahir, setTanggalLahir] = useState("");
    const [jabatan, setJabatan] = useState("");
    const [jenis_kelamin, setJenisKelamin] = useState("");
    const [no_telp, setNoTelp] = useState("");
    const [status, setStatus] = useState("");
    const navigate = useNavigate();
    const [formPetugas, setFormPetugas] = useState({ nama: '', tempat_lahir: "", tanggal_lahir: "", jabatan: "", jenis_kelamin: "", no_telp: "", status: "" })

    useEffect(() => {
        const dataPetugas = async () => {
            try {
                const respone = await axios.get(`http://localhost:8000/api/getpetugas/${id}`);
                // console.log(respone)
                // console.log(respone.data.nama)
                setNama(respone.data.nama);
                setTempatLahir(respone.data.tempat_lahir);
                setTanggalLahir(respone.data.tanggal_lahir);
                setJenisKelamin(respone.data.jenis_kelamin);
                setJabatan(respone.data.jabatan);
                setNoTelp(respone.data.no_telp);
                setStatus(respone.data.status);
            }
            catch (error) {
                console.log(error);
            }
        }
        dataPetugas();
    }, []);

    const updatePetugas = () => {

        const inputdata = {
            id: id,
            nama: nama,
            tempat_lahir: tempat_lahir,
            tanggal_lahir: tanggal_lahir,
            jenis_kelamin: jenis_kelamin,
            jabatan: jabatan,
            no_telp: no_telp,
            status: status
        }
        try {
            const updateapi = axios.put(`http://localhost:8000/api/updatepetugas/${id}`, inputdata)
            console.log(updateapi)
        }
        catch (error) {

        }
    }
    return (
        <div>
            <HeaderLogin />
            <h2>Update Data Petugas </h2>
            <button onClick={() => navigate('/petugas')}>Kembali</button>

            <div className="col-sm-6 offset-sm-3">
                <br></br>
                <label className="detail">Nama Petugas : </label>
                <input type="text"
                    className="form-control"
                    placeholder="jenis imunisasi"
                    value={nama}
                    onChange={(e) => setNama(e.target.value)}></input> <br></br>

                <label className="detail">Tempat lahir : </label>
                <input type="text"
                    className="form-control"
                    placeholder="nama petugas"
                    value={tempat_lahir}
                    onChange={(e) => setTempatLahir(e.target.value)}></input> <br></br>

                <label className="detail">Tanggal Lahir : </label>
                <input type="date"
                    className="form-control"
                    placeholder="jenis imunisasi"
                    value={tanggal_lahir}
                    onChange={(e) => setTanggalLahir(e.target.value)}></input> <br></br>

                <label className="detail">Jenis Kelamin : </label>
                <input type="text"
                    className="form-control"
                    placeholder="nama petugas"
                    value={jenis_kelamin}
                    onChange={(e) => setJenisKelamin(e.target.value)}></input> <br></br>

                <label className="detail">Jabatan : </label>
                <input type="text"
                    className="form-control"
                    placeholder="nama anak"
                    value={jabatan}
                    onChange={(e) => setJabatan(e.target.value)}></input> <br></br>

                <label className="detail">No Telp : </label>
                <input type="text"
                    className="form-control"
                    placeholder="nama petugas"
                    value={no_telp}
                    onChange={(e) => setNoTelp(e.target.value)}></input> <br></br>

                <label className="detail">Status : </label>
                <input type="text"
                    className="form-control"
                    placeholder="nama petugas"
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}></input> <br></br>

                <button onClick={updatePetugas}>SUBMIT</button>
            </div>


        </div>
    )
}


export default UpdatePetugas