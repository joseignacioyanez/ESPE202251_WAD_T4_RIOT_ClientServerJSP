// Author: Mishell Yánez
// Based on: https://www.youtube.com/watch?v=nI8PYZNFtac & for React18 error of useEffect https://www.youtube.com/watch?v=81faZzp18NM
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { DataGrid } from '@mui/x-data-grid';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import useAxiosPrivate from '../hooks/useAxiosPrivate';

const AdminUsers = () => {
    const [ users, setUsers ] = useState();
    const axiosPrivate = useAxiosPrivate();
    // For react18 changed useEffect to run Twice
    const effectRan = useRef(false)

    const [isLoading, setLoading ] = useState(true);

    const navigate = useNavigate();

    // Get data
    useEffect(() => {
    
        if (effectRan.current === false){
            const controller = new AbortController(); // To Cancel request if component unmounts

            const getUsers = async () => {
                try {
                    const response = await axiosPrivate.get('/restaurant/users', {
                        //signal: controller.signal
                    });
                    console.log(response.data)
                    // If Component isMounted, set data and map it for rows DataGrid
                    setUsers(response.data.map(user => (
                        {
                            id: Math.random() * (100000 - 1) + 1,
                            fullName: user.fullName,
                            email: user.email,
                            username: user.username
                        }
                    )));
                    
                    setLoading(false);
                } catch (error) {
                    console.log(error);
                }
            }

            getUsers();
            // Cleanup function
            return () => {
                controller.abort();
                effectRan.current = true;
            }
        }
        
    }, []) 

    // DataGrid
    const ModifyButton = (params) => {
        const navigate = useNavigate();  

        function handleModify() {
            navigate("/modifyUser", {state:{username:params.row.username}})
        }

        return (
            <Button onClick={ handleModify } sx={{background:'#0087BD', color:"#fff", "&:hover": {color: '#fff', background: '#1F75FE'}, borderRadius: '0.5rem'}}>Modificar</Button>
        );
    };
    const DeleteButton = () => {
        const navigate = useNavigate();  
        return (
            <Button onClick={() => navigate("/deleteUser")} sx={{background:'#8C1127', color:"#fff", "&:hover": {color: '#fff', background: '#DA2C43'}, borderRadius: '0.5rem'}}>Borrar</Button>
        );
    };

    const columns = [
        { field:'id', hide: true },
        { field:'fullName', headerName:'Nombre', width: 300},
        { field:'email', headerName:'Email', width: 350 },
        { field:'username', headerName:'Usuario', width: 150 },
        { field:'modifyButton', headerName:'Modificar', width:150, renderCell: ModifyButton },
        { field:'deleteButton', headerName:'Borrar', width:150, renderCell: () => <DeleteButton/> }
    ];

    if (isLoading) {
        return <><h1>Cargando...</h1></>
    }

    return (
        <>
            <h1>Usuario</h1>
            <br/>
            <Button onClick={() => navigate("/newUser")} sx={{background:'#009F6B', color:"#fff", "&:hover": {color: '#fff', background: '#32CD32'}, borderRadius: '0.5rem'}}>Crear Nuevo Usuario</Button>
            <br/>
            <Grid container justifyContent="center" sx={{ height: 500, width: '60%'}}> 
                <DataGrid columns={columns} rows={users} className="dataGrid" sx={{alignSelf:"center"}}/>
            </Grid>
            <br/>
            <Button onClick={() => {navigate("/admin")}} sx={{background:'rgb(144,30,56)', color:"#fff", "&:hover": {color: '#fff', background: '#DA2C43'}, borderRadius: '0.5rem'}}>Volver</Button>
        </>
    );
}

export default AdminUsers