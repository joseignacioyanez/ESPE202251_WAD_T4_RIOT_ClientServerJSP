// Author: Mishell Yánez
// Based on: https://www.youtube.com/watch?v=nI8PYZNFtac & for React18 error of useEffect https://www.youtube.com/watch?v=81faZzp18NM
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
    const [ isDeleting, setDeleting ] = useState(false);
    const [ isPromoting, setPromoting ] = useState(false);


    const navigate = useNavigate();

    // Get data
    useEffect(() => {
    
        if (effectRan.current === false){

            const getMenu = async () => {
                try {
                    const response = await axiosPrivate.get('/restaurant/menuItems', {
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
                            price: menu.price.$numberDecimal,
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
                effectRan.current = true;
            }
        }
        
    }, [isDeleting]) 
    
    // DataGrid
    const ModifyButton = (params) => {
        const navigate = useNavigate();  

        function handleModify() {
            navigate("/modifyMenuItem", {state:{code:params.row.code}})
        }

        return (
            <Button onClick={handleModify} sx={{background:'#0087BD', color:"#fff", "&:hover": {color: '#fff', background: '#1F75FE'}, borderRadius: '0.5rem'}}>Modificar</Button>
        );
    };
    const DeleteButton = (params) => {

        async function handleDelete() {
            //Get username to delete
            setDeleting(true)

            const codeDelete = params.row.code;

            const deleteMenuItem= async () => {
                try {
                    await axiosPrivate.delete(`/restaurant/menuItem/${codeDelete}`);
                } catch (error) {
                    console.log(error);
                } finally {
                    // Wait
                    await new Promise(r => setTimeout(r, 1500));
                    setDeleting(false)
                    effectRan.current = false;
                }
            }
            deleteMenuItem();
        }

        return (
            <Button onClick={handleDelete} sx={{background:'#8C1127', color:"#fff", "&:hover": {color: '#fff', background: '#DA2C43'}, borderRadius: '0.5rem'}}>Borrar</Button>
        );
    };
    const PromotionButton = (params) => {

        async function handlePromotion() {

            //Get username to delete
            setPromoting(true)

            const codeItemPromotion = params.row.code;

            const sendPromotion= async () => {
                try {
                    await axiosPrivate.get(`/restaurant/menuItem/${codeItemPromotion}/discount/50/client/1726088956`);
                } catch (error) {
                    console.log(error);
                } finally {
                    // Wait
                    await new Promise(r => setTimeout(r, 1500));
                    setPromoting(false)
                    effectRan.current = false;
                }
            }
            sendPromotion();
        }

        return (
            <Button onClick={handlePromotion} sx={{background:'#FF7F50', color:"#fff", "&:hover": {color: '#fff', background: '#F94D00'}, borderRadius: '0.5rem'}}>Enviar Promoción</Button>
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
        { field:'modifyButton', headerName:'Modificar', width:150, renderCell: ModifyButton },
        { field:'deleteButton', headerName:'Borrar', width:150, renderCell: DeleteButton },
        { field:'promotionButton', headerName: 'Promoción', width:250, renderCell: PromotionButton }
    ];

    if (isLoading) {
        return <><h1>Cargando...</h1></>
    }

    if (isDeleting){
        return <><h1>Borrando...</h1></>
    }

    if (isPromoting){
        return <><h1>Enviando Promoción...</h1></>
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
            <Button onClick={() => {navigate("/admin")}} sx={{background:'rgb(144,30,56)', color:"#fff", "&:hover": {color: '#fff', background: '#DA2C43'}, borderRadius: '0.5rem'}}>Volver</Button>
        </>
    );
}

export default AdminMenu