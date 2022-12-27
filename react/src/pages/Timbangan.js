import React, { useEffect, useState, Fragment } from "react";
import HeaderLogin from "../component/Header-Login";
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import DataTable from 'react-data-table-component';
import { useNavigate } from "react-router-dom";

const Timbangan = () => {

    const [timbangan, setTimbangan] = useState([]);
    const [search, setSearch] = useState([]);
    const [filter, setFilter] = useState([]);
    const navigate = useNavigate();

    const columns = [
        {
            name: "ID",
            selector: (row) => row.id
        },
        {
            name: "Tanggal Penimbangan",
            selector: (row) => row.tanggal
        },
        {
            name: "Nama Anak",
            selector: (row) => row.anak
        },
        {
            name: "Umur (bulan)",
            selector: (row) => row.umur
        },
        {
            name: "Berat Badan (kg)",
            selector: (row) => row.beratBadan
        },
        {
            name: "Tinggi Badan (cm)",
            selector: (row) => row.tinggi
        },
        {
            name:'Actions',
            cell: (row) => <button className="btn btn-primary" onClick={() => alert(row.id)}>EDIT</button> 
        },
        {
            name:'Actions',
            cell: (row) => <button className="btn btn-danger" onClick={() => alert(row.id)}>DELETE</button> 
        }
    ]

    const handleDelete = () => {};

    useEffect(() => {
        async function getTimbangan() {
            try {
                const timbangan = await axios.get("http://localhost:8000/api/timbangan")
                console.log(timbangan.data)
                setTimbangan(timbangan.data)
                setFilter(filter.data)
            } catch {
                console.error();
            }
        }
        getTimbangan()
    }, [])

    useEffect(() => {
        const result = timbangan.filter(timbangans => {
            return timbangans.nama.toLowerCase().match(search.toLowerCase());
        })

        setFilter(result)
    }, [search])

    return (
        <div>
            <HeaderLogin />
            <div className="title">
                <h1>Data Timbangan</h1>
            </div>
            <div className="tambah">
            <button type="button" onClick={() => navigate('/form_timbangan')} >Tambah Data</button>
            </div>
            <DataTable columns={columns} data={timbangan}
            pagination
            highlightOnHover
            subHeader
             />
        </div>
    )
}

export default Timbangan