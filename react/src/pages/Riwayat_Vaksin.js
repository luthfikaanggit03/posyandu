import React, { useEffect, useState } from "react";
import HeaderLogin from "../component/Header-Login";
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import DataTable from 'react-data-table-component';
import { useNavigate } from "react-router-dom";

const RiwayatVaksin = () => {

    const [riwayat, setRiwayat] = useState([]);
    const [search, setSearch] = useState([]);
    const [filter, setFilter] = useState([]);
    const navigate = useNavigate();

    const columns = [
        {
            name: "ID",
            selector: (row) => row.id
        },
        {
            name: "Jenis Vaksin",
            selector: (row) => row.jenis
        },
        {
            name: "Nama Layanan",
            selector: (row) => row.layanan
        },
        {
            name: "Tanggal Vaksin",
            selector: (row) => row.tanggal
        },
        {
            name:'Actions',
            cell: (row) => <button className="btn btn-primary" onClick={() => navigate('/update_laporan/:id')}>EDIT</button> 
        },
        {
            name:'Actions',
            cell: (row) => <button className="btn btn-danger" onClick={() => deleteLaporan(row.id)}>DELETE</button>  
        }
    ]

    async function deleteLaporan(id){
        let result = await fetch("http://localhost:8000/api/deletelaporan/"+id, {
            method:'DELETE'
        });
        result=await result.json();
        console.warn(result)
    }

    useEffect(() => {
        async function getRiwayat() {
            try {
                const riwayat = await axios.get("http://localhost:8000/api/laporan_vaksin")
                console.log(riwayat.data)
                setRiwayat(riwayat.data)
                setFilter(filter.data)
            } catch {
                console.error();
            }
        }
        getRiwayat()
    }, [])


    return (
        <div>
            <HeaderLogin />
            <div className="title">
                <h1>Riwayat Imunisasi</h1>
            </div>
            <div className="tambah">
                <button type="button" onClick={() => navigate('/form_laporan')} >Tambah Data</button>
            </div>
            <DataTable columns={columns} data={riwayat}
            pagination
            highlightOnHover
            subHeader
             />
        </div>
    )
}

export default RiwayatVaksin