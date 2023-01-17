import React, { useEffect, useState, Fragment, useRef } from "react";
import HeaderLogin from "../component/Header-Login";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import DataTable from 'react-data-table-component';
import { useNavigate, Link } from "react-router-dom";
import Table from 'react-bootstrap/Table';
import '../style/button.css';
import { useReactToPrint } from 'react-to-print';

function Anak() {
    const [data, setData] = useState([]);
    const navigate = useNavigate();

    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
        documentTitle: "Data Anak",
        onAfterPrint: () => alert('Print Sukses')
    });

    useEffect(() => {
        getData()
    }, [])

    async function deleteOperation(id) {
        let result = await fetch("http://localhost:8000/api/deleteanak/" + id, {
            method: 'DELETE'
        });
        result = await result.json();
        console.warn(result);
        alert("Data berhasil dihapus");
        getData();
    }

    async function getData() {
        let result = await fetch('http://localhost:8000/api/anak');
        result = await result.json();
        setData(result)
        console.warn("data", data);
    }

    return (
        <div>
            <div ref={componentRef} style={{ width: '100%', height: window.innerHeight }}>
                <HeaderLogin />
                <h2> DATA ANAK</h2>
                <button type="button" onClick={() => navigate('/form_anak')}>Tambah Data</button>
                <br></br>
                <Table striped>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nama Anak</th>
                            <th>Nama Ibu</th>
                            <th>Nama Ayah</th>
                            <th>Jenis Kelamin</th>
                            <th>Tempat Lahir</th>
                            <th>Tanggal Lahir</th>
                            <th>Alamat</th>
                            <th>Actions</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((item, i) =>
                                <tr key={i}>
                                    <td>{item.id}</td>
                                    <td>{item.nama}</td>
                                    <td>{item.nama_ibu}</td>
                                    <td>{item.nama_ayah}</td>
                                    <td>{item.jenis_kelamin}</td>
                                    <td>{item.tempat_lahir}</td>
                                    <td>{item.tanggal_lahir}</td>
                                    <td>{item.alamat}</td>
                                    <td><span onClick={() => { deleteOperation(item.id) }} className="delete">DELETE</span></td>
                                    <td><Link to={`/update_anak/${item.id}`} className="edit">UPDATE</Link></td> 
                                </tr>)
                        }
                    </tbody>
                </Table>
                <button onClick={handlePrint}>Print This Out</button>
            </div>
           

        </div>
    )
}

export default Anak