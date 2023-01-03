import React, { useEffect, useState, Fragment } from "react";
import HeaderLogin from "../component/Header-Login";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import DataTable from 'react-data-table-component';
import { useNavigate, Link } from "react-router-dom";
import Table from 'react-bootstrap/Table';
import '../style/button.css';

function Vaksin() {
    const [data, setData] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        getData()
    }, [])

    async function deleteOperation(id){
        let result = await fetch("http://localhost:8000/api/deletevaksin/"+id, {
            method: 'DELETE'
        });
        result= await result.json();
        console.warn(result);
        alert("Data berhasil dihapus");
        getData();
    }

    async function getData(){
        let result = await fetch('http://localhost:8000/api/vaksin');
        result = await result.json();
        setData(result)
        console.warn("data", data);
    }
    
    return (
        <div>
            <HeaderLogin />
            <h2> DATA VAKSIN</h2>
            <button type="button" onClick={() => navigate('/form_vaksin')}>Tambah Data</button>
            <br></br>
            <Table striped>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Jenis Vaksin</th>
                        <th>Actions</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((item) => 
                        <tr>
                            <td>{item.id}</td>
                            <td>{item.nama}</td>
                            <td><span onClick={() => {deleteOperation(item.id)}} className="delete">DELETE</span></td>
                        </tr>)
                    }
                </tbody>
            </Table>
        </div>
    )
}

export default Vaksin