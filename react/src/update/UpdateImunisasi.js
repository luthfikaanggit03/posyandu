import React, { useEffect, useState } from "react";
import HeaderLogin from "../component/Header-Login";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const UpdateImunisasi = () => {
    const { id } = useParams();
    const [anak, setAnak] = useState('');
    const [petugas, setPetugas] = useState("");
    const [jenis, setJenis] = useState("");
    const [tanggal, setTanggal] = useState("");
    const navigate = useNavigate();
    const [formImunisasi, setFormImunisasi] = useState({ jenis: '', anak: "", petugas: "", tanggal: "" })

    useEffect(() => {
        const dataImunisasi = async () => {
            try {
                const respone = await axios.get(`http://localhost:8000/api/getimunisasi/${id}`);
                // console.log(respone)
                // console.log(respone.data.nama)
                setJenis(respone.data.jenis);
                setAnak(respone.data.anak);
                setPetugas(respone.data.petugas);
                setTanggal(respone.data.tanggal);
            }
            catch (error) {
                console.log(error);
            }
        }
        dataImunisasi();
    }, []);

    const updateImunisasi = () => {

        const inputdata = {
            id: id,
            jenis: jenis,
            anak: anak,
            petugas: petugas,
            tanggal: tanggal
        }
        try {
            const updateapi = axios.put(`http://localhost:8000/api/updateimunisasi/${id}`, inputdata)
            console.log(updateapi)
        }
        catch (error) {

        }
    }
    return (
        <div>
            <HeaderLogin />
            <h2>Update Data Imunisasi </h2>
            <button onClick={() => navigate('/imunisasi')}>Kembali</button>

            {formImunisasi.jenis}

            <div className="col-sm-6 offset-sm-3">
                <br></br>
                <label className="detail">Jenis Imunisasi : </label>
                <input type="text"
                    className="form-control"
                    placeholder="jenis imunisasi"
                    value={jenis}
                    onChange={(e) => setJenis(e.target.value)}></input> <br></br>

                <label className="detail">Nama Anak : </label>
                <input type="text"
                    className="form-control"
                    placeholder="nama anak"
                    value={anak}
                    onChange={(e) => setAnak(e.target.value)}></input> <br></br>

                <label className="detail">Nama Petugas : </label>
                <input type="text"
                    className="form-control"
                    placeholder="nama petugas"
                    value={petugas}
                    onChange={(e) => setPetugas(e.target.value)}></input> <br></br>

                <label className="detail">Tanggal Imunisasi : </label>
                <input type="date"
                    className="form-control"
                    placeholder="jenis imunisasi"
                    value={tanggal}
                    onChange={(e) => setTanggal(e.target.value)}></input> <br></br>

                <button onClick={updateImunisasi}>SUBMIT</button>
            </div>


        </div>
    )
}


export default UpdateImunisasi