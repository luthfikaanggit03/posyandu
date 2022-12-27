import React, { useEffect, useState, Fragment } from "react";
import HeaderLogin from "../component/Header-Login";
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import DataTable from 'react-data-table-component';
import { useNavigate } from "react-router-dom";

const Vaksin = () => {

    const [vaksin, setVaksin] = useState([]);
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
            selector: (row) => row.nama
        },
        {
            name:'Actions',
            cell: (row) => <button className="btn btn-primary" onClick={() => alert(row.id)}>EDIT</button> 
        },
        {
            name:'Actions',
            cell: (row) => <button className="btn btn-danger" onClick={() => deleteVaksin(row.id)}>DELETE</button> 
        }
    ]

    async function deleteVaksin(id){
        let result = await fetch("http://localhost:8000/api/deletevaksin/"+id, {
            method:'DELETE'
        });
        result=await result.json();
        console.warn(result)
    }

    useEffect(() => {
        async function getVaksin() {
            try {
                const vaksin = await axios.get("http://localhost:8000/api/vaksin")
                console.log(vaksin.data)
                setVaksin(vaksin.data)
                setFilter(filter.data)
            } catch {
                console.error();
            }
        }
        getVaksin()
    }, [])

    useEffect(() => {
        const result = vaksin.filter(vaksins => {
            return vaksins.nama.toLowerCase().match(search.toLowerCase());
        })

        setFilter(result)
    }, [search])

    return (
        <div>
            <HeaderLogin />
            <div className="title">
                <h1>Data Vaksin</h1>
            </div>
            <div className="tambah">
                <button type="button" onClick={() => navigate('/form_vaksin')} >Tambah Data</button>
            </div>
            <DataTable columns={columns} data={vaksin}
            pagination
            highlightOnHover
            subHeader
             />
        </div>
    )
}

export default Vaksin