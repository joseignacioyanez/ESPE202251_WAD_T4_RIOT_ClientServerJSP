// Author: Jose Ignacio Yanez
import { useNavigate, useLocation } from 'react-router-dom';
import useAxiosPrivate from '../hooks/useAxiosPrivate';
import Button from '@mui/material/Button';
import { useState, useEffect, useRef  } from 'react';

const ModifyMenuItem = () => {
    const navigate = useNavigate();

    const { state } = useLocation();
    const { code } = state || {};


    const [menuItem , setMenuItem] = useState({});


    const [isLoading, setLoading ] = useState(true);

    const axiosPrivate = useAxiosPrivate();

    // For react18 changed useEffect to run Twice
    const effectRan = useRef(false)

    // Get data
    useEffect(() => {
    
        console.log("Will Run, " + !effectRan.current);
        if (effectRan.current === false){

            const getMenuItem = async () => {
                try {
                    const response = await axiosPrivate.get(`/restaurant/menuItems/${code}`, {
                    });
                    console.log("Response: " + JSON.stringify(response.data[0]));
                    setMenuItem(response.data[0]);
                    
                } catch (error) {
                    console.log(error);
                    // Handle the case the refreshToken of the DB expires, make Login but return to where user was
                    // Even though this is crashing because the first requests are getting canceled TODO
                    //navigate('/login', { state: { from: location }, replace: true });
                } finally {
                    setLoading(false);
                }
            }

            getMenuItem();
            // Cleanup function
            return () => {
                effectRan.current = true;
                console.log("Unmounted Cleanup")
            }
        }
    }, [])

    // Handle Inputs Change
    function handleStatusChange(e) {
        setMenuItem({
            ...menuItem,
            status: e.target.value
        });
    }

    function handleCodeChange(e){
        setMenuItem({
            ...menuItem,
            code: e.target.value
        })
    }

    function handleCategoryChange(e) {
        setMenuItem({
            ...menuItem,
            category: e.target.value
        })
    }

    function handleNameChange(e) {
        setMenuItem({
            ...menuItem,
            name: e.target.value
        })
    }

    function handlePriceChange(e) {
        setMenuItem({
            ...menuItem,
            price: e.target.value
        })
    }

    function handlePaysTaxesChange(e) {
        setMenuItem({
            ...menuItem,
            paysTaxes: e.target.value
        })
    }

    // Handle Confirmation Modify
    const handleModify = async () => {

        const updateClient = async () => {
            try {
                await axiosPrivate.put(`/restaurant/menuItem/${code}`,
                JSON.stringify(menuItem));
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        }

        updateClient();
        // Based on https://stackoverflow.com/questions/951021/what-is-the-javascript-version-of-sleep to give time for change on DB
        await new Promise(r => setTimeout(r, 1000));
        navigate("/adminMenuItems");
    }

    if (isLoading) {
        return <><h1>Cargando...</h1></>
    };


    return (

        <section>
            <h1>Modificar Ítem de Menú</h1>
            <form>

            <span>
                <label htmlFor="status">¿Activo?:</label>
                <input
                    type="checkbox"
                    id="status"
                    defaultChecked={menuItem.status}
                    onChange={handleStatusChange}
                    required
                />
            </span>

            <label htmlFor="code">Código:</label>
                <input
                    type="text"
                    id="code"
                    autoComplete="off"
                    defaultValue={menuItem.code}
                    onChange={handleCodeChange}
                    required
                />

                <label htmlFor="category">Categoría:</label>
                <input
                    type="text"
                    id="category"
                    autoComplete="off"
                    defaultValue={menuItem.category}
                    onChange={handleCategoryChange}
                    required
                />

                <label htmlFor="name">Nombre:</label>
                <input
                    type="text"
                    id="name"
                    defaultValue={menuItem.name}
                    onChange={handleNameChange}
                    required
                />
                <br />
                <label htmlFor="price">Precio:</label>
                <input
                    type="number"
                    min={0}
                    step={'0.00'}
                    value={menuItem.price.$numberDecimal}
                    onChange={handlePriceChange}
                    id="price"
                    required
                />
                <br />
                <span>
                    <label htmlFor="paysTaxes">Paga Impuestos:</label>
                    <input
                        type="checkbox"
                        id="paysTaxes"
                        defaultChecked={menuItem.paysTaxes}
                        onChange={handlePaysTaxesChange}
                        required
                    />
                </span>
                <br/>
                <Button onClick={handleModify} sx={{background:'#009F6B', color:"#fff", "&:hover": {color: '#fff', background: '#32CD32'}, borderRadius: '0.5rem'}}>Confirmar</Button>
                <br />
                <Button onClick={() => {navigate(-1)}} sx={{background:'rgb(144,30,56)', color:"#fff", "&:hover": {color: '#fff', background: '#DA2C43'}, borderRadius: '0.5rem'}}>Cancelar</Button>
            </form>
        </section>

    )
}

export default ModifyMenuItem;