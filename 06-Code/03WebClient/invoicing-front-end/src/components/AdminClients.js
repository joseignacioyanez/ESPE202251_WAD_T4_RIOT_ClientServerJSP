import { Link } from "react-router-dom";
import * as React from 'react';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { useDemoData } from '@mui/x-data-grid-generator';
import axios from '../api/axios';
const URI = '/restaurant/users';

export default async function AdminClients()  {
    const { data } = useDemoData({
        dataSet: 'Commodity',
        rowLength: 100,
        maxColumns: 18,
    });
    /*
    // API
    try {
        const response = await axios.post(URI,
            JSON.stringify(),
            {
                headers: { 'Content-Type': 'application/json' },
                withCredentials: true
            }
            
        );
        console.log(JSON.stringify(response?.data));
        } catch (error){
            console.log(error);
        }
    
    
    

    console.log(data)
        */
    return (
        <>
            <h1>Administrar Clientes</h1>
            <br/><br/>
            <div style={{ height: 600, width: '100%' }}>
                <DataGrid
                    {...data}
                    components={{
                    Toolbar: GridToolbar,
                    }}
                />
            </div>
            <button>Crear Nuevo Cliente</button>
        </>
    )
}
