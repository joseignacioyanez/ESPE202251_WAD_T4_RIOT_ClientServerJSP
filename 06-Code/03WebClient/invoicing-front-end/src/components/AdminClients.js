import * as React from 'react';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { useDemoData } from '@mui/x-data-grid-generator';

export default function AdminClients()  {
    const { data } = useDemoData({
        dataSet: 'Commodity',
        rowLength: 100,
        maxColumns: 6,
    });

    return (
        <>
        <h1>Administrar Clientes</h1>
            <br/><br/>
            <div style={{ height: 400, width: '100%' }}>
            <DataGrid
                {...data}
                components={{
                Toolbar: GridToolbar,
                }}
            />
            </div>
            <button>Crear Nuevo Cliente</button>
        </>
    );
}
