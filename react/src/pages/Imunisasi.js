import React, { useEffect, useState, Fragment } from "react";
import HeaderLogin from "../component/Header-Login";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import DataTable from 'react-data-table-component';
import { useNavigate } from "react-router-dom";
import Table from 'react-bootstrap/Table';
import '../style/button.css';

function Imunisasi() {
    const [data, setData] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        getData()
    }, [])

    async function getData() {
        let result = await fetch('http://localhost:8000/api/imunisasi');
        result = await result.json();
        setData(result)
        console.warn("data", data);
    }

    async function deleteOperation(id){
        let result = await fetch("http://localhost:8000/api/deleteimunisasi/"+id, {
            method: 'DELETE'
        });
        result= await result.json();
        console.warn(result);
        alert("Data berhasil dihapus");
        getData();
    }

    return (
        <div>
            <HeaderLogin />
            <h2> DATA IMUNISASI</h2>
            <button type="button" onClick={() => navigate('/form_imunisasi')}>Tambah Data</button>
            <br></br>
            <Table striped>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Jenis Imunisasi</th>
                        <th>Nama Anak</th>
                        <th>Nama Petugas</th>
                        <th>Tanggal Layanan</th>
                        <th>Actions</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((item) => 
                        <tr>
                            <td>{item.id}</td>
                            <td>{item.jenis}</td>
                            <td>{item.anak}</td>
                            <td>{item.petugas}</td>
                            <td><span onClick={() => {deleteOperation(item.id)}} className="delete">DELETE</span></td>  
                        </tr>)
                    }
                </tbody>
            </Table>
        </div>
    )
}

export default Imunisasi