import React, { useEffect, useState, useRef } from "react";
import HeaderLogin from "../component/Header-Login";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import DataTable from 'react-data-table-component';
import { useNavigate, Link } from "react-router-dom";
import Table from 'react-bootstrap/Table';
import { useReactToPrint } from 'react-to-print';

function Vaksin() {
    const [data, setData] = useState([]);
    const navigate = useNavigate();

    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
        documentTitle: "Data Timbangan",
        onAfterPrint: () => alert('Print Sukses')
    });

    useEffect(() => {
        getData()
    }, [])

    async function getData() {
        let result = await fetch('http://localhost:8000/api/timbangan');
        result = await result.json();
        setData(result)
        console.warn("data", data);
    }

    async function deleteOperation(id){
        let result = await fetch("http://localhost:8000/api/deletetimbangan/"+id, {
            method: 'DELETE'
        });
        result= await result.json();
        console.warn(result);
        alert("Data berhasil dihapus");
        getData();
    }
    
    return (
        <div>
            <div ref={componentRef} style={{ width: '100%', height: window.innerHeight }}>
            <HeaderLogin />
            <h2> DATA TIMBANGAN</h2>
            <button type="button" onClick={() => navigate('/form_timbangan')}>Tambah Data</button>
            <br></br>
            <Table striped>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nama Anak</th>
                        <th>Umur Anak (bulan)</th>
                        <th>Tinggi Anak (cm)</th>
                        <th>Berat Anak (kg)</th>
                        <th>Tanggal Penimbangan</th>
                        <th>Actions</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((item) => 
                        <tr>
                            <td>{item.id}</td>
                            <td>{item.anak}</td>
                            <td>{item.umur}</td>
                            <td>{item.tinggi}</td>
                            <td>{item.beratBadan}</td>
                            <td>{item.tanggal}</td>
                            <td><span onClick={() => {deleteOperation(item.id)}} className="delete">DELETE</span></td>
                            <td><Link to={`/update_timbangan/${item.id}`} className="edit">UPDATE</Link></td> 
                        </tr>)
                    }
                </tbody>
            </Table>
            </div>
            
            <button onClick={handlePrint}>Print This Out</button>
        </div>
    )
}

export default Vaksin