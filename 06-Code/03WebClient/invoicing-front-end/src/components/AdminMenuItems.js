import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { DataGrid } from '@mui/x-data-grid';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import useAxiosPrivate from '../hooks/useAxiosPrivate';

const AdminMenu = () => {
    const [ menu, setMenu ] = useState();
    const axiosPrivate = useAxiosPrivate();
    // For react18 changed useEffect to run Twice
    const effectRan = useRef(false)

    const [isLoading, setLoading ] = useState(true);

    const navigate = useNavigate();

    // Get data
    useEffect(() => {
    
        if (effectRan.current === false){
            const controller = new AbortController(); // To Cancel request if component unmounts

            const getMenu = async () => {
                try {
                    const response = await axiosPrivate.get('/restaurant/menuItems', {
                        //signal: controller.signal
                    });
                    console.log(response.data)
                    // If Component isMounted, set data and map it for rows DataGrid
                    setMenu(response.data.map(menu => (
                        {
                            id: Math.random() * (100000 - 1) + 1,
                            status: menu.status,
                            code: menu.code,
                            category: menu.category,
                            name: menu.name,
                            price: menu.price,
                            paysTaxes: menu.paysTaxes
                        }
                    )));
                    
                    setLoading(false);
                } catch (error) {
                    console.log(error);
                }
            }

            getMenu();
            // Cleanup function
            return () => {
                controller.abort();
                effectRan.current = true;
            }
        }
        
    }, []) 
    
    // DataGrid
    const ModifyButton = () => {
        const navigate = useNavigate();  
        return (
            <Button onClick={() => navigate("/modifyMenuItem")} sx={{background:'#0087BD', color:"#fff", "&:hover": {color: '#fff', background: '#1F75FE'}, borderRadius: '0.5rem'}}>Modificar</Button>
        );
    };
    const DeleteButton = () => {
        const navigate = useNavigate();  
        return (
            <Button onClick={() => navigate("/deleteMenuItem")} sx={{background:'#8C1127', color:"#fff", "&:hover": {color: '#fff', background: '#DA2C43'}, borderRadius: '0.5rem'}}>Borrar</Button>
        );
    };

    const columns = [
        { field:'id', hide: true },
        { field:'status', headerName:'Activo', width: 170},
        { field:'code', headerName:'Código', width: 150 },
        { field:'category', headerName:'Categoría', width: 170 },
        { field:'name', headerName:'Nombre', width: 300 },
        { field:'price', headerName:'Precio', width: 170 },
        { field:'paysTaxes', headerName:'Impuestos', width: 170 },
        { field:'modifyButton', headerName:'Modificar', width:150, renderCell: () => <ModifyButton/> },
        { field:'deleteButton', headerName:'Borrar', width:150, renderCell: () => <DeleteButton/> }
    ];

    if (isLoading) {
        return <><h1>Cargando...</h1></>
    }
    
    return (
        <>
            <h1>Menú</h1>
            <br/>
            <Button onClick={() => navigate("/newMenuItem")} sx={{background:'#009F6B', color:"#fff", "&:hover": {color: '#fff', background: '#32CD32'}, borderRadius: '0.5rem'}}>Crear Nuevo Ítem de Menú</Button>
            <br/>
            <Grid container justifyContent="center" sx={{ height: 500, width: '72%'}}> 
                <DataGrid columns={columns} rows={menu} className="dataGrid" sx={{alignSelf:"center"}}/>
            </Grid>
            <br/>
            <Button onClick={() => {navigate(-1)}} sx={{background:'rgb(144,30,56)', color:"#fff", "&:hover": {color: '#fff', background: '#DA2C43'}, borderRadius: '0.5rem'}}>Volver</Button>
        </>
    );
}

export default AdminMenu